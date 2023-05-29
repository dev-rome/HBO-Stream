/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "calc-height": "calc(100vh - 3.75rem)",
      },
      width: {
        "calc-width": "calc(100vw - 4.375rem)",
      },
      backgroundImage: {
        "background-main-image": "url('/assets/images/stream.jpg')",
        "background-main-gradient":
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(62,56,139,1) 45%, rgba(22,18,37,1) 100%);",
        "background-movie":
          "linear-gradient(180deg, rgba(94, 158, 255, 0) 60%, rgba(68, 61, 156, 0.8) 100%)",
        "background-movie-poster":
          "linear-gradient(to bottom right, #667eea, #764ba2)",
      },
      colors: {
        "color-primary": "#212529",
        "color-secondary": "#f8f9fa",
        "color-tertiary": "#868e96",
      },
    },
  },
  plugins: [],
};
