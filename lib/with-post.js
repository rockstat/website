import React from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import cln from 'classnames';
import { a11Theme, SELECTION_STYLE } from '@app/lib/cssconfig';

// Components
import { Wrapper, BlogSideBar } from '@app/components';
import Heading from '@app/components/heading';
import { P, Quote, HR } from '@app/components/text/paragraph';
import { UL, LI } from '@app/components/text/list';
import { H1, H3, H4, H5 } from '@app/components/text/heading';
import { Pre, Code } from '@app/components/text/code';
import { GenericLink } from '@app/components/text/link';

import style from '@app/styles/blog.module.css';

const DocH2 = ({ children, ...props }) => (
  <div>
    <Heading {...props}>
      <H3>{children}</H3>
    </Heading>
  </div>
);

const DocH3 = ({ children, ...props }) => (
  <div>
    <Heading {...props}>
      <H4>{children}</H4>
    </Heading>
  </div>
);

const DocH4 = ({ children, ...props }) => (
  <div>
    <Heading {...props}>
      <H5>{children}</H5>
    </Heading>
  </div>
);

export const components = {
  p: P,
  strong: P.B,
  ul: UL,
  li: LI,
  h1: H1,
  h2: DocH2,
  h3: DocH3,
  h4: DocH4,
  pre: Pre,
  code: Code,
  a: GenericLink,
  blockquote: Quote,
  hr: HR
};

const baseStyles = `
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
`;

/**
 * MDX layout for blog posts (see `withDoc` for the MDX 3 layout contract).
 */
export const withPost = (options = {}) => {
  return (WrapComponent) => {
    class Post extends React.Component {
      state = {
        linkMenuPosition: 'bottom'
      }

      componentDidMount() {
        if (document.documentElement.clientWidth <= 720) {
          this.setState({ linkMenuPosition: 'top' });
        }
      }

      render() {
        const lang = 'ru';
        const { linkMenuPosition } = this.state;
        const title = options.title || 'Open Source Customer Data Platform';
        return (
          <MDXProvider components={components}>
            <div className={style.documentationContainer}>
              <Head>
                <title>{`Rockstat | ${title}`}</title>
                <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
              </Head>
              <Wrapper activeSection={'blog'} {...this.props} lang={lang} headerBgActive={false} linkMenuPosition={linkMenuPosition}>
                <div className={style.rockstatBlogContainer}>
                  <div className={cln(style.content, style.pstslist, 'markdown-body')}>
                    <h1>{options.title || 'no title'}</h1>
                    {/* MDX v0 wrapped content in a <div>; the stylesheets rely on that structure */}
                    <div>
                      <WrapComponent {...this.props} />
                    </div>
                  </div>
                  <div className={style.sidebar}><BlogSideBar /></div>
                </div>
              </Wrapper>
            </div>
          </MDXProvider>
        );
      }
    }
    return withRouter(Post);
  };
};
