import React from 'react';
import cl from 'classnames';

import style from './style.scss';
import { RepositoryCenterIcon } from '../../static/icons';

// import RepositoryMain from '../../static/images/RepositoryCircleMain.png';

import RepositoryTop from '../../static/images/repositoryTop.png';
import RepositoryBottom from '../../static/images/repositoryBottom.png';

export class Repository extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Универсальное хранилище</div>
          <div className={style.description}>
            Место, где будут объединены и обработаны все ваши данные. <br />
            Множество способов получения данных и возможность стриминга.
          </div>
        </div>
        <div className={style.leftBgTop}>
          <img src={'/_next/static/images/repositoryTop.png'} alt='' />
        </div>
        <div className={style.leftBgBottom}>
          <img src={'/_next/static/images/repositoryBottom.png'} alt='' />
        </div>
        <div className={style.rightBgTop}>
          <img src={'/_next/static/images/repositoryTop.png'} alt='' />
        </div>
        <div className={style.rightBgBottom}>
          <img src={'/_next/static/images/repositoryBottom.png'} alt='' />
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

          <div className={style.centerBg}>
            {/* <div className={style.repositoryCriclesMain}> <RepositoryCenterIcon /> </div> */}
            {/* <div className={style.repositoryContur}> <img src={RepositoryMain} alt=''/> </div> */}
            <img src={'/_next/static/images/repositoryBg.png'} />
          </div>

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
