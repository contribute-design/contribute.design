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
    const designCheck = await fetch(`${ghRepo}/contents/.design`, headers)
    const designResults = await gatherResponse(designCheck)
    let hasDesign = true
    if (designResults.message) {
      // No .design folder, still remove this key from Check
      // await PROJECT_CHECKS.delete(projectCheck.name);
      console.log(projectCheck.name, 'no .design folder')
      hasDesign = false
    }
    const response = await fetch(ghRepo, headers)
    const results = await gatherResponse(response)
    const projectData = results
    await PROJECTS.put(projectCheck.name, JSON.stringify(projectData), {
      metadata: {
        createdAt:
          project && metadata.createdAt ? metadata.createdAt : new Date(),
        lasUpdatedAt: new Date(),
        hasDesign: hasDesign,
      },
    })
    await PROJECT_CHECKS.delete(projectCheck.name)
  }
}
