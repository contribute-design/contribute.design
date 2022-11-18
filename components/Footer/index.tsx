import * as React from 'react'

import { Grid, GridItem } from '../Grid'
import Intro from '../Intro'
import Paragraph from '../Paragraph'
import { useStyletron } from 'baseui'
import ContentWrapper from '../ContentWrapper'

export interface FooterProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <>
      <Intro>
        <Paragraph size="m" align="center" color="contentTertiary">
          Made with ❤️ by designers &amp; developers for developers & designers
        </Paragraph>
      </Intro>
      <ContentWrapper>
        <Grid
          flexGridColumnCount={[1, 1, 2, 4]}
          flexDirection="row"
          width="100%"
          paddingBottom="6vh"
        >
          <GridItem justifyContent="start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              About contribute.design
            </Paragraph>
          </GridItem>
          <GridItem justifyContent="start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              Discover projects
            </Paragraph>
          </GridItem>
          <GridItem justifyContent="start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              Where to find us
            </Paragraph>
          </GridItem>
          <GridItem justifyContent="start" flexDirection="column">
            <Paragraph
              size="s"
              style={{ textTransform: 'uppercase' }}
              color="contentTertiary"
            >
              Stay in the loop
            </Paragraph>
          </GridItem>
        </Grid>
      </ContentWrapper>
    </>
  )
}

export default Footer
