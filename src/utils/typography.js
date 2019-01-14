import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 3,
  headerFontFamily: ['Rubik', 'sans-serif'],
  headerWeight: 400,
  bodyFontFamily: ['Raleway', 'serif'],
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400'],
    },
    {
      name: 'Rubik',
      styles: ['400', '700'],
    },
  ],
})

export default typography
