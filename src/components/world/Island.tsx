import { BallCollider, CuboidCollider, CylinderCollider, RigidBody } from '@react-three/rapier'
import { ISLAND_RADIUS, WALL_RADIUS, type Decor, type PlacedProject } from './layout'
import type { Palette } from './palette'

const WALL_SEGMENTS = 28

function Tree({ d, palette }: { d: Decor; palette: Palette }) {
  return (
    <group position={[d.pos[0], 0, d.pos[1]]} scale={d.scale} rotation={[0, d.rot, 0]}>
      <mesh position={[0, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.5, 6]} />
        <meshStandardMaterial color={palette.trunk} flatShading />
      </mesh>
      <mesh position={[0, 0.85, 0]} castShadow>
        <coneGeometry args={[0.55, 0.95, 7]} />
        <meshStandardMaterial color={palette.leaf} flatShading />
      </mesh>
      <mesh position={[0, 1.3, 0]} castShadow>
        <coneGeometry args={[0.38, 0.7, 7]} />
        <meshStandardMaterial color={palette.leafAlt} flatShading />
      </mesh>
    </group>
  )
}

function Rock({ d, palette }: { d: Decor; palette: Palette }) {
  return (
    <mesh position={[d.pos[0], 0.12 * d.scale, d.pos[1]]} scale={[d.scale, d.scale * 0.7, d.scale]} rotation={[0, d.rot, 0]} castShadow receiveShadow>
      <dodecahedronGeometry args={[0.36, 0]} />
      <meshStandardMaterial color={palette.rock} flatShading />
    </mesh>
  )
}

// Paths run from the central plaza to each project.
function Path({ to, palette }: { to: [number, number]; palette: Palette }) {
  const length = Math.hypot(to[0], to[1]) - 0.6
  const angle = Math.atan2(-to[1], to[0])
  const ux = to[0] / Math.hypot(to[0], to[1])
  const uz = to[1] / Math.hypot(to[0], to[1])
  return (
    <mesh position={[(ux * length) / 2, 0.01, (uz * length) / 2]} rotation={[0, angle, 0]} receiveShadow>
      <boxGeometry args={[length, 0.02, 0.85]} />
      <meshStandardMaterial color={palette.path} />
    </mesh>
  )
}

export default function Island({ palette, decor, placed }: { palette: Palette; decor: Decor[]; placed: PlacedProject[] }) {
  return (
    <>
      {/* Grass top and the floating rock underneath */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <cylinderGeometry args={[ISLAND_RADIUS, ISLAND_RADIUS * 0.97, 0.6, 14]} />
        <meshStandardMaterial color={palette.grass} flatShading />
      </mesh>
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[ISLAND_RADIUS * 0.97, ISLAND_RADIUS * 0.9, 0.3, 14]} />
        <meshStandardMaterial color={palette.grassSide} flatShading />
      </mesh>
      <mesh position={[0, -2.6, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[ISLAND_RADIUS * 0.9, 3.4, 14]} />
        <meshStandardMaterial color={palette.dirt} flatShading />
      </mesh>

      <mesh position={[0, 0.012, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.02, 24]} />
        <meshStandardMaterial color={palette.path} />
      </mesh>
      {placed.map((p) => (
        <Path key={p.name} to={p.pos} palette={palette} />
      ))}

      {decor.map((d, i) => (d.kind === 'tree' ? <Tree key={i} d={d} palette={palette} /> : <Rock key={i} d={d} palette={palette} />))}

      {/* Static colliders: ground, a ring of invisible walls and the scenery */}
      <RigidBody type="fixed" colliders={false}>
        <CylinderCollider args={[0.3, ISLAND_RADIUS]} position={[0, -0.3, 0]} />
        {Array.from({ length: WALL_SEGMENTS }, (_, i) => {
          const angle = (i / WALL_SEGMENTS) * Math.PI * 2
          const r = WALL_RADIUS + 0.25
          const half = ((Math.PI * r) / WALL_SEGMENTS) * 1.15
          return (
            <CuboidCollider
              key={i}
              args={[0.25, 1.5, half]}
              position={[Math.cos(angle) * r, 1.2, Math.sin(angle) * r]}
              rotation={[0, -angle, 0]}
            />
          )
        })}
        {decor.map((d, i) =>
          d.kind === 'tree' ? (
            <CylinderCollider key={i} args={[0.8, 0.3 * d.scale]} position={[d.pos[0], 0.8, d.pos[1]]} />
          ) : (
            <BallCollider key={i} args={[0.34 * d.scale]} position={[d.pos[0], 0.12 * d.scale, d.pos[1]]} />
          ),
        )}
      </RigidBody>
    </>
  )
}
