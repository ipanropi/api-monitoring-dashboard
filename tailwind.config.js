/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  extend: {
    gridTemplateColumns: {
      '16': 'repeat(16, minmax(0, 1fr))',
      '14': 'repeat(14, minmax(0, 1fr))',
      '15': 'repeat(15, minmax(0, 1fr))'
      // You can add more custom column counts if needed
    },
    plugins: [],
  }
}

