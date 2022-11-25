import * as React from 'react'
import { useStyletron } from 'baseui'
import Tweet from '../Tweet'
import { Grid, GridItem } from '../Grid/index'

export interface TweetListProps {
  children?: React.ReactNode
  narrow?: boolean
  data?: any
  'data-testid'?: string
}

const TweetList: React.FC<TweetListProps> = ({ children, narrow, data }) => {
  const [css, theme] = useStyletron()
  return (
    <Grid
      flexDirection="row"
      flexGridColumnCount={[1, 1, 2, narrow ? 2 : 3, narrow ? 2 : 4]}
      flexGridColumnGap="40px"
      flexGridRowGap="40px"
      paddingLeft={[0, 0, '2vw', '4vw', '12vw']}
      paddingRight={[0, 0, '2vw', '4vw', '12vw']}
    >
      {data &&
        data.keys.map((project: any, i: number) => {
          return (
            <GridItem key={i} height="fit-content">
              <Tweet />
            </GridItem>
          )
        })}
    </Grid>
  )
}

export default TweetList
