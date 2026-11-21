/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ['./renderer/pages/**/*.{js,ts,jsx,tsx}', './renderer/components/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
