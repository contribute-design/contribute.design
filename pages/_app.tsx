import type { AppProps } from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'
import { debug, styletron } from '../helpers/styletron'
import CustomTheme from '../styles/theme'
import HeaderNavigation from '../components/HeaderNavigation'

export default function App({ Component, pageProps }: AppProps) {
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
      </BaseProvider>
    </StyletronProvider>
  )
}
