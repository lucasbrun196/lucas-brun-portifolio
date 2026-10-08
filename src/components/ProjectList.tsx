import { FiArrowUpRight, FiMap } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'
import ClawdIcon from './ClawdIcon'

// Plain list of the deployed projects: used on phones and as the accessible alternative to the 3D map.
export default function ProjectList({ onShowWorld }: { onShowWorld?: () => void }) {
  const { t, lang } = useLanguage()
  const w = t.projects.world

  return (
    <div className="card project-list">
      <div className="project-list-head">
        <h3 className="mono">{w.listTitle}</h3>
        {onShowWorld && (
          <button type="button" className="world-toggle world-toggle-inline" onClick={onShowWorld}>
            <FiMap aria-hidden="true" />
            {w.worldView}
          </button>
        )}
      </div>
      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.url} target="_blank" rel="noreferrer" className="project-item">
              <span className="project-dot" style={{ background: p.color }} aria-hidden="true" />
              <span className="project-info">
                <strong>{p.name}</strong>
                <span>{p.description[lang]}</span>
              </span>
              <FiArrowUpRight className="project-arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <p className="project-list-note">
        <ClawdIcon />
        {w.madeWith}
      </p>
    </div>
  )
}
