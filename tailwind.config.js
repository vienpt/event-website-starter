module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/heroImage.svg')"
      }
    },
  },
  plugins: [],
}
