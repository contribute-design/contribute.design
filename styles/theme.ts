import { createDarkTheme, darkThemePrimitives, Primitives, Theme } from 'baseui'

const colors = {
  rose600: '#E11D48',
}

const primitives: Primitives = {
  ...darkThemePrimitives,
  primaryFontFamily: 'Inria Sans, Helvetica Neue, Helvetica',

  accent: colors.rose600,
}

const CustomTheme: Theme = createDarkTheme(
  {
    ...primitives,
    // primaryFontFamily: '', // You can add your custom font here
  },
  {
    borders: {
      buttonBorderRadius: '4px',
    },
    colors: {
      buttonPrimaryFill: colors.rose600,
      buttonPrimaryText: '#fff',
      buttonPrimaryHover: '#000',
      buttonPrimaryActive: colors.rose600,

      buttonSecondaryFill: '#000',
      buttonSecondaryText: '#aaa',
      buttonSecondaryHover: '#000',
      buttonSecondaryActive: colors.rose600,
    },
    typography: {
      HeadingXXLarge: {
        fontSize: '70px',
        lineHeight: '68px',
      },
      HeadingXLarge: {
        fontSize: '48px',
        lineHeight: '46px',
      },
      ParagraphLarge: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      ParagraphMedium: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      ParagraphSmall: {
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
  }
)

export default CustomTheme
