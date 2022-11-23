import Image from 'next/image'
import Link from 'next/link'
import { useScrollTo } from 'framer-motion-scroll-to-hook'

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
import TweetList from '../components/TweetList'
import { Grid } from '../components/Grid/index'
import Step from '../components/Step'
import BadgeForm from '../components/BadgeForm'

export default function Home() {
  const scrollTo = useScrollTo()
  return (
    <ContentWrapper>
      <Meta title="developers – design contributions to open source projects made easy" />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        <>
          <Intro paddingBottom={['12vh', '12vh', '8vh']}>
            <Grid flexGridColumnCount={[1, 1, 2]} flexDirection="row">
              <GridItem
                paddingTop="0"
                paddingBottom="0"
                width={['100%', '100%', '70%']}
              >
                <GridItem justifyContent="start">
                  <Image
                    src="/images/badge.svg"
                    alt=".design/"
                    width={118}
                    height={41}
                    style={{ width: '50%', maxWidth: '118px', height: 'auto' }}
                  />
                  <Title size="xl" style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Enable <Highlight>Design collaboration</Highlight> on{' '}
                    <Highlight>your</Highlight> OSS project
                  </Title>
                </GridItem>
                <Paragraph size="xl">
                  Empower designers, researchers, and product people to help you
                  take your project to another level. ​
                  <strong>
                    ​All through a simple, yet powerful folder in your project.
                  </strong>
                </Paragraph>
                <Paragraph size="xl">
                  <strong>
                    We will make sure to direct designers towards your project.
                  </strong>
                </Paragraph>
                <ButtonGroup>
                  <Button
                    type="primary"
                    onClick={() => scrollTo(document.querySelector('#start'))}
                  >
                    Enable designers to collaborate
                  </Button>

                  <Link
                    href="https://github.com/contribute-design/examples"
                    target="_blank"
                  >
                    <Button type="secondary" $as="span">
                      Learn best practises to do so
                    </Button>
                  </Link>
                </ButtonGroup>
              </GridItem>
              <GridItem position="relative" marginTop="-10vh">
                <Image
                  src="/images/design.tree.extended.svg"
                  alt="a .design/ folder in your repository"
                  fill
                  objectFit="contain"
                />
              </GridItem>
            </Grid>
          </Intro>
          <a id="start"></a>
          <Intro paddingTop={['4vh', '4vh', '8vh']}>
            <Title size="m" align="center">
              <Step>1</Step>
            </Title>
            <Title size="l" align="center">
              Commit your <Highlight>.design</Highlight> folder
            </Title>
            <Paragraph size="xl" align="center">
              Add a .design folder to your repository and Define your desired
              process for collaboration.
            </Paragraph>
            <Paragraph size="xl" align="center">
              Make sure to provide guidance and access to design relevant
              materials.
            </Paragraph>
            <ButtonGroup justifyContent="center">
              <Link
                href="https://github.com/contribute-design/examples"
                target="_blank"
              >
                <Button type="primary" $as="span">
                  Discover best practices
                </Button>
              </Link>
            </ButtonGroup>
          </Intro>

          <Intro paddingTop={['12vh', '12vh', '8vh']}>
            <Grid flexGridColumnCount={[1, 1, 2]} flexDirection="row-reverse">
              <GridItem paddingLeft="2vw">
                <Title size="m">
                  <Step>2</Step>
                </Title>
                <Title size="l">
                  Create &amp; add your <Highlight>badge</Highlight>
                </Title>
                <Paragraph size="xl">
                  Add the <strong>contribute.design</strong> badge to your
                  README.MD.
                </Paragraph>
                <Paragraph size="xl">
                  We will scan your project and add it to our database
                  instantly.
                </Paragraph>
                <div style={{ position: 'relative' }}>
                  <Image
                    src="/images/sample.readme.png"
                    alt="example README.md with a contribute.design badge"
                    width="1048"
                    height="586"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </GridItem>
              <GridItem position="relative" marginTop="-10vh">
                <Image
                  src="/images/shape.badge.creation.svg"
                  alt=".design/"
                  fill
                  objectFit="contain"
                />
                <div style={{ position: 'relative', zIndex: 99 }}>
                  <BadgeForm />
                </div>
              </GridItem>
            </Grid>
          </Intro>

          <Intro paddingTop={['12vh', '12vh', '8vh']}>
            <Grid flexGridColumnCount={[1, 1, 2]} flexDirection="row">
              <GridItem paddingRight="2vw">
                <Title size="m">
                  <Step>3</Step>
                </Title>
                <Title size="l">
                  <Highlight>Spread</Highlight> the word
                </Title>
                <Paragraph size="xl">
                  We will help you spread the word about your project and design
                  needs by listing them in our directory. We have great reach to
                  many incredible designers eager to jump into the next unique
                  open-source project.
                </Paragraph>
                <Paragraph size="xl">
                  Mention <strong>@contrib_design</strong> in your tweet, and we
                  will make sure to re-tweet and spread the word! ​
                </Paragraph>
                <ButtonGroup>
                  <Link
                    href="https://twitter.com/intent/tweet?url=@contrib_design"
                    target="_blank"
                  >
                    <Button type="primary" $as="span">
                      Tweet about your project
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button type="secondary" $as="span">
                      Discover projects who made it
                    </Button>
                  </Link>
                </ButtonGroup>
              </GridItem>
              <GridItem position="relative">
                <TweetList narrow />
              </GridItem>
            </Grid>
          </Intro>
        </>
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
