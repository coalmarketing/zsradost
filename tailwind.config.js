/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "selector",
  content: {
    files: ["./src/**/*.{html,njk,js}"],
    extract,
  },
  theme: {
    fontSize: fontSize,
    screens: screens,
    extend: {
      fontFamily: {
        "sans": ["Space Grotesk", defaultTheme.fontFamily.sans],
        "proxima-nova": ["proxima-nova", defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#218380",
        secondary: "#FFC30C",
        tertiary: "#2159AA",
        purple: "#B52BFF",
        blue: "#118EFF",
        green: "#0DA84A",
      }
    },
  },
  plugins: [
    fluid,
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}