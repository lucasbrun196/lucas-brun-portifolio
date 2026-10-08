import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, type RapierRigidBody } from '@react-three/rapier'
import { useMemo, useRef, type RefObject } from 'react'
import * as THREE from 'three'
import type { Keys } from './Controls'
import { CAMERA_OFFSET, NEAR_DISTANCE, SPAWN, type PlacedProject } from './layout'

const SPEED = 3.4
// Movement is relative to the camera, which always looks along (-1, 0, -1).
const FORWARD = new THREE.Vector3(-1, 0, -1).normalize()
const RIGHT = new THREE.Vector3(1, 0, -1).normalize()
const LOOK_AHEAD = 1.6

// A damped spring. Low damping is what makes the body overshoot and wobble when it stops.
interface Spring {
  x: number
  v: number
}
const spring = (): Spring => ({ x: 0, v: 0 })
function step(s: Spring, target: number, stiffness: number, damping: number, dt: number) {
  s.v += ((target - s.x) * stiffness - s.v * damping) * dt
  s.x += s.v * dt
  return s.x
}

interface Props {
  keys: RefObject<Keys>
  destinations: PlacedProject[]
  onNearChange: (index: number | null) => void
  // Shared with the mascot, which turns to look at the player.
  playerPos: RefObject<THREE.Vector3>
  reducedMotion: boolean
}

