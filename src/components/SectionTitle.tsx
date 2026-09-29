import { motion } from 'framer-motion'

export default function SectionTitle({ index, kicker, title }: { index: number; kicker: string; title: string }) {
  return (
    <motion.header
      className="section-head"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="kicker mono">{`> ${kicker}`}</span>
      <h2 className="section-title">
        <span className="section-num mono">{String(index).padStart(2, '0')}.</span>
        <span className="glitch" data-text={title}>
          {title}
        </span>
      </h2>
      <motion.span
        className="title-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.header>
  )
}
