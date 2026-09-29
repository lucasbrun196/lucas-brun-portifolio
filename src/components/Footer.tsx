import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { socials } from '../data/profile'

export default function Footer() {
  const { t } = useLanguage()
  const [launching, setLaunching] = useState(false)

  const launch = () => {
    setLaunching(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(() => setLaunching(false), 1200)
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-made">{t.footer.made}</p>
          <p className="footer-location">
            <FiMapPin /> {t.footer.location}
          </p>
          <p className="footer-love mono">{t.footer.love}</p>
          <p className="footer-hint mono">{t.footer.hint}</p>
        </div>
        <div className="footer-right">
          <div className="hero-socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-pop">
                <Icon />
              </a>
            ))}
          </div>
          <motion.button
            className="rocket-btn"
            onClick={launch}
            aria-label={t.footer.top}
            title={t.footer.top}
            animate={launching ? { y: -160, opacity: 0, rotate: -45 } : { y: 0, opacity: 1, rotate: -45 }}
            transition={launching ? { duration: 0.6, ease: 'easeIn' } : { duration: 0.3 }}
          >
            🚀
          </motion.button>
        </div>
      </div>
      <p className="footer-copy mono">© {new Date().getFullYear()} Lucas Brun</p>
    </footer>
  )
}
