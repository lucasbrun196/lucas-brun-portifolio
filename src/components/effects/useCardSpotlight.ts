import { useEffect } from 'react'

// Feeds the pointer position to the card under it, so CSS can draw a soft light that follows the mouse.
export function useCardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>('.card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
