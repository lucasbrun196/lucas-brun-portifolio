import { Html } from '@react-three/drei'
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import type { PlacedProject } from './layout'
import type { Palette } from './palette'

interface Props {
  project: PlacedProject
  description: string
  hint: string
  near: boolean
  palette: Palette
  reducedMotion: boolean
  onOpen: () => void
}

// A small pedestal with a floating gem in the project's color and its name above it.
export default function Destination({ project, description, hint, near, palette, reducedMotion, onOpen }: Props) {
  const gl = useThree((s) => s.gl)
  const group = useRef<THREE.Group>(null)
  const gem = useRef<THREE.Mesh>(null)
  const gemMaterial = useRef<THREE.MeshStandardMaterial>(null)
  const ring = useRef<THREE.MeshBasicMaterial>(null)
  const [hovered, setHovered] = useState(false)
  const lit = near || hovered
  const [x, z] = project.pos
  const offset = x * 1.7 + z

  useFrame(({ clock }, delta) => {
    if (!group.current || !gem.current || !gemMaterial.current || !ring.current) return
    const scale = THREE.MathUtils.damp(group.current.scale.x, lit ? 1.12 : 1, 8, delta)
    group.current.scale.setScalar(scale)
    gemMaterial.current.emissiveIntensity = THREE.MathUtils.damp(gemMaterial.current.emissiveIntensity, lit ? 0.9 : 0.2, 6, delta)
    ring.current.opacity = THREE.MathUtils.damp(ring.current.opacity, lit ? 0.9 : 0.3, 6, delta)
    if (reducedMotion) return
    gem.current.position.y = 1.3 + Math.sin(clock.elapsedTime * 1.6 + offset) * 0.08
    gem.current.rotation.y += delta * (lit ? 1.8 : 0.6)
  })

  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(true)
    gl.domElement.style.cursor = 'pointer'
  }
  const out = () => {
    setHovered(false)
    gl.domElement.style.cursor = ''
  }
  const click = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    onOpen()
  }

  return (
    <group position={[x, 0, z]}>
      <RigidBody type="fixed" colliders={false}>
        <CylinderCollider args={[0.5, 0.8]} position={[0, 0.5, 0]} />
      </RigidBody>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.025, 0]}>
        <ringGeometry args={[1.02, 1.14, 40]} />
        <meshBasicMaterial ref={ring} color={project.color} transparent opacity={0.3} />
      </mesh>

      <group ref={group} onPointerOver={over} onPointerOut={out} onClick={click}>
        <mesh position={[0, 0.16, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.78, 0.88, 0.32, 6]} />
          <meshStandardMaterial color={palette.stone} flatShading />
        </mesh>
        <mesh position={[0, 0.34, 0]} receiveShadow>
          <cylinderGeometry args={[0.62, 0.7, 0.06, 6]} />
          <meshStandardMaterial color={project.color} flatShading />
        </mesh>
        <mesh ref={gem} position={[0, 1.3, 0]} castShadow>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial ref={gemMaterial} color={project.color} emissive={project.color} emissiveIntensity={0.2} flatShading />
        </mesh>
      </group>

      <Html position={[0, 1.95, 0]} zIndexRange={[20, 0]} style={{ pointerEvents: 'none' }}>
        <div className={`world-label ${near ? 'is-near' : ''}`}>
          <span className="world-label-name">
            <span className="world-label-dot" style={{ background: project.color }} />
            {project.name}
          </span>
          {near && (
            <>
              <span className="world-label-desc">{description}</span>
              <span className="world-label-hint mono">{hint}</span>
            </>
          )}
        </div>
      </Html>
    </group>
  )
}
