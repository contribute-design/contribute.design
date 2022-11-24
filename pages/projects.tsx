import { useState, useEffect } from 'react'
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
import { Select, Value } from '../components/Select'
import ButtonGroup from '../components/ButtonGroup'
import { usePersistentState } from '../helpers/usePersistentState'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const project_url = '/api/projects'

export default function Home() {
  const { data, error } = useSWR(project_url, fetcher)
  const [sortOrder, setSortOrder] = usePersistentState<Value>('sortOrder', [])
  const [sortedData, setSortedData] = useState({ keys: {} })

  useEffect(() => {
    let sortedData = {}
    if (data) {
      if (sortOrder.length > 0) {
        if (sortOrder[0].id === 'date') {
          sortedData = data.keys.sort(
            (a: any, b: any) => a.metadata.createdAt < b.metadata.createdAt
          )
        }
        if (sortOrder[0].id === 'name') {
          sortedData = data.keys.sort((a: any, b: any) => a.name > b.name)
        }
        if (sortOrder[0].id === 'stars') {
          sortedData = data.keys.sort(
            (a: any, b: any) =>
              a.metadata.stargazers_count < b.metadata.stargazers_count
          )
        }
        if (sortOrder[0].id === 'issues') {
          sortedData = data.keys.sort(
            (a: any, b: any) =>
              a.metadata.open_issues_count < b.metadata.open_issues_count
          )
        }
        if (sortOrder[0].id === 'last_contribution') {
          sortedData = data.keys.sort(
            (a: any, b: any) =>
              a.metadata.last_contribution < b.metadata.last_contribution
          )
        }
      } else {
        sortedData = data.keys.sort((a: any, b: any) => a.name > b.name)
      }
      setSortedData({ keys: sortedData })
    }
  }, [sortOrder])

  return (
    <ContentWrapper>
      <Meta
        title="projects – design contributions to open source projects made easy"
        image="https://contribute.design/images/og.projects.png"
      />
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
            <ButtonGroup justifyContent="center">
              <Select
                options={[
                  { label: 'Name', id: 'name' },
                  { label: 'Last code contribution', id: 'last_contribution' },
                  { label: 'Date added', id: 'date' },
                  { label: 'Stars', id: 'stars' },
                  { label: 'Open issues', id: 'issues' },
                ]}
                value={sortOrder}
                placeholder="Sort by...."
                onChange={(params) => setSortOrder(params.value)}
              />
            </ButtonGroup>
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
              <ProjectList
                data={
                  Object.keys(sortedData.keys).length > 0 ? sortedData : data
                }
              />
            </>
          )}
        </>
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
