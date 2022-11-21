import type { NextRequest } from 'next/server'
import { getRepo } from '../../../../helpers/github'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  let projectIsValid = false

  // Ugly drawback of using vercels edge functions vs regular next js api params
  // -> https://nextjs.org/docs/api-routes/edge-api-routes#query-parameters
  const { searchParams } = new URL(req.url)
  const org = searchParams.get('org')
  const project = searchParams.get('project')

  const ghProject = await getRepo({ org, project })
  if (!ghProject.error) {
    projectIsValid = true
  } else {
    console.log('no gh repo', org, project)
  }

  return new Response(projectIsValid ? '{success:200}' : '{error:404}', {
    status: projectIsValid ? 200 : 404,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=36000, stale-while-revalidate=18000',
    },
  })
}
