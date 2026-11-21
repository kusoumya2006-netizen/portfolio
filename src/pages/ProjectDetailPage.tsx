import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'
import { ArrowLeft, ArrowRight, Github, ExternalLink, Layers, CheckCircle2, Cpu } from 'lucide-react'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const projectIndex = PROJECTS.findIndex(p => p.id === id)
  const project = projectIndex !== -1 ? PROJECTS[projectIndex] : null

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6 matrix-dots">
        <div className="text-center max-w-md glass-card p-10 rounded-3xl border border-sage/30">
          <p className="text-xs font-mono text-sage uppercase tracking-widest mb-2">404 · Not Found</p>
          <h1 className="font-display text-4xl text-ivory mb-4">Project Not Found</h1>
          <p className="text-ivory/60 text-sm mb-8">The project you are looking for does not exist or may have moved.</p>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-pine text-xs font-semibold rounded-full hover:bg-sage/90 transition-all"
          >
            <ArrowLeft size={14} /> Back to Works
          </Link>
        </div>
      </main>
    )
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1]
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0]

  return (
    <main className="min-h-screen pt-28 pb-24 matrix-dots">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ivory/60 hover:text-sage transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Works Gallery</span>
          </Link>
        </motion.div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-mono text-sage tracking-wider font-semibold">
              PRJ-{project.number}
            </span>
            <span className="text-ivory/20">/</span>
            <div className="flex flex-wrap gap-1.5">
              {project.category.filter(c => c !== 'All').map(cat => (
                <span
                  key={cat}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-pine text-ivory/80 border border-sage/20"
                >
                  {cat}
                </span>
              ))}
            </div>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-sage/20 text-sage border border-sage/40">
                Featured Case Study
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-6">
            {project.name}
          </h1>

          <p className="text-xl md:text-2xl text-ivory/80 font-light max-w-3xl leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        {/* Action Links Bar */}
        {(project.github || project.demo) && (
          <div className="flex flex-wrap items-center gap-4 mb-14 pb-8 border-b border-sage/15">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage text-pine text-xs font-semibold uppercase tracking-wider hover:bg-sage/90 transition-all shadow-md"
              >
                <Github size={15} />
                <span>View on GitHub</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-sage/40 text-ivory text-xs font-semibold uppercase tracking-wider hover:border-sage transition-all"
              >
                <ExternalLink size={15} className="text-sage" />
                <span>Launch Live Application</span>
              </a>
            )}
          </div>
        )}

        {/* Details Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Description & Contributions (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="glass-card rounded-3xl p-8 border border-sage/20">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4 flex items-center gap-2">
                <Layers size={14} />
                <span>Architecture & Overview</span>
              </h2>
              <p className="text-ivory/80 text-base md:text-lg leading-relaxed font-sans">
                {project.fullDesc}
              </p>
            </div>

            {/* Problem / Context */}
            {project.problem && (
              <div className="glass-card rounded-3xl p-8 border border-sage/20 bg-pine/60">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sage mb-3 font-semibold">
                  Problem & Context
                </h3>
                <p className="text-ivory/80 text-sm leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Technical Contributions */}
            {(project.contribution || []).length > 0 && (
              <div className="glass-card rounded-3xl p-8 border border-sage/20">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-5">
                  Key Technical Contributions
                </h2>
                <div className="space-y-3">
                  {project.contribution.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-pine/70 border border-sage/15"
                    >
                      <CheckCircle2 size={16} className="text-sage shrink-0 mt-0.5" />
                      <span className="text-sm text-ivory/85 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Specs (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack */}
            <div className="glass-card rounded-3xl p-6 border border-sage/20">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-pine border border-sage/25 text-xs font-mono text-ivory/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="glass-card rounded-3xl p-6 border border-sage/20">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sage mb-2 font-semibold">
                  Key Metric / Validation
                </h3>
                <p className="text-sm font-mono text-ivory/90 leading-relaxed">
                  {project.metrics}
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Project Pagination (Next / Prev) */}
        <div className="pt-12 border-t border-sage/20 flex items-center justify-between">
          <Link
            to={`/works/${prevProject.id}`}
            className="flex items-center gap-3 text-xs font-mono text-ivory/70 hover:text-sage transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Prev: {prevProject.name}</span>
          </Link>

          <Link
            to="/works"
            className="text-xs font-mono uppercase tracking-wider text-sage hover:underline"
          >
            All Works
          </Link>

          <Link
            to={`/works/${nextProject.id}`}
            className="flex items-center gap-3 text-xs font-mono text-ivory/70 hover:text-sage transition-colors"
          >
            <span>Next: {nextProject.name}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  )
}
