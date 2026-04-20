import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiStar, FiBook } from 'react-icons/fi'

const achievements = [
  {
    icon: <FiStar size={20} />,
    title: 'Elite Certification in Java',
    org: 'NPTEL, IIT Kharagpur',
    desc: 'Achieved Elite grade in the nationally recognized Programming in Java certification.',
    color: 'from-gold-light/40 to-cream-200/20',
    accent: 'text-gold',
    iconBg: 'bg-gold-light/50',
  },
  {
    icon: <FiAward size={20} />,
    title: 'School Topper in Biology',
    org: 'Class XII Board Examinations',
    desc: 'Secured top position in Biology among the entire school in Tamil Nadu State Board.',
    color: 'from-rose-light to-cream-200/20',
    accent: 'text-rose-accent',
    iconBg: 'bg-rose-light',
  },
  
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-rose-accent uppercase tracking-widest mb-3">Highlights</p>
          <h2 className="section-heading">
            Awards & <span className="italic text-ink-muted">Recognition</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`card w-full max-w-sm p-7 bg-gradient-to-br ${a.color} group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`w-12 h-12 rounded-2xl ${a.iconBg} ${a.accent} flex items-center justify-center mb-4`}>
                {a.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-1">{a.title}</h3>
              <p className={`text-xs font-mono ${a.accent} mb-3`}>{a.org}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}