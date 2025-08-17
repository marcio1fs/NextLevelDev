/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#3b82f6', // blue-500
        'brand-secondary': '#8b5cf6', // violet-500
        'accent-neon': '#4ade80', // green-400
        'dark-bg': '#020617', // slate-950
        'dark-card': '#0f172a', // slate-900
        'dark-text': '#e2e8f0', // slate-200
        'dark-text-secondary': '#94a3b8', // slate-400
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
         glow: {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(59, 130, 246, 0.3), 0 0 10px -7px rgba(139, 92, 246, 0.2)' },
          '50%': { boxShadow: '0 0 35px 0px rgba(59, 130, 246, 0.4), 0 0 15px -5px rgba(139, 92, 246, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
