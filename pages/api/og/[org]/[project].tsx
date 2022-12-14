import type { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import { getProject } from '../../../../helpers/cloudflare'
import { intToString } from '../../../../helpers/numbers'
import { timeAgo } from '../../../../helpers/time'
import {
  StarIcon,
  IssueIcon,
  LastCommitIcon,
  CreationIcon,
} from '../../../../components/Icon'

export const config = {
  runtime: 'experimental-edge',
}

const fontRegular = fetch(
  //@ts-ignore
  new URL('../../../../public/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const fontBold = fetch(
  //@ts-ignore
  new URL('../../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const fontRegularData = await fontRegular
  const fontBoldData = await fontBold

  const { searchParams } = new URL(req.url)
  const org = searchParams.get('org')
  const project = searchParams.get('project')

  const parsedProject = await getProject({ key: `${org}/${project}` })

  const result = parsedProject.result

  // console.log(result)
  return new ImageResponse(
    result.metadata ? (
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: '#ffffff',
          background: '#000000',
          width: '100%',
          height: '100%',
          padding: 60,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}
      >
        <img
          src={`https://contribute.design/contribute.design.svg`}
          width="210"
          height="24"
        />
        <img
          src={result.metadata.owner?.avatar_url}
          width={50}
          height={50}
          style={{
            marginTop: 170,
            borderRadius: '80px',
            marginRight: '12px',
          }}
        />
        <p
          style={{
            fontSize: 48,
            wordBreak: 'break-all',
            margin: 0,
            fontWeight: 'normal',
            padding: 0,
            opacity: 0.7,
          }}
        >
          {org}/
        </p>
        <p
          style={{
            fontSize: 76,
            wordBreak: 'break-all',
            margin: '5px 0 20px 0',
            fontWeight: 'bold',
            padding: 0,
          }}
        >
          {project}
        </p>
        <p>
          {result.metadata.stargazers_count && (
            <span
              style={{
                marginRight: 20,
              }}
            >
              <StarIcon size={16} />
              <span
                style={{
                  opacity: 0.7,
                  marginRight: 5,
                }}
              >
                Stars:
              </span>
              {intToString(result.metadata.stargazers_count)}
            </span>
          )}

          <span
            style={{
              marginRight: 20,
            }}
          >
            <IssueIcon size={16} />
            <span
              style={{
                opacity: 0.7,
                marginRight: 5,
              }}
            >
              Issues:
            </span>{' '}
            {intToString(result.metadata.open_issues_count)}
          </span>

          {result.metadata.project_created_at && (
            <span
              style={{
                marginRight: 20,
              }}
            >
              <CreationIcon size={16} />
              <span
                style={{
                  opacity: 0.7,
                  marginRight: 5,
                }}
              >
                Created:
              </span>{' '}
              {timeAgo(result.metadata.project_created_at)}
            </span>
          )}
          {result.metadata.last_contribution && (
            <span
              style={{
                marginRight: 20,
              }}
            >
              <LastCommitIcon size={16} />
              <span
                style={{
                  opacity: 0.7,
                  marginRight: 5,
                }}
              >
                Last contrib.:
              </span>{' '}
              {timeAgo(result.metadata.last_contribution)}
            </span>
          )}
        </p>
        <img
          src={`https://contribute.design/images/badge.${
            result.metadata.hasDesign ? 'contributes' : 'pending'
          }.svg`}
          width="246"
          height="44"
        />

        {/* <p>{result.metadata.description}</p> */}
      </div>
    ) : (
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          color: '#ffffff',
          background: '#000000',
          width: '100%',
          height: '100%',
          padding: 60,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={`https://contribute.design/contribute.design.svg`}
          width="383"
          height="45"
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Inter',
          data: fontRegularData,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: fontBoldData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
