import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PenTool,
  Palette,
  Sparkles,
  Layers,
  ArrowUpRight,
  Smile,
  CheckCircle2,
  Workflow,
  Cpu,
  SlidersHorizontal,
  FileCode
} from 'lucide-react'
import { CREATIVE_FREQUENCIES } from '../../data/portfolio'

export default function BeyondTheCodeSection() {
  const [bitmojiError, setBitmojiError] = useState(false)

  // Map icon names to components
  const iconMap: Record<string, React.ElementType> = {
    Palette: Palette,
    Sparkles: Sparkles,
    Layers: Layers,
    PenTool: PenTool,
  }

  // Find the featured Brand Building & Identity dimension and the secondary dimensions
  const brandDimension = CREATIVE_FREQUENCIES.find((f) => f.id === 'brand-building')
  const secondaryDimensions = CREATIVE_FREQUENCIES.filter((f) => f.id !== 'brand-building')

  return (
    <section id="beyond-the-code" className="py-28 px-6 relative matrix-dots overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sage/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pine/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-sage/35 text-xs font-mono uppercase text-sage mb-4">
            <Workflow size={13} className="animate-pulse" />
            <span>Creative Practice · Interdisciplinary Disciplines</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-4">
            Creative <span className="text-sage italic">Practice.</span>
          </h2>
          <p className="text-ivory/60 text-base sm:text-lg max-w-2xl font-sans leading-relaxed mb-8">
            Where engineering logic and aesthetic intuition converge—focusing on brand identity, creative technology prototyping, UI/UX systems architecture, and technical storytelling.
          </p>

          {/* Core Manifesto + Soumya's Custom Bitmoji Portrait Showcase */}
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl glass-card border border-sage/30 bg-gradient-to-br from-pine/95 via-[#14231d] to-[#0c1511] shadow-2xl relative overflow-hidden">
            {/* Ambient background orbital glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Column (7 cols): Manifesto & Positioning */}
            <div className="lg:col-span-7 sm:pr-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sage/15 border border-sage/30 text-[11px] font-mono text-sage uppercase tracking-wider mb-4 font-semibold">
                <Sparkles size={12} />
                <span>INTERDISCIPLINARY DISCOVERY · NOT ONE BOX</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold leading-tight mb-4">
                "Not one box. <br className="hidden sm:inline" />
                <span className="text-sage italic">Never was."</span>
              </h3>
              <p className="text-ivory/80 text-base sm:text-lg font-sans leading-relaxed mb-4">
                A little code. A little chaos. A lot of curiosity. Engineering meets imagination.
              </p>
              <p className="text-ivory/60 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Engineering builds rigorous logic; brand identity, interface architecture, interaction prototyping, and technical writing give systems human clarity and emotional resonance. Here are the four creative practice disciplines I explore at the frontier of technology and design.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-ivory/60">
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/35 text-sage font-semibold hover:border-sage transition-colors">#BrandIdentity</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-sage hover:border-sage transition-colors">#CreativeTechnology</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-ivory/80 hover:border-sage transition-colors">#UIUXArchitecture</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-ivory/70 hover:border-sage transition-colors">#TechnicalWriting</span>
              </div>
            </div>

            {/* Right Column (5 cols): Soumya's Character Avatar Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative p-6 sm:p-7 rounded-3xl bg-[#09120e]/95 border border-sage/40 shadow-2xl flex flex-col items-center text-center w-full max-w-xs group"
              >
                {/* Floating playful status sticker */}
                <div className="absolute -top-3.5 px-3.5 py-1 rounded-full bg-sage text-pine font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pine animate-ping" />
                  <span>Thinking in Waves 🌊</span>
                </div>

                {/* Bitmoji Frame with subtle floating animation & responsive contain */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-44 h-44 sm:w-48 sm:h-48 my-3 rounded-2xl overflow-hidden bg-gradient-to-b from-pine/80 via-[#101b16] to-[#0a120e] border border-sage/35 flex flex-col items-center justify-center p-3 text-center shadow-inner"
                >
                  {!bitmojiError ? (
                    <img
                      src="/images/bitmoji.png"
                      alt="Soumya Kumar Custom Character Illustration"
                      onError={() => setBitmojiError(true)}
                      className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-3">
                      <div className="w-14 h-14 rounded-full bg-sage/20 border border-sage/40 flex items-center justify-center text-sage mb-2">
                        <Smile size={28} />
                      </div>
                      <p className="text-xs font-mono text-sage uppercase font-bold tracking-wider">Soumya K.</p>
                      <p className="text-[10px] font-mono text-ivory/50 mt-0.5">Character Avatar</p>
                    </div>
                  )}
                </motion.div>

                <div className="text-center mt-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-ivory font-bold">SOUMYA KUMAR</p>
                  <p className="text-[10px] font-mono text-sage tracking-wider mt-0.5">Creative Technologist · CSE 2028</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* 1. FEATURED SIGNATURE DISCIPLINE: BRAND BUILDING & IDENTITY SYSTEMS */}
        {brandDimension && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-sage/45 mb-12 bg-gradient-to-br from-[#12231b] via-[#0d1a14] to-[#08120e] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10 mb-8">
              
              {/* Left Column (7 cols): Editorial Narrative */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-sage font-bold tracking-wider">
                    DISCIPLINE {brandDimension.dimensionNumber}
                  </span>
                  <span className="text-ivory/30">/</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-sage/20 text-sage border border-sage/40 font-semibold">
                    {brandDimension.tag}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold mb-4 leading-tight group-hover:text-champagne transition-colors">
                  {brandDimension.title}
                </h3>

                <p className="text-ivory/85 text-base sm:text-lg font-sans font-medium mb-4 leading-relaxed">
                  {brandDimension.summary}
                </p>

                <p className="text-ivory/65 text-sm sm:text-base font-sans leading-relaxed mb-6">
                  {brandDimension.details}
                </p>

                {/* Direct Action Link to Design Archive */}
                <div className="pt-2">
                  <a
                    href="#design"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage text-pine font-mono text-xs font-semibold uppercase tracking-wider hover:bg-sage/90 transition-all shadow-md group/btn"
                  >
                    <span>Explore Design &amp; Brand Archive</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Key Creative Pillars */}
              <div className="lg:col-span-5 space-y-3.5">
                <p className="text-xs font-mono uppercase tracking-widest text-ivory/45 font-semibold mb-2">
                  Core Architectural Capabilities
                </p>
                {brandDimension.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-pine/60 border border-sage/25 hover:border-sage/45 transition-colors flex items-start gap-3 shadow-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-sage/20 border border-sage/35 flex items-center justify-center text-sage shrink-0 mt-0.5">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="text-xs sm:text-sm font-sans text-ivory/80 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Meta Bar */}
            <div className="pt-6 border-t border-sage/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ivory/45 relative z-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                Active Studio Creative Practice
              </span>
              <span className="text-sage/75">
                Visual Architecture · Tone · Identity Systems
              </span>
            </div>
          </motion.article>
        )}

        {/* 2. THE THREE COMPLEMENTARY CREATIVE DISCIPLINES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {secondaryDimensions.map((dim, idx) => {
            const IconComponent = iconMap[dim.iconName] || Sparkles
            const isCreativeTech = dim.id === 'creative-technology'
            const isUIUX = dim.id === 'ui-ux-architecture'
            const isWriting = dim.id === 'technical-storytelling'

            return (
              <motion.article
                key={dim.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-7 sm:p-8 border border-sage/25 hover:border-sage/45 bg-gradient-to-b from-[#0d1712] to-[#070e0a] flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl glass-panel border border-sage/30 text-sage flex items-center justify-center group-hover:bg-sage group-hover:text-pine transition-all duration-300 shadow-sm">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold bg-pine/80 border border-sage/25 text-sage">
                      {dim.tag}
                    </span>
                  </div>

                  {/* Title & Dimension ID */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs font-mono text-sage font-bold">
                      {dim.dimensionNumber}
                    </span>
                    <span className="text-xs font-mono text-ivory/30">/</span>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory font-bold group-hover:text-sage transition-colors">
                      {dim.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-ivory/85 text-sm sm:text-base font-sans font-medium mb-3 leading-relaxed">
                    {dim.summary}
                  </p>

                  {/* Narrative Details */}
                  <p className="text-ivory/60 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                    {dim.details}
                  </p>

                  {/* Distinctive Visual Architecture Graphic Accent */}
                  {isCreativeTech && (
                    <div className="p-4 rounded-2xl bg-pine/40 border border-sage/20 mb-6 relative">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sage font-semibold mb-2">
                        <Cpu size={13} />
                        <span>Interactive Code &amp; Motion</span>
                      </div>
                      <p className="text-[12px] font-sans text-ivory/70 italic leading-relaxed">
                        "Reactive SVG vectors and state machines bridge mathematics with sensory delight."
                      </p>
                    </div>
                  )}

                  {isUIUX && (
                    <div className="p-4 rounded-2xl bg-pine/40 border border-sage/20 mb-6">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sage font-semibold mb-2">
                        <SlidersHorizontal size={13} />
                        <span>Systematic Token Architecture</span>
                      </div>
                      <p className="text-[12px] font-sans text-ivory/70 italic leading-relaxed">
                        "Consistent tokens across color, typography, and spacing turn chaos into calm."
                      </p>
                    </div>
                  )}

                  {isWriting && (
                    <div className="p-4 rounded-2xl bg-pine/40 border border-sage/20 mb-6 relative">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sage font-semibold mb-2">
                        <FileCode size={13} />
                        <span>Systems Case Studies &amp; Specs</span>
                      </div>
                      <p className="text-[12px] font-sans text-ivory/70 italic leading-relaxed">
                        "Documenting architecture, trade-offs, and failure modes transforms code into durable engineering."
                      </p>
                    </div>
                  )}

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-sage/15">
                    {dim.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs font-sans text-ivory/75">
                        <CheckCircle2 size={12} className="text-sage mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-sage/15 flex items-center justify-between text-xs font-mono text-ivory/40">
                  <span>DISCIPLINE {dim.dimensionNumber}</span>
                  <span className="text-sage font-medium">STUDIO PRACTICE</span>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
