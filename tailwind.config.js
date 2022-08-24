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
        'great': '80vh',
        'enormous': '85vh',
        'ultra': '90vh',
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
      'xsm': '350px',
      'sm': '375px',
      'xxxmd': '390px',
      'xxmd': '400px',
      'xmd': '500px',
      'md': '550px',
      'xlg': '700px',
      'lg': '1024px',
      'xxl': '1142px',
      'xl': '1280px',
      '2xl': '1350px',
      '3xl': '1536px',
    }
  },
  plugins: [],
}
