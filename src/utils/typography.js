import Typography from 'typography'
import theme from './theme'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 5 / 3,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500'],
    },
    {
      name: 'Lato',
      styles: ['300', '400', '700'],
    },
  ],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  headerWeight: 400,
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  headerColor: theme.colors.primary,
  bodyColor: theme.colors.body,
  overrideThemeStyles: () => ({
    'figure,img': {
      marginBottom: 0,
    }
  })
})

export default typography
