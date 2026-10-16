import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { DocLayout } from '@app/components/doc-layout';

import '@app/styles/nprogress.css';
import '@app/styles/reset.css';
import '@app/styles/index.css';

const isDocsRoute = (pathname) => pathname === '/docs' || pathname.startsWith('/docs/');

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    const onStart = () => NProgress.start();
    const onDone = () => NProgress.done();

    Router.events.on('routeChangeStart', onStart);
    Router.events.on('routeChangeComplete', onDone);
    Router.events.on('routeChangeError', onDone);
    return () => {
      Router.events.off('routeChangeStart', onStart);
      Router.events.off('routeChangeComplete', onDone);
      Router.events.off('routeChangeError', onDone);
    };
  }, []);

  const page = <Component {...pageProps} />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isDocsRoute(pathname) ? <DocLayout frontmatter={Component.frontmatter}>{page}</DocLayout> : page}
    </>
  );
}
