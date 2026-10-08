import type { ReactNode } from 'react'
import { FiArrowUpRight, FiTool } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { judges, logos } from '../../data/profile'
import Reveal from '../effects/Reveal'
import LogoTile from '../LogoTile'
import SectionTitle from '../SectionTitle'

interface InfoCardProps {
  media: ReactNode
  badge: string
  title: string
  text: string
  chips?: string[]
  children?: ReactNode
}

function InfoCard({ media, badge, title, text, chips, children }: InfoCardProps) {
  return (
    <article className="card info-card">
      <header className="info-head">
        {media}
        <span className="badge">{badge}</span>
      </header>
      <h3>{title}</h3>
      <p>{text}</p>
      {chips && (
        <div className="tags">
          {chips.map((chip) => (
            <span key={chip} className="tag">
              {chip}
            </span>
          ))}
        </div>
      )}
      {children}
    </article>
  )
}

const IconTile = ({ children }: { children: ReactNode }) => (
  <span className="logo-tile logo-tile-md icon-tile" aria-hidden="true">
    {children}
  </span>
)

export default function Education() {
  const { t } = useLanguage()
  const { marathon, monitor, workshops, tcc } = t.education

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle index={3} title={t.education.title} />

        <Reveal>
          <article className="card degree-card">
            <LogoTile name="upf" />
            <div className="degree-body">
              <div className="degree-top">
                <h3>{t.education.degree}</h3>
                <span className="badge badge-accent">{t.education.status}</span>
              </div>
              <p className="degree-school">{t.education.school}</p>
              <p className="degree-desc">{t.education.description}</p>
              <ul className="tags">
                {t.education.subjects.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <div className="edu-grid">
          <Reveal>
            <InfoCard media={<LogoTile name="dssat" />} {...tcc} />
          </Reveal>
          <Reveal delay={0.06}>
            <InfoCard media={<LogoTile name="sbc" />} badge={marathon.badge} title={marathon.title} text={marathon.text} chips={marathon.years}>
              <ul className="training">
                {judges.map(({ logo, href }) => (
                  <li key={logo}>
                    <a href={href} target="_blank" rel="noreferrer" className="training-link">
                      <LogoTile name={logo} size="sm" />
                      {logos[logo].alt}
                      <FiArrowUpRight className="training-arrow" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
          <Reveal>
            <InfoCard media={<LogoTile name="cpp" />} {...monitor} />
          </Reveal>
          <Reveal delay={0.06}>
            <InfoCard
              media={
                <IconTile>
                  <FiTool />
                </IconTile>
              }
              {...workshops}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
