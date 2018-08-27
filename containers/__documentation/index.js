import * as React from 'react';
import style from './style.css';
import cl from 'classnames';
import { Router } from '../../routes';
import { Link } from '../../next-routes';
import dynamic from 'next/dynamic'

import { LogoIcon } from '../../static/icons';
import { PageWrapper } from './page';
import { SideMenu } from '../../components/side-menu'

export class Documentation extends React.Component {
  state = {
    activeContent: '',
    activeMenu: undefined
  }

  // componentWillMount() {
  //   this.setState({
  //     activeContent: 'body',
  //     activeMenu: activeItem
  //   })
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     activeContent: 'body'
  //   })
  // }

  render() {
    // const arrContet = Object.keys(CONFIG_CONTENT.fileMap);
    // const { activeContent, activeMenu } = this.state;
    const { lang, docsMenu, content, query } = this.props;
    // console.log('active menu', activeMenu, activeMenu.fn)
    let Contents = '404';
    // Contents = [dynamic(import(activeMenu.fn))]
    // Contents = null;



    // const path = (`./../../${activeMenu.fn}`);

    // const path = `../../${activeMenu.fn}`;
    // let a = 'about.json';
    // let res = import(`../../content/about/${a}`);

    // res.then(r => {
    //   console.log(r);
    // })

    // return (

    // )
  }
}
