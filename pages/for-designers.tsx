import Head from 'next/head'
import { FlexGrid } from 'baseui/flex-grid'

import EmptyPage from '../components/EmptyPage'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <>
      <Meta title="designers – design contributions to open source projects made easy" />
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
