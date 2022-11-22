import * as React from 'react'
import Link from 'next/link'
import { useStyletron } from 'baseui'

export interface NavigationLinkProps {
  children?: React.ReactNode
  active?: boolean
  block?: boolean
  target?: string
  size?: 'small' | 'default'
  href: string
  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
  borderBottom?: boolean
  'data-testid'?: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  href,
  target,
  size = 'default',
  active = false,
  block = false,
  paddingTop = '12px',
  paddingRight = '4px',
  paddingBottom = '12px',
  paddingLeft = '4px',
  borderBottom = false,
}) => {
  const [css, theme] = useStyletron()
  return (
    <Link href={href} target={target}>
      <span
        className={css({
          color: active ? theme.colors.primaryA : theme.colors.contentSecondary,
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
          borderBottomWidth: borderBottom ? '1px' : undefined,
          borderBottomStyle: borderBottom ? 'dashed' : undefined,
          borderBottomColor: borderBottom
            ? theme.colors.borderOpaque
            : undefined,
          display: block ? 'block' : undefined,
          fontWeight: size === 'default' ? 700 : 300,
          fontSize: size === 'default' ? '16px' : '13px',
          transitionProperty: 'color',
          transitionDuration: '200ms',
          transitionTimingFunction: theme.animation.easeOutQuinticCurve,
          ':hover': {
            color: theme.colors.primaryA,
          },
        })}
      >
        {children}
      </span>
    </Link>
  )
}

export default NavigationLink
