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
              <div className={style.title}>Сегментация посетителей</div>
              <div className={style.description}>
                Определение предпочтений каждого
                посетителя на собственных совокупных знаний о нем,
                Результаты можно тут же использовать или передать во внешние сервисы.
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}></div>
              <div className={style.description}>
                Определить возможные шаги и определить вероятнось совершения каждого. Определение 
              </div>
            </div>
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Атрибуция на основе данных о поведении</div>
              <div className={style.description}>
                Стройте модели атрибуции полагающиеся на поведение пользователей, 
                а не на тип канала и номер визита.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Машинный анализ данных</div>
              <div className={style.description}>
                Находите закономерности в данных от множества пользователей
                Вычисляйте дальнейшие шаги и их вероятность. Используйте результаты.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
