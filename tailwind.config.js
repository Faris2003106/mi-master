/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

     // single component styles
    "./node_modules/@nextui-org/theme/dist/components/button.js", 
     // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ['Alexandria', 'serif']
      },
      
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

