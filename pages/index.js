import React from 'react';
import {Link} from '../next-routes';


export default class extends React.Component {
  static async getInitialProps({ query }) {
    return {}
  }

  // componentWillMount() {
  //   Router.push('/ru')
  // }

  render() {
    return (
      <div>
        <Link route="/ru">
          <a>Hello world</a>
        </Link>
      </div>
    )
  }
}
