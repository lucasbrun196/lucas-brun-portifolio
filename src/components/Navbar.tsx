import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiGlobe, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { languages } from '../i18n/translations'
import ScrambleText from './effects/ScrambleText'

const SECTIONS = ['about', 'experience', 'education', 'projects', 'skills', 'contact'] as const

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  return (
    <button
      className="icon-btn theme-toggle"
      aria-label={t.nav.theme}
      title={t.nav.theme}
      onClick={(e) => toggleTheme({ x: e.clientX, y: e.clientY })}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -120, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 120, scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="icon-wrap"
        >
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="lang" ref={ref}>
      <button className="icon-btn lang-btn" aria-label={t.nav.language} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <FiGlobe className="lang-globe" />
        <span className="mono">{lang.toUpperCase()}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="lang-menu"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
          >
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  className={l.code === lang ? 'active' : ''}
                  onClick={() => {
                    setLang(l.code)
                    setOpen(false)
                  }}
                >
                  <span className="lang-code mono">{l.code.toUpperCase()}</span>
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    // "top" (the hero) has no nav link, so the underline disappears there.
    ;['top', ...SECTIONS].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])


  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#top" className="logo mono" aria-label="Lucas Brun">
          <span className="logo-bracket">&lt;</span>
          <span className="glitch" data-text="LB">
            LB
          </span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="nav-links">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}>
                <ScrambleText text={t.nav[id]} />
                {active === id && <motion.span layoutId="nav-underline" className="nav-underline" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <button className="icon-btn menu-btn" aria-label={t.nav.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            transition={{ duration: 0.55, ease: [0.7, 0, 0.3, 1] }}
          >
            <ul>
              {SECTIONS.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                    <span className="mono">{String(i + 1).padStart(2, '0')}.</span> {t.nav[id]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
