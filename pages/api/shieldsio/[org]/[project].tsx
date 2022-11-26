import type { NextRequest } from 'next/server'
import { geolocation, ipAddress } from '@vercel/edge'
import { addProjectCheck, getProject } from '../../../../helpers/cloudflare'
import { getRepo } from '../../../../helpers/github'

export const config = {
  runtime: 'experimental-edge',
}

interface ShieldResponse {
  schemaVersion: 1
  label: string
  labelColor: 'black'
  message: string
  color: 'blue' | 'green' | 'red'
  isError: boolean
  logoSvg: string
}

const logoSvg = `<svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.2C4 10.1613 2.58252 11.9613 0 12V10.0065C1.26214 10.0065 1.94175 9 1.94175 7.4129V6.75484H0V3H4V7.2Z" fill="#E11D48"/>
</svg>
`

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
      console.log('no gh repo', org, project)
    }
  } else {
    projectIsValid = true
    if (parsedProject.result.metadata.hasDesign) {
      projectExistsAlready = true
    }
  }

  const response: ShieldResponse = {
    schemaVersion: 1,
    label: '.DESIGN',
    labelColor: 'black',
    message: projectExistsAlready
      ? 'contributes'
      : projectIsValid
      ? 'pending'
      : 'failed',
    color: projectExistsAlready ? 'green' : projectIsValid ? 'blue' : 'red',
    isError: projectExistsAlready ? false : projectIsValid ? false : true,
    logoSvg: logoSvg,
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=18000',
    },
  })
}
