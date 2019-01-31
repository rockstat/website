import * as React from 'react';
import Link from 'next/link';

import cl from 'classnames';
import PropTypes from 'prop-types';

import style from './header.css';
import { headerMenu, linksMenu } from '../../lib/constants';
import { createLinker } from '../../lib/url-maker'
import { itemTarget } from '../../lib/menu'
import { Logo } from '../logo';



export class Header extends React.Component {
  static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    lang: PropTypes.string,
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
    const { headerBgActive, linkMenuPosition, lang, documentation, activeSection } = this.props;
    const { menuActive } = this.state;
    const linkTo = createLinker(lang);
    console.log(activeSection)
    return (
      <header
        className={cl(
          style.rockstatHeader,
          { [style.activeBg]: headerBgActive || linkMenuPosition === 'top' },
          { [style.documentation]: activeSection == 'docs' },
          { [style.menuActive]: menuActive },
          { [style.blog]: activeSection == 'blog' }
        )}>
        <div onClick={this.changeMenu} className={cl(style.gamburger, { [style.active]: menuActive })}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Logo url={'/ru/'} />

        <div className={style.menu}>
          {
            linksMenu.map((item, index) => {
              return (
                <div key={index} className={cl(style.menuItem, style.linksMenu)} >
                  <Link href={linkTo(item.path)}>
                    <a target={itemTarget(item)} className={cl({ [style.active]: activeSection === item.name })}> {item.name} </a>
                  </Link>
                </div>
              )
            })
          }
          {
            headerMenu.map((item, index) => {
              return (
                <div key={index} className={style.menuItem} >
                  <Link href={linkTo(item.path)}>
                    <a target={itemTarget(item)} className={cl({ [style.active]: activeSection === item.name })}> {item.title} </a>
                  </Link>
                </div>
              )
            })
          }
          <div className={style.menuItemLg}>
            <div className={cl(style.menuItemLgItem, style.menuLng)} >
              <Link href="/ru" >
                <a className={style.active}> ru </a>
              </Link>
            </div>
            <div className={cl(style.menuItemLgItem, style.menuLng)} >
              <Link href="/en" >
                <a className={style.noClick}> en </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
