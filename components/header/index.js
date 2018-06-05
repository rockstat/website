import * as React from 'react';
import Link from 'next/link'
import styles from './style.scss';

import { LogoIcon } from '../../static/icons';

export class Header extends React.Component {
  render() {
    return (
      <header className={styles.rockstatHeader}>
        <div className={styles.logo}>
          <Link href="/">
            <a><LogoIcon /></a>
          </Link>
        </div>

        <div className={styles.menu}>
              <div className={styles.menuItem} >
                  <Link href="">
                    <a> Обучение </a>
                  </Link>
              </div>
              <div className={styles.menuItem} >
                  <Link href="">
                  <a> документация </a>
                  </Link>
              </div>
        
              <div className={styles.menuItemLg}>
                  <div className={styles.menuItemLgItem}>
                    <Link href="">
                      <a>ru</a>
                    </Link>
                  </div>
                  <div className={styles.menuItemLgItem}>
                    <Link href="">
                      <a>en</a>
                    </Link>
                  </div>
              </div>
        </div>
      </header>
    )
  }
}
