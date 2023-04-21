/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E2030',
        'button': '#0066FF',
        'blueShadow': 'rgba(0, 102, 255, 0.80)',
      },
      boxShadow: {
        '3xl': '0 0px 20px 0px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'mb': {'max': '820px'},
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        'blur': 'linear-gradient(to right, rgba(30, 32, 48, 1), rgba(30, 32, 48, 0.90), rgba(30, 32, 48, 0.50), rgba(30, 32, 48, 0), rgba(30, 32, 48, 0), rgba(18, 20, 39, 0))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
