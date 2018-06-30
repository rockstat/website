import React from 'react';
import cl from 'classnames';

import style from './style.scss';
import { BgChart, Tooltips, Pies, Container } from '../../static/icons/dash';

export class Center extends React.Component {
  informData = ['Kernel', 'Band director', 'Audience interest...', 'Web IDE Theia', 'Clickhouse upload'];

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
          <div className={style.bgChart}>
            <BgChart />
          </div>
          <div className={style.toolTips}>
            <Tooltips />
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
              <div className={style.bottomText}>
                <span> Микросервисы под контролем: запуск и управление, потребление ресурсов и SLA </span>
              </div>
            </div>
          </div>

          <div className={style.pies}>
            <Pies />
            <div className={style.contentCircle}>
              <div className={style.first}>
                <div className={style.item}>
                  <span className={style.text}>New users</span>
                  <span className={style.prec}>72.1%</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Returning</span>
                  <span className={style.prec}>27.9%</span>
                </div>
              </div>

              <div className={style.two}>
                <div className={style.item}>
                  <span className={style.text}> Direct </span>
                  <span className={style.prec}> 34.7% </span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Campaign</span>
                  <span className={style.prec}>31%</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Social</span>
                  <span className={style.prec}>15.3%</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Organic</span>
                  <span className={style.prec}>9.9%</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Referral</span>
                  <span className={style.prec}>10.1%</span>
                </div>
              </div>

              <div className={style.tree}>
                <div className={style.item}>
                  <span className={style.text}>Desktop</span>
                  <span className={style.prec}>49.1%</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Mobile</span>
                  <span className={style.prec}>50.1%</span>
                </div>
              </div>

              <div className={style.fore}>
                <div className={style.item}>
                  <span className={style.text}>Disk write</span>
                  <span className={style.prec}>0.3 mb/s</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Disk read</span>
                  <span className={style.prec}>0.1 mb/s</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Network in</span>
                  <span className={style.prec}>0.3 mbps</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Network out</span>
                  <span className={style.prec}>0.8 mbps</span>
                </div>
              </div>

              <div className={style.six}>
               <div className={style.item}>
                  <span className={style.text}>CPU utilization</span>
                  <span className={style.prec}>23%</span>
                </div>

                <div className={style.item}>
                  <span className={style.text}>Memory usage</span>
                  <span className={style.prec}>56.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div className={style.infoContainer}>
            {
              this.informData.map((item, index) => {
                return (
                  <div className={style.item} key={index} >
                    <Container title={item}/>
                  </div>
                )
              })
            }
          </div>

        </div>

        <div className={style.contentCenterMobile}>
          <img src={'/_next/static/images/centerMobil/1.png'} />
          <div className={style.text}>Сводка по базовым характеристикам трафика</div>

          <img src={'/_next/static/images/centerMobil/2.png'} />
          <div className={style.text}>Информация о загрузке системы и доступных ресурсах</div>

          <div className={style.graphContainer}>
            <img src={'/_next/static/images/centerMobil/3.png'} alt=""/>
            <div className={style.text}>Динамика изменения метрик основных событий</div>
          </div>

          <div className={style.text}>Микросервисы под контролем: запуск и управление, потребление ресурсов и SLA </div>
        </div>
      </div>
    )
  }
}
