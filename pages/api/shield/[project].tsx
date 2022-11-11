import type { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import { geolocation, ipAddress } from '@vercel/edge'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  const geoData = geolocation(req)
  const ipData = ipAddress(req) || 'unknown'

  console.log(req.headers, ipData, geoData)
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
