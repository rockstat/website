import { Wrapper, Everything, Analytic, Repository, Microservices, Solution, Platform, Center, Information } from '../containers';
import { Head } from '../components';
import React from 'react';

import '../static/images/linesAnalytic.png';
import '../static/images/RepositoryCircleMain.png';
import '../static/images/repositoryBottom.png';
import '../static/images/repositoryTop.png';
import '../static/images/microservicesBg.png';
import '../static/images/solutionBg.png';

import '../static/images/analyticBg.png';
import '../static/images/microservicesElement.png';
import '../static/images/prodResh.png';
import '../static/images/repositoryBg.png';

import '../static/images/repositoryTop.png';
import '../static/images/repositoryBottom.png';

import '../static/images/centerBg.png';

import '../static/images/linesAnalytic.png';

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
