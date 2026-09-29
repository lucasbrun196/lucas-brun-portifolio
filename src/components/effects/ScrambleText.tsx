import { useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}=+*^?#01$%&'

// Hacker-style text that scrambles and decodes itself on hover.
export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    setDisplay(text)
    return () => window.clearInterval(timer.current)
  }, [text])

  const scramble = () => {
    window.clearInterval(timer.current)
    let frame = 0
    timer.current = window.setInterval(() => {
      const revealed = frame / 2
      setDisplay(
        text
          .split('')
          .map((char, i) => (i < revealed || char === ' ' ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(''),
      )
      frame++
      if (revealed >= text.length) {
        window.clearInterval(timer.current)
        setDisplay(text)
      }
    }, 28)
  }

  return (
    <span className={className} onMouseEnter={scramble} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
