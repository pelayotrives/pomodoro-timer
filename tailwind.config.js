/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
        'mono': ['SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['Open Sans'],
        'onlybody': ['Roboto'],
        'onlytitles': ['Rubik', 'Roboto'],
        'onlydetails': ['Teko']
    }
  },
  plugins: [],
}
