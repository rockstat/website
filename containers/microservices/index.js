import React from 'react';
import cl from 'classnames';

import style from './style.css';
import { LeftFront, LeftBg, MobCube } from '../../static/icons/microservices';

export class Microservices extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.bottomGradient} />
        <div className={style.bacgroundM}>
          <div className={cl(style.left, 'rockstat-svg-container')}>
            <LeftBg />
          </div>
          <div className={cl(style.right, 'rockstat-svg-container')}>
            <LeftBg />
          </div>
        </div>
        <div className={style.textContainer}>
          <div className={style.title}>Микросервисы</div>
          <div className={style.description}>
            Позволяет легко реализовать произвольную логику обработки запросов или фоновые задачи. 
          </div>
        </div>
        <div className={cl(style.leftBg, 'rockstat-svg-container')}>
          <LeftFront />
        </div>
        <div className={cl(style.RightBg, 'rockstat-svg-container')}>
          <LeftFront />
        </div>
        <div className={style.mobileCenter}>
          <MobCube />
        </div>
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>
              <div className={style.title}>Целая экосистема</div>
              <div className={style.description}>
                Есть все небходимое: специальный framework для Python и JavaScript/TypeScript,
                шаблоны приложений, встроенная среда разработки, система запуска и управления.
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Реактивные сервисы</div>
              <div className={style.description}>
              Создавайте сервисы, реагирующие на события в реальном времени. Можно обращаться 
              в хранилище, отправлять Push, Email, Webhooks или передавать сигналы
              в браузер.
              </div>
            </div>
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Создавайте чатботов</div>
              <div className={style.description}>
                Создавайте чатботов, работа которых основана на данных из хранилища. 
                Поддерживаются Telegram, WhatsApp, Slack, Facebook.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Работа со сторонними API</div>
              <div className={style.description}>
                  Вы можете сделать подключаться к любым сторонним 
                  API для получения или передачи данных, сохранять результаты
                  в хранилище.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
