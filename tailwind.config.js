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
        'max-custom-sssm': { max: '450px' }, // Below 450px
        'max-custom-msm': { max: '550px' }, // Below 550px
        'max-custom-ssssm': { max: '343px' }, // Below 343px
        'min-custom-md': '768px' //Above 768px
      },
    },
  },
  plugins: [],
}
