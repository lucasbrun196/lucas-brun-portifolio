import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../effects/Reveal'
import LogoTile from '../LogoTile'
import SectionTitle from '../SectionTitle'

// Lights up once the timeline fill reaches it (and goes dark again when scrolling back up).
function TimelineDot() {
  const ref = useRef<HTMLSpanElement>(null)
  const lit = useInView(ref, { margin: '0px 0px -40% 0px' })
  return <span ref={ref} className={`timeline-dot ${lit ? 'is-lit' : ''}`} aria-hidden="true" />
}

export default function Experience() {
  const { t } = useLanguage()
  const timelineRef = useRef<HTMLDivElement>(null)
  // The timeline line fills in as you scroll through it.
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle index={2} title={t.experience.title} />
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-track" aria-hidden="true">
            <motion.div className="timeline-fill" style={{ scaleY }} />
          </div>
          <ol>

          {t.experience.items.map((job, i) => (
            <li key={job.company + job.role} className={`timeline-item ${job.current ? 'is-current' : ''}`}>
              <TimelineDot />
              <Reveal delay={i * 0.05}>
                <article className="card exp-card">
                  <header className="exp-head">
                    <LogoTile name={job.logo} />
                    <div className="exp-title">
                      <h3>{job.role}</h3>
                      <p className="exp-company">
                        {job.company} <span aria-hidden="true">·</span> {job.location}
                      </p>
                    </div>
                    <div className="exp-meta">
                      {job.current && <span className="badge badge-accent">{t.experience.current}</span>}
                      <span className="exp-period mono">{job.period}</span>
                    </div>
                  </header>

                  <p className="exp-desc">{job.description}</p>

                  {job.highlights && (
                    <ul className="exp-highlights">
                      {job.highlights.map((h) => (
                        <li key={h.title} className="exp-highlight">
                          <div className="exp-highlight-head">
                            <LogoTile name={h.logo} size="sm" />
                            <h4>{h.title}</h4>
                          </div>
                          <p>{h.text}</p>
                          {h.chips && (
                            <div className="tags">
                              {h.chips.map((chip) => (
                                <span key={chip} className="tag">
                                  {chip}
                                </span>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
