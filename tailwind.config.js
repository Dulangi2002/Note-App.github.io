import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

export const plugins = [require("@tailwindcss/typography")]
