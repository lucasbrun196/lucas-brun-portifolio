import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { githubUrl } from '../../data/profile'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Reveal from '../effects/Reveal'
import ProjectList from '../ProjectList'
import SectionTitle from '../SectionTitle'

// Three.js and the physics engine only download when the section gets close to the screen.
const World = lazy(() => import('../world/World'))

function WorldPlaceholder() {
  const { t } = useLanguage()
  return (
    <div className="world world-placeholder">
      <span className="mono">{t.projects.world.loading}</span>
    </div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const stage = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)
  const [inView, setInView] = useState(false)
  const [view, setView] = useState<'world' | 'list'>('world')
  // Phones and touch only devices get the list instead of the keyboard driven map.
  const compact = useMediaQuery('(max-width: 760px), (hover: none)')
  const showWorld = !compact && view === 'world'

  useEffect(() => {
    const el = stage.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) setLoad(true)
      },
      { rootMargin: '250px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle index={4} title={t.projects.title} />
        <div className="projects-grid">
          <Reveal className="projects-side">
            <div className="card github-card">
              <span className="logo-tile logo-tile-md icon-tile" aria-hidden="true">
                <FiGithub />
              </span>
              <p className="github-text">{t.projects.text}</p>
              <p className="github-showcase">{t.projects.showcase}</p>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                {t.projects.cta}
                <FiArrowUpRight className="btn-arrow" />
              </a>
            </div>
          </Reveal>

          <div className="projects-stage" ref={stage}>
            {showWorld ? (
              load ? (
                <Suspense fallback={<WorldPlaceholder />}>
                  <World inView={inView} onShowList={() => setView('list')} />
                </Suspense>
              ) : (
                <WorldPlaceholder />
              )
            ) : (
              <ProjectList onShowWorld={compact ? undefined : () => setView('world')} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
