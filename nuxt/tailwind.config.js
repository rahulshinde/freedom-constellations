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
    fontSize: {
      'hatton-s': [
        '1rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }
      ],
      'hatton-m': [
        '1.25rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }
      ],
      'hatton-l': [
        '1.65rem',
        {
          lineHeight: '1.15',
          letterSpacing: '-0.01em'
        }
      ],
      'hatton-xl': [
        '3rem',
        {
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }
      ],
      'runde-xs': [
        '0.75rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.01em'
        }
      ],
      'runde-s': [
        '1rem',
        {
          lineHeight: '1.3',
          letterSpacing: '0em'
        }
      ],
      'runde-m': [
        '1.2rem',
        {
          lineHeight: '1.3',
          letterSpacing: '-0.01em'
        }
      ],
      'runde-l': [
        '1.5rem',
        {
          lineHeight: '1',
          letterSpacing: '-0.01em'
        }
      ],
      'runde-xl': [
        '2.25rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.01em'
        }
      ],
      'runde-xxl': [
        '2.75rem',
        {
          lineHeight: '1.05',
          letterSpacing: '-0.01em'
        }
      ],
    },
    extend: {
      fontFamily: {
        'runde': [
          '"Open Runde", sans-serif'
        ],
        'hatton': ["'PP Hatton', sans-serif"]
      },
      backgroundImage: {
        'homepage': "url('/pngs/bg_test1.png')"
      },
      rotate: {
        'angle': 'var(--angle)'
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
        'col12': 'var(--col12)',
        'distance': 'var(--distance)',
      },
      colors: {
        'white': 'var(--white)',
        'black': 'var(--black)',
        'black-trans': 'rgba(0, 0, 0, 0)',
        'nkip': 'var(--nkip)',
        'billboards': 'var(--billboards)',
        'projects': 'var(--projects)',
        'programs': 'var(--programs)',
        'bg-highlight': 'var(--bg-highlight)',
        'navigation-highlight': 'var(--navigation-highlight)'
      },
      boxShadow: {
        'imgHvr': '0 0 2rem -1rem',
        'imgLgHvr': '0 0 4rem -1rem',
      }
    }
  }
}