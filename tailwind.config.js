/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'navres': '1125px',
      'calcres': '1057px',
    },
    extend: {
      colors: {
        'btn-gradient': 'linear-gradient(90deg, #CD3ED0 14.1%, #6B1495 144.51%)',
      },
    },
  },
  plugins: [],
}
