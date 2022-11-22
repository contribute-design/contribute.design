import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import EmptyPage from '../components/EmptyPage'
import Meta from '../components/Meta'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import ButtonGroup from '../components/ButtonGroup'
import Button from '../components/Button'
import ContentWrapper from '../components/ContentWrapper'
import Highlight from '../components/Highlight'
import Intro from '../components/Intro'
import { GridItem } from '../components/Grid'
import { Block } from '../components/Block'
import ProjectList from '../components/ProjectList'
import TweetList from '../components/TweetList'
import {
  IndexDesigners,
  IndexDesignersMobile,
  IndexDevelopers,
  IndexDevelopersMobile,
} from '../components/ContentItems'
import Spinner from '../components/Spinner'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const project_url = '/api/projects?limit=6'

export default function Home() {
  const { data, error } = useSWR(project_url, fetcher)

  return (
    <ContentWrapper>
      <Meta title="./design – design contributions to open source projects made easy" />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        <>
          <Intro paddingBottom={['12vh', '12vh', '8vh']}>
            <Image
              src="/images/badge.svg"
              alt=".design/"
              width={118}
              height={41}
              style={{ alignSelf: 'center' }}
            />
            <GridItem
              paddingLeft={[0, '60px', '10%', '20%']}
              paddingRight={[0, '60px', '10%', '20%']}
            >
              <Title
                size="xl"
                align="center"
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                OpenSource <Highlight>&</Highlight> Design{' '}
                <Highlight>collaboration</Highlight> made easy
              </Title>
            </GridItem>
            <Paragraph size="xl" align="center">
              <strong>
                ​All through a simple, yet powerful folder in your project.
              </strong>
            </Paragraph>
            <ButtonGroup justifyContent="center">
              <Link href="/for-developers">
                <Button type="primary" $as="span">
                  For developers
                </Button>
              </Link>
              <Link href="/for-designers">
                <Button type="secondary" $as="span">
                  For designers
                </Button>
              </Link>
            </ButtonGroup>
          </Intro>

          <Intro paddingTop={['4vh', '4vh', '8vh']}>
            <Block display={['block', 'block', 'none']}>
              <IndexDevelopersMobile />
            </Block>
            <Block display={['none', 'none', 'block']}>
              <IndexDevelopers />
            </Block>
          </Intro>

          <Intro paddingTop={['4vh', '4vh', '8vh']}>
            <Block display={['block', 'block', 'none']}>
              <IndexDesignersMobile />
            </Block>
            <Block display={['none', 'none', 'block']}>
              <IndexDesigners />
            </Block>
          </Intro>

          <Intro paddingTop={['12vh', '12vh', '8vh']}>
            <GridItem
              paddingLeft={[0, 0, '110px', '320px']}
              paddingRight={[0, 0, '110px', '320px']}
            >
              <Title size="l" align="center">
                Projects, open to <Highlight>.design</Highlight> contributions
              </Title>
            </GridItem>

            {error ? (
              <>
                <Title size="m" align="center">
                  <Highlight>Woooops.</Highlight>
                </Title>
                <Paragraph align="center">
                  Something has gone terribly bad... Don&apos;t worry though
                  – we&apos;ve received an error report and will make sure to
                  fix this issue.
                </Paragraph>
                <Paragraph align="center">
                  Feel free to still{' '}
                  <Link
                    href="https://twitter.com/contrib_design"
                    target="_blank"
                  >
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
              <ProjectList data={data} />
            )}

            <ButtonGroup justifyContent="center">
              <Link href="/projects">
                <Button $as="span">See all 2,372 projects</Button>
              </Link>
            </ButtonGroup>
          </Intro>

          <Intro paddingTop={['12vh', '12vh', '8vh']}>
            <Title size="l" align="center">
              <Highlight>Spread</Highlight> the word
            </Title>
            <Paragraph size="xl" align="center">
              Follow us and help us change Open Source for good!
            </Paragraph>
            <TweetList />
            <ButtonGroup justifyContent="center">
              <Link href="https://twitter.com/contrib_design" target="_blank">
                <Button type="secondary" $as="span">
                  Follow us on twitter
                </Button>
              </Link>
            </ButtonGroup>
          </Intro>
        </>
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
