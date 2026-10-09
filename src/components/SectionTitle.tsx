import { motion } from 'framer-motion'
import Reveal from './effects/Reveal'

export default function SectionTitle({ index, title }: { index: number; title: string }) {
  return (
    <Reveal className="section-head">
      <span className="section-num mono">{String(index).padStart(2, '0')}</span>
      <h2 className="section-title">{title}</h2>
      {/* A hairline draws itself out from the title. */}
      <motion.span
        className="section-rule"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </Reveal>
  )
}
