import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface CSEProcessorInsigniaProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showLabels?: boolean
}

export default function CSEProcessorInsignia({
  size = 'md',
  className = '',
}: CSEProcessorInsigniaProps) {
  const [hovered, setHovered] = useState(false)

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-44 h-44',
  }

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
    >
      {/* Outer ambient glow */}
      <div
        className={`absolute inset-0 rounded-2xl bg-sage/20 blur-xl transition-opacity duration-500 pointer-events-none ${
          hovered ? 'opacity-80 scale-110' : 'opacity-30'
        }`}
      />

      {/* SVG Microprocessor Graphics */}
      <svg viewBox="0 0 160 160" className="w-full h-full relative z-10" aria-label="CSE Custom Processor Insignia">
        <defs>
          {/* Substrate gradient */}
          <linearGradient id="dieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1F2F2A"/>
            <stop offset="50%" stop-color="#14211D"/>
            <stop offset="100%" stop-color="#0B1310"/>
          </linearGradient>

          {/* Core metallic die gradient */}
          <linearGradient id="coreDie" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2D433B"/>
            <stop offset="45%" stop-color="#1C2C25"/>
            <stop offset="100%" stop-color="#111B17"/>
          </linearGradient>

          {/* Brushed silver bezel */}
          <linearGradient id="silverBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D8D0BD"/>
            <stop offset="50%" stop-color="#B5B5AD"/>
            <stop offset="100%" stop-color="#6F746B"/>
          </linearGradient>

          {/* Glowing pin gold/sage */}
          <linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#D8D0BD"/>
            <stop offset="100%" stop-color="#9AA58B"/>
          </linearGradient>
        </defs>

        {/* Outer Peripheral Bus Traces */}
        <g opacity={hovered ? '0.85' : '0.45'} className="transition-opacity duration-300">
          {/* Top Pins */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`tp-${i}`}
              x1={36 + i * 11}
              y1="4"
              x2={36 + i * 11}
              y2="20"
              stroke="url(#pinGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          {/* Bottom Pins */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`bp-${i}`}
              x1={36 + i * 11}
              y1="140"
              x2={36 + i * 11}
              y2="156"
              stroke="url(#pinGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          {/* Left Pins */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`lp-${i}`}
              x1="4"
              y1={36 + i * 11}
              x2="20"
              y2={36 + i * 11}
              stroke="url(#pinGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          {/* Right Pins */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`rp-${i}`}
              x1="140"
              y1={36 + i * 11}
              x2="156"
              y2={36 + i * 11}
              stroke="url(#pinGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Substrate Carrier Body */}
        <rect
          x="18"
          y="18"
          width="124"
          height="124"
          rx="14"
          fill="url(#dieGrad)"
          stroke="url(#silverBezel)"
          strokeWidth="1.5"
        />

        {/* Corner Heat Sink Bolts */}
        <circle cx="28" cy="28" r="2.5" fill="#B5B5AD" opacity="0.6"/>
        <circle cx="132" cy="28" r="2.5" fill="#B5B5AD" opacity="0.6"/>
        <circle cx="28" cy="132" r="2.5" fill="#B5B5AD" opacity="0.6"/>
        <circle cx="132" cy="132" r="2.5" fill="#B5B5AD" opacity="0.6"/>

        {/* Technical Sub-Engravings */}
        <text x="32" y="38" font-family="'Courier New', monospace" font-size="6" fill="#9AA58B" letter-spacing="1">
          LOGIC
        </text>
        <text x="128" y="38" text-anchor="end" font-family="'Courier New', monospace" font-size="6" fill="#9AA58B" letter-spacing="1">
          CS/2028
        </text>
        <text x="32" y="128" font-family="'Courier New', monospace" font-size="6" fill="#B5B5AD" opacity="0.6" letter-spacing="1">
          0x7F_ALU
        </text>
        <text x="128" y="128" text-anchor="end" font-family="'Courier New', monospace" font-size="6" fill="#B5B5AD" opacity="0.6" letter-spacing="1">
          SYSTEMS
        </text>

        {/* Central Core Die Plate */}
        <rect
          x="38"
          y="38"
          width="84"
          height="84"
          rx="10"
          fill="url(#coreDie)"
          stroke="#9AA58B"
          strokeWidth="1.2"
        />

        {/* Internal Circuit Wave Traces */}
        <path
          d="M 45 80 L 60 80 L 68 70 L 92 70 L 100 80 L 115 80"
          fill="none"
          stroke="#9AA58B"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity={hovered ? '0.8' : '0.4'}
        />

        {/* Animated Computational Center Nodes */}
        <circle cx="45" cy="80" r="1.5" fill="#D8D0BD"/>
        <circle cx="115" cy="80" r="1.5" fill="#D8D0BD"/>

        {/* Main Monogram: CSE (Computer Science & Engineering) */}
        <text
          x="80"
          y="76"
          text-anchor="middle"
          font-family="Georgia, serif"
          font-size="28"
          font-weight="bold"
          fill="#D8D0BD"
          letter-spacing="2"
        >
          CSE
        </text>

        {/* Sub-label inside processor */}
        <text
          x="80"
          y="93"
          text-anchor="middle"
          font-family="'Courier New', monospace"
          font-size="7.5"
          font-weight="600"
          fill="#9AA58B"
          letter-spacing="2"
        >
          COMPUTE · CORE
        </text>

        {/* Quantum Orbital Loop inside Processor */}
        <ellipse
          cx="80"
          cy="80"
          rx="32"
          ry="14"
          fill="none"
          stroke="#9AA58B"
          strokeWidth="0.6"
          opacity="0.5"
          transform="rotate(30 80 80)"
        />
      </svg>
    </motion.div>
  )
}
