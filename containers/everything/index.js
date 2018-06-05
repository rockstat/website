import React from 'react';

import style from './style.scss';

export class Everything extends React.Component {
  render() {
    return (
      <div className={style.everythingContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>
            Теперь возможно все
          </div>
          <div className={style.text}>
            Открытая платформа для создания 
            собственной аналитической системы
            и автоматизации маркетинга
          </div>
        </div>
        <div className={style.bgContainer}></div>
      </div>
    )
  }
}
