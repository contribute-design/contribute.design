import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../helpers/styletron'

class MyDocument extends Document {
  static getInitialProps = async (ctx: any) => {
    const renderPage = () =>
      ctx.renderPage({
        enhanceApp: (App: any) =>
          function (props: any) {
            return (
              <StyletronProvider value={styletron}>
                <App {...props} />
              </StyletronProvider>
            )
          },
      })

    const initialProps = await Document.getInitialProps({ ...ctx, renderPage })
    // @ts-ignore
    const stylesheets = styletron.getStylesheets() || []
    return { ...initialProps, stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {
            // @ts-ignore
            this.props.stylesheets.map((sheet: any, i: number) => (
              <style
                className="_styletron_hydrate_"
                dangerouslySetInnerHTML={{ __html: sheet.css }}
                media={sheet.attrs.media}
                data-hydrate={sheet.attrs['data-hydrate']}
                key={i}
              />
            ))
          }
          {/* You can add links to your web fonts here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
