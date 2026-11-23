import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Github,
  ExternalLink,
  AlertCircle
} from 'lucide-react'
import { PROJECTS, DESIGN_WORKS } from '../../data/portfolio'

type UnifiedItem = {
  id: string
  number: string
  name: string
  shortDesc: string
  category: string
  discipline: 'Engineering' | 'Creative' | 'Cross-Disciplinary'
  status: 'COMPLETED' | 'ONGOING' | 'PROTOTYPE' | 'EXPERIMENTAL' | 'ACADEMIC'
  classification: string
  tech: string[]
  github?: string | null
  demo?: string | null
  behanceUrl?: string | null
  featured: boolean
  accentColor: string
  teamOrSolo?: 'Individual' | 'Team'
  originality?: string
  isDesign?: boolean
  thumbnail?: string
}

export default function ProjectAtlas() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('All')
  const [selectedStatus, setSelectedStatus] = useState<string>('All')
  const [selectedTech, setSelectedTech] = useState<string>('All')

  // Unify engineering projects and design works for complete discovery
  const allItems: UnifiedItem[] = useMemo(() => {
    const list: UnifiedItem[] = []

    // Engineering projects
    PROJECTS.forEach(p => {
      list.push({
        id: p.id,
        number: p.number,
        name: p.name,
        shortDesc: p.shortDesc,
        category: p.category.filter(c => c !== 'All')[0] || 'Software',
        discipline: p.discipline || (p.id === 'offscript' ? 'Creative' : 'Engineering'),
        status: p.status || 'COMPLETED',
        classification: p.classification || 'Flagship',
        tech: p.tech,
        github: p.github,
        demo: p.demo,
        featured: p.featured,
        accentColor: p.accentColor,
        teamOrSolo: p.teamOrSolo || 'Individual',
        originality: p.originality,
        isDesign: false
      })
    })

    // Design works not already represented
    DESIGN_WORKS.forEach(d => {
      if (!list.some(item => item.id === d.id)) {
        list.push({
          id: d.id,
          number: d.number,
          name: d.name,
          shortDesc: d.shortDesc,
          category: d.category,
          discipline: 'Creative',
          status: 'COMPLETED',
          classification: d.isIdentity ? 'Brand Identity' : 'Visual Campaign',
          tech: d.tools.split(' · '),
          behanceUrl: d.behanceUrl,
          demo: d.viewUrl,
          featured: true,
          accentColor: d.accentColor,
          teamOrSolo: 'Individual',
          originality: 'Original Studio Visual Design',
          isDesign: true,
          thumbnail: d.thumbnail
        })
      }
    })

    return list
  }, [])

  // Collect unique technologies for filter dropdown/chips
  const availableTechnologies = useMemo(() => {
    const set = new Set<string>()
    allItems.forEach(item => {
      item.tech.forEach(t => set.add(t))
    })
    return ['All', ...Array.from(set).slice(0, 10)]
  }, [allItems])

  // Filtered items
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      // Search
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))

      // Discipline
      const matchesDiscipline =
        selectedDiscipline === 'All' || item.discipline === selectedDiscipline

      // Status
      const matchesStatus =
        selectedStatus === 'All' || item.status === selectedStatus

      // Tech
      const matchesTech =
        selectedTech === 'All' || item.tech.includes(selectedTech)

      return matchesSearch && matchesDiscipline && matchesStatus && matchesTech
    })
  }, [allItems, searchQuery, selectedDiscipline, selectedStatus, selectedTech])

  const getStatusBadge = (status: UnifiedItem['status']) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-sage/20 text-sage border-sage/40'
      case 'PROTOTYPE':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
      case 'ACADEMIC':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30'
      case 'EXPERIMENTAL':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30'
      default:
        return 'bg-pine text-ivory/70 border-sage/20'
    }
  }

  return (
    <section id="atlas" className="py-24 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
            <SlidersHorizontal size={13} />
            <span>Interactive Project Atlas · Comprehensive Work Directory</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl text-ivory tracking-tight mb-4">
            Project <span className="text-sage italic">Atlas.</span>
          </h2>

          <p className="text-ivory/60 text-base max-w-3xl font-sans leading-relaxed">
            Search, filter, and inspect Soumya Kumar's full spectrum of work across engineering prototypes, published brand systems, systems tooling, and academic research. Every project includes honest completion status, architecture notes, and verified links.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sage/25 mb-10 space-y-6">
          
          {/* Top Row: Search Input */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-sage/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by project name, keywords, or tech stack (e.g. CONVERA, FastAPI, TypeScript, Branding)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-pine/90 border border-sage/30 text-ivory placeholder:text-ivory/40 text-sm font-sans focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-ivory/50 hover:text-ivory"
              >
                Clear
              </button>
            )}
          </div>

          {/* Bottom Row: Filter Controls */}
          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-sage/15">
            
            {/* 1. Discipline Filter */}
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-sage font-semibold block mb-2">
                Discipline Pathway
              </label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Engineering', 'Creative'].map(disc => (
                  <button
                    key={disc}
                    onClick={() => setSelectedDiscipline(disc)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      selectedDiscipline === disc
                        ? 'bg-sage text-pine font-bold shadow-md'
                        : 'glass-panel text-ivory/70 hover:text-ivory'
                    }`}
                  >
                    {disc}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Completion Status Filter */}
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-sage font-semibold block mb-2">
                Status Classification
              </label>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'COMPLETED', 'PROTOTYPE', 'ACADEMIC'].map(st => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      selectedStatus === st
                        ? 'bg-champagne text-charcoal font-bold shadow-md'
                        : 'glass-panel text-ivory/70 hover:text-ivory'
                    }`}
                  >
                    {st === 'All' ? 'All' : st}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Tech Stack Quick Pill */}
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-sage font-semibold block mb-2">
                Tech / Tool
              </label>
              <select
                value={selectedTech}
                onChange={e => setSelectedTech(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-pine border border-sage/30 text-xs font-mono text-ivory focus:outline-none focus:border-sage"
              >
                {availableTechnologies.map(tech => (
                  <option key={tech} value={tech}>
                    {tech === 'All' ? 'All Technologies' : tech}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Filter Metrics */}
          <div className="flex items-center justify-between text-xs font-mono text-ivory/50 pt-2">
            <span>
              Showing <span className="text-sage font-bold">{filteredItems.length}</span> of {allItems.length} verified projects
            </span>
            {(searchQuery || selectedDiscipline !== 'All' || selectedStatus !== 'All' || selectedTech !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedDiscipline('All')
                  setSelectedStatus('All')
                  setSelectedTech('All')
                }}
                className="text-sage hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

        {/* Project Atlas Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between border border-sage/20 group hover:border-sage/40 transition-all shadow-xl"
              >
                <div>
                  
                  {/* Card Header: Number, Discipline, Status Badge */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-sage/15 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-sage font-bold">PRJ-{item.number}</span>
                      <span className="text-ivory/20">/</span>
                      <span className="text-ivory/60 text-[11px] uppercase">{item.category}</span>
                    </div>

                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl text-ivory font-bold group-hover:text-champagne transition-colors mb-2 leading-snug">
                    {item.name}
                  </h3>

                  {/* Originality / Context Badge */}
                  {item.originality && (
                    <p className="text-[11px] font-mono text-sage/80 mb-3 bg-pine/70 px-2.5 py-1 rounded-lg border border-sage/15">
                      {item.originality} · {item.teamOrSolo}
                    </p>
                  )}

                  {/* Short Description */}
                  <p className="text-xs text-ivory/70 leading-relaxed font-sans mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tech.slice(0, 4).map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-pine/90 text-ivory/80 border border-sage/15">
                        {t}
                      </span>
                    ))}
                    {item.tech.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-ivory/40">
                        +{item.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-sage/15 flex items-center justify-between">
                  <Link
                    to={`/works/${item.id}`}
                    className="text-xs font-mono uppercase tracking-wider text-sage hover:text-champagne font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  <div className="flex items-center gap-2">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg glass-panel text-ivory/60 hover:text-ivory hover:border-sage/40 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {item.behanceUrl && (
                      <a
                        href={item.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded-lg bg-pine border border-sage/40 text-champagne text-[11px] font-mono hover:border-sage transition-colors"
                        title="View Official Behance Publication"
                      >
                        Behance ↗
                      </a>
                    )}
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg glass-panel text-sage hover:text-ivory hover:border-sage/40 transition-colors"
                        title="Launch Demo / Viewer"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 glass-card rounded-3xl border border-sage/20 p-8">
            <AlertCircle size={32} className="text-sage mx-auto mb-3" />
            <h3 className="font-display text-xl text-ivory mb-2">No projects match the selected criteria</h3>
            <p className="text-xs font-mono text-ivory/50 mb-4">Try clearing filters or searching for terms like "React", "Python", or "Brand".</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedDiscipline('All')
                setSelectedStatus('All')
                setSelectedTech('All')
              }}
              className="px-4 py-2 rounded-full bg-sage text-pine text-xs font-mono font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
