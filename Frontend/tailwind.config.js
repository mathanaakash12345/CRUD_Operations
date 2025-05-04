/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        prim:'#385a64',
        sec:'#00dfc0',
        orange:'#ff5c01',
        lig:'#489a00',
        vio:'#9c01bc',
        blue:'#0070ba',
        yellow:'#ffe200',
      },
    },
  },
  plugins: [],
}