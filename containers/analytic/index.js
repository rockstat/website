import React from 'react';
import cl from 'classnames';
import Waypoint from 'react-waypoint';
import style from './style.scss';

import { CenterIcon, AnalyticOuter, Center2, Two, Three, BgLines, WawesLustra, Wawe } from '../../static/icons/analytic';

export class Analytic extends React.Component {
  state = {
    animationChange: false
  }

  changeAnimationStart = () => {
    this.setState({
      animationChange: true
    })
  }

  changeAnimationEnd = () => {
    this.setState({
      animationChange: false
    })
  }

  render() {
    const { animationChange } = this.state;

    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Аналитическая система</div>
          <div className={style.description}>Сбор и анализ данных с web, мобильных приложений</div>
        </div>

        <div className={cl(style.linesBg, 'rockstat-svg-container')}> 
          {/* <BgLines /> */}
          <div className={style.left}> <Wawe /> </div>
          <div className={style.right}> <Wawe /> </div>
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

          
          <Waypoint onEnter={this.changeAnimationStart} onLeave={this.changeAnimationEnd}>
            <div className={style.centerBg}>
              <div className={cl(style.center, 'rockstat-svg-container')}>
                <Center2 animationChange={animationChange} />
              </div>

              <div className={cl(style.two, 'rockstat-svg-container')}>
                <Two animationChange={animationChange} />
              </div>

              <div className={cl(style.tree, 'rockstat-svg-container')}>
                <Three animationChange={animationChange} />
              </div>
            </div>
          </Waypoint>

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
