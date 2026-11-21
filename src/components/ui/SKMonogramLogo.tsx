import React from 'react'

interface SKLogoProps {
  className?: string
  size?: number | string
  withText?: boolean
  subtext?: string
  glow?: boolean
}

export default function SKMonogramLogo({
  className = '',
  size = 64,
  withText = false,
  subtext = 'CREATIVE TECHNOLOGIST · CSE',
  glow = true
}: SKLogoProps) {
  const dimension = typeof size === 'number' ? `${size}px` : size

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 group cursor-pointer"
        style={{ width: dimension, height: dimension }}
      >
        {/* Ambient Glow */}
        {glow && (
          <div className="absolute inset-0 rounded-full bg-sage/20 blur-md pointer-events-none group-hover:bg-sage/35 transition-all duration-500" />
        )}

        <svg
          viewBox="0 0 240 240"
          className="w-full h-full relative z-10 filter drop-shadow-[0_2px_12px_rgba(154,165,139,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Champagne Silver & Gold Gradient */}
            <linearGradient id="skSilverGrad" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#E2E5DC" />
              <stop offset="50%" stopColor="#C4C9BA" />
              <stop offset="75%" stopColor="#9AA58B" />
              <stop offset="100%" stopColor="#F5EFE6" />
            </linearGradient>

            <linearGradient id="skGoldGlint" x1="60" y1="40" x2="180" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5EFE6" />
              <stop offset="35%" stopColor="#E4DDD0" />
              <stop offset="70%" stopColor="#9AA58B" />
              <stop offset="100%" stopColor="#6C7A68" />
            </linearGradient>

            <linearGradient id="orbitalRingGrad" x1="10" y1="100" x2="230" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9AA58B" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#E2E5DC" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#9AA58B" stopOpacity="0.2" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Ambient Circle Mesh */}
          <circle cx="120" cy="120" r="105" stroke="url(#skSilverGrad)" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="3 3" />
          <circle cx="120" cy="120" r="92" stroke="url(#skSilverGrad)" strokeWidth="0.5" strokeOpacity="0.15" />

          {/* Outer Quantum Orbital Ellipse Ring (Tilted) */}
          <g transform="rotate(-24 120 120)">
            <ellipse
              cx="120"
              cy="120"
              rx="102"
              ry="38"
              stroke="url(#orbitalRingGrad)"
              strokeWidth="2.2"
              fill="none"
              filter="url(#softGlow)"
            />
            {/* Orbital Quantum Particle / Node */}
            <circle cx="218" cy="120" r="4.5" fill="#FFFFFF" />
            <circle cx="218" cy="120" r="8" fill="#9AA58B" fillOpacity="0.4" />
          </g>

          {/* S Monogram (Majestic calligraphic / serif curvature) */}
          <path
            d="M 125 58 C 112 55, 88 56, 75 68 C 62 80, 64 96, 76 106 C 92 119, 118 123, 126 136 C 134 149, 128 168, 112 176 C 96 184, 76 182, 60 172 C 54 168, 48 161, 46 156 M 122 58 C 130 60, 137 66, 138 74 C 139 82, 134 89, 127 92"
            stroke="url(#skSilverGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Secondary S Hairline Finial Swash */}
          <path
            d="M 46 158 C 42 166, 44 176, 52 183 C 65 194, 90 197, 112 191 C 138 184, 150 162, 144 140 C 137 122, 112 114, 95 103 C 82 94, 80 84, 87 75 C 96 64, 114 62, 126 64"
            stroke="url(#skGoldGlint)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* K Stem (Vertical serif pillar) */}
          <path
            d="M 124 64 L 124 178 M 116 64 L 132 64 M 114 178 L 134 178"
            stroke="url(#skSilverGrad)"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* K Upper Diagonal Arm */}
          <path
            d="M 124 122 L 175 68 M 165 64 L 184 64"
            stroke="url(#skSilverGrad)"
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {/* K Lower Diagonal Leg with elegant terminal sweep */}
          <path
            d="M 126 118 L 180 178 M 168 178 L 192 178"
            stroke="url(#skGoldGlint)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Central Singularity Light Flare / Starburst at intersection */}
          <g transform="translate(124, 120)">
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" filter="url(#softGlow)" />
            {/* 4-point star flare */}
            <path d="M 0 -22 L 3 -4 L 22 0 L 3 4 L 0 22 L -3 4 L -22 0 L -3 -4 Z" fill="#FFFFFF" fillOpacity="0.9" />
            <path d="M 0 -14 L 2 -2 L 14 0 L 2 2 L 0 14 L -2 2 L -14 0 L -2 -2 Z" fill="#E2E5DC" />
          </g>

          {/* Floating Subtle Computational Tag: </> */}
          <g transform="translate(162, 42) scale(0.65)">
            <text
              x="0"
              y="18"
              fill="#9AA58B"
              fontFamily="monospace"
              fontSize="20"
              fontWeight="bold"
              letterSpacing="1"
              opacity="0.8"
            >
              &lt;/&gt;
            </text>
          </g>
        </svg>
      </div>

      {/* Optional Identity Typography */}
      {withText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="font-display tracking-[0.25em] text-ivory text-sm sm:text-base uppercase font-bold leading-none">
              SOUMYA KUMAR
            </span>
          </div>
          <span className="text-[10px] font-mono text-sage tracking-[0.18em] uppercase mt-1">
            {subtext}
          </span>
        </div>
      )}
    </div>
  )
}
