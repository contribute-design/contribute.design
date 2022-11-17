import * as React from 'react'
import Link from 'next/link'
import {
  HeaderNavigation as BaseHeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import { useStyletron } from 'baseui'
import { useRouter } from 'next/router'

import Logo from '../Logo'
import NavigationLink from '../NavigationLink'

const navLinks = [
  { title: 'For developers', path: '/for-developers' },
  { title: 'For designers', path: '/for-designers' },
  { title: 'Projects', path: '/projects' },
]
const socialLinks = [
  {
    icon: false,
    title: 'GitHub',
    path: 'https://github.com/contribute_design',
  },
  { icon: false, title: 'Twitter', path: 'https://twitter.com/contrib_design' },
]

const HeaderNavigation = () => {
  const [css, theme] = useStyletron()
  const router = useRouter()

  return (
    <BaseHeaderNavigation
      overrides={{
        Root: {
          style: () => ({
            paddingTop: '40px',
            paddingRight: '40px',
            paddingBottom: '40px',
            paddingLeft: '16px',
            backgroundColor: theme.colors.black,
          }),
        },
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link href="/">
            <Logo />
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        {navLinks.map((link) => (
          <StyledNavigationItem key={link.title}>
            <NavigationLink
              href={link.path}
              active={router.pathname === link.path}
            >
              {link.title}
            </NavigationLink>
          </StyledNavigationItem>
        ))}
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">GitHub</StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">Twitter</StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </BaseHeaderNavigation>
  )
}

export default HeaderNavigation