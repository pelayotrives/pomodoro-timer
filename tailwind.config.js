/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'reddy': '0px 8px 20px 2px rgba(199,22,40,.5)',
      }
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
