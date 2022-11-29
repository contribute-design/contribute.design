import type { NextRequest } from 'next/server'
import { geolocation, ipAddress } from '@vercel/edge'
import {
  addProjectCheck,
  getProject,
} from '../../../../helpers/cloudflare'
import { getRepo } from '../../../../helpers/github'
import { Success, Pending, Failed } from '../../../../components/Shield'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const geoData = geolocation(req)
  const ipData = ipAddress(req) || 'unknown'
  let projectIsValid = false
  let projectExistsAlready = false

  // Ugly drawback of using vercels edge functions vs regular next js api params
  // -> https://nextjs.org/docs/api-routes/edge-api-routes#query-parameters
  const { searchParams } = new URL(req.url)
  const org = searchParams.get('org')
  const project = searchParams.get('project')

  const parsedProject = await getProject({ key: `${org}/${project}` })

  if (parsedProject.result == '404') {
    const ghProject = await getRepo({ org, project })
    if (!ghProject.error) {
      projectIsValid = true
      await addProjectCheck({
        key: `${org}/${project}`,
        value: JSON.stringify({ date: Date.now(), ipData, geoData }),
      })
    } else {
      // console.log('no gh repo', org, project)
    }
  } else {
    projectIsValid = true
    if (parsedProject.result.metadata.hasDesign) {
      projectExistsAlready = true
    }
  }

  const image = projectExistsAlready
    ? Success
    : projectIsValid
    ? Pending
    : Failed

  return new Response(image, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml;charset=utf-8',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=18000',
    },
  })
}
