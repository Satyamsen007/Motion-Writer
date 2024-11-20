/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proximaBold': ['Proxima Nova Alt Bold', 'cursive'],
        'proximaRegular': ['Proxima Nova Regular', 'cursive'],
        'ProximaAltCondensedRegular': ['Proxima Nova Alt Condensed Regular', 'cursive'],
        'ProximaExtraCondensedRegular': ['Proxima Nova Alt Extra Condensed Regular', 'cursive'],
        'ProximaAltRegular': ['Proxima Nova Alt Regular', 'cursive'],
        'ProximaNovaBlack': ['Proxima Nova Black', 'cursive'],
        'ProximaScOsfRegular': ['Proxima Nova ScOsf Regular', 'cursive'],
        'BeautyDemo': ['BeautyDemo', 'cursive']
      },
      colors: {
        'primary': '#4583B4',
        'secondary': '#F8CB46',
        'textColor': '#2F2F2F',
        'bgColor': '#FFFFFF'
      }
    },
  },
  plugins: [],
}