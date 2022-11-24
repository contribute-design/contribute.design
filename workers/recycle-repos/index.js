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
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
}

async function handleSchedule(scheduledDate) {
  console.log(scheduledDate)
  const projects = await PROJECTS.list()
  for (const project of projects.keys) {
    console.log(project.name, 'checking')

    const now = new Date()
    const lastUpdated = new Date(project.metadata.lasUpdatedAt)
    const timeDiff = Math.abs(lastUpdated - now)
    // 1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
    const maxTimeDiff = 1000 * 60 * 60 * 24 // 86400000

    if (timeDiff > maxTimeDiff) {
      console.log(project.name, 'time diff > 24h')
      const { value, metadata } = await PROJECT_CHECKS.getWithMetadata(
        project.name
      )
      const projectCheck = value
      if (projectCheck) {
        console.log(project.name, 'is already on check list, skip')
      } else {
        console.log(project.name, 'needs recycle....')
        await PROJECT_CHECKS.put(project.name, 'recycle')
      }
    } else {
      console.log(project.name, 'time diff < 24h')
    }
  }
}
