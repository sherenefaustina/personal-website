import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1A1614',
            color: '#FDFAF5',
            fontFamily: 'DM Sans, sans-serif',
            borderRadius: '12px',
            fontSize: '14px',
          }
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}