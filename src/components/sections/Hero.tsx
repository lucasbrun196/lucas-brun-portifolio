import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, type PointerEvent } from 'react'
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'
import { profilePhoto, resumeFor, socials } from '../../data/profile'

const ease = [0.22, 1, 0.36, 1] as const
const NAME = 'Lucas Brun'

export default function Hero() {
  const { t, lang } = useLanguage()
  const resume = resumeFor(lang)
  const ref = useRef<HTMLElement>(null)
  // The photo column only appears once public/profile.jpg actually loads.
  const [photo, setPhoto] = useState<'loading' | 'ok' | 'missing'>('loading')

  // As the hero scrolls away its content drifts a little slower than the page and fades.
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduceMotion ? 1 : 0.15])
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setScrolled(v > 0.04))

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
      <div className="hero-dots hero-dots-wave" aria-hidden="true" />

      <motion.div
        className={`container hero-inner ${photo === 'ok' ? 'has-photo' : ''}`}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="hero-text">
          <motion.p className="hero-location mono" {...item(0)}>
            <FiMapPin /> {t.hero.location}
          </motion.p>
          {/* Each letter rises out of its word, one after the other. */}
          <h1 className="hero-name" aria-label={NAME}>
            {NAME.split(' ').map((word, wi) => (
              <span key={word} className="hero-word" aria-hidden="true">
                {[...word].map((char, ci) => (
                  <motion.span
                    key={ci}
                    className="hero-letter"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + (wi * 6 + ci) * 0.035, ease }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
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
      </motion.div>

      <span className={`hero-cue ${scrolled ? 'is-hidden' : ''}`} aria-hidden="true">
        <span className="hero-cue-track">
          <span className="hero-cue-line" />
        </span>
      </span>
    </section>
  )
}
