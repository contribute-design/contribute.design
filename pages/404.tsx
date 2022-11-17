import Head from 'next/head'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

import EmptyPage from '../components/EmptyPage'
import Title from '../components/Title'
import Meta from '../components/Meta'
import ContentWrapper from '../components/ContentWrapper'

export default function Home() {
  return (
    <>
      <Meta title="404 Not Found – sadly no design contributions to open source projects made easy" />
      <EmptyPage />
      <ContentWrapper>
        <Title size="xl">404</Title>
      </ContentWrapper>
    </>
  )
}
