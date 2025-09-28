import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['InterRegular', 'sans-serif'],
        'inter-medium': ['InterMedium', 'sans-serif'],
        'poppins-semibold': ['PoppinsSemibold', 'sans-serif'],
        'sfpro': ['SFPro', 'sans-serif'],
        'sfpro-display': ['SFProDisplay', 'sans-serif'],
        'sfpro-semibold': ['SFProSemibold', 'sans-serif'],
        'sfpro-display-bold': ['SFProDisplayBold', 'sans-serif'],
        'overpass': ['Overpass', 'sans-serif'],
        'sfmono': ['SFMono', 'monospace'],
      },
      colors: {
        'background': 'var(--background-color)',
        'background-alt': 'var(--background-color-alt)',
        'accent': 'var(--accent-color)',
        'accent-alt': 'var(--accent-color-alt)',
        'font-primary': 'var(--font-color-primary)',
        'font-primary-alt': 'var(--font-color-primary-alt)',
        'font-secondary': 'var(--font-color-secondary)',
        'hover': 'var(--hover)',
      },
      maxWidth: {
        'site': 'var(--width)',
      },
      borderRadius: {
        'site': 'var(--corner-radius)',
      },
    },
  },
  plugins: [],
};

export default config;