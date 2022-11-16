import Head from 'next/head'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

import EmptyPage from '../components/EmptyPage/index'
import Title from '../components/Title/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          404 Not found – design contributions to open source projects made easy
        </title>
        <meta
          name="description"
          content="OpenSource &amp; Design collaboration made easy. Empower designers, researchers, and product people to help you take your project to another level."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <EmptyPage />
      <FlexGrid
        flexGridColumnCount={1}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        <FlexGridItem justifyContent="center" display="flex">
<Title size="xl">404</Title>
        </FlexGridItem>
      </FlexGrid>
    </>
  )
}
