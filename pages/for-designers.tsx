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
      <Meta
        title="Contribute to OpenSource projects &amp; impact millions"
        description="Learn how easy it is to discover Open Source projects open to Design contributions and start collaborating with them in a glimpse."
        image="https://contribute.design/images/og.designers.png"
      />
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
                    <Highlight>Contribute</Highlight> to OpenSource{' '}
                    <Highlight>&</Highlight> <Highlight>impact</Highlight>{' '}
                    millions
                  </Title>
                </GridItem>
                <Paragraph size="xl">
                  OpenSource Software is eager to benefit from professional
                  designers, researchers, and product people to help them take
                  their project to another level. ​Most of them lacked proper
                  guidance for non engineers to be able to contribute.{' '}
                  <strong>Things changed though....</strong>
                </Paragraph>
                <Paragraph size="xl">
                  <strong>
                    Contribution to OpenSource software got a lot easier – all
                    through a simple, yet powerful folder in their project.
                  </strong>
                </Paragraph>
                <ButtonGroup>
                  <Button
                    type="primary"
                    onClick={() => scrollTo(document.querySelector('#start'))}
                  >
                    Learn how to contribute
                  </Button>

                  <Link href="/projects">
                    <Button type="secondary" $as="span">
                      Discover projects open for .design
                    </Button>
                  </Link>
                </ButtonGroup>
              </GridItem>
              <GridItem position="relative" marginTop="-10vh">
                <Image
                  src="/images/shape.design.contribution.png"
                  alt="a sample design contribution to an open source project"
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
              Discover <Highlight>relevant</Highlight> projects
            </Title>
            <Paragraph size="xl" align="center">
              <strong>
                Browse through our directory of projects looking for design
                contributions.
              </strong>
            </Paragraph>
            <Paragraph size="xl" align="center">
              Be sure to get yourself familiar with the project and understand
              what it does. We’re pretty sure every project can benefit from
              your skills.
            </Paragraph>
            <ButtonGroup justifyContent="center">
              <Link href="/projects">
                <Button type="primary" $as="span">
                  Discover projects
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
                  Understand their <Highlight>needs</Highlight> &amp;{' '}
                  <Highlight>guidelines</Highlight>
                </Title>
                <Paragraph size="xl">
                  Get yourself a little bit familiar with GitHub, browse through
                  their .design guidelines, and start by looking into their
                  issues.
                </Paragraph>
                <Paragraph size="xl">
                  If you feel you have an idea or question, do not hesitate to
                  open new issues. But as usual – try to be as insightful as
                  possible.
                </Paragraph>
                <ButtonGroup>
                  <Link
                    href="https://github.com/contribute-design/examples"
                    target="_blank"
                  >
                    <Button type="secondary" $as="span">
                      See some example guidelines
                    </Button>
                  </Link>
                </ButtonGroup>
              </GridItem>
              <GridItem position="relative" marginTop="-10vh">
                <Image
                  src="/images/design.tree.svg"
                  alt=".design/"
                  fill
                  objectFit="contain"
                />
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
                  Contribute <Highlight>&amp; Spread</Highlight> the word
                </Title>
                <Paragraph size="xl">
                  Start collaborating and contributing to OpenSource Software.
                  You will feel like a better human very soon – we promise!
                </Paragraph>
                <Paragraph size="xl">
                  Feel free to tweet about your experience with OSS – We will
                  help you spread the word about your contribution and help you
                  get the recognition you deserve!
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
                      Tweet about your contribution
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
