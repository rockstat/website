import React from 'react'
import Router, { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/tag'
import cln from 'classnames'
import Head from 'next/head'

// Components
import { Link } from '../next-routes';
import { SideMenu } from '../components/side-menu';
import { Wrapper } from '../containers';

import Heading from '@app/components/heading'
import { P, Quote, HR } from '@app/components/text/paragraph'
import { UL, LI } from '@app/components/text/list'
import { H1, H3, H4, H5 } from '@app/components/text/heading'
import { InlineCode, Code } from 'app/components/text/code'
import { GenericLink } from '../components/text/link'
import { Expand, Tip, Success, Alert, Info } from '../components'

import style from '@app/styles/docs.css';
import menuData from '@app/constants/docs';

const DocH2 = ({ children }) => (
  <div>
    <Heading>
      <H3>{children}</H3>
    </Heading>
  </div>
)

const DocH3 = ({ children }) => (
  <div>
    <Heading>
      <H4>{children}</H4>
    </Heading>
  </div>
)

const DocH4 = ({ children }) => (
  <div>
    <Heading>
      <H5>{children}</H5>
    </Heading>
  </div>
)

export const components = {
  p: P,
  strong: P.B,
  ul: UL,
  li: LI,
  h1: H1,
  h2: DocH2,
  h3: DocH3,
  h4: DocH4,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink,
  blockquote: Quote,
  hr: HR,
  expand: Expand,
  tip: Tip,
  info: Info,
  success: Success,
  alert: Alert
}

export const withDoc = (options) => {
  return WrapComponent => {
    return withRouter(
      class Doc extends React.Component {
        getInitialProps = async ({ req }) => {
          // We don't need to do any auth logic for static export
          const isServer = typeof window === 'undefined'
          if (isServer && !req.headers) {
            return {}
          }
          return {}
        }
        render() {
          const lang = 'ru';
          const { query } = this.props;
          const { pathname } = this.props.router;
          return (
            <MDXProvider components={components}>
              <div className={style.documentationContainer}>
                {/* <Head /> */}
                <Wrapper activeSection={'docs'} {...this.props} lang={lang} headerBgActive={true} documentation={true}>
                  <div className={style.documentationContainer}>
                    <SideMenu lang={lang} menuData={menuData} pathname={pathname} query={query} />
                    {/* <PageWrapper content={content} /> */}
                    <div className={cln(style.content, 'markdown-body')}>
                      <WrapComponent {...this.props} />
                    </div>
                  </div>

                </Wrapper>
                <Head>
                  <title>Rockstat | {options.title || 'Open Source Customer Data Platform'}</title>
                </Head>
                {/* <Head
                  titlePrefix=""
                  titleSuffix=" - ZEIT Documentation"
                  title={`${options.title}`}
                  description={options.description}
                  image={options.image}
                  lastEdited={date}
                /> */}
              </div>
            </MDXProvider>
          )
        }
      }
    )
  }
}
