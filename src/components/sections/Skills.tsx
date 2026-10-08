import { useLanguage } from '../../context/LanguageContext'
import { skillGroups } from '../../data/profile'
import Reveal from '../effects/Reveal'
import SectionTitle from '../SectionTitle'

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle index={5} title={t.skills.title} />
        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.05}>
              <div className="skill-group">
                <h3 className="mono">{t.skills.groups[group.id]}</h3>
                <ul className="skill-list">
                  {group.skills.map((s) => (
                    <li key={s.name} className="skill" style={{ ['--c' as string]: s.color }}>
                      <s.icon className="skill-icon" aria-hidden="true" />
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
