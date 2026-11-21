import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Award, Users, Palette, Code2, Terminal } from 'lucide-react'
import { JOURNEY } from '../../data/portfolio'

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6 relative matrix-dots">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
            <Briefcase size={12} />
            <span>Timeline · Experience & Leadership</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight mb-4">
            Experience, Leadership & <br className="hidden sm:inline"/>
            <span className="text-sage italic">Campus.</span>
          </h2>

          <p className="text-ivory/60 text-base max-w-2xl font-sans leading-relaxed">
            A chronological timeline of software internships, creative leadership roles, student organization design initiatives, and hackathon project builds.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-sage/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {JOURNEY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-pine border-2 border-sage group-hover:scale-125 group-hover:bg-sage transition-all duration-300" />

              {/* Timeline Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sage/20 hover:border-sage/40 transition-colors">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-2xl text-ivory font-bold group-hover:text-sage transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-sage font-medium">
                      {item.org}
                    </p>
                  </div>
                  
                  <span className="text-xs font-mono px-3 py-1 rounded-full glass-panel border border-sage/20 text-ivory/60 w-fit">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-ivory/70 text-sm sm:text-base leading-relaxed font-sans mb-5">
                  {item.details}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pine border border-sage/20 text-ivory/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
