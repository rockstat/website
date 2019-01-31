import React from 'react';
import {
  Wrapper
} from '@app/components'
import {
  Everything,
  Analytic,
  Repository,
  Microservices,
  Solution,
  Platform,
  Center,
  Information
} from '@app/components';
import Head from 'next/head'

const lang = 'ru';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return { query: query }
  }

  componentDidMount() {
    document.querySelector('html').style.backgroundColor = '#000';
  }

  state = {
    linksMenuPosition: 'bottom'
  }

  _changeLinkMenuPosition = (e) => {
    this.setState({
      linksMenuPosition: e
    })
  }

  render() {
    const { linksMenuPosition } = this.state;
    const { asPath, query } = this.props;

    return (
      <div>
        <Head>
          <title>Rockstat | Open Source Customer Data Platform</title>
        </Head>
        <Wrapper activeSection={'main'} {...this.props} lang={lang} headerBgActive={false} linkMenuPosition={linksMenuPosition}>
          <Everything linksMenuPositionChange={this._changeLinkMenuPosition} linksMenuPosition={linksMenuPosition} />
          <Analytic />
          <Repository />
          <Microservices />
          <Solution />
          <Platform />
          <Center />
          <Information />
        </Wrapper>
      </div>
    )
  }
}
