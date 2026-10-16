import * as React from 'react';
import cl from 'classnames';
import Link from 'next/link';

import { createLinker } from '../../lib/url-maker';
import { itemTarget } from '../../lib/menu';
import { LogoIcon } from '../icons';
import { footerMenu } from '@app/lib/constants';

import style from './footer.module.css';

const year = new Date().getFullYear();

export class Footer extends React.Component {
  render() {
    const { lang } = this.props;
    const linkTo = createLinker(lang);
    return (
      <footer className={style.rockstatFooter}>
        <div className={style.top}>
          <div className={style.logo}>
            <LogoIcon />
            <span>{year}</span>
          </div>
          <div className={style.menu}>
            {
              footerMenu.map((item, index) => (
                <div key={index} className={style.item}>
                  <Link
                    href={linkTo(item.path)}
                    className={cl(style.itemMain, { [style.notClick]: item.event !== undefined })}
                    target={itemTarget(item)}
                  > {item.name} </Link>
                  <div className={style.itemChildren}>
                    {
                      item.children !== undefined &&
                      item.children.map((child, key) => (
                        <div key={key} className={style.children}>
                          <Link
                            href={linkTo(child.path)}
                            className={cl({ [style.notActive]: !child.active })}
                            target={itemTarget(child)}
                            rel={child.newTab ? 'noopener noreferrer' : undefined}
                          >{child.name}</Link>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className={style.bottom}>
          <span>
            Содержимое сайта доступно по лицензии <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>, Dmitry Rodin, 2018 /
            В некоторых случаях могут действовать дополнительные условия.
          </span>

          <span className={style.footerTextMobile}>Dmitry Rodin, {year}</span>
        </div>
      </footer>
    );
  }
}
