import React from 'react';
import cl from 'classnames';

import style from './style.scss';
import { SolutionBgIcon } from '../../static/icons';

export class Solution extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        
        <div className={style.textContainer}>
          <div className={style.title}>Продвинутые решения</div>
          <div className={style.description}>
          Несколько прмеров того, какие могут быть сервисы, использующие <br /> математические модели и машинное обучение.
          </div>
        </div>

        <div className={style.backgroundIMG} />

        
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>
              <div className={style.title}>Сегментация посетителей</div>
              <div className={style.description}>
                Определение интересов и предпочтений каждого 
                посетителя на собственных данных об их поведении, 
                Результаты могут использоваться в других сервисах, внутренних или внешних.
              </div>
            </div>
            <div className={style.leftTextBottom}>
              <div className={style.title}>Предикторы в реальном времени</div>
              <div className={style.description}>
                Вычисление наилучшего способа провести пользователя по воронке,
                тут же передавая результат в браузер, где будет выполнено нужное действие.
              </div>
            </div>
          </div>

          <div className={style.centerBg}>
            {/* <div className={style.repositoryCriclesMain}> <SolutionBgIcon /> </div> */}
            {/* <div className={style.repositoryContur}> <img src={RepositoryMain} alt=''/> </div> */}
          </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Атрибуция на основе данных о поведении</div>
              <div className={style.description}>
                Стройте модели атрибуции пологающиеся на поведение пользователей, 
                на их конкретные действия, а не на тип канала и номер визита.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Машинный анализ данных</div>
              <div className={style.description}>
                Находите закономерности в данных, среди тысяч признаков и миллионов 
                пользователей. Можно вычислять их значимость и выделять микроконверсии.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
