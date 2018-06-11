import React from 'react';
import cl from 'classnames';

import style from './style.scss';

import CenterBg from '../../static/images/centerBg.png';

export class Center extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Центр управления</div>
          <div className={style.description}>
            Следите за всеми важными показателями и управляйте платформой   <br />
            с одного экрана
          </div>
        </div>
        <div className={style.contentCenter}>
          <img src={CenterBg} className={style.mainBg} />

          <div className={style.bottomText}>Микросервисы под контролем: запуск и управление, потребление ресурсов и SLA </div>
        </div>
      </div>
    )
  }
}
