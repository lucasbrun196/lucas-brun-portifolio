import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { githubUrl } from '../../data/profile'
import Magnetic from '../effects/Magnetic'
import TiltCard from '../effects/TiltCard'
import SectionTitle from '../SectionTitle'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle index={4} kicker={t.projects.kicker} title={t.projects.title} />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="card github-card" max={5}>
            <span className="github-logo" aria-hidden="true">
              <FiGithub />
            </span>
            <p className="github-text">{t.projects.text}</p>
            <Magnetic>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FiGithub /> <span>{t.projects.cta}</span> <FiArrowUpRight className="btn-arrow" />
              </a>
            </Magnetic>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
