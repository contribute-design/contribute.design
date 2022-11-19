import useSWR from 'swr'

import EmptyPage from '../components/EmptyPage'
import Meta from '../components/Meta'
import ContentWrapper from '../components/ContentWrapper'
import ProjectList from '../components/ProjectList'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const project_url = '/api/projects'

export default function Home() {
  const { data, error } = useSWR(project_url, fetcher)
  return (
    <ContentWrapper>
      <Meta title="projects – design contributions to open source projects made easy" />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        <ContentWrapper>
          {error ? (
            <>An error has occurred.</>
          ) : !data ? (
            <>Loading</>
          ) : (
            <ProjectList data={data} />
          )}
        </ContentWrapper>
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
