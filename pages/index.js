import React from 'react';
import { Router } from '../next-routes';


export default class extends React.Component {
  static async getInitialProps({ res, query }) {
    if (!res) {
      Router.pushRoute('/ru')
    }
    return {}
  }

  // componentWillMount() {
  //   Router.push('/ru')
  // }

  render() {
    return (
      <div>
      </div>
    )
  }
}
