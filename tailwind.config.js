/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'reddy': '0px 8px 20px 2px rgba(199,22,40,.5)',
      },
      height: {
        'small': '25vh',
        'medium': '50vh',
        'big': '75vh',
        'enormous': '85vh',
        'giga': '95vh'
      }
    },
    fontFamily: {
      'mono': ['SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'onlybody': ['Roboto'],
      'onlytitles': ['Rubik', 'Roboto'],
      'onlydetails': ['Teko']
    },
    screens: {
      'xs': '359px',
      'sm': '375px',
      'md': '500px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
