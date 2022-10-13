/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code'],
        'fira-bold': ['Fira Code', 'bold']
      }
    },
  },
  plugins: [],
}