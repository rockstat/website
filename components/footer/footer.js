import * as React from 'react';
import cl from 'classnames';

import { Link } from '../../next-routes';
import { createLinker } from '../../lib/url-maker'
import { itemTarget } from '../../lib/menu'
import { LogoIcon } from '../icons';
import { footerMenu, footerRightMenu, linksMenu } from '@app/lib/constants';

import style from './footer.css';


export class Footer extends React.Component {
  render() {
    const { lang } = this.props;
    const linkTo = createLinker(lang);
    return (
      <footer className={style.rockstatFooter}>
        <div className={style.top}>
          <div className={style.logo}>
            <LogoIcon />
            <span>2021</span>
          </div>
          <div className={style.menu}>
            {
              footerMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link href={linkTo(item.path)} >
                      <a className={cl(style.itemMain, { [style.notClick]: item.event !== undefined })} target={itemTarget(item)} > {item.name} </a>
                    </Link>
                    <div className={style.itemChildren}>
                      {
                        item.children !== undefined &&
                        item.children.map((child, key) => {
                          return (
                            <div key={key} className={style.children}>
                              <Link href={linkTo(child.path)} >
                                <a
                                  className={cl({ [style.notActive]: !child.active })}
                                  target={itemTarget(child)}
                                >{child.name}</a>
                              </Link>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          {/* <div className={style.menuRight}>
            {
              footerRightMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link href={linkTo(item.path)} >
                      <a className={cl(style.itemMain, { [style.notActive]: !item.active })} target={itemTarget(item)} > {item.name} </a>
                    </Link>
                  </div>
                )
              })
            }
          </div> */}
        </div>

        {/* <div className={style.socialMenu}>
          {
            linksMenu.map((item, index) => {
              return (
                <div key={index} className={cl(style.item, { [style.lastItem]: index === linksMenu.length - 1 })}>
                  <a href={item.path} target={itemTarget(item)}> {item.name} </a>
                </div>
              )
            })
          }
        </div> */}

        <div className={style.bottom}>
          <span>
            Содержимое сайта доступно по лицензии <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-NC-SA</a>, Dmitry Rodin, 2018 /
            В некоторых случаях могут действовать дополнительные условия.
          </span>

          <span className={style.footerTextMobile}>Dmitry Rodin, 2021</span>

          {/* <span>В некоторых случаях могут действовать дополнительные условия.</span> */}
        </div>
      </footer>
    )
  }
}
