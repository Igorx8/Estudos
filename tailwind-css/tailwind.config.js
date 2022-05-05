module.exports = {
  content: ["./src/css/*.{html, js}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^.*$/,
    },
  ],
};
