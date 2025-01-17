import tailwindcssPrimeui from 'tailwindcss-primeui';

export default {
  plugins: [tailwindcssPrimeui],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
};
