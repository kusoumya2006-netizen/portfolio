import React from 'react'

interface EditorialBadgeProps {
  label: string
  sublabel?: string
  dot?: boolean
  variant?: 'sage' | 'champagne' | 'silver' | 'pine'
  className?: string
}

export default function EditorialBadge({
  label,
  sublabel,
  dot = false,
  variant = 'sage',
  className = '',
}: EditorialBadgeProps) {
  const variantStyles = {
    sage: 'bg-sage/10 text-sage border-sage/30',
    champagne: 'bg-[#E8E1CE]/10 text-[#E8E1CE] border-[#E8E1CE]/30',
    silver: 'bg-silver/10 text-[#D1D1D8] border-silver/30',
    pine: 'bg-pine text-sage border-sage/20',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono tracking-wider uppercase transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
      <span className="font-semibold">{label}</span>
      {sublabel && <span className="opacity-60 text-[10px] lowercase tracking-normal">({sublabel})</span>}
    </span>
  )
}
