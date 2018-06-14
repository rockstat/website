import React from 'react';
import cl from 'classnames';

import style from './style.scss';
import { AnalyticMain } from '../../static/icons/AnalyticMainIcon';

export class Analytic extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Аналитическая система</div>
          <div className={style.description}>Сбор и анализ данных с web, мобильных приложений</div>
        </div>
        <div className={style.leftBg}>
          <img src={'/_next/static/images/linesAnalytic.png'} />
        </div>
        <div className={style.RightBg}>
          <img src={'/_next/static/images/linesAnalytic.png'} />
        </div>
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>
              <div className={style.title}>Сессионная аналитика</div>
              <div className={style.description}>
                Помимо типовых функций можно настраивать то, как строятся
                сессии: изменить таймаут или условия перезапуска при наложении
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Продуктовая аналитика</div>
              <div className={style.description}>
                Неограниченное количество параметров 
                событий и метрик. Любые срезы на основе собранных данных
              </div>
            </div>
          </div>

          <div className={style.centerBg}>
            {/* <AnalyticMain /> */}
            <img src={'/_next/static/images/analyticBg.png'} />
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Работает на Raw Data </div>
              <div className={style.description}>
                Все отчеты строятся напрямую из Raw Data, за секунды. 
                Никакого семплирования, а также задержек поступления данных.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Cross-all-in-one</div>
              <div className={style.description}>
                Все для кросс-доменного-канального от трекинга. 
                Можно отслеживать  web, мессенджеры, mobile apps
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
