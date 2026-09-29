import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// A tiny "compile & run" boot screen, a nod to the std::cout on the GitHub profile.
export default function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLanguage()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 350),
      window.setTimeout(() => setStep(2), 800),
      window.setTimeout(() => setStep(3), 1250),
      window.setTimeout(onDone, 2100),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [onDone])

  return (
    <motion.div
      className="loader"
      onClick={onDone}
      exit={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0.4 }}
      initial={{ clipPath: 'circle(150% at 50% 50%)' }}
      transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
    >
      <div className="loader-terminal mono">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <em>lucas@portfolio: ~</em>
        </div>
        <div className="terminal-body">
          {step >= 1 && <p>$ g++ lucas.cpp -o portfolio</p>}
          {step >= 2 && <p>$ ./portfolio</p>}
          {step >= 3 && <p className="terminal-output">{t.loader.output}</p>}
          <span className="terminal-caret" />
        </div>
        <div className="loader-bar">
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.9, ease: 'easeInOut' }} />
        </div>
      </div>
      <p className="loader-skip mono">{t.loader.skip}</p>
    </motion.div>
  )
}
