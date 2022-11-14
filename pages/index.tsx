import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          .design/ – design contributions to open source projects made easy
        </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/contribute.design.svg"
          alt="contribute.design"
          width={387}
          height={59}
        />
      </div>
    </>
  )
}
