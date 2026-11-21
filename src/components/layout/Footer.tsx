import React from 'react'
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'
import SKMonogramLogo from '../ui/SKMonogramLogo'
import CSEProcessorInsignia from '../ui/CSEProcessorInsignia'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#090f0c] border-t border-sage/20 py-16 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-sage/15 items-start">
          
          {/* Identity & Personal Monogram (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <SKMonogramLogo size={48} glow={true} />
              <div>
                <span className="font-display text-2xl text-ivory font-bold tracking-[0.2em] uppercase block">
                  SOUMYA KUMAR
                </span>
                <span className="text-xs font-mono text-sage tracking-widest uppercase">
                  CREATIVE TECHNOLOGIST · CSE // SVCE
                </span>
              </div>
            </div>

            <p className="text-ivory/60 text-sm max-w-sm font-sans leading-relaxed">
              Creative Technologist &amp; Computer Science student at Sri Venkateswara College of Engineering. Moving between systems, AI models, writing, brand identities, and visual design.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <CSEProcessorInsignia size="sm" />
              <p className="text-xs font-mono text-sage italic">
                "{PROFILE.closingQuote}"
              </p>
            </div>
          </div>

          {/* Quick Navigation Anchor Links (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold">
              Continuous Index
            </p>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-ivory/60">
              <li>
                <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="hover:text-sage transition-colors">Hero // Start</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-sage transition-colors">About &amp; Systems</a>
              </li>
              <li>
                <a href="#works" onClick={(e) => handleScrollTo(e, '#works')} className="hover:text-sage transition-colors">Engineering Projects</a>
              </li>
              <li>
                <a href="#design" onClick={(e) => handleScrollTo(e, '#design')} className="hover:text-sage transition-colors">Design Archive</a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => handleScrollTo(e, '#journey')} className="hover:text-sage transition-colors">Experience &amp; Leadership</a>
              </li>
              <li>
                <a href="#beyond-the-code" onClick={(e) => handleScrollTo(e, '#beyond-the-code')} className="hover:text-sage transition-colors">Beyond the Code</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleScrollTo(e, '#skills')} className="hover:text-sage transition-colors">Skills &amp; Certifications</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-sage transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Resume (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold">
              Profiles &amp; Assets
            </p>

            <div className="space-y-2 text-xs font-mono">
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ivory/70 hover:text-sage transition-colors"
              >
                <Linkedin size={14} className="text-sage" />
                <span>linkedin.com/in/soumyakumar-dev</span>
              </a>

              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ivory/70 hover:text-sage transition-colors"
              >
                <Github size={14} className="text-sage" />
                <span>github.com/kusoumya2006-netizen</span>
              </a>

              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="flex items-center gap-2 text-ivory/70 hover:text-sage transition-colors"
              >
                <Mail size={14} className="text-sage" />
                <span>{PROFILE.contact.email}</span>
              </a>

              <a
                href={PROFILE.contact.resume}
                download="Soumya_K_Resume_Updated_CONVERA(2).pdf"
                className="flex items-center gap-2 text-sage hover:underline pt-2 font-semibold"
              >
                <FileText size={14} />
                <span>Download General Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory/40">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 Soumya K. · B.E. Computer Science and Engineering (SVCE)</p>
            <span className="hidden sm:inline text-sage/30">|</span>
            <div className="inline-flex items-center gap-1.5 text-sage/70">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse"></span>
              <span>Chennai, IN (IST) · Active</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-sage transition-all duration-300 px-3.5 py-1.5 rounded-full glass-panel border border-sage/20 hover:border-sage/40 hover:shadow-lg hover:shadow-sage/10 text-ivory/70 group"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}
