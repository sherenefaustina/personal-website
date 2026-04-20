import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const floatingOrbs = [
  { size: 280, top: '10%', left: '-5%', color: 'bg-rose-soft/30', delay: 0 },
  { size: 200, top: '60%', right: '-3%', color: 'bg-sage-light/30', delay: 1 },
  { size: 150, top: '30%', right: '20%', color: 'bg-gold-light/20', delay: 2 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} blur-3xl pointer-events-none`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
          }}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-20 right-0 w-96 opacity-5" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#1A1614" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#1A1614" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="#1A1614" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-light rounded-full text-xs font-mono font-medium text-rose-accent mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-rose-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-4"
            >
              Sherene
              <br />
              <span className="italic text-gradient">Faustina</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-base text-ink-muted mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'Computer Science and Engineering @ SRM Chennai',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-ink-muted leading-relaxed mb-8 max-w-md"
            >
              I build full-stack applications and intelligent systems that solve real-world problems. 
              Currently pursuing B.Tech CSE at SRM Institute of Science and Technology with a CGPA of <span className="text-rose-accent font-semibold">9.78</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link to="projects" smooth duration={600} offset={-70}>
                <button className="btn-primary group">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >→</motion.span>
                </button>
              </Link>
              <a href="/resume.pdf" download className="btn-outline">
                Download Resume ↓
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/sherenefaustina', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/sherene-faustina-a-5667a1289/', label: 'LinkedIn' },
                { icon: <FiMail size={18} />, href: 'mailto:faustinasherene@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-cream-200 flex items-center justify-center text-ink-muted hover:text-ink hover:border-ink hover:bg-cream-100 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
              <span className="text-xs text-ink-muted font-mono ml-1">+91 7397755638</span>
            </motion.div>
          </div>

          {/* Right — decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="card p-8 relative overflow-hidden noise-overlay"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-rose-light to-transparent rounded-bl-full opacity-60" />
                <div className="font-mono text-xs text-ink-muted mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-accent/80" />
                  <span className="w-3 h-3 rounded-full bg-gold-light" />
                  <span className="w-3 h-3 rounded-full bg-sage-light" />
                  <span className="ml-2 opacity-60">sherene.dev</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-ink-muted"><span className="text-rose-accent">const</span> <span className="text-ink">developer</span> = {'{'}</p>
                  <p className="pl-4 text-ink-muted">name: <span className="text-sage">"Sherene Faustina"</span>,</p>
                  <p className="pl-4 text-ink-muted">cgpa: <span className="text-gold">9.78</span>,</p>
                  <p className="pl-4 text-ink-muted">skills: [<span className="text-rose-accent">"React"</span>, <span className="text-rose-accent">"Node"</span>, <span className="text-rose-accent">"AI/ML"</span>],</p>
                  <p className="pl-4 text-ink-muted">passion: <span className="text-sage">"Building for impact"</span>,</p>
                  <p className="pl-4 text-ink-muted">location: <span className="text-sage">"Chennai, India"</span></p>
                  <p className="text-ink-muted">{'}'}</p>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-8 card p-4 shadow-md"
              >
                <p className="font-display text-2xl font-bold text-ink">5+</p>
                <p className="text-xs text-ink-muted font-mono">Major Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 card p-4 shadow-md"
              >
                <p className="font-display text-2xl font-bold text-rose-accent">9.78</p>
                <p className="text-xs text-ink-muted font-mono">CGPA</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-ink-muted">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={16} className="text-ink-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}