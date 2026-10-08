import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../effects/Reveal'
import SectionTitle from '../SectionTitle'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle index={1} title={t.about.title} />
        <div className="about-grid">
          <div className="about-text">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <dl className="facts">
              {t.about.facts.map((f) => (
                <div key={f.label} className="fact">
                  <dt className="mono">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
