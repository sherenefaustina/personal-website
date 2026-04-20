import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import axios from 'axios'

const contactInfo = [
  { icon: <FiMail size={16} />, label: 'Email', value: 'faustinasherene@gmail.com', href: 'mailto:faustinasherene@gmail.com' },
  { icon: <FiPhone size={16} />, label: 'Phone', value: '+91 7397755638', href: 'tel:+917397755638' },
  { icon: <FiMapPin size={16} />, label: 'Location', value: 'Chennai, Tamil Nadu', href: null },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields.')
      return
    }
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      toast.success('Message sent! I\'ll get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-xl text-ink placeholder:text-ink-muted/60 text-sm font-body focus:outline-none focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/10 transition-all duration-200`

  return (
    <section id="contact" className="py-24 bg-cream-100/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-rose-accent uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="section-heading">
            Let's <span className="italic text-ink-muted">Connect</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-md mx-auto">
            I'm open to internships, collaborations, and interesting projects. Send me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-light text-rose-accent flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-ink font-medium hover:text-rose-accent transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-ink font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/sherenefaustina', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/sherene-faustina-a-5667a1289/', label: 'LinkedIn' },
                { icon: <FiMail size={18} />, href: 'mailto:faustinasherene@gmail.com', label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl border border-cream-200 flex items-center justify-center text-ink-muted hover:bg-ink hover:text-cream-50 hover:border-ink transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 p-6 card border-l-4 border-rose-accent bg-gradient-to-br from-rose-light/30 to-transparent">
              <p className="font-display text-lg italic text-ink-soft leading-relaxed">
                "Passionate about using AI/ML approaches to address real-world problems and develop effective technology solutions."
              </p>
              <p className="mt-3 text-xs font-mono text-rose-accent">— Sherene Faustina</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="font-display text-xl font-bold text-ink mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-1.5 block">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-1.5 block">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-cream-50/50 border-t-cream-50 rounded-full animate-spin" />
                ) : (
                  <FiSend size={16} />
                )}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}