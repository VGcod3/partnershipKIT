import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bec-orange': "#f5a020",
        'bec-darker': "#b17413",
        'bec-grey': "#d9d9d9",
        'bec-bg': "#181619",
        'bec-svg': "#242225",
      }
    },
  },
  plugins: [],
}
export default config
