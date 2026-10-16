import React from 'react';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import cln from 'classnames';
import Head from 'next/head';
import { a11Theme, SELECTION_STYLE } from '@app/lib/cssconfig';

import { SideMenu } from '@app/components/side-menu';
import { Wrapper } from '@app/components';
import { P, Quote, HR } from '@app/components/text/paragraph';
import { UL, LI } from '@app/components/text/list';
import { H1, H2, H3, H4 } from '@app/components/text/heading';
import { Pre, Code } from '@app/components/text/code';
import { GenericLink } from '@app/components/text/link';

import style from '@app/styles/docs.module.css';
import { menuData } from '@app/lib/constants';
import type { DocFrontmatter } from '@app/types/mdx';

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

const DEFAULT_TITLE = 'Open Source Customer Data Platform';

/**
 * Layout for every page under /docs. Applied from `pages/_app.js` by route;
 * `frontmatter` comes from the MDX file's YAML block (see lib/recma/attach-frontmatter.mjs).
 */
export interface DocLayoutProps {
  frontmatter?: DocFrontmatter;
  children?: React.ReactNode;
}

export function DocLayout({ frontmatter = {}, children }: DocLayoutProps) {
  const lang = 'ru';
  const { pathname, query } = useRouter();
  const title = frontmatter.title || DEFAULT_TITLE;

  return (
    <MDXProvider components={components}>
      <div className={style.documentationContainer}>
        <Head>
          <title>{`Rockstat | ${title}`}</title>
          {frontmatter.description && <meta name="description" content={frontmatter.description} />}
          <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
        </Head>
        <Wrapper activeSection={'docs'} lang={lang} headerBgActive={true} documentation={true}>
          <div className={style.documentationContainer}>
            <SideMenu lang={lang} menuData={menuData} pathname={pathname} query={query as Record<string, unknown>} />
            <div className={cln(style.content, 'markdown-body')}>
              <h1>{frontmatter.title || 'no title'}</h1>
              {/* MDX v0 wrapped content in a <div>; the stylesheets rely on that structure */}
              <div>{children}</div>
            </div>
          </div>
        </Wrapper>
      </div>
    </MDXProvider>
  );
}
