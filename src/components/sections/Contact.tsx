import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { email, resumeFor, socials } from '../../data/profile'
import Reveal from '../effects/Reveal'
import SectionTitle from '../SectionTitle'

export default function Contact() {
  const { t, lang } = useLanguage()
  const resume = resumeFor(lang)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle index={6} title={t.contact.title} />
        <Reveal>
          <p className="contact-lead">{t.contact.lead}</p>
          <div className="email-row">
            <a href={`mailto:${email}`} className="email-link">
              {email}
            </a>
            <button className="icon-btn copy-btn" onClick={copyEmail} aria-label={t.contact.copy} title={t.contact.copy}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'ok' : 'copy'}
                  className="icon-wrap"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </motion.span>
              </AnimatePresence>
            </button>
            <AnimatePresence>
              {copied && (
                <motion.span
                  className="copied-hint mono"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                >
                  {t.contact.copied}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <ul className="contact-links">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="contact-link">
                  <Icon />
                  {label}
                  <FiArrowUpRight className="contact-link-arrow" />
                </a>
              </li>
            ))}
            <li>
              <a href={resume.href} download={resume.file} className="contact-link">
                <FiDownload />
                {t.hero.resume}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
