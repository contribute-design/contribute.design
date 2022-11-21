import * as React from 'react'
import Link from 'next/link'
import { useStyletron } from 'baseui'

export interface NavigationLinkProps {
  children?: React.ReactNode
  active?: boolean
  target?: string
  size?: 'small' | 'default'
  href: string
  'data-testid'?: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  href,
  target,
  size = 'default',
  active = false,
}) => {
  const [css, theme] = useStyletron()
  return (
    <Link href={href} target={target}>
      <span
        className={css({
          color: active ? theme.colors.primaryA : theme.colors.contentSecondary,
          paddingTop: '12px',
          paddingRight: '4px',
          paddingBottom: '12px',
          paddingLeft: '4px',
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
