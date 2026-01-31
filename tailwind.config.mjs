/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /**
         * Premium restaurant palette (inspired by the reference):
         * deep pine greens + warm copper accent.
         */
        pine: {
          950: '#0b1616',
          900: '#0f2020',
          800: '#142b2b',
          700: '#1f2d2d',
          600: '#223b3b',
          500: '#2f4a4a',
          400: '#3b5f5f'
        },
        copper: {
          50: '#fbf2ea',
          100: '#f6e2d3',
          200: '#ecc4a7',
          300: '#e2a77c',
          400: '#d39969',
          500: '#bf7e4f',
          600: '#9c5e34',
          700: '#7a4523',
          800: '#5b3218',
          900: '#3d200f'
        },
        paper: {
          50: '#fbfaf7',
          100: '#f4f1ea',
          200: '#e7e0d4'
        },
        // Backwards compatibility for existing classes (now mapped to copper)
        gold: {
          50: '#fbf2ea',
          100: '#f6e2d3',
          200: '#ecc4a7',
          300: '#e2a77c',
          400: '#d39969',
          500: '#bf7e4f',
          600: '#9c5e34',
          700: '#7a4523',
          800: '#5b3218',
          900: '#3d200f'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(211,153,105,0.18), 0 24px 80px rgba(0,0,0,0.55)'
      },
      backgroundImage: {
        'radial-copper': 'radial-gradient(820px circle at var(--x, 50%) var(--y, 50%), rgba(211,153,105,0.16), rgba(0,0,0,0) 58%)'
      }
    }
  },
  plugins: []
};
