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
          <div className={style.textContainer}>
            <div className={style.leftText}>
              <span>Сводка по базовым <br /> характеристикам трафика</span>
            </div>
            <div className={style.centerText}>
              <span>Динамика изменения метрик <br /> основных событий</span>
            </div>
            <div className={style.rightText}>
              <span>Информация о загрузке <br /> системы и доступных ресурсах</span>
            </div>
          </div>
          <img src={CenterBg} className={style.mainBg} />

          <div className={style.bottomText}>
            <span> Микросервисы под контролем: запуск и управление, потребление ресурсов и SLA </span>
          </div>
        </div>
      </div>
    )
  }
}
