import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../effects/Reveal'
import TiltCard from '../effects/TiltCard'
import SectionTitle from '../SectionTitle'

// ICPC tradition: every solved problem earns the team a balloon.
const BALLOONS = ['#b44dff', '#f050ff', '#22d3ee', '#facc15', '#22c55e', '#f97316', '#3b82f6']

export default function Education() {
  const { t } = useLanguage()
  const { marathon, monitor } = t.education

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle index={3} kicker={t.education.kicker} title={t.education.title} />
        <div className="edu-grid">
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

          <div className="edu-side">
            <Reveal delay={0.1}>
              <TiltCard className="card marathon-card" max={6}>
                <div className="balloons" aria-hidden="true">
                  {BALLOONS.map((color, i) => (
                    <span key={color} className="balloon" style={{ ['--c' as string]: color, ['--i' as string]: i }} />
                  ))}
                </div>
                <div className="marathon-head">
                  <span className="trophy" aria-hidden="true">
                    🏆
                  </span>
                  <span className="badge badge-hot">★ {marathon.badge}</span>
                </div>
                <h3>{marathon.title}</h3>
                <div className="years">
                  {marathon.years.map((y) => (
                    <span key={y} className="year-chip mono">
                      {y}
                    </span>
                  ))}
                </div>
                <p>{marathon.text}</p>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.2}>
              <TiltCard className="card monitor-card" max={6}>
                <span className="monitor-emoji" aria-hidden="true">
                  🧑‍🏫
                </span>
                <div>
                  <span className="badge">{monitor.badge}</span>
                  <h3>{monitor.title}</h3>
                  <p>{monitor.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
