/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/heroBackground.jpg')",
      },
    },
  },
  plugins: [],
}
