import type { Config } from "tailwindcss";

const config: Config = {
  // BAGIAN PENTING: Ini memberi tahu Tailwind file mana yang harus diwarnai
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f4',
          100: '#fceee6',
          200: '#f8dbc4',
          300: '#f3c49d',
          400: '#eeac76',
          500: '#d4a574', // Rose gold utama (lebih warm)
          600: '#c1925e',
          700: '#a67b4a',
          800: '#8b653c',
          900: '#725331',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#e8b86d', // Accent gold
          500: '#d4a574',
          600: '#b8935f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
export default config;