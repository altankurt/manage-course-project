/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fontFamily: ['Montserrat', 'sans-serif'],
    },

    extend: {
      colors: {
        YellowDark: '#feaf00',
        YellowLight: '#f8d442',
        SidebarBg: '#e7e5e4',
      },
    },
  },
  plugins: [],
};
