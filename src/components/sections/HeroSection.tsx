import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, FileText, Sparkles, Terminal, Code2, Cpu } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'
import SKMonogramLogo from '../ui/SKMonogramLogo'
import CSEProcessorInsignia from '../ui/CSEProcessorInsignia'

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 })
  const rotateX = useTransform(springY, [-300, 300], [5, -5])
  const rotateY = useTransform(springX, [-500, 500], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden matrix-dots"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sage/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-pine/50 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          
          {/* LEFT COLUMN — Editorial Headline & Storytelling (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Top Active Track Pill + Processor Mini Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-sage/35 text-xs font-mono uppercase text-sage">
                <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                <span>Creative Technologist Active</span>
              </div>
              <span className="text-[11px] font-mono text-ivory/40 uppercase tracking-widest hidden sm:inline">
                SVCE · CSE 2028
              </span>
            </motion.div>

            {/* Sub-eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.25em] text-ivory/50 font-mono mb-4"
            >
              Computer Science · Systems · AI &amp; Visual Design
            </motion.p>

            {/* Main Statement Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display leading-[0.95] mb-8 tracking-tight"
            >
              <span className="block text-[clamp(3.2rem,6.8vw,5.8rem)] text-ivory font-bold">
                Creative
              </span>
              <span className="block text-[clamp(3.2rem,6.8vw,5.8rem)] text-ivory font-bold">
                mind.
              </span>
              <span className="block text-[clamp(3.2rem,6.8vw,5.8rem)] text-ivory/90 font-bold">
                Engineering
              </span>
              <span className="block text-[clamp(3.2rem,6.8vw,5.8rem)] text-sage/85 italic font-normal">
                mindset.
              </span>
            </motion.h1>

            {/* Editorial Quotation Card with Left Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative pl-5 border-l-2 border-sage/50 max-w-xl mb-10"
            >
              <p className="text-ivory/70 text-base md:text-lg font-normal leading-relaxed italic">
                "{PROFILE.bio}"
              </p>
              <div className="flex items-center gap-3 mt-3 text-xs font-mono text-ivory/40 tracking-wider">
                <span>{PROFILE.education.institution}</span>
                <span>·</span>
                <span className="text-sage">CGPA: {PROFILE.education.cgpa.split(' ')[0]}</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage text-pine font-semibold text-sm rounded-full hover:bg-sage/90 transition-all hover:gap-3 shadow-lg shadow-sage/15 group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 glass-panel border border-sage/30 text-ivory font-medium text-sm rounded-full hover:border-sage hover:bg-sage/10 transition-all"
              >
                <span>About Me</span>
              </Link>

              <a
                href={PROFILE.contact.resume}
                download="Soumya_K_Resume_Updated_CONVERA(2).pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 glass-panel border border-ivory/20 text-ivory/80 font-medium text-sm rounded-full hover:text-ivory hover:border-sage/40 transition-all"
                aria-label="Download Soumya's Resume PDF"
              >
                <FileText size={15} className="text-sage" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 text-xs text-ivory/50 font-mono tracking-wider"
            >
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sage transition-colors"
              >
                <Linkedin size={14} />
                <span>linkedin/soumyakumar-dev</span>
              </a>
              <span className="text-sage/30">/</span>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sage transition-colors"
              >
                <Github size={14} />
                <span>github/kusoumya2006</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN — Rich Editorial Portrait Composition with Floating Annotations (6 cols) */}
          <div className="lg:col-span-6 flex justify-center relative py-6">
            
            <motion.div
              className="relative w-full max-w-lg aspect-[4/5] flex items-center justify-center"
              style={{ rotateX, rotateY, perspective: 1000 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              
              {/* Fine Circular & Orbital Quantum Wave Lines Background */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full opacity-35" aria-hidden="true">
                  <ellipse cx="250" cy="250" rx="230" ry="110" fill="none" stroke="#9AA58B" strokeWidth="0.8" strokeDasharray="3 5" transform="rotate(30 250 250)"/>
                  <ellipse cx="250" cy="250" rx="210" ry="90" fill="none" stroke="#D8D0BD" strokeWidth="0.6" transform="rotate(-35 250 250)"/>
                  <circle cx="250" cy="250" r="190" fill="none" stroke="#9AA58B" strokeWidth="0.5" opacity="0.3"/>
                  
                  {/* Orbital node with pulse */}
                  <circle cx="440" cy="200" r="4.5" fill="#9AA58B" className="animate-pulse"/>
                  <circle cx="60" cy="310" r="3" fill="#D8D0BD"/>
                </svg>
              </div>

              {/* Central Portrait Frame — Soumya's Real Photograph */}
              <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-3xl overflow-hidden glass-card border border-sage/35 shadow-2xl p-2 z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-pine">
                  <img
                    src="/assets/photos/soumya-portrait-main.png"
                    alt="Soumya K. — Computer Science Student & Creative Technologist"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[0.98]"
                  />
                  {/* Subtle inner lighting gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Bottom portrait plate */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <div>
                      <p className="text-ivory font-display text-base tracking-wide font-bold">SOUMYA K.</p>
                      <p className="text-sage text-[10px] tracking-widest uppercase">SVCE CSE · 2024–2028</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-pine/80 border border-sage/30 text-ivory/70">
                      7.2 CGPA
                    </span>
                  </div>
                </div>
              </div>

              {/* SK Brand Identity Monogram Seal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute -top-6 -right-2 sm:-right-8 z-30"
              >
                <div className="p-2 rounded-2xl glass-card border border-sage/50 shadow-2xl bg-[#08100d]/90 flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                  <SKMonogramLogo size={36} glow={true} />
                  <div className="hidden sm:flex flex-col pr-1">
                    <span className="text-[10px] font-display font-bold text-ivory tracking-wider">SK SIGNATURE</span>
                    <span className="text-[9px] font-mono text-sage tracking-wider">SOUMYA KUMAR</span>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING EDITORIAL LABELS & METADATA ANNOTATIONS (Per Requirements) */}
              
              {/* 1. Top Left: COMPUTER SCIENCE & ENGINEERING */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -3, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.3 },
                  x: { duration: 0.6, delay: 0.3 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute -top-3 left-2 sm:-left-4 glass-card border border-sage/40 rounded-xl px-3 py-1.5 shadow-lg z-20 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-sage font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                  <span>Computer Science &amp; Engineering</span>
                </div>
              </motion.div>

              {/* 2. Top Right: CREATIVE TECHNOLOGIST */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, 3, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 },
                  x: { duration: 0.6, delay: 0.4 },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute top-2 -right-2 sm:-right-6 glass-card border border-sage/40 rounded-xl px-3 py-1.5 shadow-lg z-20 hover:scale-105 transition-transform"
              >
                <p className="text-[10px] font-mono text-ivory/90 font-semibold uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={11} className="text-sage" />
                  <span>Creative Technologist</span>
                </p>
              </motion.div>

              {/* 3. Upper Left Edge: AI / ML EXPLORER */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-20 -left-6 sm:-left-12 glass-panel border border-sage/30 rounded-lg px-2.5 py-1 text-[10px] font-mono text-ivory/70 z-20 hidden sm:block"
              >
                <span>[ AI / ML EXPLORER ]</span>
              </motion.div>

              {/* 4. Upper Right Edge: BACKEND DEVELOPMENT */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute top-24 -right-4 sm:-right-8 glass-panel border border-sage/30 rounded-lg px-2.5 py-1 text-[10px] font-mono text-sage z-20"
              >
                <span>BACKEND DEVELOPMENT</span>
              </motion.div>

              {/* 5. Mid Left: UI / UX DESIGN & VISUAL DESIGN */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="absolute top-44 -left-4 sm:-left-10 glass-card border border-sage/30 rounded-xl p-2.5 shadow-md z-20 max-w-[150px]"
              >
                <p className="text-[9px] font-mono text-sage uppercase font-bold tracking-wider">UI / UX DESIGN</p>
                <p className="text-[10px] text-ivory/80 font-sans mt-0.5">Visual Systems &amp; Identity</p>
              </motion.div>

              {/* 6. Mid Right: Custom CSE Processor Insignia floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute top-40 -right-6 sm:-right-10 z-20"
              >
                <CSEProcessorInsignia size="sm" />
              </motion.div>

              {/* 7. Lower Right: QUANTUM COMPUTING · |Ψ⟩ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-28 -right-4 sm:-right-8 glass-card border border-sage/35 rounded-xl px-3 py-2 z-20 shadow-lg text-[10px] font-mono"
              >
                <p className="text-sage font-bold tracking-wider uppercase">QUANTUM COMPUTING</p>
                <p className="text-ivory/60 text-[9px] mt-0.5">|Ψ⟩ = α|0⟩ + β|1⟩</p>
              </motion.div>

              {/* 8. Lower Left: JAVA · PYTHON · REACT */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="absolute bottom-24 -left-4 sm:-left-8 glass-panel border border-sage/25 rounded-lg px-2.5 py-1 text-[10px] font-mono text-ivory/75 z-20"
              >
                <span>JAVA · PYTHON · REACT</span>
              </motion.div>

              {/* 9. Bottom Left: SOFTWARE BUILDER & ALWAYS EXPERIMENTING */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 left-0 sm:-left-4 glass-card border border-sage/40 rounded-xl px-3 py-1.5 shadow-lg z-20"
              >
                <p className="text-[10px] font-mono text-sage font-semibold uppercase tracking-wider">
                  SOFTWARE BUILDER
                </p>
                <p className="text-[9px] font-mono text-ivory/50">Always Experimenting</p>
              </motion.div>

              {/* 10. Bottom Right: BUILDING IN PROGRESS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="absolute -bottom-3 right-0 sm:-right-4 glass-card border border-sage/40 rounded-xl px-3 py-1.5 shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-ping" />
                  <span className="text-[10px] font-mono text-ivory uppercase tracking-wider font-semibold">
                    Building in Progress
                  </span>
                </div>
              </motion.div>

              {/* Technical coordinate annotation */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-mono text-ivory/30 tracking-[0.2em] whitespace-nowrap hidden sm:block">
                [ 12.9863° N, 79.9723° E // SVCE CSE DIE 0x7F ]
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
