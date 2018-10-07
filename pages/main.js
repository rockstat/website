import React from 'react';
import {
  Wrapper
} from 'containers'
import {
  Everything,
  Analytic,
  Repository,
  Microservices,
  Solution,
  Platform,
  Center,
  Information
} from 'components';

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
      <span>
        {/* <Head/> */}
        <Wrapper activeSection={'main'} {...this.props} lang={lang} headerBgActive={false} linkMenuPosition={linksMenuPosition}>
          <Everything setStateLinkMenu={this._changeLinkMenuPosition} linksMenuPosition={linksMenuPosition} />
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
