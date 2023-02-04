/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleIn: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%',
            opacity: 0
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: '0% 100%',
            opacity: 1
          }
        }
      },
      animation: {
        scaleIn: 'scaleIn 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      },
      backgroundImage: {
        'hero': "linear-gradient(to right bottom, rgb(121 83 131 / 90%), rgb(41 105 185 / 90%)), url('./src/assets/home-page.jpg')"
      }
    },
  },
  plugins: [],
}
