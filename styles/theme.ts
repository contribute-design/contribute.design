import { createDarkTheme, darkThemePrimitives, Primitives, Theme } from 'baseui'

const colors = {
  white: '#ffffff',
  rose600: '#E11D48',
  rose900: '#881337',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray800: '#1F2937',
  gray900: '#111827',
}

const primitives: Primitives = {
  ...darkThemePrimitives,
  // primaryFontFamily: 'Roboto, Helvetica Neue, Helvetica',
  primaryFontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',

  primary: colors.white,
  accent: colors.rose600,
  negative: colors.rose600,
}

const CustomTheme: Theme = createDarkTheme(
  {
    ...primitives,
  },
  {
    borders: {
      buttonBorderRadius: '4px',
      inputBorderRadius: '4px',
      surfaceBorderRadius: '4px',
      tagBorderRadius: '4px',
    },
    colors: {
      backgroundPrimary: '#000',
      contentPrimary: colors.gray300,
      contentSecondary: colors.gray400,
      contentTertiary: colors.gray500,
      backgroundTertiary: colors.gray800,
      backgroundSecondary: colors.gray900,

      inputFill: '#000',
      inputFillActive: colors.gray800,
      inputFillDisabled: colors.gray900,
      inputFillError: `${colors.rose900}30`,
      inputBorder: colors.gray800,
      inputBorderError: colors.rose600,
      inputPlaceholder: colors.gray500,

      menuFillHover: colors.gray900,

      buttonPrimaryFill: colors.rose600,
      buttonPrimaryText: colors.white,
      buttonPrimaryHover: '#000',
      buttonPrimaryActive: colors.rose600,

      buttonSecondaryFill: '#000',
      buttonSecondaryText: colors.gray400,
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
        lineHeight: '30px',
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
