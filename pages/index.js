import React from 'react';
import { Router } from '../next-routes';

const redirectTo = '/ru'

export default class extends React.Component {
  static async getInitialProps({ req, res, query }) {
    if (res) {
      if (res.writeHead) {
        res.writeHead(302, {
          Location: redirectTo
        })
        res.end()
      }
    } else {
      Router.push(redirectTo)
    }
    return {}
  }

  render() {
    return (
      <div className="redirectMsg">
        <div dangerouslySetInnerHTML={{ __html: `<script>window.location.href="${redirectTo}"</script>` }} />
        Attempting to redirect to <a href={redirectTo}>{redirectTo}</a>
        <style jsx>
          {`.redirectMsg {
            color: #000;
            background-color: #fff;
          }`}
        </style>
      </div>

    )
  }
}
