/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        gray: {
          '100': '#6d7f97',
          '200': '#ecf2f8'
        },
        blue: {
          '600': '#48556A'
        }
      },
      fontFamily: {
        manrope: 'var(--font-manrope)'
      },
      textColor: {
        gray: {
          '200': '#ecf2f8',
          '400': '#6d7f97',
          '600': '#48556a'
        },
      },
    },
  },
  plugins: [],
}
