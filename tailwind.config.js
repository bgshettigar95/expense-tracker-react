/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9833ea',
      },

      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

