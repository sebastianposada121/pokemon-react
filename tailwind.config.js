/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-100': 'repeat(auto-fit, minmax(15rem, 1fr))'
      },
      colors: {
        
      },
      backgroundImage: {
        'card': 'url("https://pokewalls.files.wordpress.com/2020/05/873frosmoth1600x1200.jpg")',
      },
      height: {
        'detail': '75vh'
      }
    }
  },
  plugins: [],
}