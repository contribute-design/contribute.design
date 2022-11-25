import Link from 'next/link'

import Title from '../components/Title'
import Meta from '../components/Meta'
import ContentWrapper from '../components/ContentWrapper'
import Paragraph from '../components/Paragraph/index'
import Intro from '../components/Intro'
import ButtonGroup from '../components/ButtonGroup'
import Button from '../components/Button'
import Highlight from '../components/Highlight'

export default function Home() {
  return (
    <>
      <Meta title="404 Not Found – sadly no design contributions to open source projects made easy" />
      <ContentWrapper>
        <Intro>
          <Title size="xl" align="center">
            Oh <Highlight>nooooo</Highlight>
          </Title>
          <Paragraph size="xl" align="center">
            Something has gone terribly bad. We couldn&apos;t find the page you
            requested and were notified about the issue.
          </Paragraph>
          <Paragraph size="xl" align="center">
            In the mean time – feel free to:
          </Paragraph>
          <ButtonGroup justifyContent="center">
            <Link href="/">
              <Button type="primary" $as="span">
                Learn more about contribute.design
              </Button>
            </Link>
            <Link href="/projects">
              <Button type="secondary" $as="span">
                Discover projects open for design contributions
              </Button>
            </Link>
          </ButtonGroup>
        </Intro>
      </ContentWrapper>
    </>
  )
}
