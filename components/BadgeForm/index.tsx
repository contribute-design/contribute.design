import React, { useEffect, useState } from 'react'
import { BlockProps } from 'baseui/block'
import { useStyletron } from 'baseui'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Grid, GridItem } from '../Grid/index'
import Input from '../Input'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Code from '../Code'
import { Block } from '../Block'
import { Spinner } from '../Spinner'
import { CheckIcon } from '../Icon'

export interface BadgeFormProps extends BlockProps {
  'data-testid'?: string
  children?: any
}

const BadgeForm: React.FC<BadgeFormProps> = ({
  'data-testid': e2eId,
  children,
  ...rest
}) => {
  const [css, theme] = useStyletron()
  const [badgeIsLoaded, setBadgeIsLoaded] = useState(false)
  const [badgeIsLoading, setBadgeIsLoading] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)
  const [error, setError] = useState('')
  const [repoUrl, setRepoUrl] = useState('')
  const [imagePath, setImagePath] = useState('/images/badge.pending.svg')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCodeCopied(false)
    }, 2000)

    return () => {
      // clears timeout before running the new effect
      clearTimeout(timeout)
    }
  }, [codeCopied])

  const checkInput = (content: string) => {
    const regex = /(?:https:\/\/)github.com[:/](.*)[:/](.*)/g
    if (regex.test(content)) {
      setError('')
      const org = content.split('/')[3]
      const project = content.split('/')[4]
      setRepoUrl(`${org}/${project}`)
    } else {
      setError('This URL seems to not be a valid GitHub URI')
    }
  }

  const createBadge = async () => {
    if (!error) {
      setBadgeIsLoading(true)
      if (repoUrl == '') {
        setError('Please enter a GitHub URI')
      } else {
        const data = await fetch(`/api/check/${repoUrl}`).then((res) =>
          res.text()
        )
        // console.log(data)
        const validRepo = data.includes('404') ? false : true
        if (validRepo) {
          setError('')
          setBadgeIsLoaded(true)
          setImagePath(`/api/shield/${repoUrl}`)
        } else {
          setBadgeIsLoaded(false)
          setError("The repository couldn't be found")
          setImagePath('/images/badge.failed.svg')
        }
      }
      setBadgeIsLoading(false)
    }
  }

  return (
    <div
      className={css({
        backgroundColor: theme.colors.backgroundTertiary,
        padding: '20px',
        borderRadius: '12px',
        marginTop: '80px',
        marginRight: '32px',
        marginLeft: '32px',
      })}
    >
      <Grid gridGap="12px">
        <GridItem>
          <Grid>
            <GridItem gridGap="12px">
              <Paragraph size="s" color="contentSecondary">
                GitHub URI
              </Paragraph>
              <Block display="flex" flexDirection="row">
                <Block
                  display="flex"
                  flex="1 1 auto"
                  className={css({ marginRight: '12px' })}
                >
                  <Input
                    placeholder="https://github.com/user/repo"
                    onChange={(e) => checkInput(e.target.value)}
                    error={error ? true : undefined}
                    disabled={badgeIsLoading}
                  />
                </Block>
                <Block display="flex" flex="0 0 auto">
                  <Button
                    onClick={() => {
                      createBadge()
                    }}
                    isLoading={badgeIsLoading}
                    disabled={badgeIsLoading}
                  >
                    Create
                  </Button>
                </Block>
              </Block>
              {error && (
                <Paragraph size="s" color="accent">
                  {error}
                </Paragraph>
              )}
            </GridItem>
          </Grid>
          {badgeIsLoaded && (
            <>
              <Grid>
                <GridItem gridGap="12px">
                  <Paragraph size="s" color="contentSecondary">
                    Badge preview
                  </Paragraph>
                  {badgeIsLoading ? (
                    <Spinner />
                  ) : (
                    <img
                      src={imagePath}
                      width={badgeIsLoaded ? (error ? '94px' : '106') : '107px'}
                      height="auto"
                    />
                  )}
                </GridItem>
              </Grid>

              <Grid>
                <GridItem gridGap="12px">
                  <Paragraph size="s" color="contentSecondary">
                    Embed code
                  </Paragraph>
                  <Code
                    color={
                      !badgeIsLoaded ? theme.colors.contentTertiary : undefined
                    }
                  >
                    {badgeIsLoading ? (
                      <Spinner />
                    ) : badgeIsLoaded ? (
                      `[![contribute.design](https://contribute.design/api/shield/${repoUrl})](https://contribute.design/project/${repoUrl})`
                    ) : (
                      'Ready to copy & paste once you create your badge'
                    )}
                  </Code>
                  <CopyToClipboard
                    text={`[![contribute.design](https://contribute.design/api/shield/${repoUrl})](https://contribute.design/project/${repoUrl})`}
                    onCopy={() => setCodeCopied(true)}
                  >
                    <Button onClick={() => {}} type="secondary">
                      {codeCopied ? <CheckIcon size={22} /> : 'Copy'}
                    </Button>
                  </CopyToClipboard>
                </GridItem>
              </Grid>
            </>
          )}
        </GridItem>
      </Grid>
    </div>
  )
}

export default BadgeForm
