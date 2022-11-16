import Head from 'next/head'
import { FlexGrid } from 'baseui/flex-grid'

import EmptyPage from '../components/EmptyPage/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          projects – design contributions to open source projects made easy
        </title>
        <meta
          name="description"
          content="OpenSource &amp; Design collaboration made easy. Empower designers, researchers, and product people to help you take your project to another level."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        <FlexGrid
          flexGridColumnCount={1}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
        >
          <></>
        </FlexGrid>
      ) : (
        <EmptyPage />
      )}
    </>
  )
}
