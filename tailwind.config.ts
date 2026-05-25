import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#8B2C2C',
          'crimson-dark': '#6B1F1F',
          'crimson-light': '#A83535',
          charcoal: '#2B2B29',
          cream: '#FDF9F7',
          border: '#E0D5D0',
          muted: '#666666',
          soft: '#F5F5F5',
        },
      },
      fontFamily: {
        display: ['"Passions Conflict"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px rgba(139,44,44,0.08), 0 1px 4px rgba(43,43,41,0.04)',
        'warm-lg': '0 12px 48px rgba(139,44,44,0.12), 0 4px 16px rgba(43,43,41,0.06)',
        'warm-xl': '0 24px 72px rgba(139,44,44,0.16), 0 8px 24px rgba(43,43,41,0.08)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;
