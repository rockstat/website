import React from 'react';
import Head from 'next/head';
import {
  Wrapper,
  Everything,
  Analytic,
  Repository,
  Microservices,
  Solution,
  Platform,
  Center,
  Information
} from '@app/components';
import type { LinkMenuPosition } from '@app/components/wrapper/wrapper';

const lang = 'ru';

export default class MainPage extends React.Component<Record<string, never>, { linksMenuPosition: LinkMenuPosition }> {
  state: { linksMenuPosition: LinkMenuPosition } = {
    linksMenuPosition: 'bottom'
  }

  componentDidMount() {
    document.documentElement.style.backgroundColor = '#000';
  }

  componentWillUnmount() {
    document.documentElement.style.backgroundColor = '';
  }

  _changeLinkMenuPosition = (pos: LinkMenuPosition) => {
    this.setState({ linksMenuPosition: pos });
  }

  render() {
    const { linksMenuPosition } = this.state;

    return (
      <div>
        <Head>
          <title>Rockstat | Open Source Customer Data Platform</title>
        </Head>
        <Wrapper activeSection={'main'} lang={lang} headerBgActive={false} linkMenuPosition={linksMenuPosition}>
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
    );
  }
}
