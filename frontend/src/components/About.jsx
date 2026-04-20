import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const highlights = [
  { label: 'CGPA', value: '9.78', sub: 'till 5th Sem' },
  { label: 'Projects', value: '5+', sub: 'Full Stack' },
  { label: 'Certs', value: '6+', sub: 'Industry Ready' },
  { label: 'Hackathons', value: '2', sub: ' Events' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Section label */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-rose-accent uppercase tracking-widest mb-3">About Me</p>
            <h2 className="section-heading mb-6">
              Code. Create.
              <br />
              <span className="italic text-ink-muted">Impact.</span>
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                I'm a Computer Science student at <span className="text-ink font-medium">SRM Institute of Science and Technology</span>, 
                passionate about building applications that sit at the intersection of AI and real-world utility.
              </p>
              <p>
                From emergency detection systems with 95% NLP accuracy to pharmaceutical traceability platforms, 
                I love taking complex problems and shipping polished, production-ready solutions.
              </p>
              <p>
                When I'm not coding, I'm exploring new ML techniques, contributing to hackathons, or diving deep into 
                system design. I speak <span className="text-ink font-medium">Malayalam</span>, <span className="text-ink font-medium">English</span>, 
                and <span className="text-ink font-medium">Tamil</span> — and write code in many more.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'FastAPI', 'AI', 'ML/NLP', 'MongoDB', 'MySQL', 'Java'].map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card p-6 group hover:border-rose-accent/30"
                >
                  <p className="font-display text-4xl font-bold text-ink mb-1 group-hover:text-gradient transition-all duration-500">{h.value}</p>
                  <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">{h.label}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{h.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Education timeline */}
            <div className="mt-6 card p-6">
              <p className="font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">Education</p>
              <div className="space-y-4">
                {[
                  {
                    degree: 'B.Tech Computer Science and Engineering',
                    school: 'SRM Institute of Science and Technology, Chennai, Ramapuram',
                    year: '2023 – Present',
                    score: '9.78 CGPA',
                    color: 'bg-rose-accent',
                  },
                  {
                    degree: 'Class XII (Bio-Math)',
                    school: "St. Aloysius Anglo Indian Higher Secondary School",
                    year: '2022 – 2023',
                    score: '92%',
                    color: 'bg-gold',
                  },
                  {
                    degree: 'Class X',
                    school: "St. Aloysius Anglo Indian Higher Secondary School",
                    year: '2020 – 2021',
                    score: '100% (Pandemic Batch)',
                    color: 'bg-sage',
                  },
                ].map((edu, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center pt-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${edu.color} flex-shrink-0`} />
                      {i < 2 && <div className="w-px flex-1 bg-cream-200 mt-1" />}
                    </div>
                    <div className="pb-4">
                      <p className="font-medium text-ink text-sm">{edu.degree}</p>
                      <p className="text-xs text-ink-muted">{edu.school}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-mono text-ink-soft">{edu.score}</span>
                        <span className="text-cream-200">·</span>
                        <span className="text-xs text-ink-muted">{edu.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}