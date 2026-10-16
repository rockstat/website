import React from 'react';
import { withRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import cln from 'classnames';
import Head from 'next/head';
import { a11Theme, SELECTION_STYLE } from '@app/lib/cssconfig';

// Components
import { SideMenu } from '@app/components/side-menu';
import { Wrapper } from '@app/components';
import { P, Quote, HR } from '@app/components/text/paragraph';
import { UL, LI } from '@app/components/text/list';
import { H1, H2, H3, H4 } from '@app/components/text/heading';
import { Pre, Code } from '@app/components/text/code';
import { GenericLink } from '@app/components/text/link';

import style from '@app/styles/docs.module.css';
import { menuData } from '@app/lib/constants';

export const components = {
  p: P,
  strong: P.B,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  pre: Pre,
  code: Code,
  a: GenericLink,
  blockquote: Quote,
  hr: HR
};

const baseStyles = `
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
`;

/**
 * MDX layout for documentation pages. In MDX 3 the `export default` of an
 * .mdx file receives the rendered markdown as `children`.
 */
export const withDoc = (options = {}) => {
  return (WrapComponent) => {
    class Doc extends React.Component {
      render() {
        const lang = 'ru';
        const { query, router } = this.props;
        const { pathname } = router;
        const title = options.title || 'Open Source Customer Data Platform';
        return (
          <MDXProvider components={components}>
            <div className={style.documentationContainer}>
              <Head>
                <title>{`Rockstat | ${title}`}</title>
                {options.description && <meta name="description" content={options.description} />}
                <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
              </Head>
              <Wrapper activeSection={'docs'} {...this.props} lang={lang} headerBgActive={true} documentation={true}>
                <div className={style.documentationContainer}>
                  <SideMenu lang={lang} menuData={menuData} pathname={pathname} query={query} />
                  <div className={cln(style.content, 'markdown-body')}>
                    <h1>{options.title || 'no title'}</h1>
                    {/* MDX v0 wrapped content in a <div>; the stylesheets rely on that structure */}
                    <div>
                      <WrapComponent {...this.props} />
                    </div>
                  </div>
                </div>
              </Wrapper>
            </div>
          </MDXProvider>
        );
      }
    }
    return withRouter(Doc);
  };
};
