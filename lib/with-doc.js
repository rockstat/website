import React from 'react'
import { withRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/tag'
import cln from 'classnames'
import Head from 'next/head'
import { 
  FONT_FAMILY_SANS, 
  atomDarkTheme, 
  a11Theme, 
  SELECTION_STYLE 
} from 'app/lib/cssconfig'

// Components
import { SideMenu } from '@app/components/side-menu';
import { Wrapper } from '@app/components';
import Heading from '@app/components/heading'
import { P, Quote, HR } from '@app/components/text/paragraph'
import { UL, LI } from '@app/components/text/list'
import { H1, H2, H3, H4, H5 } from '@app/components/text/heading'
import { InlineCode, Code } from '@app/components/text/code'
import { GenericLink } from '@app/components/text/link'
import { Expand, Tip, Success, Alert, Info } from '@app/components'

import style from '@app/static/styles/docs.css';
import { menuData} from '@app/lib/constants';


export const components = {
  p: P,
  strong: P.B,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
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
  return (WrapComponent) => {
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
                <Head>
                  <title>Rockstat | {options.title || 'Open Source Customer Data Platform'}</title>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                      html {
                        
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
                    `
                      }}
                    />
                </Head>
                <Wrapper activeSection={'docs'} {...this.props} lang={lang} headerBgActive={true} documentation={true}>
                  <div className={style.documentationContainer}>
                    <SideMenu lang={lang} menuData={menuData} pathname={pathname} query={query} />
                    <div className={cln(style.content, 'markdown-body')}>
                      <h1>{options.title || 'no title'}</h1>
                      <WrapComponent {...this.props} />
                    </div>
                  </div>

                </Wrapper>
              </div>
            </MDXProvider>
          )
        }
      }
    )
  }
}
