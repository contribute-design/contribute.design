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
                style: () => {
                  return {
                    '@media (max-width: 1024px)': {
                      fontSize: '42px',
                      paddingTop: '14px',
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
