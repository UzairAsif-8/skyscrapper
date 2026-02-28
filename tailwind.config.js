/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0f3b82',
          primaryDark: '#072352',
          accent: '#60a5fa',
          soft: '#eff6ff',
          midnight: '#020617',
        },
      },
      boxShadow: {
        'brand-xl': '0 24px 80px rgba(15, 59, 130, 0.35)',
        'brand-soft': '0 18px 45px rgba(15, 59, 130, 0.18)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(15,59,130,0.28), transparent 60%)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}

