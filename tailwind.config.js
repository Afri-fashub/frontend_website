/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-custom-md': { max: '850px' },  // Below 850px
        'max-custom-sm': { max: '768px' },  // Below 768px
        'max-custom-ssm': { max: '670px' },  // Below 670px
        'min-custom-md': '768px' //Above 768px
      },
    },
  },
  plugins: [],
}
