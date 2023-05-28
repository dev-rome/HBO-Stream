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
        "background-home": "linear-gradient(312deg, #0f2027, #203a43, #2c5364)",
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
