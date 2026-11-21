import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PenTool,
  Palette,
  Headphones,
  Video,
  Sparkles,
  Radio,
  ArrowUpRight,
  Smile,
  CheckCircle2,
  Compass,
  Layers,
  BookOpen,
  Music2,
  Quote
} from 'lucide-react'
import { CREATIVE_FREQUENCIES } from '../../data/portfolio'

export default function BeyondTheCodeSection() {
  const [bitmojiError, setBitmojiError] = useState(false)

  // Map icon names to components
  const iconMap: Record<string, React.ElementType> = {
    Palette: Palette,
    PenTool: PenTool,
    Video: Video,
    Headphones: Headphones,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
  }

  // Find the featured Brand Building & Marketing dimension and the three complementary dimensions
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
            <Radio size={13} className="animate-pulse" />
            <span>Beyond the Code · Creative Dimensions</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-4">
            Other <span className="text-sage italic">Frequencies.</span>
          </h2>
          <p className="text-ivory/60 text-base sm:text-lg max-w-2xl font-sans leading-relaxed mb-8">
            Personal pursuits, creative disciplines, and expressive interests that shape my perspective when I step away from the compiler.
          </p>

          {/* "BEYOND THE BOX" Hero Composition: Core Manifesto + Soumya's Custom Bitmoji Portrait */}
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl glass-card border border-sage/30 bg-gradient-to-br from-pine/95 via-[#14231d] to-[#0c1511] shadow-2xl relative overflow-hidden">
            {/* Ambient background orbital glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Left Column (7 cols): Manifesto & Personality narrative */}
            <div className="lg:col-span-7 sm:pr-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sage/15 border border-sage/30 text-[11px] font-mono text-sage uppercase tracking-wider mb-4 font-semibold">
                <Sparkles size={12} />
                <span>BEYOND THE BOX · NOT ONE BOX</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold leading-tight mb-4">
                "Not one box. <br className="hidden sm:inline" />
                <span className="text-sage italic">Never was."</span>
              </h3>
              <p className="text-ivory/80 text-base sm:text-lg font-sans leading-relaxed mb-4">
                A little code. A little chaos. A lot of curiosity. Engineering meets imagination.
              </p>
              <p className="text-ivory/60 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Engineering builds rigorous logic; brand building, writing, content creation, and music give systems emotional resonance and human meaning. Here are the four creative frequencies I explore with infinite curiosity.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-ivory/60">
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/35 text-sage font-semibold">#BrandBuilding</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-sage">#CreativeWriting</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-ivory/80">#ContentCreation</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-ivory/70">#MusicInspiration</span>
              </div>
            </div>

            {/* Right Column (5 cols): Soumya's Bitmoji Character Showcase */}
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
                      alt="Soumya's Custom Bitmoji Portrait"
                      onError={() => setBitmojiError(true)}
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Elegant Clearly Marked Fallback when file is temporarily missing */
                    <div className="w-full h-full rounded-xl border border-dashed border-sage/50 bg-pine/40 flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-sage/20 border border-sage/30 flex items-center justify-center text-sage mb-2 shadow-sm">
                        <Smile size={24} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-sage uppercase tracking-wider block mb-1">
                        Soumya's Bitmoji
                      </span>
                      <span className="text-[9px] font-mono text-ivory/50 leading-tight block">
                        Bitmoji Portrait Preview
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Identity Speech Bubble / Personal Tag */}
                <div className="mt-1 pt-3 border-t border-sage/20 w-full">
                  <p className="font-display text-base text-ivory font-bold">
                    Soumya K.
                  </p>
                  <p className="text-[11px] font-mono text-sage font-medium">
                    Creative Technologist &amp; Brand Builder
                  </p>
                  <p className="text-[10px] font-mono text-ivory/45 mt-1">
                    "A little code. A little chaos."
                  </p>
                </div>

                {/* Floating sticker annotations */}
                <div className="absolute -bottom-3 -right-2 px-2.5 py-0.5 rounded-full bg-pine/90 border border-sage/40 text-[9px] font-mono text-sage shadow-md">
                  #NeverInOneBox
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 1. BRAND BUILDING & MARKETING — FEATURED DOMINANT VISUAL PRESENCE */}
        {brandDimension && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-3xl p-8 sm:p-10 lg:p-12 glass-card border border-sage/40 bg-gradient-to-br from-[#0c1813] via-[#102019] to-[#07100c] shadow-2xl relative overflow-hidden group"
          >
            {/* Metallic subtle ambient light cone */}
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sage/15 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-20 left-10 w-80 h-80 bg-pine/80 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Coordinate Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-sage/20 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sage text-pine flex items-center justify-center shadow-lg">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-sage uppercase tracking-[0.2em] font-bold block">
                    DIMENSION 01 // SIGNATURE CREATIVE FOCUS
                  </span>
                  <span className="text-xs font-mono text-ivory/50">
                    Identity Systems · Positioning · Visual Direction
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-sage/15 border border-sage/35 text-sage font-mono text-[11px] font-semibold">
                  BRAND STRATEGY &amp; CRAFT
                </span>
              </div>
            </div>

            {/* Main Editorial Content: 2 Columns */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 mb-8 items-start">
              
              {/* Left Column (7 cols): Narrative & Statement */}
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory font-bold leading-tight mb-5 group-hover:text-sage transition-colors">
                  {brandDimension.title}
                </h3>
                
                <p className="text-ivory/85 text-base sm:text-lg font-sans leading-relaxed mb-4 font-medium">
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
                    <span>View QCIC Brand Identity in Design Archive</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Key Creative Pillars */}
              <div className="lg:col-span-5 space-y-3.5">
                <p className="text-xs font-mono uppercase tracking-widest text-ivory/45 font-semibold mb-2">
                  Creative Pillars &amp; Explorations
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
                Active Creative Pursuit &amp; Club Leadership (QCIC Design Lead)
              </span>
              <span className="text-sage/75">
                Visual Architecture · Tone · Digital Engagement
              </span>
            </div>
          </motion.article>
        )}

        {/* 2. THE THREE COMPLEMENTARY CREATIVE DIMENSIONS: WRITING, CONTENT, MUSIC */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {secondaryDimensions.map((dim, idx) => {
            const IconComponent = iconMap[dim.iconName] || Sparkles
            const isMusic = dim.id === 'music'
            const isWriting = dim.id === 'creative-writing'
            const isContent = dim.id === 'content-creation'

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

                  {/* Distinctive Visual Graphic Accent for each dimension */}
                  {isMusic && (
                    /* Subtle Static Harmonic Soundwave Silhouette (Pure Graphic — No Player / Controls) */
                    <div className="p-4 rounded-2xl bg-pine/40 border border-sage/20 mb-6 relative overflow-hidden">
                      <div className="flex items-center justify-between text-[11px] font-mono text-sage mb-2.5">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Music2 size={13} />
                          <span>Creative Soundscapes</span>
                        </span>
                        <span className="text-ivory/40 text-[10px]">Studio Sanctuary</span>
                      </div>
                      
                      {/* Decorative waveform graphic */}
                      <div className="flex items-center gap-1.5 h-9 py-1 px-1 opacity-70">
                        {[16, 28, 20, 36, 18, 30, 24, 38, 22, 32, 14, 26, 34, 18, 28, 22, 36, 16].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}px` }}
                            className="w-1.5 rounded-full bg-sage/60 group-hover:bg-sage transition-all duration-300"
                          />
                        ))}
                      </div>

                      <p className="text-[11px] font-sans text-ivory/50 mt-2 italic">
                        "Melody and cadence provide rhythm for late-night problem solving."
                      </p>
                    </div>
                  )}

                  {isWriting && (
                    <div className="p-4 rounded-2xl bg-pine/40 border border-sage/20 mb-6 relative">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sage font-semibold mb-2">
                        <Quote size={13} />
                        <span>Craft of the Written Word</span>
                      </div>
                      <p className="text-[12px] font-sans text-ivory/70 italic leading-relaxed">
                        "Precision in thought leads to clarity in language. Writing is thinking made visible."
                      </p>
                    </div>
                  )}

                  {isContent && (
                    <div className="p-4 rounded-2xl bg-pine/40 border border-sage/20 mb-6">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sage font-semibold mb-2">
                        <Layers size={13} />
                        <span>Visual Narrative Flow</span>
                      </div>
                      <p className="text-[12px] font-sans text-ivory/70 italic leading-relaxed">
                        "Bridging ideas and audiences through thoughtful composition and pacing."
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
                  <span>DIMENSION {dim.dimensionNumber}</span>
                  <span className="text-sage font-medium">CREATIVE PASSION</span>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
