import type { NextRequest } from 'next/server'
import { getProjects } from '../../helpers/cloudflare'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  // Ugly drawback of using vercels edge functions vs regular next js api params
  // -> https://nextjs.org/docs/api-routes/edge-api-routes#query-parameters
  const { searchParams } = new URL(req.url)
  const limit = searchParams.get('limit')
  const cursor = searchParams.get('cursor')

  const parsedProjects = await getProjects({ limit, cursor })
  return new Response(JSON.stringify(parsedProjects.result), {
    status: 200,
    headers: {
      'Content-Type': 'application-json',
      'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=18000',
    },
  })
}
