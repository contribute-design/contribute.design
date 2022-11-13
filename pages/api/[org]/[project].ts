import type { NextRequest } from 'next/server'
import { getProject } from '../../../helpers/cloudflare'

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

  return parsedProject
}
