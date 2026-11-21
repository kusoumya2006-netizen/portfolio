/**
 * Global Design Tokens & Palette Constants
 * Establishes the core visual identity: Deep Pine, Champagne Ivory, Sage, and Brushed Silver.
 */
export const THEME_COLORS = {
  pine: {
    DEFAULT: '#070f0c',
    deep: '#040907',
    surface: '#0a1410',
    card: '#0d1813',
    elevated: '#122019',
    border: '#1a2b22',
  },
  sage: {
    DEFAULT: '#9AA58B',
    light: '#B2BDA3',
    dark: '#7A856B',
    subtle: 'rgba(154, 165, 139, 0.15)',
    glow: 'rgba(154, 165, 139, 0.25)',
  },
  ivory: {
    DEFAULT: '#FAF9F5',
    champagne: '#E8E1CE',
    dim: '#C5C0B3',
    muted: '#9E9A8E',
  },
  silver: {
    DEFAULT: '#C0C0C8',
    metallic: '#D1D1D8',
    brushed: '#9898A0',
  },
} as const

export const TYPOGRAPHY = {
  fonts: {
    display: '"DM Serif Display", serif',
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  lineHeights: {
    tight: 1.15,
    snug: 1.3,
    relaxed: 1.65,
  },
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const
