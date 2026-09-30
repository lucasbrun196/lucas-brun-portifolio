import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../effects/Reveal'
import TiltCard from '../effects/TiltCard'
import SectionTitle from '../SectionTitle'

interface InfoCardProps {
  emoji: string
  badge: string
  title: string
  text: string
  chips?: string[]
  className?: string
}

// Emoji tile + badge, title, text and optional chips (marathon, TA role, TCC, workshops).
function InfoCard({ emoji, badge, title, text, chips, className = '' }: InfoCardProps) {
  return (
    <TiltCard className={`card info-card ${className}`} max={6}>
      <span className="info-emoji" aria-hidden="true">
        {emoji}
      </span>
      <div>
        <span className="badge">{badge}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        {chips && (
          <div className="tags">
            {chips.map((chip) => (
              <span key={chip} className="tag">
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </TiltCard>
  )
}

export default function Education() {
  const { t } = useLanguage()
  const { marathon, monitor, workshops, tcc } = t.education

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle index={3} kicker={t.education.kicker} title={t.education.title} />
        <div className="edu-grid">
          <div className="edu-col">
            <Reveal>
              <TiltCard className="card degree-card" max={6}>
                <span className="grad-cap" aria-hidden="true">
                  🎓
                </span>
                <span className="badge">{t.education.status}</span>
                <h3>{t.education.degree}</h3>
                <p className="degree-school">{t.education.school}</p>
                <p className="degree-desc">{t.education.description}</p>
                <p className="facts-title mono">{t.education.learnedTitle}</p>
                <ul className="subjects">
                  {t.education.subjects.map((s, i) => (
                    <motion.li
                      key={s}
                      className="subject"
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 320, damping: 16, delay: 0.1 + i * 0.05 }}
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          </div>

          <div className="edu-col">
            <Reveal delay={0.1}>
              <InfoCard emoji="🏆" badge={marathon.badge} title={marathon.title} text={marathon.text} chips={marathon.years} />
            </Reveal>

            <Reveal delay={0.2}>
              <InfoCard emoji="🧑‍🏫" {...monitor} />
            </Reveal>
          </div>

          <div className="edu-full edu-row">
            <Reveal delay={0.1}>
              <InfoCard emoji="🌾" className="tcc-card" {...tcc} />
            </Reveal>
            <Reveal delay={0.2}>
              <InfoCard emoji="🛠️" className="workshop-card" {...workshops} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
