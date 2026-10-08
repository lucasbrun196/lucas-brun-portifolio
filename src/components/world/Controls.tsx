import { useCallback, useRef, type KeyboardEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export interface Keys {
  forward: boolean
  back: boolean
  left: boolean
  right: boolean
}

// Physical key codes, so WASD stays in place on any keyboard layout.
const KEY_MAP: Record<string, keyof Keys> = {
  KeyW: 'forward',
  ArrowUp: 'forward',
  KeyS: 'back',
  ArrowDown: 'back',
  KeyA: 'left',
  ArrowLeft: 'left',
  KeyD: 'right',
  ArrowRight: 'right',
}

const idle = (): Keys => ({ forward: false, back: false, left: false, right: false })

// Keyboard handlers for the focused world container. Keys are kept in a ref so the
// render loop can read them every frame without re-rendering React.
export function useControls({ onInteract, onExit }: { onInteract: () => void; onExit: () => void }) {
  const keys = useRef<Keys>(idle())

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.target instanceof HTMLButtonElement && (e.key === 'Enter' || e.key === ' ')) return
      const key = KEY_MAP[e.code]
      if (key) {
        keys.current[key] = true
        e.preventDefault()
      } else if (e.code === 'KeyE' && !e.repeat) {
        onInteract()
      } else if (e.code === 'Escape') {
        onExit()
      }
    },
    [onInteract, onExit],
  )

  const onKeyUp = useCallback((e: KeyboardEvent<HTMLElement>) => {
    const key = KEY_MAP[e.code]
    if (key) keys.current[key] = false
  }, [])

  const reset = useCallback(() => {
    keys.current = idle()
  }, [])

  return { keys, onKeyDown, onKeyUp, reset }
}

export function ControlsLegend() {
  const { t } = useLanguage()
  const w = t.projects.world
  return (
    <div className="world-legend" aria-hidden="true">
      <span>
        <kbd>WASD</kbd> {w.or} <kbd>↑←↓→</kbd> {w.move}
      </span>
      <span>
        <kbd>E</kbd> {w.open}
      </span>
      <span>
        <kbd>Esc</kbd> {w.exit}
      </span>
    </div>
  )
}
