module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background2: '#1E1E1E',
        backgroundDarker: '#111111',
      },
      screens: {
        xs: { max: '420px' },
        '2xs': { max: '365px' },
      },
    },
  },
  plugins: [],
};
