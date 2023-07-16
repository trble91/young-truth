/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        "absolute top-40 uppercase tracking-[20px] text-gray-300 text-2xl sm:text-gray-300 snap-center",
        "flex absolute flex-row text-center text-gray-300 top-56 xl:flex-row xl:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] items-center snap-center",
        "flex relative bottom-5 sm:text-sm md:text-sm xl:text-base",
        "sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center",
        "flex flex-row items-center",
        "flex flex-col items-center snap-center",
        "flex max-h-screen",
        "rounded-l-2xl min-w-[200px]",
        "rounded-r-2xl min-w-[200px]",
        "min-w-[200px]",
        "flex flex-row justify-center snap-center",
        "relative p-40 pl-20 pr-20 sm:min-w-[400px]",
        "flex relative justify-center",
        "snap-mandatory max-h-screen overflow-y-auto",
        "flex relative text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] mx-auto items-center snap-center overflow-scroll",
        "absolute top-12 uppercase tracking-[20px] text-gray-300 text-2xl sm:text-gray-300 snap-center",
        "flex absolute flex-row text-center text-gray-300 top-20 xl:flex-row items-center snap-center",
        "flex relative sm:text-sm md:text-sm xl:text-base",
        "flex relative flex-row sm:top-8 sm:bottom-12 xl:top-12 xl:bottom-8 justify-center snap-center sm:max-w-[600px] -pt-20 pb-80",


      ],
    },
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [],
};
