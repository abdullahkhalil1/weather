// /** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const scrollbar = plugin(({ addUtilities }) => {
  addUtilities({
    '.scrollbar-none': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    },
  })
});

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        'bgPrimary': '#1a1b1d',
        'textGray': '#7a7b7a',
        'textLightGray': '#d1d1d1'
      },
    },
  },
  plugins: [scrollbar],
}

