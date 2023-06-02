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
      colors: {
        red: {
          400: '#f65351',
        },
        blue: {
          100: '#f7fafd',
          200: '#e5effa',
          300: '#dde7ee',
          400: '#0a317b',
          500: '#939dae',
          600: '#5e6778',
          700: '#1c202b',
        },
      },
    },
  },
  plugins: [],
}

// ### Primary

// - Red: hsl(1, 90%, 64%) 	                            #f65351
// - Blue: hsl(219, 85%, 26%)                           #0a317b

// ### Neutral

// - White: hsl(0, 0%, 100%)                            #ffffff
// - Very light grayish blue: hsl(210, 60%, 98%)        #f7fafd
// - Light grayish blue 1: hsl(211, 68%, 94%)           #e5effa
// - Light grayish blue 2: hsl(205, 33%, 90%)           #dde7ee
// - Grayish blue: hsl(219, 14%, 63%)                   #939dae
// - Dark grayish blue: hsl(219, 12%, 42%)              #5e6778
// - Very dark blue: hsl(224, 21%, 14%)                 #1c202b
