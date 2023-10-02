import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    colors  : {
      'orange' :'#FFB84C',
      'purple' : '#57375D'
      

    },
    fontFamily:{
      
      'Nunito': ['Nunito', 'sans-serif'],
      'DM Sans': ['DM Sans', 'sans-serif'],
      'Quicksand': ['Quicksand', 'sans-serif'],
    
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

export const plugins = [require("@tailwindcss/typography")]
