import type { NextRequest } from 'next/server'
import { getProject } from '../../../helpers/cloudflare'
import { checkDesignInRepo, checkDesignMdInRepo } from '../../../helpers/github'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  // Ugly drawback of using vercels edge functions vs regular next js api params
  // -> https://nextjs.org/docs/api-routes/edge-api-routes#query-parameters
  const { searchParams } = new URL(req.url)
  const org = searchParams.get('org')
  const project = searchParams.get('project')

  const parsedProject = await getProject({ key: `${org}/${project}` })
  let gitHubDesignContent = null

  if (parsedProject.result.metadata.hasDesign) {
    if (parsedProject.result.metadata.designType === 'folder') {
      gitHubDesignContent = await checkDesignInRepo({ org, project })
    } else {
      gitHubDesignContent = await checkDesignMdInRepo({ org, project })
    }
  }

  const result = { result: parsedProject.result, design: gitHubDesignContent }

  return new Response(parsedProject ? JSON.stringify(result) : '{error:404}', {
    status: parsedProject ? 200 : 404,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=18000',
    },
  })
}
