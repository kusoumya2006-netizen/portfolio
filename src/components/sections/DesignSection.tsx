import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Edit3, X, Eye, Palette, Sparkles, CheckCircle2, Layers, ZoomIn } from 'lucide-react'
import { DESIGN_WORKS, DesignWork } from '../../data/portfolio'
import CSEProcessorInsignia from '../ui/CSEProcessorInsignia'

function CanvaPreviewCard({
  work,
  index,
  onOpenModal,
}: {
  work: DesignWork
  index: number
  onOpenModal: (work: DesignWork) => void
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`glass-card rounded-3xl p-5 flex flex-col justify-between group border border-sage/20 relative overflow-hidden transition-all duration-300 hover:border-sage/40 hover:shadow-2xl hover:shadow-sage/10 ${
        work.isIdentity ? 'sm:col-span-1 ring-1 ring-sage/30' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {/* Card Header Meta */}
        <div className="flex items-center justify-between text-xs font-mono text-ivory/50 pb-3 mb-3 border-b border-sage/15">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            <span className="tracking-widest uppercase">SVCE CANVA ARCHIVE</span>
          </div>
          <span className="text-sage font-semibold tracking-wider font-mono">{work.modNumber}</span>
        </div>

        {/* Real Canva Artwork Preview Area with Loading Shimmer & Smooth Reveal */}
        <div
          className={`relative w-full ${work.aspectRatio} rounded-2xl overflow-hidden bg-[#0a120f] mb-5 border border-sage/25 flex items-center justify-center cursor-pointer`}
          onClick={() => onOpenModal(work)}
        >
          {/* Animated Loading Skeleton Shimmer */}
          {!imageLoaded && (
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-pine/90 via-[#1b2b24] to-pine/90 animate-pulse flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 rounded-xl bg-sage/20 flex items-center justify-center text-sage mb-3 animate-spin-slow">
                <Sparkles size={18} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-sage mb-1 font-semibold">
                Loading Real Artwork
              </p>
              <p className="text-[11px] font-mono text-ivory/40">
                Rendering Canva Production...
              </p>
            </div>
          )}

          {/* Genuine User-Uploaded Canva Artwork Preview */}
          <img
            src={work.thumbnail}
            alt={`${work.name} preview`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full ${work.isIdentity ? 'object-contain p-3 bg-black' : 'object-cover'} transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100 filter-none' : 'opacity-0 scale-98'
            }`}
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pine/90 backdrop-blur-md border border-sage/35 text-[10px] font-mono text-sage uppercase tracking-wider shadow-md">
            <CheckCircle2 size={11} className="text-sage" />
            <span>{work.isIdentity ? 'Brand Identity' : 'Canva Artwork'}</span>
          </div>

          {work.pages && (
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-ivory/20 text-[10px] font-mono text-ivory/80">
              {work.pages}
            </div>
          )}

          {/* Interactive Hover Action Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#070f0c]/80 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 pointer-events-none"
          >
            <div className="flex flex-wrap gap-2 justify-center pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenModal(work)
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sage text-pine text-xs font-semibold hover:bg-sage/90 transition-colors shadow-lg"
              >
                <ZoomIn size={13} />
                <span>Quick View</span>
              </button>

              {work.viewUrl && (
                <a
                  href={work.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-panel border border-sage/35 text-ivory text-xs font-medium hover:border-sage transition-colors"
                >
                  <span>Canva</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
            <p className="text-[11px] font-mono text-ivory/70 text-center max-w-xs mt-1">
              Click to inspect high-resolution artwork
            </p>
          </motion.div>
        </div>

        {/* Card Info */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-sage px-2 py-0.5 rounded-full bg-sage/10 border border-sage/20">
            {work.category}
          </span>
          <span className="text-xs font-mono text-ivory/40">{work.year}</span>
        </div>

        <h3 className="font-display text-xl text-ivory font-bold group-hover:text-sage transition-colors mb-2 leading-snug">
          {work.name}
        </h3>

        <p className="text-ivory/65 text-xs font-sans leading-relaxed mb-4">
          {work.shortDesc}
        </p>
      </div>

      {/* Card Action Links Footer */}
      <div className="pt-4 border-t border-sage/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          {work.viewUrl ? (
            <a
              href={work.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sage hover:underline font-semibold"
            >
              <span>VIEW DESIGN</span>
              <ExternalLink size={11} />
            </a>
          ) : (
            <button
              onClick={() => onOpenModal(work)}
              className="inline-flex items-center gap-1 text-sage hover:underline font-semibold"
            >
              <span>VIEW ARTWORK</span>
              <Eye size={11} />
            </button>
          )}
        </div>

        {work.editUrl ? (
          <a
            href={work.editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-ivory/60 hover:text-ivory transition-colors"
          >
            <Edit3 size={11} className="text-sage" />
            <span>EDIT IN CANVA</span>
          </a>
        ) : (
          <span className="text-ivory/30 text-[10px]">VERIFIED ASSET</span>
        )}
      </div>
    </motion.article>
  )
}

export default function DesignSection() {
  const [activeModalWork, setActiveModalWork] = useState<DesignWork | null>(null)

  // Keyboard shortcut: Escape closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalWork) {
        setActiveModalWork(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeModalWork])

  return (
    <section id="design" className="py-24 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Custom CSE Processor Element */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
              <Palette size={12} />
              <span>Design Archive · Genuine Canva Artwork</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight mb-4">
              Selected Creative <br className="hidden sm:inline"/>
              <span className="text-sage italic">Work.</span>
            </h2>

            <p className="text-ivory/60 text-base max-w-2xl font-sans leading-relaxed">
              Real Canva campaign productions, brand identity systems, and event announcements. Actual artwork previews visible directly on cards with instant high-resolution inspection.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <CSEProcessorInsignia size="sm" />
            <div className="hidden sm:block text-right font-mono text-xs text-ivory/50">
              <p className="text-sage font-semibold uppercase">{DESIGN_WORKS.length} Curated Productions</p>
              <p className="text-[10px]">All Genuine Previews Active</p>
            </div>
          </div>
        </div>

        {/* Editorial Asymmetric Masonry Card Grid — ALL VISIBLE IMMEDIATELY */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {DESIGN_WORKS.map((work, idx) => (
            <CanvaPreviewCard
              key={work.id}
              work={work}
              index={idx}
              onOpenModal={(w) => setActiveModalWork(w)}
            />
          ))}
        </div>

      </div>

      {/* Expanded Design Detail / Lightbox Modal */}
      <AnimatePresence>
        {activeModalWork && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeModalWork.name} preview modal`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveModalWork(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card border border-sage/40 rounded-3xl p-6 sm:p-8 max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalWork(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel text-ivory/70 hover:text-ivory hover:border-sage/50 transition-colors z-20"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-sage mb-2">
                <span>{activeModalWork.modNumber}</span>
                <span>/</span>
                <span>{activeModalWork.category}</span>
                <span>/</span>
                <span className="text-ivory/40">{activeModalWork.year}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ivory font-bold mb-3">
                {activeModalWork.name}
              </h3>

              <p className="text-ivory/70 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {activeModalWork.fullDesc}
              </p>

              {/* Large High-Resolution Visual Preview in Modal */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#09110e] border border-sage/25 mb-6 flex items-center justify-center p-2 sm:p-4 min-h-[320px] max-h-[560px]">
                <img
                  src={activeModalWork.thumbnail}
                  alt={`${activeModalWork.name} high-resolution`}
                  className="max-h-[520px] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Specs & Role */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-pine/60 border border-sage/20 mb-6 text-xs font-mono">
                <div>
                  <span className="text-ivory/40 uppercase block mb-1">Role / Capacity</span>
                  <span className="text-sage font-semibold">{activeModalWork.role}</span>
                </div>
                <div>
                  <span className="text-ivory/40 uppercase block mb-1">Organization / Context</span>
                  <span className="text-ivory">{activeModalWork.clientOrOrg}</span>
                </div>
                <div>
                  <span className="text-ivory/40 uppercase block mb-1">Tools Applied</span>
                  <span className="text-ivory">{activeModalWork.tools}</span>
                </div>
                <div>
                  <span className="text-ivory/40 uppercase block mb-1">Format</span>
                  <span className="text-ivory">{activeModalWork.pages || 'Brand Vector Spec'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-sage/20">
                {activeModalWork.viewUrl && (
                  <a
                    href={activeModalWork.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage text-pine text-xs font-semibold uppercase tracking-wider hover:bg-sage/90 transition-all shadow-md"
                  >
                    <span>View Official on Canva</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {activeModalWork.editUrl && (
                  <a
                    href={activeModalWork.editUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-panel border border-sage/40 text-ivory text-xs font-semibold uppercase tracking-wider hover:border-sage transition-all"
                  >
                    <Edit3 size={14} className="text-sage" />
                    <span>Open / Edit in Canva</span>
                  </a>
                )}

                {!activeModalWork.viewUrl && (
                  <span className="text-xs font-mono text-sage/80 italic">
                    Original brand identity designed by Soumya K.
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
