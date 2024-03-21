/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      keyframes: {
        wave: {
          from: {
            transform: "translate3d(0, 0, 0)",
          },
          to: {
            transform: "translate3d(0, 10px, 0)",
          },
        },
      },
      animation: {
        waving: "wave 2s alternate cubic-bezier(0.5, 0.05, 1, .5) infinite",
      },
    },
  },
  plugins: [],
};
