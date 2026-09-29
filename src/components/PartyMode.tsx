import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
const CONFETTI = ['🎉', '💜', '✨', '🚀', '🦄', '⭐', '🎈', '👾', '🔥', '🪩']

export const PARTY_EVENT = 'party-toggle'

// Easter egg: Konami code (or tapping the logo 5×) turns on a rainbow party.
export default function PartyMode() {
  const { t } = useLanguage()
  const [on, setOn] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const progress = useRef(0)

  const rain = useCallback(() => {
    for (let i = 0; i < 45; i++) {
      const drop = document.createElement('span')
      drop.className = 'confetti'
      drop.textContent = CONFETTI[Math.floor(Math.random() * CONFETTI.length)]
      drop.style.left = `${Math.random() * 100}vw`
      drop.style.animationDelay = `${Math.random() * 0.9}s`
      drop.style.animationDuration = `${2.2 + Math.random() * 1.8}s`
      drop.style.fontSize = `${18 + Math.random() * 20}px`
      document.body.appendChild(drop)
      window.setTimeout(() => drop.remove(), 5000)
    }
  }, [])

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains('party')
    document.documentElement.classList.toggle('party', next)
    setOn(next)
    setToast(next ? t.footer.partyOn : t.footer.partyOff)
    if (next) rain()
  }, [rain, t])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      progress.current = key === KONAMI[progress.current] ? progress.current + 1 : key === KONAMI[0] ? 1 : 0
      if (progress.current === KONAMI.length) {
        progress.current = 0
        toggle()
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener(PARTY_EVENT, toggle)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener(PARTY_EVENT, toggle)
    }
  }, [toggle])

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(id)
  }, [toast])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast + String(on)}
          className="toast"
          role="status"
          initial={{ y: 80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
