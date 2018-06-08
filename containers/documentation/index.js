import * as React from 'react';
import style from './style.scss';
import cl from 'classnames';
import { Router } from '../../routes';
import Link from 'next/link';
import dynamic from 'next/dynamic'

// import TEST from '../../data/test.md';

// import CONFIG_CONTENT from '../../content/summary.json';
import { menu, rootNodes } from '../../utils/getContent';
import { LogoIcon } from '../../static/icons';
import { PageWrapper } from './page';

export class Documentation extends React.Component {
  state = {
    activeContent: '',
    activeMenu: undefined
  }

   componentWillMount() {
    const {
      slug
    } = this.props.query;
    let activeItem = !!slug && menu[slug] ? slug : rootNodes[0].items[0].items[0];
    this.setState({
      activeContent: 'body',
      activeMenu: activeItem
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeContent: 'body'
    })
  }


  _getDoc = (menuItem) => {
    Router.pushRoute('dockChildren', {
      slug: menuItem.id,
      lang: 'ru'
    });
  }

  render() {
    // const arrContet = Object.keys(CONFIG_CONTENT.fileMap);
    const { activeContent, activeMenu } = this.state;
    const { locale } = this.props;
    console.log('active menu', activeMenu, activeMenu.fn)
    let Contents = '404';
    // Contents = [dynamic(import(activeMenu.fn))]
    Contents = null;


    
    const path = (`./../../${activeMenu.fn}`);
    
    // console.log(path);
    // dynamic(import(path.replace('.json', '')));
    
    return (
      <div className={style.documentationContainer}>
        <div className={style.logo}>
          <Link href={`/${locale}`}>
            <a><LogoIcon /></a>
          </Link>
        </div>

          <div className={style.sideBar}>
            {
              rootNodes.map(({items, ...item}, index) => {
                return (
                  <div
                    className={style.mainItem}
                    onClick={this._getDoc.bind(this, item)}
                    key={index}
                  >
                    { item.title }
                  </div>
                )
              })
            }
          </div>
          <PageWrapper item={activeMenu}/>
      </div>
    )
  }
}
