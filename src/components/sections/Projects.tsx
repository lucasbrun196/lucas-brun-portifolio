import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { githubUrl, projects, type ProjectCategory } from '../../data/profile'
import Magnetic from '../effects/Magnetic'
import TiltCard from '../effects/TiltCard'
import SectionTitle from '../SectionTitle'

type Filter = 'all' | ProjectCategory
const FILTERS: Filter[] = ['all', 'mobile', 'backend', 'cloud', 'cs']

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')
  const visible = projects.filter((p) => filter === 'all' || p.categories.includes(filter))

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle index={4} kicker={t.projects.kicker} title={t.projects.title} />

        <div className="filters" role="tablist">
          {FILTERS.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} className={`filter ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {filter === f && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
              <span className="filter-label">{t.projects.filters[f]}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const copy = t.projects.items[p.id]
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                >
                  <TiltCard className="card project-card">
                    <div className="project-cover" style={{ ['--c1' as string]: p.colors[0], ['--c2' as string]: p.colors[1] }}>
                      <span className="project-emoji" aria-hidden="true">
                        {p.emoji}
                      </span>
                      {p.featured && (
                        <span className="badge badge-featured">
                          <FiStar /> {t.projects.featured}
                        </span>
                      )}
                    </div>
                    <div className="project-body">
                      <h3>{copy.title}</h3>
                      <p>{copy.description}</p>
                      <div className="tags">
                        {p.tech.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={p.repo} target="_blank" rel="noreferrer" className="link-btn">
                          <FiGithub /> {t.projects.code}
                        </a>
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noreferrer" className="link-btn link-live">
                            <FiExternalLink /> {t.projects.live}
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        <div className="center">
          <Magnetic>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FiGithub /> <span>{t.projects.more}</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
