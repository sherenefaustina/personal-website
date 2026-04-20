import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode, FiLayout, FiDatabase, FiCpu, FiTool, FiGitBranch
} from 'react-icons/fi'

const skillCategories = [
  {
    icon: <FiLayout size={18} />,
    title: 'Frontend',
    color: 'text-rose-accent',
    bg: 'bg-rose-light',
    skills: [
      { name: 'React', level: 90 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    icon: <FiCode size={18} />,
    title: 'Backend',
    color: 'text-gold',
    bg: 'bg-gold-light/30',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT / Auth', level: 78 },
    ],
  },
  {
    icon: <FiDatabase size={18} />,
    title: 'Database',
    color: 'text-sage',
    bg: 'bg-sage-light/30',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL / SQL', level: 85 },
      { name: 'SQLite', level: 78 },
    ],
  },
  {
    icon: <FiCpu size={18} />,
    title: 'AI / ML',
    color: 'text-ink',
    bg: 'bg-cream-200',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'TF-IDF / NLP', level: 80 },
      { name: 'Random Forest', level: 75 },
    ],
  },
  {
    icon: <FiCode size={18} />,
    title: 'Languages',
    color: 'text-rose-accent',
    bg: 'bg-rose-light',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'C', level: 70 },
      { name: 'JavaScript', level: 87 },
    ],
  },
  {
    icon: <FiGitBranch size={18} />,
    title: 'Tools & Concepts',
    color: 'text-gold',
    bg: 'bg-gold-light/30',
    skills: [
      { name: 'Git / GitHub', level: 87 },
      { name: 'DSA', level: 80 },
      { name: 'Socket.io', level: 75 },
      { name: 'MERN Stack', level: 85 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-ink-soft">{name}</span>
        <span className="text-xs font-mono text-ink-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-cream-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-rose-accent to-gold"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-cream-100/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-rose-accent uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="section-heading">
            Skills & <span className="italic text-ink-muted">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 hover:border-rose-accent/20 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-ink">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, j) => (
                <SkillBar key={skill.name} {...skill} delay={0.2 + j * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}