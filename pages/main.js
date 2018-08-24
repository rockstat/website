import { Wrapper, Everything, Analytic, Repository, Microservices, Solution, Platform, Center, Information } from '../containers';
import React from 'react';

const lang = 'ru';

export default class extends React.Component {
  static async getInitialProps ({query}) {
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
    console.log('route params', asPath, query);
    return (
      <span>
        {/* <Head/> */}
        <Wrapper activeSection={'main'} {...this.props} lang={lang} headerBgActive={false} linkMenuPosition={linksMenuPosition}>
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
