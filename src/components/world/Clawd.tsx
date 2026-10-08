import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useRef, useState, type RefObject } from 'react'
import * as THREE from 'three'

const ORANGE = '#d97757'
const NEAR = 1.8
// Faces the camera (which sits on the +x, +z diagonal) until the player walks up.
const CAMERA_YAW = Math.PI / 4
// One "pixel" of the terminal sprite: terminal half blocks are twice as tall as they are wide.
const A = 0.09
const B = 0.16

interface Props {
  position: [number, number]
  playerPos: RefObject<THREE.Vector3>
  title: string
  text: string
  reducedMotion: boolean
}

// Clawd, the Claude Code mascot, rebuilt in voxels from its terminal sprite. When the player
// comes close it turns to them and hops.
export default function Clawd({ position, playerPos, title, text, reducedMotion }: Props) {
  const root = useRef<THREE.Group>(null)
  const body = useRef<THREE.Group>(null)
  const [near, setNear] = useState(false)
  const orange = useMemo(() => new THREE.MeshStandardMaterial({ color: ORANGE, roughness: 0.7, flatShading: true }), [])
  const ink = useMemo(() => new THREE.MeshStandardMaterial({ color: '#1f1e1d', roughness: 0.5 }), [])
  const [x, z] = position

  useFrame(({ clock }, delta) => {
    if (!root.current || !body.current) return
    const p = playerPos.current
    const dx = p.x - x
    const dz = p.z - z
    const isNear = Math.hypot(dx, dz) < NEAR
    if (isNear !== near) setNear(isNear)

    let diff = (isNear ? Math.atan2(dx, dz) : CAMERA_YAW) - root.current.rotation.y
    diff = Math.atan2(Math.sin(diff), Math.cos(diff))
    root.current.rotation.y += diff * (1 - Math.exp(-delta * 4))

    if (reducedMotion) return
    const t = clock.elapsedTime
    const hop = isNear ? Math.abs(Math.sin(t * 6)) * 0.14 : 0
    body.current.position.y = THREE.MathUtils.damp(body.current.position.y, hop, 18, delta)
    body.current.scale.y = 1 + Math.sin(t * 2.4) * 0.025
  })

  const box = (w: number, h: number, d: number, px: number, py: number, pz: number, material = orange) => (
    <mesh material={material} position={[px, py, pz]} castShadow>
      <boxGeometry args={[w, h, d]} />
    </mesh>
  )

  return (
    <group position={[x, 0, z]}>
      <RigidBody type="fixed" colliders={false}>
        <CylinderCollider args={[0.4, 0.55]} position={[0, 0.4, 0]} />
      </RigidBody>

      <group ref={root} rotation={[0, CAMERA_YAW, 0]}>
        <group ref={body}>
          {/* legs: the four little feet under the body */}
          {[-4.5, -2.5, 2.5, 4.5].map((col) => (
            <group key={col}>{box(A, B, A * 1.6, col * A, B / 2, 0)}</group>
          ))}
          {/* body */}
          {box(12 * A, 4 * B, 0.5, 0, 3 * B, 0)}
          {/* arms */}
          {box(2 * A, B, 0.3, -7 * A, 2.5 * B, 0)}
          {box(2 * A, B, 0.3, 7 * A, 2.5 * B, 0)}
          {/* eyes */}
          {box(A, B, 0.02, -3.5 * A, 3.5 * B, 0.255, ink)}
          {box(A, B, 0.02, 3.5 * A, 3.5 * B, 0.255, ink)}
        </group>
      </group>

      {near && (
        <Html position={[0, 1.2, 0]} zIndexRange={[20, 0]} style={{ pointerEvents: 'none' }}>
          <div className="world-label is-near">
            <span className="world-label-name">
              <span className="world-label-dot" style={{ background: ORANGE }} />
              {title}
            </span>
            <span className="world-label-desc">{text}</span>
          </div>
        </Html>
      )}
    </group>
  )
}
