import * as React from 'react';
import style from './style.scss';
import cl from 'classnames';


export class PageWrapper extends React.Component {
  // static async getInitialProps () {
  // const {item} = this.props;

  // const path = `./${item.fn}`;

  // console.log('path:', path);
  // const content = require(`${path}`);
  // console.log(content);
  //   return { content, item}
  // }

  render() {
    const { content } = this.props;
    return (
      <div className={cl(style.content, 'markdown-body')} dangerouslySetInnerHTML={{ __html: content }}></div>
    )
  }
}