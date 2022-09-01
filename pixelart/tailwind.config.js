/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        
        '3': 'repeat(3, 1fr)',
        '12': 'repeat(12,1fr)',
        '16': 'repeat(16, 1fr)',
        '32': 'repeat(32, 1fr)',

      },
      gridTemplateColumns: {
        '3': 'repeat(3, 1fr)',
        '8': 'repeat(8, 1fr)',
        '12': 'repeat(12, 1fr)',
        '16': 'repeat(16,1fr)',
        '32': 'repeat(32, 1fr)',
      },
    },
  },
  plugins: [],
}
