import * as React from 'react';
import Link from 'next/link';

import cl from 'classnames';
import PropTypes from 'prop-types';

import style from './style.scss';

import { LogoIcon } from '../../static/icons';

import { Everything } from '../../containers';

import { headerMenu, langsMenu } from '../../constants';

export class Header extends React.Component {
   static propTypes = {
    headerBgActive: PropTypes.bool,
    linkMenuPosition: PropTypes.string,
    locale: PropTypes.string,
    documentation: PropTypes.bool,
    activePath: PropTypes.string
  }

  render() {
    const { headerBgActive, linkMenuPosition, locale, documentation, activePath } = this.props;

    return (
      <header 
        className={cl(
          style.rockstatHeader,
          {[style.activeBg]: headerBgActive || linkMenuPosition === 'top'},
          {[style.documentation]: documentation}
        )}>
        <div className={style.logo}>
          <Link href={`/${locale}`}>
            <a><LogoIcon /></a>
          </Link>
        </div>

        <div className={style.menu}>
          {
            headerMenu.map((item , index) => {
              return (
                <div key={index} className={style.menuItem} >
                  <Link href={`/${locale}${item.path}`}>
                    <a className={cl({[style.active]: activePath === item.path})}> {item.name} </a>
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
