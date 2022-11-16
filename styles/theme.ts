import { createTheme, darkThemePrimitives } from 'baseui'

const CustomTheme = createTheme(
  {
    ...darkThemePrimitives,
    // primaryFontFamily: '', // You can add your custom font here
  },
  {
    // Add overrides here to your theme
  }
)

export default CustomTheme
