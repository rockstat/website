import * as React from 'react';
import Link from 'next/link';
import cl from 'classnames';

import style from './style.scss';

import { LogoIcon } from '../../static/icons';

import { footerMenu, footerRightMenu, linksMenu } from '../../constants';

export class Footer extends React.Component {
  render() {
    return (
      <footer className={style.rockstatFooter}>
        <div className={style.top}>
          <div className={style.logo}>
            <LogoIcon />
            <span>Dmitry Rodin, 2021</span>
          </div>
          <div className={style.menu}>
            {
              footerMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link href={item.path} >
                      <a className={cl(style.itemMain, {[style.notClick]: item.event !== undefined})}> { item.name } </a>
                    </Link>

                    <div className={style.itemChildren}>

                      {
                        item.children !== undefined &&
                        item.children.map((child, key) => {
                          return (
                            <div key={key} className={style.children}>
                              <Link href={child.path} >
                                <a 
                                  className={cl({[style.notActive]: !child.active})} 
                                  target={child.target !== undefined && child.target ? '__blank' : 'none'} 
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
          <div className={style.menuRight}>
          {
              footerRightMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link href={item.path} >
                      <a className={cl(style.itemMain, {[style.notActive]: !item.active})} > { item.name } </a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={style.socialMenu}>
            {
              linksMenu.map((item, index) => {
                return(
                  <div key={index} className={cl(style.item, {[style.lastItem]: index === linksMenu.length - 1})}>
                    <a href={item.path} target={'__blank'}> { item.name } </a>
                  </div>
                )
              })
            }
        </div>

        <div className={style.bottom}>
          <span>Cодержимое данного сайта доступно по лицензии Creative Commons Attribution 4.0</span>
            
          <span className={style.footerTextMobile}>Dmitry Rodin, 2021</span>

          <span>Конфиденциальность и персональные данные</span>
        </div>
      </footer>
    )
  }
}
