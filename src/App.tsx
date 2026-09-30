import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesBackground from './components/effects/ParticlesBackground'
import CustomCursor from './components/effects/CustomCursor'
import ClickSparks from './components/effects/ClickSparks'
import ScrollProgress from './components/effects/ScrollProgress'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

// The boot screen only plays once per browser session.
function shouldBoot() {
  try {
    return !sessionStorage.getItem('booted')
  } catch {
    return true
  }
}

export default function App() {
  const [booting, setBooting] = useState(shouldBoot)

  const finishBoot = useCallback(() => {
    setBooting(false)
    try {
      sessionStorage.setItem('booted', '1')
    } catch {
      /* storage unavailable */
    }
  }, [])

  return (
    <>
      <AnimatePresence>{booting && <Loader onDone={finishBoot} />}</AnimatePresence>
      <ParticlesBackground />
      <CustomCursor />
      <ClickSparks />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero ready={!booting} />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
