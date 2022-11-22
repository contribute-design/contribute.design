import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'
import { debug, styletron } from '../helpers/styletron'
import CustomTheme from '../styles/theme'
import HeaderNavigation from '../components/HeaderNavigation'
import Footer from '../components/Footer'
import posthog from 'posthog-js'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    !window.location.href.includes('localhost') &&
      posthog.init(`${process.env.NEXT_PUBLIC_POSTHOG_TOKEN}`)
  })

  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <BaseProvider theme={CustomTheme}>
        {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
          <>
            <HeaderNavigation />
          </>
        ) : null}
        <Component {...pageProps} />
        <Analytics />
        {process.env.NEXT_PUBLIC_ENABLE_SITE_PREVIEW ? (
          <>
            <Footer />
          </>
        ) : null}
      </BaseProvider>
    </StyletronProvider>
  )
}
