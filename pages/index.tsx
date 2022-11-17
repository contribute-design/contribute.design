import Image from 'next/image'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

import EmptyPage from '../components/EmptyPage'
import Meta from '../components/Meta'
import HeaderNavigation from '../components/HeaderNavigation'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import ButtonGroup from '../components/ButtonGroup'
import Button from '../components/Button'
import ContentWrapper from '../components/ContentWrapper'
import Highlight from '../components/Highlight'

export default function Home() {
  return (
    <ContentWrapper>
      <Meta title="./design – design contributions to open source projects made easy" />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        <>
          <FlexGrid
            flexGridColumnCount={1}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            paddingTop="12vh"
            // paddingBottom="12vh"
          >
            <FlexGridItem
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Image
                src="/images/badge.svg"
                alt=".design/"
                width={118}
                height={41}
                style={{ alignSelf: 'center' }}
              />
              <Title
                size="xl"
                align="center"
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                OpenSource <Highlight>&</Highlight> Design{' '}
                <Highlight>collaboration</Highlight> made easy
              </Title>
              <Paragraph size="xl" align="center">
                <strong>
                  ​All through a simple, yet powerful folder in your project.
                </strong>
              </Paragraph>
              <ButtonGroup justifyContent="center">
                <Button type="primary">For developers</Button>
                <Button type="secondary">For designers</Button>
              </ButtonGroup>
            </FlexGridItem>
          </FlexGrid>

          <FlexGrid
            flexGridColumnCount={[1, 1, 2]}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            flexDirection="row-reverse"
            paddingTop="8vh"
            paddingBottom="12vh"
          >
            <FlexGridItem
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Title size="l">
                For <Highlight>developers</Highlight>
              </Title>
              <Paragraph size="xl">
                Empower designers, researchers, and product people to help you
                take your project to another level. ​
                <strong>
                  All through a simple, yet powerful folder in your repo.
                </strong>
              </Paragraph>
              <ButtonGroup>
                <Button>Enable designers to collaborate</Button>
              </ButtonGroup>
            </FlexGridItem>
            <FlexGridItem justifyContent="center" display="flex">
              <Image
                src="/images/design.tree.svg"
                alt="a .design/ folder in your repository"
                width={286}
                height={487}
              />
            </FlexGridItem>
          </FlexGrid>

          <FlexGrid
            flexGridColumnCount={[1, 1, 2]}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            paddingTop="12vh"
            paddingBottom="12vh"
          >
            <FlexGridItem
              justifyContent="center"
              display="flex"
              flexDirection="column"
              paddingTop="12vh"
              paddingBottom="12vh"
            >
              <Title size="l">
                For <Highlight>designers</Highlight>
              </Title>
              <Paragraph size="xl">
                Open Source software is eager for design contributions. They’d
                love to benefit from professional designers, researchers, and
                product people to help them take their project to another level.
              </Paragraph>
              <Paragraph size="xl">
                <strong>Contribute to OpenSource & level up your career</strong>
              </Paragraph>
              <ButtonGroup>
                <Button>Start contributing</Button>
              </ButtonGroup>
            </FlexGridItem>
            <FlexGridItem justifyContent="center" display="flex">
              <Image
                src="/images/shape.svg"
                alt="a sample design contribution"
                width={569}
                height={379}
              />
            </FlexGridItem>
          </FlexGrid>

          <FlexGrid
            flexGridColumnCount={1}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            paddingTop="12vh"
            paddingBottom="12vh"
          >
            <FlexGridItem
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Title size="l" align="center">
                Projects, open to <Highlight>.design</Highlight> contributions
              </Title>
              <ButtonGroup justifyContent="center">
                <Button>See all 2,372 projects</Button>
              </ButtonGroup>
            </FlexGridItem>
          </FlexGrid>

          <FlexGrid
            flexGridColumnCount={1}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            paddingTop="12vh"
            paddingBottom="12vh"
          >
            <FlexGridItem
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Title size="l" align="center">
                <Highlight>Spread</Highlight> the word
              </Title>
              <Paragraph size="xl" align="center">
                Follow us and help us change Open Source for good!
              </Paragraph>
              <ButtonGroup justifyContent="center">
                <Button type="secondary">Follow us on twitter</Button>
              </ButtonGroup>
            </FlexGridItem>
          </FlexGrid>

          <FlexGrid
            flexGridColumnCount={1}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            paddingTop="12vh"
            paddingBottom="12vh"
          >
            <FlexGridItem
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Paragraph size="m" align="center">
                Made with ❤️ by designers &amp; developers for developers &
                designers
              </Paragraph>
            </FlexGridItem>
          </FlexGrid>
          <FlexGrid
            flexGridColumnCount={[1, 1, 2, 4]}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
          >
            <FlexGridItem flexDirection="column">
              <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
                About contribute.design
              </Paragraph>
            </FlexGridItem>
            <FlexGridItem flexDirection="column">
              <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
                Discover projects
              </Paragraph>
            </FlexGridItem>
            <FlexGridItem flexDirection="column">
              <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
                Where to find us
              </Paragraph>
            </FlexGridItem>
            <FlexGridItem flexDirection="column">
              <Paragraph size="s" style={{ textTransform: 'uppercase' }}>
                Stay in the loop
              </Paragraph>
            </FlexGridItem>
          </FlexGrid>
        </>
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
