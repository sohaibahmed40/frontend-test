/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#343C6A',
        secondary: '#718EBF',
        black: '#232323',
      },
      backgroundImage: {
        'dark-gradient':
          'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'white-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
};
