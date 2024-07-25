/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dmserif': ["DM Serif Display"]
    },
    extend: {
      backgroundImage:{
        'pixel': "url(public/image/background.png)"
      }
    },
  },
  plugins: [],
}

