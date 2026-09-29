import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../effects/Reveal'
import TiltCard from '../effects/TiltCard'
import SectionTitle from '../SectionTitle'

const Str = ({ children }: { children: ReactNode }) => <span className="tok-str">"{children}"</span>
const Key = ({ children }: { children: ReactNode }) => <span className="tok-key">{children}</span>

// A "lucas.ts" code editor card that sums up who I am (and where I'm from).
function ProfileCode() {
  const { t } = useLanguage()
  const c = t.about.code

  const lines: { content: ReactNode; highlight?: boolean }[] = [
    {
      content: (
        <>
          <span className="tok-kw">const</span> <span className="tok-var">lucas</span> = {'{'}
        </>
      ),
    },
    {
      highlight: true,
      content: (
        <>
          {'  '}
          <Key>location</Key>: <Str>{c.location}</Str>, <span className="tok-pin">📍</span>
        </>
      ),
    },
    {
      content: (
        <>
          {'  '}
          <Key>role</Key>: <Str>{c.role}</Str>,
        </>
      ),
    },
    {
      content: (
        <>
          {'  '}
          <Key>education</Key>: <Str>{c.education}</Str>,
        </>
      ),
    },
    {
      content: (
        <>
          {'  '}
          <Key>focus</Key>: [
          {c.focus.map((f, i) => (
            <span key={f}>
              <Str>{f}</Str>
              {i < c.focus.length - 1 ? ', ' : ''}
            </span>
          ))}
          ],
        </>
      ),
    },
    {
      content: (
        <>
          {'  '}
          <Key>hobby</Key>: <Str>{c.hobby}</Str>,
        </>
      ),
    },
    {
      content: (
        <>
          {'}'}
          <span className="code-caret" />
        </>
      ),
    },
  ]

  return (
    <TiltCard className="card code-card" max={6}>
      <div className="terminal-bar code-bar">
        <span />
        <span />
        <span />
        <em className="mono">lucas.ts</em>
      </div>
      <pre className="code-body mono">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`code-line ${line.highlight ? 'code-line-hl' : ''}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.09, duration: 0.4 }}
          >
            <span className="code-ln">{i + 1}</span>
            <code>{line.content}</code>
          </motion.div>
        ))}
      </pre>
    </TiltCard>
  )
}

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle index={1} kicker={t.about.kicker} title={t.about.title} />
        <div className="about-grid">
          <div className="about-text">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <ProfileCode />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
