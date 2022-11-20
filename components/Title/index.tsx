import React from 'react'
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from 'baseui/typography'
import { BlockProps } from 'baseui/block'

type BaseProps = BlockProps & React.HTMLAttributes<HTMLHeadElement>

interface HeaderProps extends BaseProps {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  highlight?: boolean
  // Align is not technically part of the header spec, but is
  // allowed by chrome. So here it is.
  align?: string
  gradient?: boolean
}

const Title: React.FC<HeaderProps> = ({
  size = 'xl',
  highlight = false,
  children,
  gradient = false,
  ...props
}) => {
  let Header = HeadingXXLarge
  switch (size) {
    case 'xxs':
      Header = HeadingXSmall
      break
    case 'xs':
      Header = HeadingSmall
      break
    case 's':
      Header = HeadingMedium
      break
    case 'm':
      Header = HeadingLarge
      break
    case 'l':
      Header = HeadingXLarge
      break
    case 'xl':
      Header = HeadingXXLarge
      break
    default:
      break
  }
  return (
    <Header
      overrides={
        size === 'xl'
          ? {
              Block: {
                style: ({ $theme }) => {
                  return {
                    color: $theme.colors.primary,
                    '@media (max-width: 1024px)': {
                      fontSize: '7vw',
                      lineHeight: '7.5vw',
                    },
                    '@media (max-width: 600px)': {
                      fontSize: '48px',
                      lineHeight: '50px',
                    },
                    '@media (max-width: 480px)': {
                      fontSize: '40px',
                      lineHeight: '42px',
                    },
                  }
                },
              },
            }
          : size === 'l'
          ? {
              Block: {
                style: ({ $theme }) => {
                  return {
                    color: $theme.colors.primary,
                    '@media (max-width: 1024px)': {
                      fontSize: '5.5vw',
                      lineHeight: '6vw',
                    },
                    '@media (max-width: 600px)': {
                      fontSize: '38px',
                      lineHeight: '40px',
                    },
                    '@media (max-width: 480px)': {
                      fontSize: '34px',
                      lineHeight: '36px',
                    },
                  }
                },
              },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </Header>
  )
}

export default Title
