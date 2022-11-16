import Head from 'next/head'
import Image from 'next/image'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          .design/ – design contributions to open source projects made easy
        </title>
        <meta
          name="description"
          content="OpenSource &amp; Design collaboration made easy. Empower designers, researchers, and product people to help you take your project to another level."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FlexGrid
        flexGridColumnCount={1}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        <FlexGridItem
          justifyContent="center"
          display="flex"
        >
          <Image
            src="/contribute.design.svg"
            alt="contribute.design"
            width={387}
            height={59}
          />
        </FlexGridItem>
      </FlexGrid>
    </>
  )
}
