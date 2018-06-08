import * as React from 'react';
import style from './style.scss';
import cl from 'classnames';
import { Router } from '../../routes';
import Link from 'next/link';

import TEST from '../../data/test.md';

import CONFIG_CONTENT from '../../content/summary.json';
import { getContent } from '../../utils/getContent';
import { LogoIcon } from '../../static/icons';

export class Documentation extends React.Component {
  state = {
    activeContent: TEST
  }

  componentWillMount() {
    let path = this.props.query.slug === undefined ? 'content/about/about.json' : this.props.query.slug;

    this.setState({
      activeContent: getContent[path].bodyHtml
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeContent: getContent[nextProps.query.slug].bodyHtml
    })
  }


  _getDoc = (e) => {
    let path = `${CONFIG_CONTENT.fileMap[e].dir}/${CONFIG_CONTENT.fileMap[e].base}`;

    Router.pushRoute('dockChildren', {
          slug: path,
          lang: 'ru'
        });
  }

  render() {
    const arrContet = Object.keys(CONFIG_CONTENT.fileMap);
    const { activeContent } = this.state;
    const { locale } = this.props;

    return (
      <div className={style.documentationContainer}>
        <div className={style.logo}>
          <Link href={`/${locale}`}>
            <a><LogoIcon /></a>
          </Link>
        </div>

          <div className={style.sideBar}>
            {
              arrContet.map((item, index) => {
                return (
                  <div
                    className={style.mainItem}
                    onClick={this._getDoc.bind(this, item)}
                    key={index}
                  >
                    { CONFIG_CONTENT.fileMap[item].title }
                  </div>
                )
              })
            }
          </div>
          <div className={cl(style.content, 'markdown-body')} dangerouslySetInnerHTML={{__html: activeContent}}></div>
      </div>
    )
  }
}
