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

  console.log('wrong path', pathname)
  return new Response('404')
}
