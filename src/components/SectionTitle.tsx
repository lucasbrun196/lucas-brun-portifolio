import Reveal from './effects/Reveal'

export default function SectionTitle({ index, title }: { index: number; title: string }) {
  return (
    <Reveal className="section-head">
      <span className="section-num mono">{String(index).padStart(2, '0')}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  )
}
