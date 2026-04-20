import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiAward, FiStar } from 'react-icons/fi'

const certifications = [
  { name: 'Programming in Java', org: 'NPTEL – IIT Kharagpur', badge: 'Elite', color: 'bg-gold-light text-gold' },
  { name: 'Introduction to Machine Learning', org: 'NPTEL', badge: 'Certified', color: 'bg-rose-light text-rose-accent' },
  { name: 'Artificial Intelligence', org: 'Infosys Springboard', badge: 'Certified', color: 'bg-cream-200 text-ink' },
  { name: 'Computer Vision', org: 'Infosys Springboard', badge: 'Certified', color: 'bg-sage-light text-sage' },
  { name: 'Computer Networks', org: 'Coursera (Google)', badge: 'Certified', color: 'bg-rose-light text-rose-accent' },
  { name: 'Software Engineering Simulation', org: 'JP Morgan Chase & Co.', badge: 'Completed', color: 'bg-gold-light text-gold' },
]

const hackathons = [
  {
    name: 'Spectrum VIT 2025',
    project: 'VisionEase',
    desc: 'AI-based assistive application for visually impaired and dyslexic users.',
    tags: ['React', 'Flask', 'YOLO', 'Whisper AI'],
  },
  {
    name: 'VIT Nexathon 2025',
    project: 'AI Mood-Responsive Home Automation',
    desc: 'AI system that automates home environment based on detected user mood.',
    tags: ['AI/ML', 'IoT', 'Python'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-cream-100/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-rose-accent uppercase tracking-widest mb-3">Experience & Growth</p>
          <h2 className="section-heading">
            Industry & <span className="italic text-ink-muted">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card p-7 border-l-4 border-rose-accent"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-light text-rose-accent flex items-center justify-center">
                <FiBriefcase size={18} />
              </div>
              <div>
                <p className="font-mono text-xs text-ink-muted uppercase tracking-wider">Industry Exposure</p>
                <h3 className="font-display font-bold text-ink">Web Development Intern</h3>
              </div>
            </div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-medium text-ink">Elifinty</p>
                <p className="text-sm text-ink-muted">London, UK · Remote</p>
              </div>
              <span className="tag text-xs">Jun 2025 – Jul 2025</span>
            </div>
            <ul className="space-y-2 mt-4">
              {[
                'Built a responsive PFM app using React & Node.js/Express',
                'Enabled expense tracking, budgeting & secure MongoDB data management',
                'Received certificate of completion',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-muted">
                  <span className="text-rose-accent mt-1 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'Node.js', 'MongoDB', 'Express'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {hackathons.map((h, i) => (
              <div key={i} className="card p-5 border-l-4 border-gold">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gold-light/30 text-gold flex items-center justify-center flex-shrink-0">
                    <FiStar size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gold uppercase tracking-wide">{h.name}</p>
                    <h3 className="font-display font-bold text-ink text-base">{h.project}</h3>
                  </div>
                </div>
                <p className="text-sm text-ink-muted mb-3">{h.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {h.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FiAward className="text-rose-accent" size={20} />
            <h3 className="font-display text-2xl font-bold text-ink">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="card p-4 flex items-center gap-3 group hover:border-rose-accent/20"
              >
                <div className={`w-2 h-10 rounded-full ${cert.color.replace('text-', 'bg-').split(' ')[0]}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-ink text-sm truncate">{cert.name}</p>
                  <p className="text-xs text-ink-muted truncate">{cert.org}</p>
                </div>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${cert.color} flex-shrink-0`}>
                  {cert.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}