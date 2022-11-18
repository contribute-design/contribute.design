import React from 'react'
import { Grid, GridItem, GridProps } from '../Grid/index'
export interface IntroProps extends GridProps {
  'data-testid'?: string
}

const Intro: React.FC<IntroProps> = ({
  children,
  paddingTop = ['4vh', '4vh', '12vh'],
  paddingBottom = ['4vh', '4vh', '12vh'],
}) => {
  return (
    <Grid paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <GridItem>{children}</GridItem>
    </Grid>
  )
}

export default Intro
