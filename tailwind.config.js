/* eslint-env node */
/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Noto Naskh Arabic', 'Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

