import type { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import { geolocation, ipAddress } from '@vercel/edge'

export const config = {
  runtime: 'experimental-edge',
}

const endpoint = (key: string) =>
  `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CLOUDFLARE_NAMESPACE_LOG}/values/${key}`

export default async function handler(req: NextRequest) {
  const geoData = geolocation(req)
  const ipData = ipAddress(req) || 'unknown'

  console.log(req.headers, ipData, geoData)

  let UUID = Date.now()

  const body = JSON.stringify({ ipData, geoData })
  const x = await fetch(endpoint(`${UUID}`), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_KV_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body,
  })

  const image = new ImageResponse(
    (
      <div
        style={{
          background: '#222',
          borderRadius: 4,
          fontSize: 14,
          color: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
        }}
      >
        HI
      </div>
    ),
    {
      width: 88,
      height: 20,
      debug: true,
    }
  )

  return image
}
