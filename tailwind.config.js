/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./wwwroot/index.html",
        "./Layout/**/*.{razor,html,cshtml}",
        "./Pages/**/*.{razor,html,cshtml}",
        "./node_modules/flowbite/dist/flowbite.min.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
