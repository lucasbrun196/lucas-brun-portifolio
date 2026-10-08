import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { useReducedMotion } from 'framer-motion'
import { Suspense, useCallback, useMemo, useRef, useState } from 'react'
import { FiList, FiMousePointer } from 'react-icons/fi'
import * as THREE from 'three'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { projects } from '../../data/projects'
import Character from './Character'
import Clawd from './Clawd'
import { ControlsLegend, useControls } from './Controls'
import Destination from './Destination'
import Island from './Island'
import { CAMERA_OFFSET, makeDecor, placeMascot, placeProjects, SPAWN } from './layout'
import { palettes } from './palette'

const openProject = (url: string) => window.open(url, '_blank', 'noopener,noreferrer')

// The 3D showcase. Loaded lazily; it only renders while the section is on screen.
export default function World({ inView, onShowList }: { inView: boolean; onShowList: () => void }) {
  const { t, lang } = useLanguage()
  const { theme } = useTheme()
  const reducedMotion = useReducedMotion() ?? false
  const palette = palettes[theme]
  const w = t.projects.world

  const wrapper = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const [near, setNear] = useState<number | null>(null)

  const placed = useMemo(() => placeProjects(projects), [])
  const mascot = useMemo(() => placeMascot(placed), [placed])
  const decor = useMemo(() => makeDecor(placed, mascot), [placed, mascot])
  const playerPos = useRef(new THREE.Vector3(...SPAWN))

  const interact = useCallback(() => {
    if (near !== null) openProject(placed[near].url)
  }, [near, placed])
  const exit = useCallback(() => wrapper.current?.blur(), [])
  const { keys, onKeyDown, onKeyUp, reset } = useControls({ onInteract: interact, onExit: exit })

  return (
    <div
      ref={wrapper}
      className={`world ${focused ? 'is-active' : ''}`}
      tabIndex={0}
      role="group"
      aria-label={w.label}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (wrapper.current?.contains(e.relatedTarget as Node)) return
        setFocused(false)
        reset()
      }}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      <Canvas
        aria-hidden="true"
        shadows="percentage"
        flat
        dpr={[1, 1.75]}
        frameloop={inView ? 'always' : 'never'}
        camera={{ fov: 36, near: 0.1, far: 80, position: [CAMERA_OFFSET[0] - 1.1, CAMERA_OFFSET[1], CAMERA_OFFSET[2] - 1.1] }}
      >
        <color attach="background" args={[palette.sky]} />
        <fog attach="fog" args={[palette.sky, 24, 42]} />
        <hemisphereLight args={['#ffffff', palette.grassSide, palette.ambient]} />
        <directionalLight
          castShadow
          position={[5, 12, 3]}
          intensity={palette.sun}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-near={1}
          shadow-camera-far={30}
          shadow-normalBias={0.04}
        />
        <Suspense fallback={null}>
          <Physics gravity={[0, -20, 0]} paused={!inView}>
            <Island palette={palette} decor={decor} placed={placed} />
            {placed.map((p, i) => (
              <Destination
                key={p.name}
                project={p}
                description={p.description[lang]}
                hint={w.hint}
                near={near === i}
                palette={palette}
                reducedMotion={reducedMotion}
                onOpen={() => openProject(p.url)}
              />
            ))}
            <Clawd position={mascot} playerPos={playerPos} title={w.clawdTitle} text={w.clawd} reducedMotion={reducedMotion} />
            <Character keys={keys} destinations={placed} onNearChange={setNear} playerPos={playerPos} reducedMotion={reducedMotion} />
          </Physics>
        </Suspense>
      </Canvas>

      {!focused && (
        <div className="world-overlay">
          <span className="world-play">
            <FiMousePointer aria-hidden="true" />
            {w.play}
          </span>
          <span className="world-play-hint">{w.playHint}</span>
        </div>
      )}

      <span className="world-tag mono" aria-hidden="true">
        {w.listTitle}
      </span>
      <ControlsLegend />

      <button type="button" className="world-toggle" onClick={onShowList}>
        <FiList aria-hidden="true" />
        {w.listView}
      </button>

      {/* Same projects as plain links for screen readers */}
      <ul className="sr-only">
        {placed.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.name}: {p.description[lang]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
