import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import '@app/styles/reset.css';
import '@app/styles/index.css';

function track(...args) {
  if (typeof window !== 'undefined' && typeof window.rstat === 'function') {
    window.rstat(...args);
  }
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const onStart = () => {
      NProgress.start();
      track('page');
    };
    const onComplete = () => {
      NProgress.done();
      track('event', 'page_loaded');
    };
    const onError = () => NProgress.done();

    Router.events.on('routeChangeStart', onStart);
    Router.events.on('routeChangeComplete', onComplete);
    Router.events.on('routeChangeError', onError);
    return () => {
      Router.events.off('routeChangeStart', onStart);
      Router.events.off('routeChangeComplete', onComplete);
      Router.events.off('routeChangeError', onError);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
