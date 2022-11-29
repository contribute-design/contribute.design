import * as React from 'react'
import { useStyletron } from 'baseui'
import Link from 'next/link'

import { intToString } from '../../helpers/numbers'
import { timeAgo } from '../../helpers/time'

import Card from '../Card'
import { Grid, GridItem } from '../Grid'
import Paragraph from '../Paragraph'
import {
  // ForkIcon,
  // EyeIcon,
  StarIcon,
  IssueIcon,
  GitHubIcon,
  LinkIcon,
  GuidelineIcon,
  LastCommitIcon,
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
  last_contribution?: string
}

export interface ProjectProps {
  children?: React.ReactNode
  data: Project
  'data-testid'?: string
}

interface IconLinkProps {
  icon: React.ReactNode
  alt?: string
  marginRight?: string
  children: React.ReactNode
}

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  children,
  marginRight,
  alt,
}) => {
  const [css, theme] = useStyletron()
  return (
    <span
      className={css({
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
        alignItems: 'center',
        marginRight: marginRight ? marginRight : '16px',
        fontSize: '12px',
        transitionProperty: 'color',
        transitionDuration: '200ms',
        transitionTimingFunction: theme.animation.easeOutQuinticCurve,
        color: theme.colors.contentSecondary,
        ':hover': {
          color: theme.colors.primary,
        },
      })}
      title={alt}
    >
      {icon}
      <span className={css({ marginLeft: '4px', display: 'inline-block' })}>
        {children}
      </span>
    </span>
  )
}

const Project: React.FC<ProjectProps> = ({ children, data }) => {
  const [css, theme] = useStyletron()
  return (
    <Link href={`/${data.full_name}`}>
      <Card padded hover fullHeight>
        <Grid>
          <GridItem gridGap="20px">
            <Grid flexDirection="row" flexGridColumnCount={2}>
              {data?.owner?.avatar_url ? (
                <img
                  src={data?.owner?.avatar_url}
                  width={50}
                  height={50}
                  alt={`${data?.owner.login}`}
                  className={css({
                    borderRadius: '80px',
                    marginRight: '12px',
                  })}
                />
              ) : null}
              <GridItem alignItems="start" gridGap="4px" width="100%">
                <Paragraph size="l">
                  <strong>{data?.full_name}</strong>
                </Paragraph>
                <Grid
                  flexDirection="row"
                  justifyContent="start"
                  flexGridRowGap="8px"
                >
                  {data.stargazers_count && (
                    <IconLink icon={<StarIcon size={16} />} alt="Stars">
                      {intToString(data.stargazers_count)}
                    </IconLink>
                  )}
                  {/* <IconLink icon={<ForkIcon size={16} />}>
                  {data?.forks_count}
                </IconLink>
                <IconLink icon={<EyeIcon size={16} />}>
                  {data?.watchers_count}
                </IconLink> */}
                  {data.open_issues_count && (
                    <IconLink icon={<IssueIcon size={16} />} alt="Open issues">
                      {intToString(data.open_issues_count)}
                    </IconLink>
                  )}
                  {data.last_contribution && (
                    <IconLink
                      icon={<LastCommitIcon size={16} />}
                      alt="Last contribution"
                    >
                      {timeAgo(data.last_contribution)}
                    </IconLink>
                  )}
                </Grid>
              </GridItem>
            </Grid>
            <Paragraph color="contentPrimary">{data?.description}</Paragraph>
            {/*
            <Grid
              flexDirection="row"
              justifyContent="start"
              flexGridRowGap="8px"
            >
              <Link
                href={`https://github.com/${data.full_name}`}
                target="_blank"
              >
                <IconLink icon={<GitHubIcon size={16} />}>GitHub</IconLink>
              </Link>
              <Link
                href={`https://github.com/${data.full_name}`}
                target="_blank"
              >
                <IconLink
                  icon={<GuidelineIcon size={16} color={theme.colors.accent} />}
                >
                  <Highlight>.design</Highlight> guidelines
                </IconLink>
              </Link>
              {data.homepage && (
                <Link
                  href={data.homepage}
                  target="_blank"
                  className={css({ height: '100%' })}
                >
                  <IconLink marginRight="0" icon={<LinkIcon size={16} />}>
                    Website
                  </IconLink>
                </Link>
              )}
              </Grid>*/}
          </GridItem>
        </Grid>
      </Card>
    </Link>
  )
}

export default Project
