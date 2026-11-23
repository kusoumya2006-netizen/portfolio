import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROJECTS, DESIGN_WORKS } from '../data/portfolio'
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  Cpu,
  ShieldAlert,
  Sliders,
  Award,
  Lightbulb,
  FileCode,
  Palette,
  Eye,
  Activity,
  Workflow
} from 'lucide-react'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()

  // Search in PROJECTS first
  const projectIndex = PROJECTS.findIndex(p => p.id === id)
  const project = projectIndex !== -1 ? PROJECTS[projectIndex] : null

  // Also check DESIGN_WORKS if not in PROJECTS or to supplement
  const designWork = DESIGN_WORKS.find(d => d.id === id)

  if (!project && !designWork) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6 matrix-dots">
        <div className="text-center max-w-md glass-card p-10 rounded-3xl border border-sage/30">
          <p className="text-xs font-mono text-sage uppercase tracking-widest mb-2">404 · Not Found</p>
          <h1 className="font-display text-4xl text-ivory mb-4">Project Not Found</h1>
          <p className="text-ivory/60 text-sm mb-8">The project you are looking for does not exist or may have moved.</p>
          <Link
            to="/#works"
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

  const title = project?.name || designWork?.name || ''
  const number = project?.number || designWork?.number || '01'
  const categories = project?.category.filter(c => c !== 'All') || designWork?.categoryTags || ['Creative']
  const shortDesc = project?.shortDesc || designWork?.shortDesc || ''
  const github = project?.github || null
  const demo = project?.demo || null
  const behanceUrl = designWork?.behanceUrl || null

  const caseStudy = project?.caseStudy
  const designCaseStudy = designWork?.caseStudy

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
            to="/#works"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ivory/60 hover:text-sage transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Works Gallery</span>
          </Link>
        </motion.div>

        {/* Header Masthead */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-mono text-sage tracking-wider font-semibold">
              PRJ-{number}
            </span>
            <span className="text-ivory/20">/</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <span
                  key={cat}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-pine text-ivory/80 border border-sage/20"
                >
                  {cat}
                </span>
              ))}
            </div>
            {project?.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-sage/20 text-sage border border-sage/40">
                Landmark Case Study
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-6">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-ivory/80 font-light max-w-3xl leading-relaxed">
            {shortDesc}
          </p>
        </div>

        {/* Action Links Bar */}
        {(github || demo || behanceUrl) && (
          <div className="flex flex-wrap items-center gap-4 mb-14 pb-8 border-b border-sage/15">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage text-pine text-xs font-semibold uppercase tracking-wider hover:bg-sage/90 transition-all shadow-md"
              >
                <Github size={15} />
                <span>View on GitHub</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-sage/40 text-ivory text-xs font-semibold uppercase tracking-wider hover:border-sage transition-all"
              >
                <ExternalLink size={15} className="text-sage" />
                <span>Launch Live Application</span>
              </a>
            )}
            {behanceUrl && (
              <a
                href={behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pine border border-sage/50 text-champagne text-xs font-semibold uppercase tracking-wider hover:border-sage transition-all shadow-md"
              >
                <span>View on Behance ↗</span>
              </a>
            )}
          </div>
        )}

        {/* ========================================================
            CASE STUDY CONTENT: Technical or Design
            ======================================================== */}
        {caseStudy ? (
          <div className="space-y-12">
            
            {/* Section 1 & 2: Overview & Context */}
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-sage/25">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4 flex items-center gap-2">
                  <Layers size={14} />
                  <span>1. System Overview</span>
                </h2>
                <p className="text-ivory/85 text-base md:text-lg leading-relaxed font-sans mb-4">
                  {caseStudy.overview}
                </p>
                {caseStudy.context && (
                  <div className="p-4 rounded-2xl bg-pine/60 border border-sage/15">
                    <p className="text-xs font-mono uppercase text-sage mb-1 font-semibold">Project Context</p>
                    <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                      {caseStudy.context}
                    </p>
                  </div>
                )}
              </div>

              {/* Problem Statement & Objectives */}
              <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-sage/25 flex flex-col justify-between">
                {caseStudy.problemStatement && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-sage mb-3 font-semibold flex items-center gap-2">
                      <ShieldAlert size={14} />
                      <span>2. Problem Statement</span>
                    </h3>
                    <p className="text-sm text-ivory/85 leading-relaxed font-sans mb-6">
                      {caseStudy.problemStatement}
                    </p>
                  </div>
                )}

                {caseStudy.objectives && caseStudy.objectives.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-sage mb-3 font-semibold">
                      Core Objectives
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-ivory/80">
                          <CheckCircle2 size={13} className="text-sage shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Architecture & Modules */}
            {caseStudy.architectureOrProcess?.modules && (
              <div className="glass-card rounded-3xl p-8 border border-sage/25">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4 flex items-center gap-2">
                  <Workflow size={15} />
                  <span>3. Architecture & Functional Modules</span>
                </h2>
                {caseStudy.architectureOrProcess.diagramDescription && (
                  <p className="text-xs font-mono text-sage/80 mb-6 bg-pine/80 p-3 rounded-xl border border-sage/20">
                    [PIPELINE FLOW] {caseStudy.architectureOrProcess.diagramDescription}
                  </p>
                )}
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.architectureOrProcess.modules.map((mod, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-pine/70 border border-sage/20 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-sage tracking-wider uppercase block mb-1">
                          MODULE 0{i + 1}
                        </span>
                        <h4 className="font-display text-lg text-ivory font-bold mb-2">
                          {mod.name}
                        </h4>
                        <p className="text-xs text-ivory/70 leading-relaxed mb-4 font-sans">
                          {mod.description}
                        </p>
                      </div>
                      {mod.tech && (
                        <div className="pt-2 border-t border-sage/10">
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-pine text-sage">
                            {mod.tech}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: Implementation Highlights & Personal Contributions */}
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.implementationDetails && (
                <div className="glass-card rounded-3xl p-8 border border-sage/25">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-5 flex items-center gap-2">
                    <FileCode size={14} />
                    <span>4. Implementation Highlights</span>
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.implementationDetails.map((hl, i) => (
                      <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-pine/60 border border-sage/15 text-xs text-ivory/85 leading-relaxed font-sans">
                        <CheckCircle2 size={15} className="text-sage shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.individualContribution && (
                <div className="glass-card rounded-3xl p-8 border border-sage/25">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-5 flex items-center gap-2">
                    <Award size={14} />
                    <span>5. Soumya's Technical Contributions</span>
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.individualContribution.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-pine/60 border border-sage/15 text-xs text-ivory/85 leading-relaxed font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-1.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Section 5: Engineering Challenges & Trade-offs */}
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.challenges && (
                <div className="glass-card rounded-3xl p-8 border border-sage/25">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-5 flex items-center gap-2">
                    <ShieldAlert size={14} />
                    <span>6. Engineering Challenges Faced</span>
                  </h3>
                  <div className="space-y-3">
                    {caseStudy.challenges.map((ch, i) => (
                      <div key={i} className="p-4 rounded-xl bg-pine/70 border border-sage/15 text-xs text-ivory/80 leading-relaxed font-sans">
                        <span className="text-sage font-mono font-semibold block mb-1">Challenge 0{i + 1}</span>
                        {ch}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.decisionsAndTradeoffs && (
                <div className="glass-card rounded-3xl p-8 border border-sage/25">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-5 flex items-center gap-2">
                    <Sliders size={14} />
                    <span>7. Engineering Trade-offs & Decisions</span>
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.decisionsAndTradeoffs.map((tr, i) => (
                      <div key={i} className="p-4 rounded-xl bg-pine/70 border border-sage/15">
                        <p className="text-xs font-mono text-champagne font-semibold uppercase mb-1">
                          Decision: {tr.decision}
                        </p>
                        <p className="text-xs text-ivory/80 leading-relaxed font-sans">
                          <span className="text-ivory/50 font-mono">Rationale: </span>
                          {tr.rationale}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section 6: Verification, Metrics & Learnings */}
            <div className="glass-card rounded-3xl p-8 border border-sage/25">
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Tools & Tech */}
                {caseStudy.toolsAndTechnologies && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold">
                      Tools & Technologies
                    </h4>
                    <div className="space-y-3">
                      {caseStudy.toolsAndTechnologies.map(grp => (
                        <div key={grp.category}>
                          <p className="text-[10px] font-mono uppercase text-ivory/50 mb-1">{grp.category}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {grp.items.map(t => (
                              <span key={t} className="px-2 py-0.5 rounded bg-pine border border-sage/20 text-xs font-mono text-ivory/80">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Final Outcome */}
                {caseStudy.finalOutcome && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold flex items-center gap-1.5">
                      <Activity size={13} />
                      <span>Final Outcome</span>
                    </h4>
                    <p className="text-xs text-ivory/85 leading-relaxed font-sans p-4 rounded-xl bg-pine/60 border border-sage/15">
                      {caseStudy.finalOutcome}
                    </p>
                  </div>
                )}

                {/* Key Learnings */}
                {caseStudy.learnings && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-sage mb-4 font-semibold flex items-center gap-1.5">
                      <Lightbulb size={13} />
                      <span>Key Engineering Learnings</span>
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.learnings.map((lrn, i) => (
                        <li key={i} className="text-xs text-ivory/70 italic font-sans flex items-start gap-2">
                          <span>•</span>
                          <span>"{lrn}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>

          </div>
        ) : designCaseStudy ? (
          /* DESIGN CASE STUDY RENDERING */
          <div className="space-y-12">
            
            {/* Brief & Objectives */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-8 border border-sage/25">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4 flex items-center gap-2">
                  <Palette size={14} />
                  <span>Creative Brief & Objective</span>
                </h3>
                <p className="text-ivory/85 text-base leading-relaxed font-sans mb-4">
                  {designCaseStudy.creativeBrief}
                </p>
                {designCaseStudy.targetAudience && (
                  <div className="p-4 rounded-xl bg-pine/60 border border-sage/15 text-xs text-ivory/75">
                    <span className="font-mono text-sage uppercase font-semibold block mb-1">Target Audience</span>
                    {designCaseStudy.targetAudience}
                  </div>
                )}
              </div>

              <div className="glass-card rounded-3xl p-8 border border-sage/25">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4 flex items-center gap-2">
                  <Lightbulb size={14} />
                  <span>Concept Development</span>
                </h3>
                <p className="text-ivory/80 text-sm leading-relaxed font-sans mb-6">
                  {designCaseStudy.conceptDevelopment}
                </p>

                {designCaseStudy.visualLanguage && (
                  <div className="p-4 rounded-xl bg-pine/60 border border-sage/15 text-xs text-ivory/75">
                    <span className="text-xs font-mono uppercase text-sage font-semibold block mb-1">Visual Language</span>
                    {designCaseStudy.visualLanguage}
                  </div>
                )}
              </div>
            </div>

            {/* Typography & Color Palette */}
            <div className="glass-card rounded-3xl p-8 border border-sage/25">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-6">
                Brand Design System: Typography & Swatches
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Typography */}
                {designCaseStudy.typographySystem && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-sage mb-3 font-semibold">Typography System</h4>
                    <div className="space-y-3">
                      {designCaseStudy.typographySystem.map((t, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-pine/70 border border-sage/15">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-display text-base text-ivory font-bold">{t.font}</span>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-pine text-sage">
                              {t.role}
                            </span>
                          </div>
                          <p className="text-xs text-ivory/60 font-sans">{t.usage}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Palette */}
                {designCaseStudy.colorPalette && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-sage mb-3 font-semibold">Color Palette</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {designCaseStudy.colorPalette.map((c, i) => (
                        <div key={i} className="p-3 rounded-xl bg-pine/70 border border-sage/15 flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg border border-ivory/20 shadow-md shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <div className="overflow-hidden">
                            <p className="text-xs font-bold text-ivory truncate">{c.name}</p>
                            <p className="text-[10px] font-mono text-sage">{c.hex}</p>
                            <p className="text-[9px] text-ivory/50 truncate">{c.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Deliverables & Applications */}
            <div className="glass-card rounded-3xl p-8 border border-sage/25">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
                Execution Deliverables & Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {designCaseStudy.execution && (
                  <ul className="space-y-2">
                    {designCaseStudy.execution.map((ed, i) => (
                      <li key={i} className="text-xs text-ivory/80 flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-sage shrink-0 mt-0.5" />
                        <span>{ed}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {designCaseStudy.finalApplications && (
                  <ul className="space-y-2">
                    {designCaseStudy.finalApplications.map((fa, i) => (
                      <li key={i} className="text-xs text-ivory/80 flex items-start gap-2">
                        <span className="text-champagne font-mono font-bold">→</span>
                        <span>{fa}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* FALLBACK / CLASSIC RENDERING */
          <div className="glass-card rounded-3xl p-8 border border-sage/25">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-sage mb-4">
              Project Overview
            </h2>
            <p className="text-ivory/85 text-base leading-relaxed mb-6">
              {project?.fullDesc}
            </p>
            {project?.contribution && (
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase text-sage font-semibold">Contributions</h3>
                {project.contribution.map((c, i) => (
                  <p key={i} className="text-xs text-ivory/80">• {c}</p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Pagination (Next / Prev) */}
        <div className="mt-16 pt-12 border-t border-sage/20 flex items-center justify-between">
          <Link
            to={`/works/${prevProject.id}`}
            className="flex items-center gap-3 text-xs font-mono text-ivory/70 hover:text-sage transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Prev: {prevProject.name}</span>
          </Link>

          <Link
            to="/#works"
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
