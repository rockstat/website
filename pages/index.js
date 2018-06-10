import React from 'react';
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return {}
  }

  componentWillMount() {
    Router.push('/ru')
  }

  render() {
    return (
      <div>
        yo
      </div>
    )
  }
}
