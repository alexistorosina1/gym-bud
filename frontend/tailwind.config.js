/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindscss/forms";

export default {
  content: ['./src/**/*.{html,js'],
  theme: {
    extend: {},
  },
  plugins: [
    formsPlugin,
  ],
}

