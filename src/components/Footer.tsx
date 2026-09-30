import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { socials } from '../data/profile'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="hero-socials">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-pop">
              <Icon />
            </a>
          ))}
        </div>
        <motion.button
          className="top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t.footer.top}
          title={t.footer.top}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp />
        </motion.button>
      </div>
      <p className="footer-copy mono">© {new Date().getFullYear()} Lucas Brun</p>
    </footer>
  )
}
