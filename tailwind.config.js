/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
        'mono': ['Open Sans', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['Open Sans'],
        'onlybody': ['Roboto'],
        'onlytitles': ['Rubik', 'Roboto', 'Teko'],
    }
  },
  plugins: [],
}
