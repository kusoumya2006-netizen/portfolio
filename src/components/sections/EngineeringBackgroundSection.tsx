import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle2, Cpu, Award } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'

export default function EngineeringBackgroundSection() {
  return (
    <section className="py-20 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
            <Cpu size={12} />
            <span>Computer Science & Engineering</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight mb-4">
            Engineering Background & <br className="hidden sm:inline"/>
            <span className="text-sage italic">Systems.</span>
          </h2>

          <p className="text-ivory/60 text-base max-w-2xl font-sans leading-relaxed">
            Hands-on technical foundations spanning distributed systems, API-driven architectures, machine learning detection pipelines, and quantum computational theory.
          </p>
        </div>

        {/* Dual Modular Cards (Reference Screenshot 1) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT CARD — Degree & Metrics (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 border border-sage/20 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Undergraduate tag */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sage mb-6">
                <GraduationCap size={15} />
                <span>Undergraduate Degree · {PROFILE.education.period}</span>
              </div>

              {/* Title & College */}
              <h3 className="font-display text-3xl sm:text-4xl text-ivory font-bold mb-2">
                {PROFILE.education.degree}
              </h3>
              <p className="text-lg text-ivory/80 font-medium mb-1">
                {PROFILE.education.institution}
              </p>
              <p className="text-xs text-ivory/45 font-mono">
                {PROFILE.education.location} · September 2024 – June 2028
              </p>
            </div>

            {/* Bottom Two-Metric Stat Boxes */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10 pt-6 border-t border-sage/15">
              <div className="p-4 rounded-2xl bg-pine/60 border border-sage/20">
                <p className="text-[10px] font-mono uppercase tracking-widest text-sage mb-1">
                  Academic Stage
                </p>
                <p className="font-display text-xl text-ivory font-semibold">
                  {PROFILE.education.academicStage}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-pine/60 border border-sage/20">
                <p className="text-[10px] font-mono uppercase tracking-widest text-sage mb-1">
                  Cumulative Standing
                </p>
                <p className="font-display text-xl text-sage font-semibold">
                  {PROFILE.education.cgpa}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD — Academic Focus & Society Contributions (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 glass-card rounded-3xl p-8 border border-sage/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ivory/50 pb-5 border-b border-sage/15 mb-6">
                <span>Academic Focus</span>
                <span className="text-sage">SVCE CSE</span>
              </div>

              {/* Checkpoints */}
              <ul className="space-y-5">
                {PROFILE.education.academicFocus.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-sage shrink-0 mt-1" />
                    <span className="text-sm text-ivory/80 leading-relaxed font-sans">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievement Footer Banner */}
            <div className="mt-8 pt-5 border-t border-sage/15 flex items-center gap-3 text-xs text-ivory/60 font-mono">
              <Award size={15} className="text-sage shrink-0" />
              <span>SIH 2026 Internal Hackathon · NEXORA Voice-Risk Analysis</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
