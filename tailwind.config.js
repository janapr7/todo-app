/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      base: '18px',
    },
    extend: {
      fontFamily: {
        default: ["Josefin Sans"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        brightBlue: 'hsl(220, 98%, 61%)',

        lVLGray: 'hsl(0, 0%, 98%)',
        lVLGrayishBlue: 'hsl(236, 33%, 92%)',
        lLGrayishBlue: 'hsl(233, 11%, 84%)',
        lDGrayishBlue: 'hsl(236, 9%, 61%)',
        lVDGrayishBlue: 'hsl(235, 19%, 35%)',

        dVLGray: 'hsl(235, 21%, 11%)',
        dVLGrayishBlue: 'hsl(235, 24%, 19%)',
        dLGrayishBlue: 'hsl(234, 39%, 85%)',
        dLGrayishBlueHover: 'hsl(236, 33%, 92%)',
        dDGrayishBlue: 'hsl(236, 9%, 61%)',
        dVDGrayishBlue: 'hsl(235, 19%, 35%)'
      },
    },
  },
  plugins: [],
}

