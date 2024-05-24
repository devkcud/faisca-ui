/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    logs: false,
    themes: [
      {
        main: {
          primary: '#3F5DA8',
          secondary: '#FA67DA',
          accent: '#FFCC1A',
          neutral: '#1f2937',
          'base-100': '#F4F4F4',
          info: '#2563eb',
          success: '#22c55e',
          warning: '#eab308',
          error: '#b91c1c'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
