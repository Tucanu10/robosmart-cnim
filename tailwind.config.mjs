/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cal-poly-green': '#41B862',
        'royal-blue': '#0a2463',
        'light-cyan': '#D7EFF3',
        'gunmetal': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
