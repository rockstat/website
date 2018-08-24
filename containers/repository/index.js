import React from 'react';
import cl from 'classnames';
import Waypoint from 'react-waypoint';
import style from './style.css';
import { Center, CenterOuter, CenterRounds, CenterDots, EnvOne } from '../../static/icons/repository';

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
          <div className={style.title}>Универсальное хранилище</div>
          <div className={style.description}>
            Место, где будут объединены и обработаны все ваши данные. <br />
            Множество способов получения данных и возможность стриминга.
          </div>
        </div>
        <div className={cl(style.leftBgTop, 'rockstat-svg-container')}>
          <EnvOne/>
        </div>
        <div className={cl(style.leftBgBottom, 'rockstat-svg-container')}>
          <EnvOne/>
        </div>
        <div className={cl(style.rightBgTop, 'rockstat-svg-container')}>
          <EnvOne/>
        </div>
        <div className={cl(style.rightBgBottom, 'rockstat-svg-container')}>
          <EnvOne/>
        </div>
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>
              <div className={style.title}>Быстрая обработка</div>
              <div className={style.description}>
                  Под капотом высокопроизводительная колоночная СУБД 
                  ClickHouse. Система записи динамически подстраивается под струкруту БД.
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Стриминг данных</div>
              <div className={style.description}>
                Передача во внешние хранилища и сервисы в реальном времени, например в BigQuery или Mixpanel
              </div>
            </div>
          </div>
          <Waypoint onEnter={this.changeAnimationStart} onLeave={this.changeAnimationEnd}>
            <div className={style.centerBg}>
                <div className={cl(style.dots, 'rockstat-svg-container')}>
                  <CenterDots startAnimation={startAnimation} />
                </div>
                <div className={cl(style.outer, 'rockstat-svg-container')}>
                  <CenterOuter startAnimation={startAnimation}/>
                </div>
                <div className={cl(style.rounds, 'rockstat-svg-container')}>
                  <CenterRounds startAnimation={startAnimation} />
                </div>
                <div className={cl(style.center, 'rockstat-svg-container')}>
                  <Center startAnimation= {startAnimation} />
                </div>
            </div>
          </Waypoint>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Доступ к данным</div>
              <div className={style.description}>
                В комплекте инструменты для создания дашбордов. 
                Можно конструировать собственное API для доступа к своим данным.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Получение данных</div>
              <div className={style.description}>
                Прием http webhooks, потока событий через websocket,
                есть обработчик редиректов, 1x1 gif пиксель и API.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
