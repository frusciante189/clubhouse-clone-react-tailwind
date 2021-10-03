module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "club": "0 8px 0 #bfa78c",
        "orange": "0 8px 0 #fd9a2f",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
