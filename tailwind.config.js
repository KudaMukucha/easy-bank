/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.html"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        "grayish-blue":"hsl(233, 8%, 62%)",
        "light-grayish-blue":"hsl(220, 16%, 96%)",
        "very-light-gray":"hsl(0, 0%, 98%)",
        "dark-blue":"hsl(233, 26%, 24%)",
        "lime-green":"hsl(136, 65%, 51%)",
        "bright-cyan":" hsl(192, 70%, 51%)",
      },
      fontFamily:{
        "public-sans": ['Public Sans'],
      },
    },
    
  },
  plugins: [],
}