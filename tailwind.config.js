/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fontFamily: ['Montserrat', 'sans-serif'],
    },

    extend: {
      colors: {
        customYellowDark: '#feaf00',
        customYellowLight: '#f8d442',
      },
    },
  },
  plugins: [],
};
