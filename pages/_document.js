/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from 'next/document'
import { string } from 'prop-types'
import gtmParts, { buildParts } from 'react-google-tag-manager';


const defaultTitle = 'Rockstat | Open Source Customer Data Platform'
const defaultDescription = 'Session analytics, Product analytics, ClickHouse writer, Microservice platform, Framework for Python, Framework for TypeScript, etc...'
const defaultOGURL = 'https:/rock.st'
const defaultOGImage = `${defaultOGURL}/static/images/social/fig.png`


export default class MyDocument extends Document {
  // static propTypes = {
  //   gtmId: PropTypes.string,
  // }

  render() {
    const { props } = this;
    const gtm = gtmParts({
      id: 'GTM-5HMC8Z4',
      dataLayerName: 'dataLayer',
      additionalEvents: {},
      previewVariables: false,
      scheme: 'https:',
    });

    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <title>{defaultTitle}</title>
          <meta name="description" content={props.description || defaultDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" /> */}
          {/* <link rel="apple-touch-icon" href="/static/touch-icon.png" /> */}
          {/* <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" /> */}
          <link rel="icon" href="/static/favicon.ico" />
          <meta property="og:url" content={props.url || defaultOGURL} />
          <meta property="og:title" content={defaultTitle} />
          <meta property="og:description" content={defaultDescription} />
          <meta name="twitter:site" content={props.url || defaultOGURL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
          <meta property="og:image" content={props.ogImage || defaultOGImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {gtm.scriptAsReact()}
        </Head>
        <body>
          {gtm.noScriptAsReact()}
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
