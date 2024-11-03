/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1D2D50',
        lightGray: '#F0F4F8',
      },
    },
  },
  plugins: [],
}

