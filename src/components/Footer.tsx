import { FiArrowUp } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { socials } from '../data/profile'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy mono">© {new Date().getFullYear()} Lucas Brun</p>
        <div className="socials">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="icon-btn">
              <Icon />
            </a>
          ))}
          <button
            className="icon-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t.footer.top}
            title={t.footer.top}
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
