/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./Layout/**/*.{razor,html,cshtml,css}",
    "./Pages/**/*.{razor,html,cshtml,css}",
    "./node_modules/flowbite/dist/flowbite.min.{js,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
