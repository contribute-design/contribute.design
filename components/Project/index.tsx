import * as React from 'react'
import { useStyletron } from 'baseui'
import Link from 'next/link'

import Card from '../Card'
import { Grid, GridItem } from '../Grid'
import Paragraph from '../Paragraph'
import {
  ForkIcon,
  EyeIcon,
  StarIcon,
  IssueIcon,
  GitHubIcon,
  LinkIcon,
} from '../Icon'
import Highlight from '../Highlight'

export interface Project {
  full_name: string
  description?: string
  owner?: {
    login?: string
    avatar_url?: string
    url?: string
  }
  homepage?: string
  stargazers_count?: number
  watchers_count?: number
  open_issues_count?: number
  forks_count?: number
  subscribers_count?: number
  language?: string
}

export interface ProjectProps {
  children?: React.ReactNode
  'data-testid'?: string
}

interface IconLinkProps {
  icon: React.ReactNode
  children: React.ReactNode
}

const data: Project = {
  full_name: 'kubeshop/testkube',
  owner: {
    avatar_url: 'https://avatars.githubusercontent.com/u/17219288?s=200&v=4',
  },
  description:
    '🎙️ The easiest way to explore and manipulate your data in all of your Prisma projects.',
  stargazers_count: 32,
}

const IconLink: React.FC<IconLinkProps> = ({ icon, children }) => {
  const [css, theme] = useStyletron()
  return (
    <span
      className={css({
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
        alignItems: 'center',
        marginRight: '8px',
        fontSize: '12px',
        transitionProperty: 'color',
        transitionDuration: '200ms',
        transitionTimingFunction: theme.animation.easeOutQuinticCurve,
        color: theme.colors.contentSecondary,
        ':hover': {
          color: theme.colors.primary,
        },
      })}
    >
      {icon}
      <span className={css({ marginLeft: '4px', display: 'inline-block' })}>{children}</span>
    </span>
  )
}

const Project: React.FC<ProjectProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <Card padded hover>
      <Grid>
        <GridItem gridGap="20px">
          <Grid flexDirection="row" flexGridColumnCount={2}>
            {data.owner?.avatar_url ? (
              <Link href="#">
                <img
                  src={data.owner?.avatar_url}
                  width={50}
                  height={50}
                  alt={`${data.owner.login}`}
                  className={css({ borderRadius: '80px', marginRight: '12px' })}
                />
              </Link>
            ) : null}
            <GridItem alignItems="start" gridGap="4px" width="100%">
              <Paragraph size="l">
                <Link href="#">
                  <strong>{data.full_name}</strong>
                </Link>
              </Paragraph>
              <Grid
                flexDirection="row"
                justifyContent="start"
                flexGridRowGap="8px"
              >
                <IconLink icon={<StarIcon size={16} />}>{data.stargazers_count}</IconLink>
                <IconLink icon={<ForkIcon size={16} />}>{data.forks_count}</IconLink>
                <IconLink icon={<EyeIcon size={16} />}>{data.watchers_count}</IconLink>
                <IconLink icon={<IssueIcon size={16} />}>
                  {data.open_issues_count}
                </IconLink>
              </Grid>
            </GridItem>
          </Grid>
          <Paragraph color="contentPrimary">{data.description}</Paragraph>
          <Grid flexDirection="row" justifyContent="start" flexGridRowGap="8px">
            <Link href="#">
              <IconLink icon={<GitHubIcon size={16} />}>GitHub</IconLink>
            </Link>
            <Link href="#">
              <IconLink icon={<StarIcon size={16} color={theme.colors.accent} />}>
                <Highlight>.design</Highlight> guidelines
              </IconLink>
            </Link>
            <Link href="#">
              <IconLink icon={<LinkIcon size={16} />}>Website</IconLink>
            </Link>
          </Grid>
        </GridItem>
      </Grid>
    </Card>
  )
}

export default Project
