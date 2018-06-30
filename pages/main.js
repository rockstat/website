import { Wrapper, Everything, Analytic, Repository, Microservices, Solution, Platform, Center, Information } from '../containers';
import { Head } from '../components';
import React from 'react';

import '../static/images/partners/7.png';
import '../static/images/partners/6.png';
import '../static/images/partners/2.png';

export default class extends React.Component {
  static async getInitialProps ({query}) {
    return { query: query }
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
    const { query } = this.props;

    return (
      <span>
        <Head/>
        <Wrapper activeSection={'main'} {...this.props} locale={query.lang} headerBgActive={false} linkMenuPosition={linksMenuPosition}>
          <Everything setStateLinkMenu={this._changeLinkMenuPosition} linksMenuPosition={linksMenuPosition}/>
          <Analytic />
          <Repository />
          <Microservices />
          <Solution />
          <Platform />
          <Center />
          <Information />
        </Wrapper>
      </span>
    )
  }
}
