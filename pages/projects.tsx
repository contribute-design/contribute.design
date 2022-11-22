import useSWR from 'swr'
import Link from 'next/link'

import EmptyPage from '../components/EmptyPage'
import Meta from '../components/Meta'
import ContentWrapper from '../components/ContentWrapper'
import ProjectList from '../components/ProjectList'
import Title from '../components/Title/index'
import Highlight from '../components/Highlight'
import Intro from '../components/Intro'
import Paragraph from '../components/Paragraph/index'
import Spinner from '../components/Spinner'
import { GridItem } from '../components/Grid'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const project_url = '/api/projects'

export default function Home() {
  const { data, error } = useSWR(project_url, fetcher)
  return (
    <ContentWrapper>
      <Meta title="projects – design contributions to open source projects made easy" />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        <>
          <Intro paddingBottom={['12vh', '12vh', '8vh']}>
            <Title
              size="xl"
              align="center"
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              Projects, open to <Highlight>.design</Highlight> contributions
            </Title>
            <Paragraph size="m" align="center" color="contentSecondary">
              Are you missing your project here?{' '}
              <Link href="/for-developers">
                <Highlight>Add it!</Highlight>
              </Link>
            </Paragraph>
          </Intro>
          {error ? (
            <>
              <Title size="m" align="center">
                <Highlight>Woooops.</Highlight>
              </Title>
              <Paragraph align="center">
                Something has gone terribly bad... Don&apos;t worry though
                – we&apos;ve received an error report and will make sure to fix
                this issue.
              </Paragraph>
              <Paragraph align="center">
                Feel free to still{' '}
                <Link href="https://twitter.com/contrib_design" target="_blank">
                  <Highlight>reach out to us</Highlight>
                </Link>{' '}
                in the mean time.
              </Paragraph>
            </>
          ) : !data ? (
            <GridItem alignContent="center">
              <Spinner />
            </GridItem>
          ) : (
            <>
              <ProjectList data={data} />
            </>
          )}
        </>
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
