import React, { useState, useEffect } from 'react'
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'
import SKMonogramLogo from '../ui/SKMonogramLogo'

const NAV_SECTIONS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#works' },
  { label: 'Atlas', href: '#atlas' },
  { label: 'Design', href: '#design' },
  { label: 'Experience', href: '#journey' },
  { label: 'Creative Practice', href: '#beyond-the-code' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation({ onReplayIntro }: { onReplayIntro?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 20)
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100)
      }

      // ScrollSpy section detector
      const sectionIds = ['hero', 'about', 'works', 'atlas', 'design', 'journey', 'beyond-the-code', 'skills', 'contact']
      const scrollPosition = window.scrollY + 250

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpen])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#101915]/85 backdrop-blur-md border-b border-sage/20 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Subtle Horizontal Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-sage to-ivory transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Official SK Brand Monogram & Identity */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="flex items-center gap-3 group"
              aria-label="Soumya Kumar Home"
            >
              <SKMonogramLogo size={36} glow={true} className="transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-display tracking-[0.2em] text-ivory text-base sm:text-lg uppercase font-bold leading-none">
                  SOUMYA KUMAR
                </span>
                <span className="text-[10px] font-mono text-sage tracking-[0.16em] uppercase mt-0.5">
                  CREATIVE TECHNOLOGIST · CSE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Single-Page Anchor Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_SECTIONS.map(item => {
              const targetId = item.href.replace('#', '')
              const isActive = activeSection === targetId
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`text-xs uppercase tracking-widest font-mono transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-sage font-bold'
                      : 'text-ivory/60 hover:text-ivory'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-sage rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Action CTAs: Replay Intro, Resume Download & Contact Anchor */}
          <div className="hidden sm:flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sage/25 bg-pine/40 text-ivory/70 hover:text-sage hover:border-sage text-xs font-mono tracking-wide transition-all"
                title="Replay cinematic intro"
              >
                <Sparkles size={12} className="text-sage" />
                <span className="hidden xl:inline">Cinematic Intro</span>
              </button>
            )}

            <a
              href={PROFILE.contact.resume}
              download="Soumya_K_Resume_Updated_CONVERA(2).pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sage/30 bg-pine/60 text-ivory hover:border-sage hover:bg-sage/10 text-xs font-mono font-medium tracking-wide transition-all"
              aria-label="Download general resume PDF"
            >
              <FileText size={13} className="text-sage" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sage text-pine hover:bg-sage/90 text-xs font-mono font-bold tracking-wide transition-all shadow-sm"
            >
              <Send size={12} />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden p-2 text-ivory/80 hover:text-ivory focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Single-Page Slide-out Drawer */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 bg-[#0e1613]/95 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden"
        >
          <div className="flex flex-col gap-5 mb-8">
            {NAV_SECTIONS.map(item => {
              const targetId = item.href.replace('#', '')
              const isActive = activeSection === targetId
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`font-display text-2xl sm:text-3xl transition-colors ${
                    isActive ? 'text-sage font-bold' : 'text-ivory hover:text-sage'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-sage/20">
            <a
              href={PROFILE.contact.resume}
              download="Soumya_K_Resume_Updated_CONVERA(2).pdf"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-sage/30 bg-pine text-ivory text-sm font-mono font-medium"
            >
              <FileText size={16} className="text-sage" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-sage text-pine text-sm font-mono font-bold"
            >
              <Send size={15} />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  )
}
