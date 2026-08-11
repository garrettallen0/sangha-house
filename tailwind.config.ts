import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brown-shift':
          'linear-gradient(120deg, #78350f, #a16207, #ca8a04, #d6a25a, #92400e, #78350f)',
        'brown-shift-glow':
          'linear-gradient(120deg, rgba(120, 53, 15, 0.45), rgba(161, 98, 7, 0.4), rgba(202, 138, 4, 0.35), rgba(214, 162, 90, 0.4), rgba(146, 64, 14, 0.4), rgba(120, 53, 15, 0.45))',
      },
      keyframes: {
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'venn-juggle': {
          '0%': { transform: 'rotate(0deg)', zIndex: '30' },
          '33%': { transform: 'rotate(120deg)', zIndex: '10' },
          '66%': { transform: 'rotate(240deg)', zIndex: '20' },
          '100%': { transform: 'rotate(360deg)', zIndex: '30' },
        },
        'venn-juggle-counter': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        'border-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'subtle-bounce': 'subtle-bounce 1.5s ease-in-out infinite',
        'venn-juggle': 'venn-juggle 10s linear infinite',
        'venn-juggle-counter': 'venn-juggle-counter 10s linear infinite',
        'border-shift': 'border-shift 4s ease infinite',
      },
    },
  },
  plugins: [],
}
export default config
