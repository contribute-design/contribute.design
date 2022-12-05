import * as React from 'react'

import { Grid, GridItem } from '../Grid'
import Intro from '../Intro'
import Paragraph from '../Paragraph'
import { useStyletron } from 'baseui'
import ContentWrapper from '../ContentWrapper'
import { GitHubIcon, TwitterIcon, FigmaIcon } from '../Icon'
import NavigationLink from '../NavigationLink'
import NewsletterForm from '../NewsletterForm'

export interface FooterProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const aboutLinks = [
  { title: 'For developers', path: '/for-developers' },
  { title: 'For designers', path: '/for-designers' },
]
const projectLinks = [
  { title: 'Projects open to contributions', path: '/projects' },
]
const socialLinks = [
  {
    icon: <GitHubIcon size={20} />,
    title: 'GitHub',
    path: 'https://github.com/contribute-design',
  },
  {
    icon: <TwitterIcon size={20} style={{ marginLeft: 8 }} />,
    title: 'mastodon',
    path: 'https://fosstodon.org/@contribute',
  },
  {
    icon: <TwitterIcon size={20} style={{ marginLeft: 8 }} />,
    title: 'Twitter',
    path: 'https://twitter.com/contrib_design',
  },
  {
    icon: <FigmaIcon size={20} style={{ marginLeft: 8 }} />,
    title: 'Figma',
    path: 'https://figma.com/@contrib_design',
  },
]

const Footer: React.FC<FooterProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <>
      <Intro>
        <Paragraph size="s" align="center" color="contentTertiary">
          Made with ❤️ by designers &amp; developers for developers & designers
        </Paragraph>
      </Intro>
      <ContentWrapper maxWidth="1600px">
        <Grid
          flexGridColumnCount={[1, 1, 2, 4]}
          flexDirection="row"
          width="100%"
          paddingBottom="6vh"
        >
          <GridItem
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="start"
          >
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              About contribute.design
            </Paragraph>
            <GridItem gridGap="12px" justifyContent="flex-start">
              {aboutLinks.map((link) => (
                <Paragraph key={link.title}>
                  <NavigationLink size="small" href={link.path}>
                    {link.title}
                  </NavigationLink>
                </Paragraph>
              ))}
            </GridItem>
          </GridItem>
          <GridItem justifyContent="flex-start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              Discover projects
            </Paragraph>
            <GridItem gridGap="12px" justifyContent="flex-start">
              {projectLinks.map((link) => (
                <Paragraph key={link.title}>
                  <NavigationLink size="small" href={link.path}>
                    {link.title}
                  </NavigationLink>
                </Paragraph>
              ))}
            </GridItem>
          </GridItem>
          <GridItem justifyContent="flex-start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              Where to find us
            </Paragraph>
            <GridItem gridGap="12px" justifyContent="flex-start">
              {socialLinks.map((link) => (
                <Paragraph key={link.title}>
                  <NavigationLink size="small" href={link.path} target="_blank">
                    {link.title}
                  </NavigationLink>
                </Paragraph>
              ))}
            </GridItem>
          </GridItem>
          <GridItem justifyContent="flex-start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              Stay in the loop
            </Paragraph>
            <NewsletterForm />
          </GridItem>
        </Grid>
      </ContentWrapper>
    </>
  )
}

export default Footer
