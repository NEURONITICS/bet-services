/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Font Family
      fontFamily: {
        primary: ['Bebas Neue', 'cursive'],
        secondary: ['Glory', 'sans-serif'],
      },

      // colors
      colors: {
        primary: '#085393',
        'gray-700': '#344054',
        'red-500': '#D61727',
        black: '#000000',
      },

      // Media Query screen sizes
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px',
        '3xl': '1920px',
        'max-sm': { max: '374px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1199px' },
        'max-2xl': { max: '1439px' },
        'max-3xl': { max: '1919px' },
      },
    },
  },
  plugins: [],
};
