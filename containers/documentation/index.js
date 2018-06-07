import * as React from 'react';
import style from './style.scss';

import TEST from '../../data/test.md';

import CONFIG_CONTENT from '../../content/summary.json';
import { getContent } from '../../utils/getContent';

export class Documentation extends React.Component {
  state = {
    activeContent: TEST
  }


  _getDoc = (e) => {
    let path = `${CONFIG_CONTENT.fileMap[e].dir}/${CONFIG_CONTENT.fileMap[e].base}`;

    this.setState({
      activeContent: getContent[path].bodyHtml
    })
  }

  render() {
    const arrContet = Object.keys(CONFIG_CONTENT.fileMap);
    const { activeContent } = this.state;

    return (
      <div className={style.documentationContainer}>
          <div className={style.sideBar}>
            {
              arrContet.map((item, index) => {
                return (
                  <div onClick={this._getDoc.bind(this, item)} key={index} className={style.mainItem}>
                    { CONFIG_CONTENT.fileMap[item].title }
                    <hr />
                  </div>
                )
              })
            }
          </div>
          <div className={style.content} dangerouslySetInnerHTML={{__html: activeContent}}></div>
      </div>
    )
  }
}
