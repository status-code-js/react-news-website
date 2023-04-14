module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1536px'},
    },
    colors: {
      'color1': '#ffffff',
      'color2': '#2F2F2F',
      'color3': '#F8F8F8',
      'color4': '#000000',
      'color5': '#1C1C1C',
      'color6': '#D9D9D9',
      'color7': '#D52B1E',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'yeseva': ['Yeseva One', 'cursive'],
      'plus': ['M PLUS 1', 'sans-serif'],
      'metro': ['Metrophobic', 'sans-serif'],
    },
    extend: {
      width: {
        '615': '615px',
        '530': '530px',
        '448': '448px',
        '464': '464px',
        '356': '356px',
        '305': '305px',
        '282': '282px',
      },
      height: {
        '348': '348px',
        '292': '292px',
        '234': '234px',
        '185': '185px',

      },
      maxWidth: {
        '612': '612px',
        '530': '530px',
        '356': '356px',
        '282': '19em',
      },
      maxHeight: {
        '185': '185px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}


