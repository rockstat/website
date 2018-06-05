import * as React from 'react';
import Link from 'next/link';

import style from './style.scss';

import { LogoIcon } from '../../static/icons';

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
              <div className={style.item} >
                  <Link href="/" >
                    <a>Документация</a>
                  </Link>
                  
                  <div className={style.itemChildrens}>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                  </div>
              </div>

              <div className={style.item} >
                  <Link href="/" >
                    <a>Документация и что то</a>
                  </Link>
                  
                  <div className={style.itemChildrens}>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                      <div className={style.children}>
                        <Link href="/" >
                          <a>Документация - 1</a>
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <div className={style.bottom}>
          <span>Cодержимое данного сайта доступно по лицензии Creative Commons Attribution 4.0</span>
          <span>Конфиденциальность и персональные данные</span>
        </div>
      </footer>
    )
  }
}
