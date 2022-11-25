import * as sgClient from '@sendgrid/client'
import { NextRequest, NextResponse } from 'next/server'

export default async function handler(req: NextRequest, res: NextResponse) {
  sgClient.setApiKey(`${process.env.SENDGRID_TOKEN}`)

  // @ts-ignore
  const email = `${req?.body?.email}`

  const request = {
    json: undefined, // <--- I spent hours finding out why Sendgrid was returning 400 error, this fixed the issue
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: JSON.stringify({
      list_ids: [process.env.SENDGRID_NEWSLETTER_LIST],
      contacts: [
        {
          email: email,
        },
      ],
    }),
  }

  await sgClient
    // @ts-ignore
    .request(request)

  res.json()
}
