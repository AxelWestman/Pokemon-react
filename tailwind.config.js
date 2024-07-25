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
        'pixel': "url(https://github.com/AxelWestman/Pokemon-react/blob/main/public/image/background.png?raw=true)"
      }
    },
  },
  plugins: [],
}

