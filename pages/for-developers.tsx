import EmptyPage from '../components/EmptyPage'
import Meta from '../components/Meta'
import ContentWrapper from '../components/ContentWrapper'

export default function Home() {
  return (
    <ContentWrapper>
      <Meta title="developers – design contributions to open source projects made easy" />
      {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? <></> : <EmptyPage />}
    </ContentWrapper>
  )
}
