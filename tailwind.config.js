import * as defaultTheme from 'tailwindcss/defaultTheme'  

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
    // fontFamily: {
    //   'title': ['Quicksand', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    //   'body': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    // },
    // colors: {
    //   // Base colors
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: {
    //     black: "#000000",
    //     DEFAULT: '#343434',
    //     light: '#4a4a4a',
    //   },
    //   white: '#ffffff',
    //   background: '#f3f3f3',
    //   // Theme colors
    //   gray: {
    //     darker: '#2E2E2E',
    //     dark: '#828282',
    //     DEFAULT: '#BBBBBB',
    //     light: '#E7E7E7',
    //     lighter: '#F5F5F5'
    //   },
    //   blue: {
    //     DEFAULT: '#230B94',
    //     light: '#f4f3fa', // rgba(35, 11, 148, 0.05)
    //     highlight: '#eae8f5',
    //   },
    //   coral: '#FF7A73',
    //   turquoise: {
    //     DEFAULT: '#2FB6BC',
    //     light: '#d5f0f2',
    //   },
    //   yellow: {
    //     // dark: '#f5b432',
    //     DEFAULT: '#FFD321',
    //     // light: '#fff5e2'
    //   },
    //   // Base 
    //   green: {
    //     DEFAULT: '#3fdb93',
    //     // light: '#87e9bc'
    //     // lighter: '#eff8f1'
    //   },
    //   orange: {
    //     DEFAULT: '#f36c32',
    //     // light: '#ffecd4'
    //   },
    //   red: {
    //     DEFAULT: '#f24a37',
    //     // light: '#ffe2df'
    //   },
    //   // 3rd-party colors
    //   linkedin: '#2867B2',
    //   facebook: '#4267B2',
    //   twitter: '#4099FF'
    // },
    // extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
