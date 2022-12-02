import type { NextRequest } from 'next/server'
import compareDesc from 'date-fns/compareDesc'

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

  // We can't limit on CF workers because we also get projects without hasDesign and that impacts the outcome
  // const parsedProjects = await getProjects({ limit, cursor })

  const parsedProjects = await getProjects({})

  // This should have been done on the worker... but since our workers still suck we're going to do it in here...
  const sortedKeys = parsedProjects.result.keys.sort((a: any, b: any) =>
    compareDesc(new Date(a.metadata.createdAt), new Date(b.metadata.createdAt))
  )
  const rest = {
    cursor: parsedProjects.result.cursor || undefined,
    list_complete: parsedProjects.result.list_complete || undefined,
  }

  return new Response(
    JSON.stringify({
      keys: limit ? sortedKeys.slice(0, limit) : sortedKeys,
      ...rest,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application-json',
        'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=120',
      },
    }
  )
}
