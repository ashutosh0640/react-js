/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',  // Custom value for sm screens
        md: '481px',  // Custom value for md screens
        lg: '781px', // Custom value for lg screens
        xl: '1025px', // Custom value for xl screens
        xxl: '1201px', // Custom value for 2xl screens
      },
    },
  },
  plugins: [],
}

