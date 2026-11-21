import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Terminal, Code2, Layers, X, ShieldAlert, Cpu } from 'lucide-react'
import { PROJECTS, Project } from '../../data/portfolio'

const FILTER_CATEGORIES = ['All', 'AI & ML', 'Full Stack', 'Systems', 'UI/UX', 'IoT']

export default function WorksSection({ featured = false }: { featured?: boolean }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const displayedProjects = featured
    ? PROJECTS.filter(p => p.featured)
    : (activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category.includes(activeFilter)))

  return (
    <section id="works" className="py-24 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
              <Code2 size={12} />
              <span>Engineering Portfolio · Full Stack & AI</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight mb-4">
              {featured ? 'Selected' : 'All'} Engineering <br className="hidden sm:inline"/>
              <span className="text-sage italic">Projects.</span>
            </h2>

            <p className="text-ivory/60 text-base max-w-2xl font-sans leading-relaxed">
              Software engineering systems, machine learning pipelines, and responsive web platforms built with rigorous test coverage, clean API contracts, and explainable models.
            </p>
          </div>

          {/* Filters */}
          {!featured && (
            <div className="flex flex-wrap items-center gap-2">
              {FILTER_CATEGORIES.map(category => {
                const isActive = activeFilter === category
                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-sage text-pine font-bold shadow-md shadow-sage/10'
                        : 'glass-panel text-ivory/60 hover:text-ivory hover:border-sage/40'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between group border border-sage/15"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-ivory/50 pb-4 mb-4 border-b border-sage/15">
                  <span className="text-sage font-semibold">PRJ-{project.number}</span>
                  <div className="flex gap-1">
                    {project.category.filter(c => c !== 'All').map(cat => (
                      <span key={cat} className="text-[10px] text-ivory/60 bg-pine/70 px-2 py-0.5 rounded-full border border-sage/20">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-ivory font-bold group-hover:text-sage transition-colors mb-2">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-ivory/65 text-sm leading-relaxed mb-6 font-sans">
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-pine/90 text-ivory/80 border border-sage/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics Highlight Badge if available */}
                {project.metrics && (
                  <div className="mb-6 p-2.5 rounded-xl bg-sage/10 border border-sage/20 text-xs font-mono text-sage flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-sage/15 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono uppercase tracking-wider text-sage hover:text-ivory flex items-center gap-1.5 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory/60 hover:text-ivory p-1.5 rounded-lg glass-panel hover:border-sage/40 transition-colors"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage hover:text-ivory p-1.5 rounded-lg glass-panel hover:border-sage/40 transition-colors"
                      aria-label={`${project.name} Live Application Demo`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA on Homepage */}
        {featured && (
          <div className="mt-16 text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel border border-sage/30 text-ivory text-sm font-semibold hover:border-sage hover:bg-sage/10 transition-all group"
            >
              <span>Explore All Engineering Work</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        )}

      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card border border-sage/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel text-ivory/70 hover:text-ivory hover:border-sage/50"
                aria-label="Close Case Study"
              >
                <X size={18} />
              </button>

              {/* Number and Category */}
              <div className="flex items-center gap-3 text-xs font-mono text-sage mb-2">
                <span>PROJECT {activeModalProject.number}</span>
                <span>/</span>
                <span>{activeModalProject.category.join(' · ')}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl text-ivory font-bold mb-3">
                {activeModalProject.name}
              </h3>

              <p className="text-ivory/70 text-base leading-relaxed mb-6 font-sans">
                {activeModalProject.fullDesc}
              </p>

              {/* Problem Statement Box */}
              <div className="p-4 rounded-2xl bg-pine/70 border border-sage/20 mb-6">
                <p className="text-xs font-mono uppercase text-sage mb-1 font-semibold">Problem / Context</p>
                <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                  {activeModalProject.problem}
                </p>
              </div>

              {/* Key Contributions */}
              <div className="mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-sage mb-3 font-semibold">
                  Soumya's Engineering Contributions
                </p>
                <ul className="space-y-2.5">
                  {activeModalProject.contribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-ivory/80">
                      <CheckCircle2 size={15} className="text-sage shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-xs font-mono uppercase tracking-wider text-sage mb-2.5 font-semibold">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-pine border border-sage/25 text-xs font-mono text-ivory">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-sage/20">
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage text-pine text-xs font-semibold hover:bg-sage/90 transition-colors shadow-md"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                )}

                {activeModalProject.demo && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-sage/40 text-ivory text-xs font-semibold hover:border-sage transition-colors"
                  >
                    <ExternalLink size={14} className="text-sage" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
