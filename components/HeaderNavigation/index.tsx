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
import { GitHubIcon, TwitterIcon } from '../Icon'
import ContentWrapper from '../ContentWrapper'

const navLinks = [
  { title: 'For developers', path: '/for-developers' },
  { title: 'For designers', path: '/for-designers' },
  { title: 'Projects', path: '/projects' },
]
const socialLinks = [
  {
    icon: <GitHubIcon size={20} />,
    title: 'GitHub',
    path: 'https://github.com/contribute-design',
  },
  {
    icon: <TwitterIcon size={20} style={{ marginLeft: 8 }} />,
    title: 'Twitter',
    path: 'https://twitter.com/contrib_design',
  },
]

const HeaderNavigation = () => {
  const [css, theme] = useStyletron()
  const router = useRouter()

  return (
    <div
      className={css({
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      })}
    >
      <div className={css({ maxWidth: '1400px', width: '100%' })}>
        <BaseHeaderNavigation
          overrides={{
            Root: {
              style: () => ({
                paddingTop: '40px',
                paddingRight: '40px',
                paddingBottom: '40px',
                paddingLeft: '16px',
                backgroundColor: theme.colors.black,
                borderBottom: 'none',
                '@media (max-width: 600px)': {
                  paddingTop: '20px',
                  paddingRight: '20px',
                  paddingBottom: '20px',
                  paddingLeft: '0',
                },
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
          <StyledNavigationList
            $align={ALIGN.right}
            className={css({
              '@media (max-width: 600px)': {
                display: 'none',
              },
            })}
          >
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
            {socialLinks.map((link) => (
              <NavigationLink key={link.title} href={link.path} target="_blank">
                {link.icon}
              </NavigationLink>
            ))}
          </StyledNavigationList>
        </BaseHeaderNavigation>
      </div>
    </div>
  )
}

export default HeaderNavigation
