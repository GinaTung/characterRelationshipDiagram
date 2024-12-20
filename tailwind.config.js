import tailwindcssPrimeui from 'tailwindcss-primeui';

export default {
  plugins: [tailwindcssPrimeui],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    backgroundColor: {
      'kg-color': '#f7f7f7',
    },
    extend: {},
  },
};
