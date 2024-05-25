/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        tertiary: '#05112f'
      }
    }
  },
  daisyui: {
    logs: false,
    themes: [
      {
        main: {
          primary: '#3f5da8',
          secondary: '#fa67da',
          accent: '#ffcc1a',
          neutral: '#1f2937',
          'base-100': '#f4f4f4',
          info: '#2563eb',
          success: '#22c55e',
          warning: '#eab308',
          error: '#b91c1c'
        }
      }
    ]
  },
  plugins: [require('daisyui'), require('tailwindcss-full-bleed')]
};
