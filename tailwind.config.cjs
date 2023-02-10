/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/public/assets/bg-real.svg')",
      },
      height: {
        jumbotron: '36rem',
      },
      colors: {
        'pink-100': '#FFE1E1',
        'pink-200': '#FF9D9D',
        'pink-300': '#FF8B8B',
        'purple-200': '#CA69F8',
        'black-100': '#4A4A4A',
      },
    },
  },
  plugins: [],
}