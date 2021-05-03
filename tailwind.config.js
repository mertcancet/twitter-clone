const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1DA1F2',
          dark: '#1A91DA',
          darkest: '#162D40',
        },
        gray: {
          light: '#E1E8ED',
          DEFAULT: '#AAB8C2',
          dark: '#657786',
          darkest: '#14171A',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
