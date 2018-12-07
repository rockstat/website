import React from 'react';
import cl from 'classnames';

import style from './solutions.css';
import { Cube, VSolutions } from 'app/components/icons/advanced-solutions';

export class Solution extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>

        <div className={style.textContainer}>
          <div className={style.title}>Продвинутые решения</div>
          <div className={style.description}>
          Несколько примеров, какие могут быть сервисы, использующие <br /> математические модели.
          </div>
        </div>

        <div className={style.vector}>
          <div className={cl(style.cube, 'rockstat-svg-container')}>
            <Cube />
          </div>
          <div className={cl(style.v, 'rockstat-svg-container')}>
            <VSolutions />
          </div>
        </div>


        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>
              <div className={style.title}>Цифровые профили</div>
              <div className={style.description}>
                Объединение данных о пользователях из различных источников: Сайт, CRM, реклама, мессенджеры, email, push и пр.
                
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Сегментация пользователей</div>
              <div className={style.description}>
                Стройте различные сегменты пользователей на основе цифровых профилей,
                Результаты можно тут же использовать или передать во внешние сервисы.
                
              </div>
            </div>
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Многоканальные цепочки</div>
              <div className={style.description}>
                Реализация многоканальных стратегий для работы с лояльностью, выращиванию и возврата кастомеров.
                
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Атрибуция на основе данных о поведении</div>
              <div className={style.description}>
                Произвольные модели атрибуции на основе поведения пользователей: вероятностное прохождение воронки, индекс взаимодействий.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
