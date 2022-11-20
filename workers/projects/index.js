// export default {
//   async fetch(request, env) {
//     return await handleRequest(request).catch(
//       (err) => new Response(err.stack, { status: 500 })
//     );
//   },
// };

// We need to do this – otherwise we don't seem to get the KV Global ENV var?

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const { pathname } = new URL(request.url)

  if (request.method === 'PUT') {
    if (pathname.startsWith('/check')) {
      const org = pathname.split('/')[2]
      const project = pathname.split('/')[3]
      console.log('adding', org, project)
      await PROJECT_CHECKS.put(`${org}/${project}`, request.body, {
        metadata: {
          createdAt: new Date(),
          lasUpdatedAt: new Date(),
        },
      })
      return new Response('OK')
    } else {
      return new Response('404')
    }
  } else {
    if (pathname.startsWith('/x')) {
      const org = pathname.split('/')[2]
      const project = pathname.split('/')[3]
      console.log('getting', org, project)
      const { value, metadata } = await PROJECTS.getWithMetadata(
        `${org}/${project}`
      )
      return value
        ? new Response(JSON.stringify({ value, metadata }))
        : new Response('404')
    }
    if (pathname.startsWith('/l')) {
      console.log('getting', pathname)
      const limit = pathname.split('/')[2]
      const cursr = pathname.split('/')[3]
      let projects = []
      const { keys, list_complete, cursor } = await PROJECTS.list({
        limit: limit ? limit : undefined,
        cursor: cursr ? cursr : undefined,
      })
      return keys
        ? new Response(JSON.stringify({ keys, list_complete, cursor }))
        : new Response('404')
    }

    console.log('wrong path', pathname)
    return new Response('404')
  }
}
