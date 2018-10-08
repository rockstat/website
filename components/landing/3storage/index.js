import React from 'react';
import cl from 'classnames';
import Waypoint from 'react-waypoint';
import style from './repository.css';
import { Center, CenterOuter, CenterRounds, CenterDots, EnvOne } from 'components/icons/storage';

export class Repository extends React.Component {
  state = {
    startAnimation: false
  }
  changeAnimationStart = () => {
    this.setState({
      startAnimation: true
    })
  }
  changeAnimationEnd = () => {
    this.setState({
      startAnimation: false
    })
  }
  render() {
    const { startAnimation } = this.state;

    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Центральное хранилище</div>
          <div className={style.description}>
            Специальная система управлениня и записи для СУБД ClickHouse
          </div>
        </div>
        <div className={cl(style.leftBgTop, 'rockstat-svg-container')}>
          <EnvOne />
        </div>
        <div className={cl(style.leftBgBottom, 'rockstat-svg-container')}>
          <EnvOne />
        </div>
        <div className={cl(style.rightBgTop, 'rockstat-svg-container')}>
          <EnvOne />
        </div>
        <div className={cl(style.rightBgBottom, 'rockstat-svg-container')}>
          <EnvOne />
        </div>
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>

              <div className={style.title}>Получение данных</div>
              <div className={style.description}>
                Нативно: HTTP GET/POST, Socket. SDK: Web, Mobile Apps.
                Специальные: HTTP redirector, pixel. Остальное, используя API
              </div>


            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Адаптиваная запись</div>
              <div className={style.description}>
                В основе лежит универсальная схема, автоматически расширяемая до желаемой, на основе конфига.
              </div>


            </div>
          </div>
          <Waypoint onEnter={this.changeAnimationStart} onLeave={this.changeAnimationEnd}>
            <div className={style.centerBg}>
              <div className={cl(style.dots, 'rockstat-svg-container')}>
                <CenterDots startAnimation={startAnimation} />
              </div>
              <div className={cl(style.outer, 'rockstat-svg-container')}>
                <CenterOuter startAnimation={startAnimation} />
              </div>
              <div className={cl(style.rounds, 'rockstat-svg-container')}>
                <CenterRounds startAnimation={startAnimation} />
              </div>
              <div className={cl(style.center, 'rockstat-svg-container')}>
                <Center startAnimation={startAnimation} />
              </div>
            </div>
          </Waypoint>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Работа с данными</div>
              <div className={style.description}>
                Grafana и Jupyter для дашбордов и отчетов.
                Для безопасного доступа при использовании других инструментов, встроен VPN сервер 
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Передача данных</div>
              <div className={style.description}>
                Стриминг во любые внешние сервисы и хранилища, например в BigQuery или Mixpanel.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
