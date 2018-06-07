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
    locale: PropTypes.string
  }

  render() {
    const { headerBgActive, linkMenuPosition, locale } = this.props;

    return (
      <header className={cl(style.rockstatHeader, {[style.activeBg]: headerBgActive || linkMenuPosition === 'top'})}>
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
                    <a> {item.name} </a>
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
                      <a> {item.name} </a>
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
