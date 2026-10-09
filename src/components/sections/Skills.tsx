import { motion } from 'framer-motion'
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
                <motion.ul
                  className="skill-list"
                  initial="hidden"
                  whileInView="shown"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.045, delayChildren: 0.15 + gi * 0.05 }}
                >
                  {group.skills.map((s) => (
                    <motion.li
                      key={s.name}
                      className="skill"
                      style={{ ['--c' as string]: s.color }}
                      variants={{ hidden: { opacity: 0, x: -6 }, shown: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <s.icon className="skill-icon" aria-hidden="true" />
                      <span>{s.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
