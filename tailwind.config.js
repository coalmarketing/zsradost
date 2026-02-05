/** @type {import('tailwindcss').Config} */
const { extract, fontSize, screens } = require('fluid-tailwind')
const fluid = require('fluid-tailwind').default
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: {
    files: ["./src/**/*.{html,njk,js}"],
    extract,
  },
  safelist: [
    { pattern: /^text-(primary|secondary|tertiary|purple|blue|green)$/, variants: ['group-hover'] },
    { pattern: /^fill-(primary|secondary|tertiary|purple|blue|green)$/, variants: ['group-hover'] },
    { pattern: /^bg-(primary|secondary|tertiary|purple|blue|green)$/ },
  ],
  theme: {
    fontSize: fontSize,
    screens: screens,
    extend: {
      fontFamily: {
        "sans": ["Arsenal", "Space Grotesk", ...defaultTheme.fontFamily.sans],
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