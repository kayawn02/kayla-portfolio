/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        galaxy: {
          abyss: '#081426',     // Deepest space void background
          void: '#050c18',      // Extreme dark void
          navy: '#142A44',      // Deep cosmic navy (cards & surfaces)
          surface: '#0f2038',   // Elevated card surface
          blue: '#4A74A7',      // Celestial galaxy blue (brand accent)
          bright: '#5a86bc',    // Bright hover galaxy blue
          sky: '#38bdf8',       // Neon starlight cyan
          starlight: '#DCEAF7', // Soft icy starlight highlight
          glow: 'rgba(74, 116, 167, 0.45)',
        },
        dark: {
          bg: '#081426',
          surface: '#0c1b33',
          card: '#142A44',
          cardHover: '#1c395c',
          border: 'rgba(220, 234, 247, 0.1)',
          borderBlue: 'rgba(74, 116, 167, 0.35)',
        },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
