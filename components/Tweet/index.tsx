import * as React from 'react'
import { useStyletron } from 'baseui'
import reactStringReplace from 'react-string-replace'

import Card from '../Card'
import { Grid, GridItem } from '../Grid'
import Paragraph from '../Paragraph'
import { TwitterIcon } from '../Icon'
import Highlight from '../Highlight'

export interface Tweet {
  full_name: string
  handle?: string
  content?: string
  avatar_url?: string
  tweet_url?: string
}

export interface TweetProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const data: Tweet = {
  full_name: 'Figma',
  handle: '@figma',
  content:
    'Finally a way that enables us to contribute to open source software!  Thank you @contrib_design ',
  avatar_url:
    'https://pbs.twimg.com/profile_images/1587463582442090496/TqVNO37o_400x400.jpg',
  tweet_url:
    'https://twitter.com/figma/status/1592971804284719105?s=20&t=y62pjIGHkvnrYfml5582Lw',
}

export interface HighlightPhraseProps {
  phrase: string
  content: string
}

const Tweet: React.FC<TweetProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <Card padded hover>
      <Grid>
        <GridItem gridGap="20px">
          <Grid flexDirection="row" flexGridColumnCount={3} alignItems="center">
            {data.avatar_url ? (
              <img
                src={data.avatar_url}
                width={50}
                height={50}
                alt={`${data.handle}`}
                className={css({ borderRadius: '80px', marginRight: '12px' })}
              />
            ) : null}
            <GridItem alignItems="start" gridGap="4px" width="100%">
              <Paragraph size="l" color={theme.colors.white}>
                <strong>{data.full_name}</strong>
                <br />
                {data.handle}
              </Paragraph>
            </GridItem>
            <TwitterIcon size={24} color="#60A5FA" />
          </Grid>
          <Paragraph color="contentPrimary">
            {reactStringReplace(data.content, '@contrib_design', (match, i) => (
              <Highlight>{match}</Highlight>
            ))}
          </Paragraph>
        </GridItem>
      </Grid>
    </Card>
  )
}

export default Tweet
