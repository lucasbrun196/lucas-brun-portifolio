import { useEffect } from 'react'

const SPARKS = 10

// Every click shoots a little burst of neon sparks from the pointer.
export default function ClickSparks() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onDown = (e: PointerEvent) => {
      const burst = document.createElement('div')
      burst.className = 'spark-burst'
      burst.style.left = `${e.clientX}px`
      burst.style.top = `${e.clientY}px`
      for (let i = 0; i < SPARKS; i++) {
        const spark = document.createElement('span')
        spark.style.setProperty('--angle', `${(360 / SPARKS) * i + Math.random() * 18}deg`)
        spark.style.setProperty('--dist', `${28 + Math.random() * 26}px`)
        burst.appendChild(spark)
      }
      document.body.appendChild(burst)
      window.setTimeout(() => burst.remove(), 650)
    }

    window.addEventListener('pointerdown', onDown)
    return () => window.removeEventListener('pointerdown', onDown)
  }, [])

  return null
}
