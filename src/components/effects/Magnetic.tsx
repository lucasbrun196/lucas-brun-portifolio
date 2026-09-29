import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type PointerEvent } from 'react'

// Pulls its child towards the cursor, then springs back.
export default function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 14, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 14, mass: 0.4 })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className="magnetic" style={{ x: springX, y: springY }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}
