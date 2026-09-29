import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../effects/Reveal'
import TiltCard from '../effects/TiltCard'
import SectionTitle from '../SectionTitle'

export default function Experience() {
  const { t } = useLanguage()
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle index={2} kicker={t.experience.kicker} title={t.experience.title} />
        <div className="exp-list">
          {t.experience.items.map((job, i) => (
            <Reveal key={job.company + job.role} delay={i * 0.1}>
              <TiltCard className="exp-card card" max={5}>
                <div className="exp-logo" aria-hidden="true">
                  <span>{job.emoji}</span>
                </div>
                <div className="exp-body">
                  <div className="exp-top">
                    <div>
                      <h3 className="exp-role">{job.role}</h3>
                      <p className="exp-company">
                        <FiBriefcase /> {job.company}
                      </p>
                    </div>
                    <div className="exp-meta">
                      <span className="badge badge-live">
                        <span className="pulse-dot" /> {t.experience.current}
                      </span>
                      <span className="exp-period mono">{job.period}</span>
                      <span className="exp-location">
                        <FiMapPin /> {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="exp-desc">{job.description}</p>
                  <div className="exp-highlights">
                    {job.highlights.map((h, hi) => (
                      <motion.div
                        key={h.title}
                        className="exp-highlight"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 + hi * 0.1 }}
                      >
                        <span className="exp-highlight-emoji" aria-hidden="true">
                          {h.emoji}
                        </span>
                        <h4>{h.title}</h4>
                        <p>{h.text}</p>
                        {h.chips && (
                          <div className="tags exp-highlight-chips">
                            {h.chips.map((chip) => (
                              <span key={chip} className="tag">
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
