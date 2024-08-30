/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },

    backgroundImage: {
      'custom-image': "url('./images/Grainy.jpg')",
    },

    // colors: {
    //   yellow: 'var(--yellow)', // Define your custom color
    // },

    // animation: {
    //   yellow: 'yellow 8s infinite ease', // Define your custom animation
    // },

    // keyframes: {
    //   yellow: {
    //     0% {top: [200px]; left: [100px]; transform: scale(1);},
    //     30% {top: [300px]; left: [150px; transform: scale(1.2);},
    //     60% {top: 100px; left: 200px; transform: scale(1.3);},
    //     100% {top: 200px; left: 100px; transform: scale(1);},
    //   },
    // },
  }, 
  plugins: [],
};