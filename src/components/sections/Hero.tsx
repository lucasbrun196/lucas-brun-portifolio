import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiArrowRight, FiDownload, FiSend } from 'react-icons/fi'
import { SiCplusplus, SiFlutter, SiNodedotjs, SiTerraform, SiTypescript } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { useLanguage } from '../../context/LanguageContext'
import { profilePhoto, resumeFor, socials } from '../../data/profile'
import Magnetic from '../effects/Magnetic'
import Typewriter from '../effects/Typewriter'

const ORBIT = [SiFlutter, SiTypescript, SiCplusplus, FaAws, SiNodedotjs, SiTerraform]
const NAME = 'Lucas Brun'

function ProfilePhoto() {
  const [failed, setFailed] = useState(false)

  return (
    <motion.div
      className="photo-wrap"
      variants={{
        hidden: { opacity: 0, scale: 0.6, rotate: -10 },
        show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, delay: 0.3, type: 'spring', stiffness: 90 } },
      }}
      data-cursor
    >
      <div className="photo-ring" aria-hidden="true" />
      <div className="photo-blob">
        {failed ? (
          <div className="photo-fallback" aria-label="Lucas Brun">
            <span>LB</span>
          </div>
        ) : (
          <img src={`${import.meta.env.BASE_URL}${profilePhoto}`} alt="Lucas Brun" onError={() => setFailed(true)} />
        )}
      </div>
      <div className="orbit" style={{ ['--n' as string]: ORBIT.length }} aria-hidden="true">
        {ORBIT.map((Icon, i) => (
          <span key={i} className="orbit-item" style={{ ['--i' as string]: i }}>
            <span className="orbit-icon">
              <Icon />
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero({ ready }: { ready: boolean }) {
  const { t, lang } = useLanguage()
  const resume = resumeFor(lang)
  const show = ready ? 'show' : 'hidden'

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="top" className="hero">
      <div className="hero-blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-grid" aria-hidden="true" />

      <motion.div className="hero-content container" variants={container} initial="hidden" animate={show}>
        <div className="hero-text">
          <motion.h1 variants={item} className="hero-name" aria-label={NAME}>
            {NAME.split('').map((char, i) =>
              char === ' ' ? (
                <span key={i} className="space">
                  {' '}
                </span>
              ) : (
                <motion.span
                  key={i}
                  className="letter"
                  aria-hidden="true"
                  whileHover={{ y: -18, rotate: i % 2 ? 8 : -8, scale: 1.25 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                >
                  {char}
                </motion.span>
              ),
            )}
          </motion.h1>

          <motion.p variants={item} className="hero-role mono">
            {t.hero.iam} <Typewriter words={t.hero.roles} />
          </motion.p>

          <motion.p variants={item} className="hero-tagline">
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={item} className="hero-ctas">
            <Magnetic>
              <a href="#projects" className="btn btn-primary">
                <span>{t.hero.ctaProjects}</span>
                <FiArrowRight className="btn-arrow" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-ghost">
                <span>{t.hero.ctaContact}</span>
                <FiSend />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={resume.href} download={resume.file} className="btn btn-ghost">
                <span>{t.hero.resume}</span>
                <FiDownload className="btn-download" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="social-pop">
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        <ProfilePhoto />
      </motion.div>

      <a href="#about" className="scroll-hint mono" aria-label={t.hero.scroll}>
        <span className="mouse">
          <span className="wheel" />
        </span>
        {t.hero.scroll}
      </a>
    </section>
  )
}
