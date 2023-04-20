/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#00AA13',
        'light-green': '#82F18F',
      },
      boxShadow: {
        'primary-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
