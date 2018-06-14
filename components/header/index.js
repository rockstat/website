import * as React from 'react';
import Link from 'next/link';

import cl from 'classnames';
import PropTypes from 'prop-types';

import style from './style.scss';

import { LogoIcon } from '../../static/icons';

import { Everything } from '../../containers';

import { headerMenu, langsMenu, linksMenu } from '../../constants';

export class Header extends React.Component {
   static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    locale: PropTypes.string,
    documentation: PropTypes.bool,
    activePath: PropTypes.string
  }

  state = {
    menuActive: false
  }

  changeMenu = () => {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  render() {
    const { headerBgActive, linkMenuPosition, locale, documentation, activeSection } = this.props;
    const { menuActive } = this.state;

    return (
      <header 
        className={cl(
          style.rockstatHeader,
          {[style.activeBg]: headerBgActive || linkMenuPosition === 'top'},
          {[style.documentation]: documentation},
          {[style.menuActive]: menuActive}
        )}>

        <div onClick={this.changeMenu} className={cl(style.gamburger, {[style.active]: menuActive})}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={style.logo}>
          <Link href={`/${locale}`}>
            <a><LogoIcon /></a>
          </Link>
        </div>

        <div className={style.menu}>
          {
            linksMenu.map((item , index) => {
              return (
                <div key={index} className={cl(style.menuItem, style.linksMenu)} >
                  <Link href={item.path}>
                    <a className={cl({[style.active]: activeSection === item.name})}> {item.name} </a>
                  </Link>
                </div>
              )
            })
          }
          {
            headerMenu.map((item , index) => {
              return (
                <div key={index} className={style.menuItem} >
                  <Link href={`/${locale}${item.path}`}>
                    <a className={cl({[style.active]: activeSection === item.name})}> {item.title} </a>
                  </Link>
                </div>
              )
            })
          }
          <div className={style.menuItemLg}>
            {
              langsMenu.map((item , index) => {
                return (
                  <div key={index} className={style.menuItemLgItem} >
                    <Link href={item.path}>
                      <a className={cl({[style.active]: locale === item.name})}> {item.name} </a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </header>
    )
  }
}
