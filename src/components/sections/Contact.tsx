import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiCheck, FiCopy, FiDownload, FiMail } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { email, resumeFor, socials } from '../../data/profile'
import Magnetic from '../effects/Magnetic'
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
        <SectionTitle index={6} kicker={t.contact.kicker} title={t.contact.title} />
        <motion.div
          className="contact-card card"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="email-row">
            <Magnetic strength={0.25}>
              <a href={`mailto:${email}`} className="email-link">
                <FiMail className="email-icon" />
                <span>{email}</span>
              </a>
            </Magnetic>
            <button className="icon-btn copy-btn" onClick={copyEmail} aria-label={t.contact.copy} title={t.contact.copy}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'ok' : 'copy'}
                  className="icon-wrap"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </motion.span>
              </AnimatePresence>
            </button>
            <AnimatePresence>
              {copied && (
                <motion.span
                  className="copied-hint mono"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  role="status"
                >
                  {t.contact.copied}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="contact-links">
            {socials.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label} strength={0.4}>
                <a href={href} target="_blank" rel="noreferrer" className="contact-link">
                  <Icon />
                  <span>{label}</span>
                </a>
              </Magnetic>
            ))}
            <Magnetic strength={0.4}>
              <a href={resume.href} download={resume.file} className="contact-link">
                <FiDownload />
                <span>{t.hero.resume}</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
