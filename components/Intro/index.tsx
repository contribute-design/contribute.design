import React from 'react'
import { Grid, GridItem, GridProps } from '../Grid/index'
export interface IntroProps extends GridProps {
  'data-testid'?: string
}

const Intro: React.FC<IntroProps> = ({
  children,
  paddingTop = '12vh',
  paddingBottom = '12vh',
}) => {
  return (
    <Grid paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <GridItem>{children}</GridItem>
    </Grid>
  )
}

export default Intro
