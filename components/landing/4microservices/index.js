import React from 'react';
import cl from 'classnames';

import style from './microservices.css';
import { LeftFront, LeftBg, MobCube } from 'components/icons/microservices';

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
          <div className={style.title}>Собственная логика</div>
          <div className={style.description}>
            Для решения базовых задач хватит начального уровня программирования.
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
              <div className={style.title}>Работа с API</div>
              <div className={style.description}>
                Автоматизируйте взаимодействие с сторонними API для получения или отправки данных, триггерно и по рассписанию.
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Реактивные сервисы</div>
              <div className={style.description}>
                Создавайте сервисы, реагирующие на события.
                Отправляйте Push, Email, Webhooks используя данных их храннилища. Это может быть чатбот.
              </div>
            </div>
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Только логика</div>
              <div className={style.description}>
                Общие задачи уже реализованы, остается описать желаемую логику.
                Помогут готовые примеры приложений и среда разработки. Поддержка Python и JS/TS.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Микросервисы</div>
              <div className={style.description}>
                Одно нажатие и ваша программа будет запущена в виде изолированного микросервиса.
                Готовыми решениями можно обмениваться с другими.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
