import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { githubUrl } from '../../data/profile'
import Reveal from '../effects/Reveal'
import SectionTitle from '../SectionTitle'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle index={4} title={t.projects.title} />
        <Reveal>
          <div className="card github-card">
            <span className="logo-tile logo-tile-md icon-tile" aria-hidden="true">
              <FiGithub />
            </span>
            <p className="github-text">{t.projects.text}</p>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              {t.projects.cta}
              <FiArrowUpRight className="btn-arrow" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
