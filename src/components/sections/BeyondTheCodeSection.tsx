import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PenTool,
  Palette,
  Users,
  Headphones,
  Sparkles,
  Cpu,
  Radio,
  Play,
  Pause,
  Volume2,
  Disc,
  ArrowUpRight,
  Smile,
  CheckCircle2,
  Layers
} from 'lucide-react'
import { CREATIVE_FREQUENCIES, LISTENING_CORNER } from '../../data/portfolio'

export default function BeyondTheCodeSection() {
  const [isPlayingVisual, setIsPlayingVisual] = useState(false)
  const [activeTrackIndex, setActiveTrackIndex] = useState(0)
  const [bitmojiError, setBitmojiError] = useState(false)

  const iconMap: Record<string, React.ElementType> = {
    PenTool: PenTool,
    Palette: Palette,
    Users: Users,
    Headphones: Headphones,
    Sparkles: Sparkles,
    Cpu: Cpu,
  }

  return (
    <section id="beyond-the-code" className="py-28 px-6 relative matrix-dots overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sage/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pine/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-sage/35 text-xs font-mono uppercase text-sage mb-4">
            <Radio size={13} className="animate-pulse" />
            <span>Beyond the Code · Other Frequencies</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-8">
            Other <span className="text-sage italic">Frequencies.</span>
          </h2>

          {/* "BEYOND THE BOX" Hero Composition: Core Manifesto + Soumya's Bitmoji Character Showcase */}
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
                Engineering solves problems; brand building, writing, music, and collaborative volunteering give systems meaning. Here is how I think, write, collaborate, listen and experiment when I step away from the compiler.
              </p>
              
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-ivory/60">
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-sage font-semibold">#BrandBuilding</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-sage">#CreativeTechnologist</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-ivory/70">#DifferentDisciplines</span>
                <span className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-ivory/70">#CuriousMind</span>
              </div>
            </div>

            {/* Right Column (5 cols): Soumya's Bitmoji Showcase / Explicit Placeholder Unit */}
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

        {/* Creative Frequencies Grid — Featuring Brand Building & Identity Creation Prominently */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 items-stretch">
          {CREATIVE_FREQUENCIES.map((freq, idx) => {
            const IconComponent = iconMap[freq.iconName] || Sparkles
            const isFeatured = freq.featured || freq.id === 'brand-building'

            return (
              <motion.article
                key={freq.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-card rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured
                    ? 'border-sage/45 bg-gradient-to-br from-pine/95 via-[#162720] to-pine/85 ring-1 ring-sage/30 lg:col-span-2'
                    : 'border-sage/20 hover:border-sage/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div
                      className={`w-11 h-11 rounded-2xl glass-panel border flex items-center justify-center transition-all duration-300 ${
                        isFeatured
                          ? 'border-sage/50 bg-sage text-pine'
                          : 'border-sage/30 text-sage group-hover:bg-sage group-hover:text-pine'
                      }`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span
                      className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                        isFeatured
                          ? 'bg-sage/20 border-sage/40 text-sage'
                          : 'bg-pine/80 border-sage/20 text-sage'
                      }`}
                    >
                      {freq.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-ivory font-bold mb-3 group-hover:text-sage transition-colors">
                    {freq.title}
                  </h3>

                  <p className="text-ivory/85 text-sm sm:text-base font-sans font-medium mb-4 leading-relaxed">
                    {freq.summary}
                  </p>

                  <p className="text-ivory/65 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                    {freq.details}
                  </p>

                  {/* Bullet Points of Core Competencies */}
                  {freq.bullets && freq.bullets.length > 0 && (
                    <div className="space-y-2 mb-6 pt-4 border-t border-sage/15">
                      {freq.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs font-sans text-ivory/75">
                          <CheckCircle2 size={13} className="text-sage mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-sage/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ivory/40">
                  <span>FREQUENCY 0{idx + 1}</span>
                  {isFeatured ? (
                    <a
                      href="#design"
                      className="inline-flex items-center gap-1.5 text-sage font-semibold hover:underline"
                    >
                      <span>EXPLORE QCIC BRAND IDENTITY</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="text-sage font-medium">ACTIVE DISCIPLINE</span>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* DEDICATED MUSIC-INSPIRED VISUAL EXPERIENCE & LISTENING CORNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-sage/35 bg-gradient-to-br from-pine/95 via-[#13201b] to-[#0d1612] relative overflow-hidden shadow-2xl"
        >
          {/* Audio Wave Visualizer Background Animation */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none flex items-center justify-end pr-8">
            <svg viewBox="0 0 240 100" className="w-full h-32" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, i) => {
                const height = isPlayingVisual ? 20 + Math.sin(i * 0.8) * 35 + 20 : 15 + (i % 5) * 8
                return (
                  <rect
                    key={i}
                    x={i * 10}
                    y={50 - height / 2}
                    width="4"
                    height={height}
                    rx="2"
                    fill="#9AA58B"
                    className="transition-all duration-300"
                  />
                )
              })}
            </svg>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Music Atmosphere Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sage mb-3 font-semibold">
                <Disc size={15} className={isPlayingVisual ? 'animate-spin' : ''} />
                <span>Atmospheric Soundscapes &amp; Cadence</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-ivory font-bold mb-4">
                The Listening Corner
              </h3>

              <p className="text-ivory/75 text-sm sm:text-base font-sans leading-relaxed mb-6">
                Music is not background noise; it is the architecture of my focus. Whether I am architecting backend pipelines or designing typography layouts for QCIC, rhythm dictates clarity.
              </p>

              {/* Interactive Visualizer Rhythm Trigger */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsPlayingVisual(!isPlayingVisual)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage text-pine text-xs font-mono uppercase font-semibold hover:bg-sage/90 transition-all shadow-md"
                >
                  {isPlayingVisual ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlayingVisual ? 'Pause Waveform Rhythm' : 'Trigger Acoustic Waveform'}</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-ivory/50">
                  <Volume2 size={14} className="text-sage" />
                  <span>Interactive Visual Rhythm · Audio Autoplay Disabled</span>
                </div>
              </div>
            </div>

            {/* Right: Curated Track Slots */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-ivory/40 mb-2 font-semibold">
                Studio Focus Rotation (Customizable)
              </p>

              {LISTENING_CORNER.map((track, i) => {
                const isSelected = activeTrackIndex === i
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setActiveTrackIndex(i)
                      setIsPlayingVisual(true)
                    }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-pine border-sage/50 shadow-md ring-1 ring-sage/30'
                        : 'glass-panel border-sage/15 hover:border-sage/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-ivory/50 mb-1">
                      <span className="text-sage font-semibold uppercase">{track.tag}</span>
                      <span>{track.bpm}</span>
                    </div>
                    <p className="font-display text-base text-ivory font-bold">{track.title}</p>
                    <p className="text-xs font-sans text-ivory/60">{track.artist}</p>
                  </div>
                )
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
