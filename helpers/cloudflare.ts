const cloudflareHeaders = {
  Authorization: `Bearer ${process.env.CLOUDFLARE_KV_API_TOKEN}`,
  'Content-Type': 'application/json',
}

const logEndpoint = (key: string) =>
  `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CLOUDFLARE_NAMESPACE_LOG}/values/${key}`

const projectEndpoint = (key: string) =>
  `${process.env.PROJECTS_WORKER_URL}/${key}`

const checkEndpoint = (key: string) =>
  `${process.env.PROJECTS_WORKER_URL}/check/${key}`

export const logRequest = async ({ key, value }: any) => {
  const { success, result, errors } = await fetch(logEndpoint(`${key}`), {
    method: 'PUT',
    headers: cloudflareHeaders,
    body: value,
  }).then((response) => response.json())
  console.log('logRequest', success, result, errors)
  return { result, success, errors }
}

export const addProjectCheck = async ({ key, value }: any) => {
  const response = await fetch(checkEndpoint(`${key}`), {
    method: 'PUT',
    headers: cloudflareHeaders,
    body: value,
  })
  const result = await response.text()
  //   console.log('addProjectCheck', result)
  return { result }
}

export const getProject = async ({ key }: any) => {
  const response = await fetch(projectEndpoint(`x/${key}`), {
    method: 'GET',
    headers: cloudflareHeaders,
  })
  const result = JSON.parse(await response.text())
  //   console.log('getProject', result)
  return { result }
}

export const getProjects = async ({ limit, cursor }: any) => {
  const response = await fetch(
    projectEndpoint(
      `l${limit ? `/${limit}` : ''}${cursor ? `/${cursor}` : ''}`
    ),
    {
      method: 'GET',
      headers: cloudflareHeaders,
    }
  )
  const result = JSON.parse(await response.text())
  return { result }
}
