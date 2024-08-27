/** @type {import('tailwindcss').Config} */

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'runde': [
          '"Open Runde", sans-serif'
        ],
        'hatton': ["'PP Hatton', sans-serif"]
      },
      spacing: {
        // grid units
        'col1': 'var(--col1)',
        'col2': 'var(--col2)',
        'col3': 'var(--col3)',
        'col4': 'var(--col4)',
        'col5': 'var(--col5)',
        'col6': 'var(--col6)',
        'col7': 'var(--col7)',
        'col8': 'var(--col8)',
        'col9': 'var(--col9)',
        'col10': 'var(--col10)',
        'col11': 'var(--col11)',
        'col12': 'var(--col12)'
      },
      colors: {
        'white': 'var(--white)',
        'black': 'var(--black)',
        'nkip': 'var(--nkip)',
        'billboards': 'var(--billboards)',
        'projects': 'var(--projects)',
        'programs': 'var(--programs)',
        'bg-highlight': 'var(--bg-highlight)',
        'navigation-highlight': 'var(--navigation-highlight)'
      }
    }
  }
}