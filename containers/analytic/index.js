import React from 'react';
import cl from 'classnames';

import style from './style.scss';

import { Center, Two, Tree, BgLines } from '../../static/icons/analytic';

export class Analytic extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Аналитическая система</div>
          <div className={style.description}>Сбор и анализ данных с web, мобильных приложений</div>
        </div>

        <div className={cl(style.linesBg, 'rockstat-svg-container')}> 
          <BgLines />
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
            <div className={cl(style.center, 'rockstat-svg-container')}>
              <Center />
            </div>

            <div className={cl(style.two, 'rockstat-svg-container')}>
              <Two />
            </div>

            <div className={cl(style.tree, 'rockstat-svg-container')}>
              <Tree />
            </div>
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
