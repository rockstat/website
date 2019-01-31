import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/tag'
import cln from 'classnames'
import {
  FONT_FAMILY_SANS,
  atomDarkTheme,
  a11Theme,
  SELECTION_STYLE
} from 'app/lib/cssconfig'


// Components
import { Wrapper } from '@app/components';
import Heading from '@app/components/heading'
import { P, Quote, HR } from '@app/components/text/paragraph'
import { UL, LI } from '@app/components/text/list'
import { H1, H3, H4, H5 } from '@app/components/text/heading'
import { InlineCode, Code } from '@app/components/text/code'
import { GenericLink } from '@app/components/text/link'
import { Expand, Tip, Success, Alert, Info } from '@app/components'

import style from '@app/static/styles/blog.css';
// import style from '@app/static/styles/docs.css';

import { PostList, BlogSideBar } from '@app/components';

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

export const withPost = (options) => {
  return (WrapComponent) => {
    return withRouter(
      class Post extends React.Component {
        state = {
          linkMenuPosition: 'bottom'
        }

        componentDidMount() {
          let windowWidth = document.documentElement.clientWidth;

          if (windowWidth <= 720) {
            this.setState({
              linkMenuPosition: 'top'
            })
          }
        }

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
          const { linkMenuPosition } = this.state;

          const { query } = this.props;
          const { pathname } = this.props.router;
          return (
            <MDXProvider components={components}>
              <div className={style.documentationContainer}>
                <Head>
                  <title>Rockstat | {options.title || 'Open Source Customer Data Platform'}</title>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                          html {
                            height: 100%;
                            box-sizing: border-box;
                          }
                          *,
                          *:before,
                          *:after {
                            box-sizing: inherit;
                          }
                          a {
                            -webkit-tap-highlight-color: rgba(0,0,0,0);
                          }
                          ${SELECTION_STYLE}
                          ${a11Theme}
                      `}}
                  />
                </Head>

                <Wrapper activeSection={'blog'} {...this.props} lang={lang} headerBgActive={false} linkMenuPosition={linkMenuPosition}>
                  <div className={style.rockstatBlogContainer}>
                    {/* <div className={style.pstslist}><PostList /></div> */}
                    <div className={cln(style.content, style.pstslist, 'markdown-body')}>
                      <h1>{options.title || 'no title'}</h1>
                      <WrapComponent {...this.props} />
                    </div>
                    <div className={style.sidebar}><BlogSideBar /></div>
                  </div>
                </Wrapper>
                {/*                 

                <Wrapper activeSection={'docs'} {...this.props} lang={lang} headerBgActive={true} documentation={true}>
                  <div className={style.documentationContainer}>
                    <SideMenu lang={lang} menuData={menuData} pathname={pathname} query={query} />
                    <div className={cln(style.content, 'markdown-body')}>
                      <WrapComponent {...this.props} />
                    </div>
                  </div>

                </Wrapper> */}
              </div>
            </MDXProvider>
          )
        }
      }
    )
  }
}
