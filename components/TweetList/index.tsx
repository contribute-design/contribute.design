import * as React from 'react'
import { useStyletron } from 'baseui'
import Tweet from '../Tweet'
import { Grid, GridItem } from '../Grid/index'

export interface TweetListProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const data = {}

const TweetList: React.FC<TweetListProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <Grid
      flexDirection="row"
      flexGridColumnCount={[1, 1, 2, 3, 4]}
      flexGridColumnGap="40px"
      flexGridRowGap="40px"
      paddingLeft={[0, 0, '2vw', '4vw', '12vw']}
      paddingRight={[0, 0, '2vw', '4vw', '12vw']}
    >
      <GridItem>
        <Tweet />
      </GridItem>
      <GridItem>
        <Tweet />
      </GridItem>
      <GridItem>
        <Tweet />
      </GridItem>
      <GridItem>
        <Tweet />
      </GridItem>
      <GridItem>
        <Tweet />
      </GridItem>
      <GridItem>
        <Tweet />
      </GridItem>
    </Grid>
  )
}

export default TweetList
