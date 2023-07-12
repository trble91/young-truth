/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  options: {
    safelist: [
"flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center",
"absolute top-40 uppercase tracking-[20px] text-gray-300 text-2xl sm:text-gray-300 snap-center",
"flex absolute flex-row text-center text-gray-300 top-56 xl:flex-row xl:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] items-center snap-center",
"flex relative bottom-5 sm:text-sm md:text-sm xl:text-base",
"sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center",
"flex flex-row items-center",
'flex flex-col items-center snap-center',
"flex max-h-screen",

    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
},
  plugins: [],
}
