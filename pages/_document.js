/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from 'next/document'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

export default class MyDocument extends Document {
  render() {
    const { props } = this;
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <title>{props.title || ''}</title>
          <meta name="description" content={props.description || defaultDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" />
          <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
          <link rel="icon" href="/static/favicon.ico" />
          <meta property="og:url" content={props.url || defaultOGURL} />
          <meta property="og:title" content={props.title || ''} />
          <meta property="og:description" content={props.description || defaultDescription} />
          <meta name="twitter:site" content={props.url || defaultOGURL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
          <meta property="og:image" content={props.ogImage || defaultOGImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {/* <link rel="stylesheet" href="/_next/static/css/style.css" /> */}
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// Head.propTypes = {
//   title: string,
//   description: string,
//   url: string,
//   ogImage: string
// }
