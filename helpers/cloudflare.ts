const cloudflareHeaders = {
  Authorization: `Bearer ${process.env.CLOUDFLARE_KV_API_TOKEN}`,
  'Content-Type': 'application/json',
}

const logEndpoint = (key: string) =>
  `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CLOUDFLARE_NAMESPACE_LOG}/values/${key}`

const projectEndpoint = (key: string) =>
  `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CLOUDFLARE_NAMESPACE_PROJECTS}/values/${key}`

const checkEndpoint = (key: string) =>
  `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CLOUDFLARE_NAMESPACE_PROJECT_CHECK}/values/${key}`

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
  const { success, result, errors } = await fetch(checkEndpoint(`${key}`), {
    method: 'PUT',
    headers: cloudflareHeaders,
    body: value,
  }).then((response) => response.json())
  console.log('addProjectCheck', success, result, errors)
  return { result, success, errors }
}

export const getProject = async ({ key }: any) => {
  const { success, result, errors } = await fetch(projectEndpoint(`${key}`), {
    method: 'GET',
    headers: cloudflareHeaders,
  }).then((response) => response.json())
  console.log('getProject', success, result, errors)
  return { result, success, errors }
}
