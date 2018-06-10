import React from 'react';
import * as fetch from 'isomorphic-fetch';
import { Wrapper, Everything } from '../containers';
import { Head } from '../components';
import { Documentation } from '../containers';
import { docsMenu, docsItems } from '../utils/menuData'
import { Link } from '../routes'


const defaultPage = 'about';


export default class extends React.Component {
  static async getInitialProps({ query }) {
    const pageConfig = docsItems[defaultPage];
    const fn = 'http://localhost:3000/' + pageConfig.fn.slice('content/'.length);

    return fetch(fn).then(resp => resp.json()).then(content => {
      return {
        content, query
      }
    })
  }

  render() {
    const { query, content } = this.props;
    return (
      <span>
        <Head />
        <Wrapper activeSection={'docs'} {...this.props} locale={query.lang} headerBgActive={true} documentation={true}>
          <Documentation {...this.props} content={content} locale={query.lang} docsMenu={docsMenu} />
        </Wrapper>
      </span>
    )
  }
}
