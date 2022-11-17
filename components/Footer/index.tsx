import * as React from 'react'

import { Grid, GridItem } from '../Grid'
import Intro from '../Intro'
import Paragraph from '../Paragraph'

export interface FooterProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <>
      <Intro>
        <Paragraph size="m" align="center" color="contentTertiary">
          Made with ❤️ by designers &amp; developers for developers & designers
        </Paragraph>
      </Intro>
      <Grid flexGridColumnCount={[1, 1, 2, 4]} flexDirection="row">
        <GridItem justifyContent="start" flexDirection="column">
          <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
            About contribute.design
          </Paragraph>
        </GridItem>
        <GridItem justifyContent="start" flexDirection="column">
          <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
            Discover projects
          </Paragraph>
        </GridItem>
        <GridItem justifyContent="start" flexDirection="column">
          <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
            Where to find us
          </Paragraph>
        </GridItem>
        <GridItem justifyContent="start" flexDirection="column">
          <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
            Stay in the loop
          </Paragraph>
        </GridItem>
      </Grid>
    </>
  )
}

export default Footer
