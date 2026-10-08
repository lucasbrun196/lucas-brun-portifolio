import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/effects/ScrollProgress'
import { useCardSpotlight } from './components/effects/useCardSpotlight'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

export default function App() {
  useCardSpotlight()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
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
