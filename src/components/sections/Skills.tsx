import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { skillGroups } from '../../data/profile'
import Reveal from '../effects/Reveal'
import SectionTitle from '../SectionTitle'

const allSkills = skillGroups.flatMap((g) => g.skills)

function Marquee({ reverse = false }: { reverse?: boolean }) {
  // The list is rendered twice so the loop is seamless.
  const items = [...allSkills, ...allSkills]
  return (
    <div className={`marquee ${reverse ? 'reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="marquee-item" style={{ ['--c' as string]: s.color }}>
            <s.icon /> {s.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle index={5} kicker={t.skills.kicker} title={t.skills.title} />
        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.08}>
              <div className="card skill-group">
                <h3>
                  <span className="skill-group-emoji">{group.emoji}</span> {t.skills.groups[group.id]}
                </h3>
                <ul className="skill-list">
                  {group.skills.map((s, si) => (
                    <motion.li
                      key={s.name}
                      className="skill"
                      style={{ ['--c' as string]: s.color }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15, delay: gi * 0.05 + si * 0.04 }}
                      data-cursor
                    >
                      <s.icon className="skill-icon" />
                      <span>{s.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="marquees">
        <Marquee />
        <Marquee reverse />
      </div>
    </section>
  )
}
