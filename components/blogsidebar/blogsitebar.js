import React from 'react';
import style from './blogsidebar.css';

export class BlogSideBar extends React.Component {
  render() {
    return (
      <div className={style.sideBarContainer}>
        <div className={style.menuContainer}>
          <div className={style.item}>
            <a href={'#'}>Интерфейс</a>
            <a href={'#'}>F.A.Q</a>
            <a href={'#'}>Digital God</a>
            <a href={'#'}>Революция в аналтике</a>
          </div>
        </div>
        <div className={style.gitHubContainer}>
          <span>Еще много всякой инфы на</span>
           <a>github.com</a>
        </div>
      </div>
    )
  }
}
