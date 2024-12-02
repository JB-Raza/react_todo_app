/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '400px',
      md: '768px',
      lg: '976px',
    },
    extend: {},
  },
  plugins: [],
}