addEventListener('scheduled', (event) => {
  event.waitUntil(handleSchedule(event.scheduledTime))
})

async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return await response.json()
  } else if (contentType.includes('application/text')) {
    return response.text()
  } else if (contentType.includes('text/html')) {
    return response.text()
  } else {
    return response.text()
  }
}

const headers = {
  headers: {
    'user-agent': 'cfw',
  },
}

async function handleSchedule(scheduledDate) {
  console.log(scheduledDate)
  const projectChecks = await PROJECT_CHECKS.list()
  for (const projectCheck of projectChecks.keys) {
    console.log(projectCheck.name, 'checking')
    const { value, metadata } = await PROJECTS.getWithMetadata(
      projectCheck.name
    )
    const project = value
    if (project) {
      console.log(
        projectCheck.name,
        'project already exists, performing updates',
        metadata
      )
    }
    const ghRepo = `https://api.github.com/repos/${projectCheck.name}`
    const response = await fetch(ghRepo, headers)
    const results = await gatherResponse(response)
    const projectData = results

    if (projectData.message) {
      // this is not a valid gh repo, remove it form checks and skip
      await PROJECT_CHECKS.delete(projectCheck.name)
      console.log(projectCheck.name, 'no valid repo')
    } else {
      const designCheck = await fetch(`${ghRepo}/contents/.design`, headers)
      const designResults = await gatherResponse(designCheck)
      let hasDesign = true
      if (designResults.message) {
        // No .design folder, still remove this key from Check
        // await PROJECT_CHECKS.delete(projectCheck.name);
        console.log(projectCheck.name, 'no .design folder')
        hasDesign = false
      }
      await PROJECTS.put(projectCheck.name, JSON.stringify(projectData), {
        metadata: {
          createdAt:
            project && metadata.createdAt ? metadata.createdAt : new Date(),
          lasUpdatedAt: new Date(),
          hasDesign: hasDesign,
          full_name: projectData.full_name,
          description: projectData.description,
          owner: {
            login: projectData.owner.login,
            avatar_url: projectData.owner.avatar_url,
            url: projectData.owner.url,
          },
          homepage: projectData.homepage,
          stargazers_count: projectData.stargazers_count,
          watchers_count: projectData.watchers_count,
          open_issues_count: projectData.open_issues_count,
          forks_count: projectData.forks_count,
          subscribers_count: projectData.subscribers_count,
          language: projectData.language,
          last_contribution: projectData.pushed_at,
        },
      })
      await PROJECT_CHECKS.delete(projectCheck.name)
    }
  }
}
