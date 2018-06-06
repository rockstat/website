import * as React from 'react';
import style from './style.scss';

import TEST from '../../data/test.md';
// import ReactMarkdown from 'react-markdown';

export class Documentation extends React.Component {
  render() {
    return (
      <div className={style.documentationContainer}>
          <div dangerouslySetInnerHTML={{__html: TEST}}></div>
          {/* <ReactMarkdown input={TEST} /> */}
      </div>
    )
  }
}
