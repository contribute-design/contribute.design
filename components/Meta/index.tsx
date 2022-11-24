import Head from 'next/head'
import React from 'react'

export interface MetaProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

const Meta: React.FC<MetaProps> = ({
  title = '.design/ – design contributions to open source projects made easy',
  description = 'OpenSource &amp; Design collaboration made easy. Empower designers, researchers, and product people to help you take your project to another level.',
  image = 'https://contribute.design/images/og.default.png',
  url = 'https://contrinute.design',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="black" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default Meta
