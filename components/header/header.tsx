import * as React from 'react';
import Link from 'next/link';
import cl from 'classnames';

import style from './header.module.css';
import { headerMenu, linksMenu } from '../../lib/constants';
import { createLinker } from '../../lib/url-maker';
import { itemTarget } from '../../lib/menu';
import { Logo } from '../logo';
import { NavIcon } from '../icons/nav-icon';

export interface HeaderProps {
  headerBgActive?: boolean;
  linkMenuPosition?: 'top' | 'bottom';
  lang?: string;
  documentation?: boolean;
  activeSection?: string;
}

interface HeaderState {
  menuActive: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  state: HeaderState = {
    menuActive: false
  }

  changeMenu = () => {
    this.setState((prev) => ({ menuActive: !prev.menuActive }));
  }

  render() {
    const { headerBgActive, linkMenuPosition, activeSection } = this.props;
    const { menuActive } = this.state;
    const linkTo = createLinker();
    return (
      <header
        className={cl(
          style.rockstatHeader,
          { [style.activeBg]: headerBgActive || linkMenuPosition === 'top' },
          { [style.documentation]: activeSection === 'docs' },
          { [style.menuActive]: menuActive }
        )}>
        <div onClick={this.changeMenu} className={cl(style.gamburger, { [style.active]: menuActive })}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Logo url={'/ru/'} />

        <div className={style.menu}>
          {
            linksMenu.map((item, index) => (
              <div key={index} className={cl(style.menuItem, style.linksMenu)}>
                <Link
                  href={linkTo(item.path)}
                  target={itemTarget(item)}
                  rel={item.newTab ? 'noopener noreferrer' : undefined}
                  className={cl({ [style.active]: activeSection === item.name })}
                ><NavIcon icon={item.icon} className={style.icon} />{item.name}</Link>
              </div>
            ))
          }
          {
            headerMenu.map((item, index) => (
              <div key={index} className={style.menuItem}>
                <Link
                  href={linkTo(item.path)}
                  target={itemTarget(item)}
                  className={cl({ [style.active]: activeSection === item.name })}
                > {item.title} </Link>
              </div>
            ))
          }
          <div className={style.menuItemLg}>
            <div className={cl(style.menuItemLgItem, style.menuLng)}>
              <Link href="/ru" className={style.active}> ru </Link>
            </div>
            <div className={cl(style.menuItemLgItem, style.menuLng)}>
              <span className={style.noClick}> en </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
