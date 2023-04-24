/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /^(bg-|border-|text-|italic|mb|pr-|pl-|py-|font-|align-|flex|justify-|transition|duration-|ease-in-out|transform|scale-|p-|relative|overflow-|col-|mx-|my-|grid|grid-|gap-)/,
      variants: ['hover', 'active'],
    },
  ],
};
