import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-cream-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold text-ink">
          SF<span className="text-rose-accent">.</span>
        </div>
        <p className="text-xs text-ink-muted font-mono flex items-center gap-1.5">
          © {new Date().getFullYear()} Sherene Faustina A. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: <FiGithub size={16} />, href: 'https://github.com/sherenefaustina' },
            { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/sherene-faustina-a-5667a1289/' },
            { icon: <FiMail size={16} />, href: 'mailto:faustinasherene@gmail.com' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}