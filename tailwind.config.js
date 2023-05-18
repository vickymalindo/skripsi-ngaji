/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      hero: "url('./src/assets/images/al-quran.png')",
    },
    extend: {
      colors: {
        'dark-green': '#00AA13',
        'light-green': '#82F18F',
        'dropdown-cream': '#FFF1B9',
        'black-rgba': 'rgba(0, 0, 0, 0.125)',
        'normal-yellow': '#FFD217',
      },
      boxShadow: {
        'primary-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
