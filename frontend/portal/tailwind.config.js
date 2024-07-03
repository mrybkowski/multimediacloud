/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rose: {
        500: "#f43f5e"
      },
      violet: {
        500: "#8b5cf6"
      },
      cyan: {
        500: "#06b6d4"
      },
      orange: {
        500: "#f97316"
      },
      green: {
        500: "#22c55e"
      }
    },
  },
  plugins: [],
}

