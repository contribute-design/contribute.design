import * as React from 'react'
import {
  HeaderNavigation as BaseHeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import { useStyletron } from 'baseui'

import Logo from '../Logo'

export default () => {
  const [css, theme] = useStyletron()
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
          <Logo />
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">For developers</StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">For designers</StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">Projects</StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">For designers</StyledLink>
        </StyledNavigationItem>
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
