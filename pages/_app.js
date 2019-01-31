import React from 'react'
import App, { Container } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
  if (window['rstat']) {
    window['rstat']('page');
  }
})
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done()
  if (window['rstat']) {
    window['rstat']('event', 'page_loaded');
  }
})
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
