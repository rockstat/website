import React from 'react';
import cl from 'classnames';

import style from './style.scss';

import { MicroservicesIcon } from '../../static/icons';

export class Microservices extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.bottomGradient} />
        <div className={style.textContainer}>
          <div className={style.title}>Микросервисы</div>
          <div className={style.description}>
            Позволяет легко реализовать произвольную логику обработки запросов или фоновые задачи. 
          </div>
        </div>
        <div className={style.leftBg}>
          {/* <MicroservicesIcon /> */}
          <img src={'/_next/static/images/microservicesElement.png'} />
        </div>
        <div className={style.RightBg}>
          {/* <MicroservicesIcon /> */}
          <img src={'/_next/static/images/microservicesElement.png'} />
        </div>
        <div className={style.mobileCenter}>
          <img src={'/_next/static/images/microMobileBg.png'} />
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
