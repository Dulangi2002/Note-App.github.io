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
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

export const plugins = [require("@tailwindcss/typography")]
