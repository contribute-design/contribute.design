import * as React from 'react'
import Link from 'next/link'
import { useStyletron } from 'baseui'

export interface NavigationLinkProps {
  children?: React.ReactNode
  active?: boolean
  href: string
  'data-testid'?: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  href,
  active = false,
}) => {
  const [css, theme] = useStyletron()
  return (
    <Link href={href}>
      <span
        className={css({
          color: active ? theme.colors.primaryA : theme.colors.contentTertiary,
          paddingTop: '12px',
          paddingRight: '4px',
          paddingBottom: '12px',
          paddingLeft: '4px',
          fontWeight: 700,
          fontSize: '16px',
          ':hover': {
            color: theme.colors.primaryA,
          }
        })}
      >
        {children}
      </span>
    </Link>
  )
}

export default NavigationLink
