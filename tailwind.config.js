/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'bg-primary': '#0D0019',
        'dark-primary': '#6d28d9',
        'dark-secondary': '#7c3aed',
        'dark-secondary2': '#8b5cf6',
        'dark-secondary3': '#a78bfa',
        'dark-secondary4': '#c4b5fd',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
}

