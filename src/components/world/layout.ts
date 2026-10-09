import type { Project } from '../../data/projects'

export const ISLAND_RADIUS = 8.5
// Invisible walls sit just inside the island edge so the character never falls off.
export const WALL_RADIUS = 7.9
export const SPAWN: [number, number, number] = [0, 1, 0]
export const CAMERA_OFFSET: [number, number, number] = [8.5, 9.5, 8.5]
// How close (center to center) the character must be for a project to light up.
export const NEAR_DISTANCE = 1.9

const RING_RADIUS = 5
// First project goes "up" on screen (away from the camera), the rest follow around the ring.
const START_ANGLE = (-3 * Math.PI) / 4

export interface PlacedProject extends Project {
  pos: [number, number]
}

export function placeProjects(list: Project[]): PlacedProject[] {
  const autoCount = list.filter((p) => !p.position).length
  // With an even count one project would land right in front of the camera, cut off at the
  // bottom edge, so the ring is turned half a step and they sit on the diagonals instead.
  const start = autoCount % 2 === 0 ? START_ANGLE + Math.PI / autoCount : START_ANGLE
  let k = 0
  return list.map((p) => {
    if (p.position) return { ...p, pos: p.position }
    const angle = start + (k++ / autoCount) * Math.PI * 2
    return { ...p, pos: [Math.cos(angle) * RING_RADIUS, Math.sin(angle) * RING_RADIUS] }
  })
}

// The Claude Code mascot stands by the plaza, in the widest gap between two paths.
export function placeMascot(placed: PlacedProject[]): [number, number] {
  const r = 2.5
  if (placed.length === 0) return [0, -r]
  const angles = placed.map((p) => Math.atan2(p.pos[1], p.pos[0])).sort((a, b) => a - b)
  let best = { gap: -1, mid: 0 }
  angles.forEach((a, i) => {
    const next = i === angles.length - 1 ? angles[0] + Math.PI * 2 : angles[i + 1]
    if (next - a > best.gap) best = { gap: next - a, mid: (a + next) / 2 }
  })
  return [Math.cos(best.mid) * r, Math.sin(best.mid) * r]
}

export interface Decor {
  kind: 'tree' | 'rock'
  pos: [number, number]
  scale: number
  rot: number
}

// Small seeded PRNG so the scenery is the same on every visit.
function random(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function distToSegment(px: number, pz: number, ax: number, az: number, bx: number, bz: number) {
  const dx = bx - ax
  const dz = bz - az
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz)))
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz))
}

// Scatters trees and rocks, keeping the plaza, the paths and the projects clear.
export function makeDecor(placed: PlacedProject[], mascot: [number, number]): Decor[] {
  const rand = random(7)
  const items: Decor[] = []
  const wanted = { tree: 11, rock: 6 }
  for (let tries = 0; tries < 600 && items.length < wanted.tree + wanted.rock; tries++) {
    const angle = rand() * Math.PI * 2
    const r = 2.2 + Math.sqrt(rand()) * (WALL_RADIUS - 2.7)
    const x = Math.cos(angle) * r
    const z = Math.sin(angle) * r
    const blocked =
      placed.some((p) => Math.hypot(x - p.pos[0], z - p.pos[1]) < 2.1 || distToSegment(x, z, 0, 0, p.pos[0], p.pos[1]) < 1.1) ||
      items.some((d) => Math.hypot(x - d.pos[0], z - d.pos[1]) < 1.4) ||
      Math.hypot(x - mascot[0], z - mascot[1]) < 1.7
    if (blocked) continue
    const trees = items.filter((d) => d.kind === 'tree').length
    const kind = trees < wanted.tree && (rand() < 0.68 || items.length - trees >= wanted.rock) ? 'tree' : 'rock'
    items.push({ kind, pos: [x, z], scale: 0.8 + rand() * 0.45, rot: rand() * Math.PI * 2 })
  }
  return items
}