export default function Character({ keys, destinations, onNearChange, playerPos, reducedMotion }: Props) {
  const body = useRef<RapierRigidBody>(null)
  const yaw = useRef<THREE.Group>(null)
  const torso = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
  const armL = useRef<THREE.Group>(null)
  const armR = useRef<THREE.Group>(null)
  const legL = useRef<THREE.Group>(null)
  const legR = useRef<THREE.Group>(null)

  const clay = useMemo(() => new THREE.MeshStandardMaterial({ color: '#f5f3ef', roughness: 0.62 }), [])
  const ink = useMemo(() => new THREE.MeshStandardMaterial({ color: '#2a2a2e', roughness: 0.4 }), [])

  const state = useRef({
    vel: new THREE.Vector3(),
    dir: new THREE.Vector3(),
    camTarget: new THREE.Vector3(SPAWN[0] + FORWARD.x * LOOK_AHEAD, 0.4, SPAWN[2] + FORWARD.z * LOOK_AHEAD),
    look: new THREE.Vector3(),
    heading: 0,
    turnRate: 0,
    phase: 0,
    walk: 0,
    near: null as number | null,
    pitch: spring(),
    roll: spring(),
    headPitch: spring(),
    headRoll: spring(),
    armLag: spring(),
  })

  useFrame(({ camera, clock }, delta) => {
    const rb = body.current
    if (!rb || !yaw.current || !torso.current || !head.current) return
    const dt = Math.min(delta, 1 / 30)
    const s = state.current
    const k = keys.current

    // Input → target velocity, eased in and out for a bit of inertia.
    s.dir.set(0, 0, 0)
    if (k.forward) s.dir.add(FORWARD)
    if (k.back) s.dir.sub(FORWARD)
    if (k.right) s.dir.add(RIGHT)
    if (k.left) s.dir.sub(RIGHT)
    if (s.dir.lengthSq() > 0) s.dir.normalize().multiplyScalar(SPEED)
    s.vel.lerp(s.dir, 1 - Math.exp(-dt * 9))

    const lv = rb.linvel()
    rb.setLinvel({ x: s.vel.x, y: lv.y, z: s.vel.z }, true)

    const p = rb.translation()
    playerPos.current.set(p.x, p.y, p.z)
    if (p.y < -6) {
      rb.setTranslation({ x: SPAWN[0], y: SPAWN[1], z: SPAWN[2] }, true)
      rb.setLinvel({ x: 0, y: 0, z: 0 }, true)
      s.vel.set(0, 0, 0)
    }

    // Face the direction of travel.
    if (s.vel.lengthSq() > 0.05) {
      let diff = Math.atan2(s.vel.x, s.vel.z) - s.heading
      diff = Math.atan2(Math.sin(diff), Math.cos(diff))
      const turn = diff * (1 - Math.exp(-dt * 12))
      s.heading += turn
      s.turnRate = turn / dt
    } else {
      s.turnRate = 0
    }
    yaw.current.rotation.y = s.heading

    // Procedural "jelly" animation: everything hangs off underdamped springs.
    const speed = Math.hypot(lv.x, lv.z)
    s.walk += (Math.min(speed / SPEED, 1) - s.walk) * (1 - Math.exp(-dt * 8))
    s.phase += dt * (2 + speed * 2.8)
    const amount = reducedMotion ? 0.3 : 1
    const wobbly = reducedMotion ? 14 : 6.5
    const swing = Math.sin(s.phase) * s.walk * amount
    const t = clock.elapsedTime

    const pitch = step(s.pitch, speed * 0.085 * amount, 90, wobbly, dt)
    const roll = step(s.roll, THREE.MathUtils.clamp(-s.turnRate * 0.06, -0.45, 0.45) * amount, 70, wobbly, dt)
    const breath = reducedMotion ? 0 : Math.sin(t * 2.2) * 0.015

    const tb = torso.current
    tb.position.y = Math.abs(Math.sin(s.phase)) * 0.09 * s.walk * amount
    tb.rotation.x = pitch
    tb.rotation.z = roll + swing * 0.09
    const squash = 1 + Math.sin(s.phase * 2) * 0.05 * s.walk * amount + breath
    tb.scale.set(1 - (squash - 1) * 0.5, squash, 1 - (squash - 1) * 0.5)

    head.current.rotation.x = step(s.headPitch, pitch * 0.7, 38, wobbly * 0.55, dt)
    head.current.rotation.z = step(s.headRoll, roll * 0.9 + swing * 0.12, 38, wobbly * 0.55, dt)

    const lag = step(s.armLag, -pitch * 2.4, 32, wobbly * 0.5, dt)
    const flop = 0.22 + (0.32 + Math.abs(Math.sin(s.phase)) * 0.2) * s.walk * amount
    if (armL.current && armR.current) {
      armL.current.rotation.set(-swing * 1.05 + lag, 0, flop)
      armR.current.rotation.set(swing * 1.05 + lag, 0, -flop)
    }
    if (legL.current && legR.current) {
      legL.current.rotation.x = swing * 0.8
      legR.current.rotation.x = -swing * 0.8
    }

    // Which project is close enough to open?
    let best: number | null = null
    let bestDist = NEAR_DISTANCE
    for (let i = 0; i < destinations.length; i++) {
      const dist = Math.hypot(p.x - destinations[i].pos[0], p.z - destinations[i].pos[1])
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    }
    if (best !== s.near) {
      s.near = best
      onNearChange(best)
    }

    // Camera follows smoothly from a fixed diagonal angle, aiming a little ahead of the
    // character so it sits low in the frame and the tooltips have room above it.
    s.look.set(p.x + FORWARD.x * LOOK_AHEAD, 0.4, p.z + FORWARD.z * LOOK_AHEAD)
    s.camTarget.lerp(s.look, 1 - Math.exp(-dt * (reducedMotion ? 14 : 4.5)))
    camera.position.set(s.camTarget.x + CAMERA_OFFSET[0], s.camTarget.y + CAMERA_OFFSET[1], s.camTarget.z + CAMERA_OFFSET[2])
    camera.lookAt(s.camTarget)
  })

  return (
    <RigidBody ref={body} position={SPAWN} colliders={false} enabledRotations={[false, false, false]} canSleep={false}>
      <CapsuleCollider args={[0.31, 0.24]} friction={0} />
      <group ref={yaw} position={[0, -0.02, 0]}>
        <group ref={torso}>
          <mesh material={clay} castShadow>
            <capsuleGeometry args={[0.2, 0.34, 6, 16]} />
          </mesh>
          <group ref={head} position={[0, 0.34, 0]}>
            <mesh material={clay} position={[0, 0.18, 0]} castShadow>
              <sphereGeometry args={[0.21, 20, 16]} />
            </mesh>
            <mesh material={ink} position={[0.075, 0.2, 0.18]}>
              <sphereGeometry args={[0.028, 8, 8]} />
            </mesh>
            <mesh material={ink} position={[-0.075, 0.2, 0.18]}>
              <sphereGeometry args={[0.028, 8, 8]} />
            </mesh>
          </group>
          <group ref={armL} position={[0.23, 0.15, 0]}>
            <mesh material={clay} position={[0, -0.19, 0]} castShadow>
              <capsuleGeometry args={[0.055, 0.26, 4, 10]} />
            </mesh>
          </group>
          <group ref={armR} position={[-0.23, 0.15, 0]}>
            <mesh material={clay} position={[0, -0.19, 0]} castShadow>
              <capsuleGeometry args={[0.055, 0.26, 4, 10]} />
            </mesh>
          </group>
        </group>
        <group ref={legL} position={[0.09, -0.24, 0]}>
          <mesh material={clay} position={[0, -0.15, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.14, 4, 10]} />
          </mesh>
        </group>
        <group ref={legR} position={[-0.09, -0.24, 0]}>
          <mesh material={clay} position={[0, -0.15, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.14, 4, 10]} />
          </mesh>
        </group>
      </group>
    </RigidBody>
  )
}
