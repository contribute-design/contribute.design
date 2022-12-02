import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useStyletron } from 'baseui'

import EmptyPage from '../../components/EmptyPage'
import Meta from '../../components/Meta'
import ContentWrapper from '../../components/ContentWrapper'
import Intro from '../../components/Intro'
import { Grid, GridItem } from '../../components/Grid/index'
import Title from '../../components/Title/index'
import Highlight from '../../components/Highlight'
import Paragraph from '../../components/Paragraph/index'
import Spinner from '../../components/Spinner'
import {
  BackIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  StarIcon,
  IssueIcon,
  LastCommitIcon,
  LinkIcon,
  CreationIcon,
} from '../../components/Icon'
import NavigationLink from '../../components/NavigationLink'
import Card from '../../components/Card'
import { Block } from 'baseui/block'
import { IconLink } from '../../components/Project/index'
import { intToString } from '../../helpers/numbers'
import { timeAgo } from '../../helpers/time'
import ButtonGroup from '../../components/ButtonGroup'
import Button from '../../components/Button'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export interface FolderStructureItemProps {
  children?: React.ReactNode
  link?: string
  icon?: React.ReactNode
  type?: 'folder' | 'file'
  'data-testid'?: string
}

const FolderStructureItem: React.FC<FolderStructureItemProps> = ({
  children,
  link,
  icon,
  type = 'folder',
}) => {
  return (
    <Paragraph>
      <NavigationLink
        href={link ? link : '#'}
        size="small"
        block
        paddingLeft="0"
        paddingTop="4px"
        paddingBottom="8px"
        borderBottom
        target="_blank"
      >
        {icon ? (
          icon
        ) : type === 'folder' ? (
          <FolderIcon size={16} />
        ) : (
          <FileIcon size={16} />
        )}
        <span style={{ marginLeft: 8 }}>{children}</span>
      </NavigationLink>
    </Paragraph>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const props = { ...params }
  return {
    props: props,
  }
}

export default function Home() {
  const router = useRouter()
  const [css, theme] = useStyletron()

  const { org, project } = router.query
  const project_url = `/api/${org}/${project}`
  const { data, error } = useSWR(project_url, fetcher)

  return (
    <ContentWrapper>
      <Meta
        title={`${org}/${project} – Open Source project – is open to design contributions.`}
        description={`Read the design contribution guidelines for ${org}/${project}. Contribtue to it and help the team level up their project and gain visibility and experience as a Designer.`}
        image={`https://contribute.design/api/og/${org}/${project}`}
      />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
        error || data?.result === 404 ? (
          <>
            <Title size="m" align="center">
              <Highlight>We couldn&apos;t find this project.</Highlight>
            </Title>
            <Paragraph align="center">
              Something has gone terribly bad... We couldn&apos;t find this
              project in our database.
            </Paragraph>
            <Paragraph align="center">
              Feel free to either{' '}
              <Link href="/for-developers">
                <Highlight>add it</Highlight>
              </Link>{' '}
              or{' '}
              <Link href="https://twitter.com/contrib_design" target="_blank">
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
          <Intro paddingBottom={['12vh', '12vh', '8vh']}>
            <Grid
              flexGridColumnCount={[1, 1, 2]}
              flexDirection="row"
              justifyContent="start"
              alignContent="start"
            >
              <GridItem
                paddingTop="0"
                paddingBottom="0"
                width={['100%', '100%', '70%']}
              >
                <GridItem justifyContent="start">
                  <Paragraph>
                    <NavigationLink size="small" href={`/projects`}>
                      <BackIcon
                        size={20}
                        className={css({ marginRight: '4px' })}
                      />
                      View all projects
                    </NavigationLink>
                  </Paragraph>
                  <Title
                    size="xl"
                    style={{
                      wordBreak: 'break-all',
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <img
                      src={data.result.metadata.owner?.avatar_url}
                      width={50}
                      height={50}
                      alt={`${data.result.metadata.owner.login}`}
                      className={css({
                        borderRadius: '80px',
                        marginRight: '12px',
                      })}
                    />

                    <br />
                    {data.result.metadata.full_name}
                  </Title>

                  <Grid
                    flexDirection="row"
                    justifyContent="start"
                    flexGridRowGap="8px"
                    marginTop="-20px"
                  >
                    <img
                      src={`https://contribute.design/api/shield/${org}/${project}`}
                      width={'107px'}
                      height="auto"
                      style={{ marginRight: 8 }}
                    />
                    {data.result.metadata.stargazers_count && (
                      <Paragraph>
                        <IconLink icon={<StarIcon size={16} />} alt="Stars">
                          {intToString(data.result.metadata.stargazers_count)}
                        </IconLink>
                      </Paragraph>
                    )}

                    {data.result.metadata.open_issues_count && (
                      <Paragraph>
                        <IconLink
                          icon={<IssueIcon size={16} />}
                          alt="Open issues"
                        >
                          Issues:{' '}
                          {intToString(data.result.metadata.open_issues_count)}
                        </IconLink>
                      </Paragraph>
                    )}
                    {data.result.metadata.project_created_at && (
                      <Paragraph>
                        <IconLink
                          icon={<CreationIcon size={16} />}
                          alt="Creation date"
                        >
                          Created:{' '}
                          {timeAgo(data.result.metadata.project_created_at)}
                        </IconLink>
                      </Paragraph>
                    )}
                    {data.result.metadata.last_contribution && (
                      <Paragraph>
                        <IconLink
                          icon={<LastCommitIcon size={16} />}
                          alt="Last contribution"
                        >
                          Last contrib.:{' '}
                          {timeAgo(data.result.metadata.last_contribution)}
                        </IconLink>
                      </Paragraph>
                    )}
                  </Grid>
                  <Paragraph size="xl">
                    {data.result.metadata.description}
                  </Paragraph>
                  <ButtonGroup>
                    <Link
                      href={`https://github.com/${data.result.metadata.full_name}`}
                      target="_blank"
                    >
                      <Button type="primary" $as="span">
                        View on GitHub
                      </Button>
                    </Link>
                    {data.result.metadata.homepage && (
                      <Link
                        href={data.result.metadata.homepage}
                        target="_blank"
                      >
                        <Button type="secondary" $as="span">
                          Project Website
                        </Button>
                      </Link>
                    )}
                  </ButtonGroup>
                </GridItem>
              </GridItem>
              <GridItem
                paddingTop={[0, 0, '116px']}
                paddingLeft={[0, 0, '40px', '80px']}
              >
                <Card>
                  <Grid>
                    <Link
                      href={
                        data.design && !data.design.error
                          ? `https://github.com/${
                              data.result.metadata.full_name
                            }/tree/main/${
                              data.result.metadata.hasDesign &&
                              data.result.metadata.designType === 'folder'
                                ? '.design'
                                : ''
                            }`
                          : '#'
                      }
                      target="_blank"
                    >
                      <GridItem
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        gridGap="8px"
                      >
                        <FolderOpenIcon size={16} />
                        <Paragraph>
                          <strong>
                            .
                            {data.result.metadata.hasDesign &&
                            data.result.metadata.designType === 'folder'
                              ? 'design'
                              : ''}
                            /
                          </strong>
                        </Paragraph>
                      </GridItem>
                    </Link>
                    <Block>
                      {!data.design || data.design.error ? (
                        <>
                          <GridItem flexGridColumnGap="20px">
                            <Title size="s" align="center">
                              No <Highlight>.design</Highlight> folder
                            </Title>
                            <Paragraph align="center">
                              This project doesn&apos;t have a .design folder
                              yet. If you&apos;re the owner of the project
                              – make sure to create one.
                            </Paragraph>
                            <ButtonGroup justifyContent="center">
                              <Link
                                href={`https://github.com/contribute-design/examples`}
                                target="_blank"
                              >
                                <Button type="secondary" $as="span">
                                  Here are some examples
                                </Button>
                              </Link>
                            </ButtonGroup>
                          </GridItem>
                        </>
                      ) : (
                        <>
                          {data.design.map((item: any, i: number) => (
                            <FolderStructureItem
                              key={i}
                              type={item.type}
                              link={`https://github.com/${org}/${project}/tree/main/${
                                data.result.metadata.hasDesign &&
                                data.result.metadata.designType === 'folder'
                                  ? '.design'
                                  : ''
                              }/${item.name}`}
                            >
                              {item.name}
                            </FolderStructureItem>
                          ))}
                        </>
                      )}
                    </Block>
                  </Grid>
                </Card>
              </GridItem>
            </Grid>
          </Intro>
        )
      ) : (
        <EmptyPage />
      )}
    </ContentWrapper>
  )
}
