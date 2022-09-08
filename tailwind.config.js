/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'oswald' : ['Oswald', 'sans-serif'],
        'spinnaker' : ['Spinnaker', 'sans-serif'],
        'helvetica' : ['Helvetica'], 
        'segoe' : ['Segoe UI', 'sans-serif'], 
      }
    },
    screens: {
      'xs' : '400px',
      'sm' : '602px',
      'md' : '768px',
      'lg' : '1063px'
    } 
  },
  plugins: [],
}
