import Link from 'next/link'
import Image from 'next/image'

import Card from '../Card'
import { GridItem } from '../Grid'
import Highlight from '../Highlight'
import Title from '../Title/index'
import Paragraph from '../Paragraph'
import ButtonGroup from '../ButtonGroup'
import Button from '../Button'
import { Grid } from '../Grid/index'

export const IndexDesignersMobile: React.FC = () => (
  <Card headerImage="/images/mobile.card.designers.png">
    <GridItem marginTop="-17vw" padding="5vw">
      <Title size="l" align="center">
        <Highlight>Design</Highlight> and <Highlight>impact</Highlight> millions
      </Title>
      <Paragraph size="l" align="center">
        We promise – contributing to Open Source software and impacting real
        projects has never been this easy.
      </Paragraph>
      <ButtonGroup justifyContent="center">
        <Link href="/for-designers">
          <Button $as="span">Start contributing</Button>
        </Link>
      </ButtonGroup>
    </GridItem>
  </Card>
)

export const IndexDesigners: React.FC = () => (
  <Grid flexGridColumnCount={[1, 1, 2]} flexDirection="row">
    <GridItem paddingTop={[0, 0, '4vw']} paddingBottom="4vw">
      <Title size="l">
        For <Highlight>designers</Highlight>
      </Title>
      <Paragraph size="xl">
        Contributing to Open Source software has never been this easy. Plenty of
        projects would love to benefit from professional designers, researchers,
        and product people to help them take their project to another level.
      </Paragraph>
      {/* <Paragraph size="xl">
  <strong>
    Contribute to OpenSource & level up your career
  </strong>
</Paragraph> */}
      <ButtonGroup>
        <Link href="/for-designers">
          <Button $as="span">Start contributing</Button>
        </Link>
      </ButtonGroup>
    </GridItem>
    <GridItem position="relative">
      <Image
        src="/images/shape.design.contribution.png"
        alt="a sample design contribution"
        fill
        objectFit="contain"
      />
    </GridItem>
  </Grid>
)

export const IndexDevelopersMobile: React.FC = () => (
  <Card headerImage="/images/mobile.card.developers.png">
    <GridItem marginTop="-17vw" padding="5vw">
      <Title size="l" align="center">
        Enable <Highlight>design</Highlight> contributions
      </Title>
      <Paragraph size="l" align="center">
        Empower thousands of designers, researchers, and product people. ​All
        through a simple, yet powerful folder in your repo.
      </Paragraph>
      <ButtonGroup justifyContent="center">
        <Link href="/for-developers">
          <Button $as="span">Enable designers to collaborate</Button>
        </Link>
      </ButtonGroup>
    </GridItem>
  </Card>
)

export const IndexDevelopers: React.FC = () => (
  <Grid flexGridColumnCount={[1, 1, 2]} flexDirection="row-reverse">
    <GridItem paddingTop={[0, 0, '12vw']} paddingBottom="12vw">
      <Title size="l">
        For <Highlight>developers</Highlight>
      </Title>
      <Paragraph size="xl">
        Empower designers, researchers, and product people to help you take your
        project to another level. ​
        <strong>All through a simple, yet powerful folder in your repo.</strong>
      </Paragraph>
      <ButtonGroup>
        <Link href="/for-developers">
          <Button $as="span">Enable designers to collaborate</Button>
        </Link>
      </ButtonGroup>
    </GridItem>
    <GridItem position="relative">
      <Image
        src="/images/design.tree.svg"
        alt="a .design/ folder in your repository"
        fill
        objectFit="contain"
      />
    </GridItem>
  </Grid>
)
