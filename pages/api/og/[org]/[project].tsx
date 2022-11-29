import type { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import { getProject } from '../../../../helpers/cloudflare'
import Logo from '../../../../components/Logo'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
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
          width="383"
          height="45"
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
            fontSize: 70,
            wordBreak: 'break-all',
            margin: 0,
            fontWeight: 'bold',
            padding: 0,
          }}
        >
          {org}/
        </p>
        <p
          style={{
            fontSize: 70,
            wordBreak: 'break-all',
            margin: '-20px 0 20px 0',
            fontWeight: 'bolder',
            padding: 0,
          }}
        >
          {project}
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
    }
  )
}
