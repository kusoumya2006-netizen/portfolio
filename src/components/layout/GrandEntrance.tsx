import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react'
import SKMonogramLogo from '../ui/SKMonogramLogo'

interface GrandEntranceProps {
  onEnter: () => void
  isExiting: boolean
}

export default function GrandEntrance({ onEnter, isExiting }: GrandEntranceProps) {
  // Phase state: 1 (Void), 2 (Formation), 3 (Identity), 4 (Enter ready)
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [logoHovered, setLogoHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Automatic phase sequence progression
  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(2), 900)
    const timer2 = setTimeout(() => setPhase(3), 2100)
    const timer3 = setTimeout(() => setPhase(4), 3200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  // Mouse move parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Keyboard navigation (Enter / Space / Down arrow enters)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Enter', ' ', 'ArrowDown'].includes(e.key)) {
        e.preventDefault()
        onEnter()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onEnter])

  // Mouse wheel scroll to enter
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 18) {
        onEnter()
      }
    }
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [onEnter])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(8px)',
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#050907] text-ivory flex flex-col justify-between overflow-hidden select-none"
        >
          {/* Ambient Deep Atmospheric Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-gradient-radial from-sage/15 via-pine/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#e2e5dc]/10 rounded-full blur-[90px] pointer-events-none" />
          </div>

          {/* Flowing Quantum Waveform Particle Stream (Phase 2+) */}
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
              style={{
                transform: `translate3d(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px, 0)`,
              }}
            >
              <svg
                viewBox="0 0 1440 600"
                className="w-full h-full object-cover min-w-[1200px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9AA58B" stopOpacity="0" />
                    <stop offset="25%" stopColor="#C4C9BA" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="75%" stopColor="#9AA58B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#9AA58B" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Primary Sinuous Quantum Waveform */}
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 } as any}
                  animate={{ opacity: 1, pathLength: 1 } as any}
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                  d="M -100 300 C 200 180, 400 420, 720 280 C 1040 140, 1200 380, 1540 260"
                  stroke="url(#waveGlow)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 } as any}
                  animate={{ opacity: 0.6, pathLength: 1 } as any}
                  transition={{ duration: 2.5, delay: 0.2, ease: 'easeInOut' }}
                  d="M -100 320 C 240 440, 480 180, 720 320 C 960 460, 1240 160, 1540 340"
                  stroke="url(#waveGlow)"
                  strokeWidth="1.5"
                />
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 } as any}
                  animate={{ opacity: 0.4, pathLength: 1 } as any}
                  transition={{ duration: 2.8, delay: 0.4, ease: 'easeInOut' }}
                  d="M -100 280 C 300 220, 520 360, 720 300 C 920 240, 1180 340, 1540 280"
                  stroke="url(#waveGlow)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          )}

          {/* TOP BAR: Context Coordinates & Quick Skip */}
          <div className="relative z-20 px-6 sm:px-12 pt-8 flex items-center justify-between text-xs font-mono tracking-widest text-ivory/50">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-ping" />
              <span className="uppercase text-ivory/70">CSE // SVCE</span>
            </motion.div>

            <motion.button
              onClick={onEnter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="px-3.5 py-1.5 rounded-full glass-panel border border-sage/30 text-sage hover:text-ivory text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
              aria-label="Skip cinematic introduction"
            >
              <span>Skip Intro</span>
              <ArrowUpRight size={12} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden sm:flex items-center gap-2 text-ivory/70"
            >
              <span>CLASS OF 2028</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            </motion.div>
          </div>

          {/* CENTRAL STAGE: Monogram, Identity Typography & Quantum Aura */}
          <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center my-auto">
            
            {/* PHASE 1: Center Particle / Void Singularity */}
            {phase === 1 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0.9] }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-ivory shadow-[0_0_24px_#FFFFFF] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-sage/70">
                  INITIALIZING FREQUENCY
                </span>
              </motion.div>
            )}

            {/* PHASE 2, 3, 4: SK MONOGRAM FORMATION */}
            {phase >= 2 && (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
                style={{
                  transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
                }}
              >
                {/* Monogram with interactive hover light sweep */}
                <div
                  onMouseEnter={() => setLogoHovered(true)}
                  onMouseLeave={() => setLogoHovered(false)}
                  className="relative cursor-pointer mb-6"
                >
                  <SKMonogramLogo
                    size={160}
                    glow={true}
                    className="transition-transform duration-500 hover:scale-105"
                  />

                  {/* Soft Light Sweep Sweep Effect */}
                  {logoHovered && (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 100, opacity: [0, 0.8, 0] }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rotate-45"
                    />
                  )}
                </div>

                {/* PHASE 3+: THE IDENTITY TYPOGRAPHY */}
                {phase >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-3 max-w-xl mx-auto"
                  >
                    {/* Primary Name with tracked luxury spacing */}
                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.22em] uppercase text-ivory text-glow leading-none">
                      SOUMYA KUMAR
                    </h1>

                    {/* Technical Sub-line flanked by horizontal coordinates */}
                    <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-mono tracking-[0.25em] text-sage uppercase">
                      <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-sage/60" />
                      <span>CREATIVE TECHNOLOGIST · CSE</span>
                      <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-sage/60" />
                    </div>

                    {/* Manifesto Bracket */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-xs sm:text-sm font-mono text-ivory/60 tracking-[0.2em] uppercase pt-2"
                    >
                      [ A DIFFERENT STATE OF THINKING ]
                    </motion.p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* PHASE 4: THE ENTER BUTTON & MAGNETIC CTAS */}
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-10 flex flex-col items-center gap-4"
              >
                <motion.button
                  onClick={onEnter}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(154,165,139,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-9 py-4 rounded-full bg-gradient-to-r from-[#172720] via-pine to-[#172720] border border-sage/60 text-ivory font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl overflow-hidden flex items-center gap-3"
                >
                  {/* Shimmer sweep animation */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-sage/20 to-transparent transition-transform duration-1000" />
                  
                  <span className="relative z-10 text-ivory group-hover:text-white">
                    ENTER PORTFOLIO
                  </span>
                  <ArrowUpRight size={16} className="relative z-10 text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>

                <div className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-ivory/40 uppercase tracking-widest mt-2">
                  <span>Scroll or Click to Begin</span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-7 rounded-full border border-sage/40 flex items-start justify-center p-1"
                  >
                    <div className="w-1 h-1.5 rounded-full bg-sage" />
                  </motion.div>
                </div>
              </motion.div>
            )}

          </div>

          {/* FLOATING MARGIN ANNOTATIONS (PHASE 3+) */}
          {phase >= 3 && (
            <>
              {/* Left Column Annotation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-3 font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase border-l border-sage/25 pl-4"
              >
                {['BUILD', 'DESIGN', 'WRITE', 'CREATE', 'EXPLORE'].map((word, i) => (
                  <span
                    key={word}
                    className="hover:text-sage hover:translate-x-1 transition-all duration-200 cursor-default"
                  >
                    {word}
                  </span>
                ))}
              </motion.div>

              {/* Right Column Annotation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 font-mono text-[10px] tracking-[0.25em] text-ivory/40 uppercase text-right border-r border-sage/25 pr-4"
              >
                {['AI / ML', 'SYSTEMS', 'BRAND IDENTITY', 'UI / UX', 'QUANTUM'].map((word, i) => (
                  <span
                    key={word}
                    className="hover:text-sage hover:-translate-x-1 transition-all duration-200 cursor-default"
                  >
                    {word}
                  </span>
                ))}
              </motion.div>

              {/* Bottom Right Quantum Coordinate Formula */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden lg:block absolute right-12 bottom-8 font-mono text-[11px] text-sage/70 tracking-widest"
              >
                |ψ⟩ = α|0⟩ + β|1⟩
              </motion.div>
            </>
          )}

          {/* BOTTOM BAR: Footer Coordinate Status */}
          <div className="relative z-20 px-6 sm:px-12 pb-6 flex items-center justify-between text-[10px] font-mono tracking-widest text-ivory/40">
            <span className="hidden sm:inline">12.9863° N, 79.9724° E</span>
            <span className="mx-auto sm:mx-0">DIGITAL ARCHIVE · 2026 EDITION</span>
            <span className="hidden sm:inline">ALL SYSTEMS NOMINAL</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
