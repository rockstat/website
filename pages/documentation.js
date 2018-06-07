import React from 'react';

import { Wrapper, Everything } from '../containers';
import { Head } from '../components';
import { Documentation } from '../containers';


export default class extends React.Component {
  static async getInitialProps({query}) {
    return { query: query };
  }

  render() {
    const { query } = this.props;

    return (
      <span>
        <Head />
        <Wrapper locale={query.lang} headerBgActive={true}>
          <Documentation {...this.props} />
        </Wrapper>
    </span>
    )
  }
}
