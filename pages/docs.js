import React from 'react';
import * as fetch from 'isomorphic-fetch';
import { Wrapper, Everything } from '../containers';
// import { Head } from '../components';
import { Documentation } from '../containers';
import { docsMenu, docsItems } from '../utils/menuData'
// import { Link } from '../routes'

const defaultPage = 'about-platform';


export default class extends React.Component {
  static async getInitialProps({ query }) {
    const doc = query.slug || 'about/about';
    // const fn = `http://localhost:3000/static/${doc}.json`;
    return Promise.resolve().then(() => { return require(`../content/docs/${doc}.json`) })
      // return fetch(fn).then(resp => resp.json())
      .then(content => {
        return {
          content, query
        }
      })
      .catch(error => {
        console.log('docs catched err', error);
      })
  }
  componentDidMount() {
    document.querySelector('html').style.backgroundColor = '#fff';
  }


  componentWillReceiveProps(props) {
    // console.log(props);
  }

  render() {
    const { query, content } = this.props;

    return (
      <span>
        {/* <Head /> */}
        <Wrapper activeSection={'docs'} {...this.props} lang={query.lang} headerBgActive={true} documentation={true}>
          <Documentation {...this.props} content={content} lang={query.lang} docsMenu={docsMenu} />
        </Wrapper>
      </span>
    )
  }
}
