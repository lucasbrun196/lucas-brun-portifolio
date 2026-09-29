import { motion } from 'framer-motion'
import { useState, type MouseEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { socials } from '../../data/profile'
import Magnetic from '../effects/Magnetic'
import SectionTitle from '../SectionTitle'

const HANDS = ['🙌', '✋', '🤚', '👏', '💜', '⚡']

function readHighFives() {
  try {
    return Number(localStorage.getItem('high-fives')) || 0
  } catch {
    return 0
  }
}

export default function Contact() {
  const { t } = useLanguage()
  const [count, setCount] = useState(readHighFives)
  const [bump, setBump] = useState(0)

  const highFive = (e: MouseEvent<HTMLButtonElement>) => {
    const next = count + 1
    setCount(next)
    setBump((b) => b + 1)
    try {
      localStorage.setItem('high-fives', String(next))
    } catch {
      /* storage unavailable */
    }
    // Pop a few floating hands from the button.
    const rect = e.currentTarget.getBoundingClientRect()
    for (let i = 0; i < 6; i++) {
      const hand = document.createElement('span')
      hand.className = 'float-hand'
      hand.textContent = HANDS[Math.floor(Math.random() * HANDS.length)]
      hand.style.left = `${rect.left + rect.width / 2}px`
      hand.style.top = `${rect.top}px`
      hand.style.setProperty('--dx', `${(Math.random() - 0.5) * 180}px`)
      hand.style.setProperty('--rot', `${(Math.random() - 0.5) * 80}deg`)
      hand.style.animationDelay = `${i * 0.04}s`
      document.body.appendChild(hand)
      window.setTimeout(() => hand.remove(), 1400)
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
          <p className="contact-text">{t.contact.text}</p>
          <div className="contact-links">
            {socials.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label} strength={0.4}>
                <a href={href} target="_blank" rel="noreferrer" className="contact-link">
                  <Icon />
                  <span>{label}</span>
                </a>
              </Magnetic>
            ))}
          </div>
          <div className="high-five">
            <motion.button className="btn btn-primary" onClick={highFive} whileTap={{ scale: 0.9, rotate: -6 }}>
              <span>{t.contact.highFive}</span> <span className="hand">🙌</span>
            </motion.button>
            <motion.span key={bump} className="high-five-count mono" initial={{ scale: 1.6 }} animate={{ scale: 1 }}>
              {count} {t.contact.highFiveCount}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
