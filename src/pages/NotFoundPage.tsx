import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'
import SKMonogramLogo from '../components/ui/SKMonogramLogo'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center px-6 matrix-dots">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 sm:p-10 border border-sage/35 text-center relative overflow-hidden shadow-2xl">
        <div className="flex justify-center mb-6">
          <SKMonogramLogo size={48} glow={true} />
        </div>
        
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-sage mb-2 font-semibold">
          Error 404 · Uncharted Coordinate
        </p>
        
        <h1 className="font-display text-4xl sm:text-5xl text-ivory font-bold mb-4">
          Lost in the Matrix.
        </h1>
        
        <p className="text-sm text-ivory/65 leading-relaxed font-sans mb-8">
          The requested coordinate or project record does not exist on this server or has shifted to a new orbital path.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sage text-pine text-xs font-mono font-bold hover:bg-sage/90 transition-all shadow-md"
          >
            <Home size={14} />
            <span>Return to Base</span>
          </Link>
          
          <Link
            to="/#atlas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass-panel border border-sage/35 text-ivory text-xs font-mono hover:border-sage transition-all"
          >
            <Compass size={14} className="text-sage" />
            <span>Explore Atlas</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
