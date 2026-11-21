import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Award, CheckCircle2, Atom, Code2, Database, Terminal, ShieldCheck, Filter } from 'lucide-react'
import { SKILLS, CERTIFICATIONS, ACHIEVEMENTS } from '../../data/portfolio'

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const skillCategories = [
    { id: 'prog', group: 'code', title: 'Programming', items: SKILLS.programming, icon: Terminal },
    { id: 'front', group: 'web', title: 'Frontend Engineering', items: SKILLS.webFrontend, icon: Code2 },
    { id: 'back', group: 'backend', title: 'Backend & APIs', items: SKILLS.backendDatabases.slice(0, 4), icon: Cpu },
    { id: 'data', group: 'backend', title: 'Databases & Cloud', items: SKILLS.backendDatabases.slice(4), icon: Database },
    { id: 'ai', group: 'ai-cs', title: 'AI, Vision & NLP', items: SKILLS.aiData, icon: Cpu },
    { id: 'tools', group: 'web', title: 'Design & Developer Tools', items: SKILLS.tools, icon: Code2 },
    { id: 'cs', group: 'ai-cs', title: 'Core Computer Science', items: SKILLS.coreCS, icon: Terminal },
    { id: 'soft', group: 'code', title: 'Soft Skills & Teamwork', items: SKILLS.softSkills, icon: ShieldCheck },
  ]

  const filterTabs = [
    { id: 'all', label: 'All Dimensions', count: skillCategories.length },
    { id: 'code', label: 'Languages & Teams', count: skillCategories.filter(c => c.group === 'code').length },
    { id: 'web', label: 'Web & Design', count: skillCategories.filter(c => c.group === 'web').length },
    { id: 'backend', label: 'Backend & Cloud', count: skillCategories.filter(c => c.group === 'backend').length },
    { id: 'ai-cs', label: 'AI & Systems', count: skillCategories.filter(c => c.group === 'ai-cs').length },
  ]

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.group === activeFilter)

  return (
    <section id="skills" className="py-24 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
            <Atom size={12} />
            <span>Technical Constellation & Credentials</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight mb-4">
            Skills, Research & <br className="hidden sm:inline"/>
            <span className="text-sage italic">Certifications.</span>
          </h2>

          <p className="text-ivory/60 text-base max-w-2xl font-sans leading-relaxed">
            A comprehensive matrix of verified technical skills, core computer science competencies, academic certifications and research explorations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-sage/10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-sage/70 mr-2 uppercase tracking-wider">
            <Filter size={13} />
            <span>Filter Domain:</span>
          </div>
          {filterTabs.map(tab => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-sage text-charcoal font-semibold shadow-lg shadow-sage/20 ring-1 ring-sage'
                    : 'glass-panel text-ivory/70 hover:text-ivory hover:border-sage/40'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-charcoal/20 text-charcoal font-bold' : 'bg-pine text-sage'
                }`}>
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AnimatePresence>
            {filteredCategories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <motion.div
                  layout
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="glass-card rounded-3xl p-6 border border-sage/20 flex flex-col justify-between hover:border-sage/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-sage text-xs font-mono uppercase font-semibold">
                      <Icon size={14} />
                      <span>{cat.title}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map(skill => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-pine border border-sage/20 text-ivory/80 hover:text-ivory hover:border-sage/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Quantum Research Interests Feature Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 border border-sage/30 mb-16 relative overflow-hidden glow-sage"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sage mb-2">
                <Atom size={15} className="animate-spin-slow" />
                <span>Active Research Exploration</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ivory font-bold mb-2">
                Quantum Computing & Intelligence
              </h3>
              <p className="text-ivory/70 text-sm leading-relaxed font-sans">
                Areas of active inquiry, club leadership and independent study — exploring algorithmic speedups, parameterized quantum circuits, and hybrid quantum-classical workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-md">
              {SKILLS.researchInterests.map(interest => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full bg-sage/15 border border-sage/40 text-xs font-mono text-sage font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Achievements Section */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl text-ivory font-bold mb-6 flex items-center gap-2.5">
              <Award size={20} className="text-sage" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={cert.name}
                  className="glass-card rounded-2xl p-5 border border-sage/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="font-sans text-base text-ivory font-semibold mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-xs font-mono text-ivory/50">
                      Issuer: <span className="text-sage">{cert.provider}</span>
                      {cert.credentialId && (
                        <span className="ml-2 pl-2 border-l border-sage/20 text-ivory/40">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-pine border border-sage/30 text-sage uppercase tracking-wider w-fit shrink-0">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl text-ivory font-bold mb-6 flex items-center gap-2.5">
              <Award size={20} className="text-sage" />
              <span>Key Achievements</span>
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS.map(ach => (
                <div
                  key={ach.title}
                  className="glass-card rounded-2xl p-5 border border-sage/20"
                >
                  <p className="text-xs font-mono text-sage uppercase tracking-wider mb-1 font-semibold">
                    {ach.title}
                  </p>
                  <p className="font-display text-lg text-ivory font-bold mb-2">
                    {ach.project}
                  </p>
                  <p className="text-xs text-ivory/70 leading-relaxed font-sans">
                    {ach.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
