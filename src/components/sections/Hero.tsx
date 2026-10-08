import { motion } from 'framer-motion'
import { useRef, useState, type PointerEvent } from 'react'
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { profilePhoto, resumeFor, socials } from '../../data/profile'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const { t, lang } = useLanguage()
  const resume = resumeFor(lang)
  const ref = useRef<HTMLElement>(null)
  // The photo column only appears once public/profile.jpg actually loads.
  const [photo, setPhoto] = useState<'loading' | 'ok' | 'missing'>('loading')

  // The dot grid lights up around the pointer.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--hx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--hy', `${e.clientY - rect.top}px`)
  }

  const item = (i: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease },
  })

  return (
    <section id="top" className="hero" ref={ref} onPointerMove={onPointerMove}>
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-dots hero-dots-lit" aria-hidden="true" />

      <div className={`container hero-inner ${photo === 'ok' ? 'has-photo' : ''}`}>
        <div className="hero-text">
          <motion.p className="hero-location mono" {...item(0)}>
            <FiMapPin /> {t.hero.location}
          </motion.p>
          <motion.h1 className="hero-name" {...item(1)}>
            Lucas Brun
          </motion.h1>
          <motion.p className="hero-role" {...item(2)}>
            {t.hero.role}
          </motion.p>
          <motion.p className="hero-tagline" {...item(3)}>
            {t.hero.tagline}
          </motion.p>

          <motion.div className="hero-ctas" {...item(4)}>
            <a href="#contact" className="btn btn-primary">
              {t.hero.ctaContact}
              <FiArrowRight className="btn-arrow" />
            </a>
            <a href={resume.href} download={resume.file} className="btn btn-ghost">
              <FiDownload />
              {t.hero.resume}
            </a>
            <span className="hero-divider" aria-hidden="true" />
            <div className="socials">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="icon-btn">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {photo !== 'missing' && (
          <motion.div
            className="hero-photo"
            hidden={photo !== 'ok'}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={photo === 'ok' ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            <img
              src={`${import.meta.env.BASE_URL}${profilePhoto}`}
              alt="Lucas Brun"
              onLoad={() => setPhoto('ok')}
              onError={() => setPhoto('missing')}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
