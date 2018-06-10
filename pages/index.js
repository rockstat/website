import React from 'react';

export default class extends React.Component {
  static async getInitialProps ({query}) {
    return { query: query }
  }

  render() {
    this.props.url.push('/ru');

    return <span />
  }
}
