import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // Include all relevant files in the pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include all relevant files in the components directory
    './app/**/*.{js,ts,jsx,tsx,mdx}',       // Include all relevant files in the app directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
