/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#CCEFFF',
        'custom-color-2': '#279EFF'
        
      }
    },
  },
  plugins: [],
});

