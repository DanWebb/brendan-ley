module.exports = {
  purge: {
    enabled: true,
    content: ['./src/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
      serif: ['dm-serif-display', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
