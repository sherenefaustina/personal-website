import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiZap, FiShield, FiTrendingUp, FiMessageSquare, FiDollarSign, FiEye } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'EmergenSense AI',
    subtitle: 'AI-Driven Emergency Detection System',
    description:
      'Full-stack AI Emergency Detection System with a custom NLP model (TF-IDF + Logistic Regression) achieving 95% accuracy. Classifies Fire, Medical, and Violence emergencies from voice/text in 3 languages.',
    tech: ['React (Vite)', 'FastAPI', 'Scikit-learn', 'Python', 'OpenStreetMap', 'NLP'],
    features: [
      '95% NLP classification accuracy',
      'Real-time GPS emergency location',
      'SOS WhatsApp alerts',
      'Voice + text input in 3 languages',
      'Live analytics dashboard',
      '30+ features built',
    ],
    icon: <FiZap size={20} />,
    color: 'from-rose-accent/20 to-gold-light/10',
    accent: 'text-rose-accent',
    border: 'border-rose-accent/20',
    github: 'https://github.com/sherenefaustina',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 2,
    title: 'PharmaChain-QAS',
    subtitle: 'Pharmaceutical Quality Assurance System',
    description:
      'Web-based pharmaceutical batch quality assurance system enabling batch tracking, QR-based verification, and drug supply chain transparency with role-based access control.',
    tech: ['React', 'Node.js', 'Express', 'REST API', 'SQL', 'QR Code'],
    features: [
      'Batch tracking & QR verification',
      'Role-based access control',
      'Automated batch status management',
      'Drug safety compliance',
      'Supply chain transparency',
    ],
    icon: <FiShield size={20} />,
    color: 'from-sage-light/30 to-cream-200/20',
    accent: 'text-sage',
    border: 'border-sage/20',
    github: 'https://github.com/sherenefaustina',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 3,
    title: 'FinWise',
    subtitle: 'AI-Powered Financial Scheme Advisor',
    description:
      'Intelligent financial scheme recommendation platform using ML (Random Forest) to match users with relevant government schemes. Privacy-focused with scalable architecture.',
    tech: ['React (Vite)', 'Node.js', 'MongoDB', 'Random Forest', 'ML'],
    features: [
      'ML-powered eligibility matching',
      'Random Forest recommendations',
      'Privacy-focused design',
      'Scalable architecture',
      'Responsive UI',
    ],
    icon: <FiTrendingUp size={20} />,
    color: 'from-gold-light/30 to-rose-light/10',
    accent: 'text-gold',
    border: 'border-gold/20',
    github: 'https://github.com/sherenefaustina',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 4,
    title: 'CipherTalk',
    subtitle: 'End-To-End Encrypted Chat App',
    description:
      'Secure real-time chat application with AES/RSA encryption, JWT authentication, and an integrated AI chatbot for automated replies.',
    tech: ['MERN', 'Socket.io', 'JWT', 'AES/RSA', 'AI Chatbot'],
    features: [
      'AES/RSA end-to-end encryption',
      'Real-time messaging (Socket.io)',
      'JWT authentication',
      'AI chatbot integration',
      'Private messaging',
    ],
    icon: <FiMessageSquare size={20} />,
    color: 'from-ink/5 to-cream-200/20',
    accent: 'text-ink',
    border: 'border-ink/10',
    github: 'https://github.com/sherenefaustina',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Finovo',
    subtitle: 'Personal Finance Management App',
    description:
      'Responsive personal finance management application with expense tracking, budget management, interactive spending visualizations, and secure MongoDB data handling.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Charts'],
    features: [
      'Expense tracking & budgeting',
      'Interactive spending charts',
      'Secure MongoDB storage',
      'Responsive UI',
    ],
    icon: <FiDollarSign size={20} />,
    color: 'from-rose-light/30 to-sage-light/10',
    accent: 'text-rose-accent',
    border: 'border-rose-accent/15',
    github: 'https://github.com/sherenefaustina',
    category: 'Full Stack',
  },
  {
    id: 6,
    title: 'VisionEase',
    subtitle: 'AI Assistive App for Accessibility',
    description:
      'AI-based assistive application built during Spectrum VIT hackathon for visually impaired and dyslexic users. Includes voice assistant, OCR reading, and currency detection.',
    tech: ['React', 'Flask', 'Whisper AI', 'YOLO', 'OCR'],
    features: [
      'Voice assistant interface',
      'Currency detection (YOLO)',
      'OCR text reading',
      'Dyslexia-friendly design',
      'Accessibility-first',
    ],
    icon: <FiEye size={20} />,
    color: 'from-sage-light/30 to-gold-light/10',
    accent: 'text-sage',
    border: 'border-sage/20',
    github: 'https://github.com/sherenefaustina',
    category: 'AI/ML',
  },
]

const categories = ['All', 'AI/ML', 'Full Stack']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-rose-accent uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="section-heading mb-6">
            Featured <span className="italic text-ink-muted">Projects</span>
          </h2>

          {/* Filter tabs */}
          <div className="inline-flex gap-2 bg-cream-100 rounded-full p-1 border border-cream-200">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-ink text-cream-50 shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`card border ${project.border} overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
              >
                {/* Card top gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.color} w-full`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} ${project.accent} flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-cream-200 flex items-center justify-center text-ink-muted hover:text-ink hover:border-ink transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <FiGithub size={14} />
                      </a>
                    </div>
                  </div>

                  <span className={`text-xs font-mono ${project.accent} uppercase tracking-wider`}>
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink mt-1 mb-1">{project.title}</h3>
                  <p className="text-xs text-ink-muted mb-3">{project.subtitle}</p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-ink-muted">
                        <span className={`w-1.5 h-1.5 rounded-full bg-current ${project.accent} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/sherenefaustina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}