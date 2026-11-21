import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Sparkles, Code2, Cpu } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'
import SKMonogramLogo from '../ui/SKMonogramLogo'
import CSEProcessorInsignia from '../ui/CSEProcessorInsignia'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative matrix-dots overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sage/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
            <Compass size={12} />
            <span>Personal Identity &amp; Mindset</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-4">
            {PROFILE.aboutHeadline}
          </h2>

          <p className="text-ivory/60 text-lg max-w-2xl font-sans leading-relaxed">
            Multidisciplinary computer science student at Sri Venkateswara College of Engineering (SVCE), working across systems, AI, brand identity and visual communication.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT — Sculptural Creative-Technology Installation (5 cols) — NO PHOTOGRAPH */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md rounded-3xl p-6 sm:p-7 glass-card border border-sage/35 bg-gradient-to-b from-[#0e1914] via-[#09120e] to-[#050a08] shadow-2xl relative overflow-hidden group"
            >
              {/* Radial Lighting Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sage/15 rounded-full blur-[70px] pointer-events-none" />

              {/* Editorial Top Coordinate Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-ivory/50 pb-3 mb-4 border-b border-sage/15">
                <span className="flex items-center gap-1.5 text-sage uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage animate-ping" />
                  SCULPTURAL MONOGRAM
                </span>
                <span>SVCE · CSE 2028</span>
              </div>

              {/* Central Installation Stage: SK Monogram + Concentric Quantum Orbitals */}
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-radial from-[#12221b] via-[#09110d] to-[#040806] border border-sage/25 flex items-center justify-center overflow-hidden my-1 shadow-inner">
                
                {/* Concentric Rotating Orbital Rings (SVG) */}
                <svg
                  viewBox="0 0 300 300"
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
                  aria-hidden="true"
                >
                  <circle cx="150" cy="150" r="135" fill="none" stroke="#9AA58B" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />
                  <circle cx="150" cy="150" r="115" fill="none" stroke="#D8D0BD" strokeWidth="0.75" opacity="0.3" />
                  <ellipse cx="150" cy="150" rx="140" ry="55" fill="none" stroke="#E2E5DC" strokeWidth="1" strokeDasharray="4 8" transform="rotate(-30 150 150)" opacity="0.5" />
                  <ellipse cx="150" cy="150" rx="130" ry="45" fill="none" stroke="#9AA58B" strokeWidth="0.8" transform="rotate(45 150 150)" opacity="0.4" />
                  
                  {/* Fine crosshairs */}
                  <line x1="150" y1="10" x2="150" y2="290" stroke="#9AA58B" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />
                  <line x1="10" y1="150" x2="290" y2="150" stroke="#9AA58B" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />
                </svg>

                {/* Sinuous Shimmering Waveform Path */}
                <div className="absolute inset-x-0 bottom-6 opacity-30 pointer-events-none">
                  <svg viewBox="0 0 300 60" className="w-full h-12" fill="none">
                    <path
                      d="M 0 30 C 50 10, 100 50, 150 30 C 200 10, 250 50, 300 30"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>

                {/* Vertical Bracket Annotations on Left */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 font-mono text-[8px] sm:text-[9px] tracking-[0.2em] text-ivory/40 uppercase z-10 border-l border-sage/30 pl-2">
                  {[
                    { word: 'BUILD', hint: 'Systems & Backend' },
                    { word: 'DESIGN', hint: 'UI/UX & Brand' },
                    { word: 'WRITE', hint: 'Essays & Prose' },
                    { word: 'CREATE', hint: 'Content & Media' },
                    { word: 'EXPLORE', hint: 'Quantum & AI' }
                  ].map(({ word, hint }) => (
                    <span
                      key={word}
                      title={hint}
                      className="hover:text-sage hover:translate-x-0.5 transition-all cursor-default"
                    >
                      {word}
                    </span>
                  ))}
                </div>

                {/* Quantum State Coordinate on Right */}
                <div className="absolute right-3 bottom-3 font-mono text-[9px] text-sage/70 tracking-widest z-10">
                  |ψ⟩ = α|0⟩ + β|1⟩
                </div>

                {/* The Sculptural SK Monogram as Central Hero Emblem */}
                <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                  <SKMonogramLogo size={140} glow={true} />
                </div>
              </div>

              {/* Typographic Statement Plaque (User Directive) */}
              <div className="mt-4 pt-4 border-t border-sage/20 text-center">
                <p className="font-display text-xl sm:text-2xl text-ivory font-bold uppercase tracking-wider leading-snug">
                  NOT ONE DIMENSION. <br />
                  <span className="text-sage italic">NEVER ONE BOX.</span>
                </p>
                <p className="text-ivory/60 text-xs font-mono mt-2 leading-relaxed">
                  Engineering logic. Creative instinct. Infinite curiosity.
                </p>
              </div>
            </motion.div>

            {/* Signature CSE Processor Insignia Display */}
            <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-sage/25 w-full max-w-md">
              <CSEProcessorInsignia size="sm" />
              <div className="text-xs font-mono">
                <p className="text-sage font-semibold uppercase">CSE ARCHITECTURE</p>
                <p className="text-ivory/50 text-[11px]">B.E. Computer Science &amp; Eng. // SVCE 2028</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Personal Story & Curiosity Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Story Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 border border-sage/20"
            >
              <h3 className="font-display text-2xl text-ivory font-bold mb-4">
                Beyond the Screen
              </h3>
              <p className="text-ivory/80 text-base sm:text-lg leading-relaxed font-sans mb-4">
                {PROFILE.aboutBio}
              </p>
              <p className="text-ivory/60 text-sm leading-relaxed font-sans">
                I do not fit into one professional box. I am driven by how systems operate under the hood, how algorithms extract patterns from chaos, and how visual design bridges the gap between technology and human empathy.
              </p>
            </motion.div>

            {/* Personality Statements (Prompt Creative Direction) */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { quote: "A little code. A little chaos. A lot of curiosity.", label: "Mindset" },
                { quote: "Engineering meets imagination.", label: "Philosophy" },
                { quote: "Different disciplines. One curious mind.", label: "Approach" }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-2xl border border-sage/20 flex flex-col justify-between">
                  <p className="text-xs font-mono uppercase tracking-widest text-sage mb-2">
                    {item.label}
                  </p>
                  <p className="font-display text-base text-ivory/90 italic leading-snug">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>

            {/* Human Interests Grid */}
            <div className="glass-card rounded-3xl p-6 border border-sage/20">
              <p className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold">
                What Fuels the Curiosity
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PROFILE.humanInterests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pine/80 border border-sage/25 text-xs font-mono text-ivory/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
