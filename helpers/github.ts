const repoEndpoint = 'https://api.github.com/repos'
const gitHubHeaders = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  'Content-Type': 'application/json',
  'User-Agent': 'contribute.design',
}

export const getRepo = async ({ org, project }: any) => {
  const endpoint = `${repoEndpoint}/${org}/${project}`
  const res = await fetch(endpoint, {
    headers: gitHubHeaders,
  }).then((response) => response.json())
  return res.id ? res : { error: true }
}

export const checkDesignInRepo = async ({ org, project }: any) => {
  const endpoint = `${repoEndpoint}/${org}/${project}/contents/.design`
  const res = await fetch(endpoint, {
    headers: gitHubHeaders,
  }).then((response) => response.json())
  // console.log(res)
  return !res.message ? res : { error: true }
}
