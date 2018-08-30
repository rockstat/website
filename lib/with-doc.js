import React from 'react'
import Router, { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/tag'
import cln from 'classnames'
// Components
import { Link } from '../next-routes';

import { Logo } from '../components/logo';
import { SideMenu } from '../components/side-menu';
import { Wrapper } from '../containers';

import Heading from '../components/heading'
import { P, Quote, HR } from '../components/text/paragraph'
import { UL, LI } from '../components/text/list'
import { H3, H4, H5 } from '../components/text/heading'
import { InlineCode, Code } from '../components/text/code'
import { GenericLink } from '../components/text/link'

import style from '../static/base/docs.css';

import menuData from './data/docs';

const DocH2 = ({ children }) => (
  <div>
    <Heading lean offsetTop={175}>
      <H3>{children}</H3>
    </Heading>
  </div>
)

const DocH3 = ({ children }) => (
  <div>
    <Heading lean offsetTop={175}>
      <H4>{children}</H4>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
)

const DocH4 = ({ children }) => (
  <div>
    <Heading lean offsetTop={175}>
      <H5>{children}</H5>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
)

export const components = {
  p: P,
  strong: P.B,
  ul: UL,
  li: LI,
  h2: DocH2,
  h3: DocH3,
  h4: DocH4,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink,
  blockquote: Quote,
  hr: HR,
}

const withDoc = options => {
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
          return (
            <MDXProvider components={components}>
              <div className={style.documentationContainer}>
                {/* <Head /> */}
                <Wrapper activeSection={'docs'} {...this.props} lang={lang} headerBgActive={true} documentation={true}>
                  <div className={style.documentationContainer}>
                    <div className={style.floatLogo}>
                      <Logo />
                    </div>

                    <SideMenu lang={lang} menuData={menuData} query={query} />
                    {/* <PageWrapper content={content} /> */}
                    <div className={cln(style.content, 'markdown-body')}>
                      <WrapComponent {...this.props} />
                    </div>
                  </div>

                </Wrapper>
                {/* <Head
                  titlePrefix=""
                  titleSuffix=" - ZEIT Documentation"
                  title={`${options.title}`}
                  description={options.description}
                  image={options.image}
                  lastEdited={date}
                /> */}
                <style jsx>{`
                    div {
                      margin: 40px 0 0 0;
                    }
                  `}</style>
              </div>
            </MDXProvider>
          )
        }
      }
    )
  }
}

export default withDoc