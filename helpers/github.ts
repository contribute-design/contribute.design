const repoEndpoint = 'https://api.github.com/repos'

export const getRepo = async ({ org, project }: any) => {
  const endpoint = `${repoEndpoint}/${org}/${project}`
  const res = await fetch(endpoint).then((response) => response.json())
  return res.id ? res : { error: true }
}

export const checkDesignInRepo = async ({ org, project }: any) => {
  const endpoint = `${repoEndpoint}/${org}/${project}/contents/.design`
  const res = await fetch(endpoint).then((response) => response.json())
  console.log(res)
  return !res.message ? res : { error: true }
}
