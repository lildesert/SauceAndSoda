import Typography from 'typography'
import theme from './theme'

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 5 / 3,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400'],
    },
    {
      name: 'Lato',
      styles: ['300', '400', '500', '600'],
    },
  ],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  headerColor: theme.colors.header,
  bodyColor: theme.colors.body,
})

export default typography
