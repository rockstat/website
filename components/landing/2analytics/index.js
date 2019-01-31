import React from 'react';
import cl from 'classnames';
import style from './analytic.css';

import { Center3, Two, Three, Wawe } from 'app/components/icons/analysis-platform';

export class Analytic extends React.Component {
  state = {
    animationChange: false
  }

  changeAnimationStart = () => {
    this.setState({
      animationChange: true
    })
  }

  changeAnimationEnd = () => {
    this.setState({
      animationChange: false
    })
  }

  render() {
    const { animationChange } = this.state;

    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Аналитическая система</div>
          <div className={style.description}>Получение и предварительная обработка даннных из множества источников</div>
        </div>

        <div className={cl(style.linesBg, 'rockstat-svg-container')}>
          {/* <BgLines /> */}
          <div className={style.left}> <Wawe /> </div>
          <div className={style.right}> <Wawe /> </div>
        </div>
        <div className={style.contentCenter}>
          <div className={style.leftText}>
            <div className={style.leftTextTop}>

              <div className={style.title}>Двойственная натура</div>
              <div className={style.description}>
                Включает функции Сессионной и Продуктовой аналитики.
                Настраиваемые параметры сессий и произвольная структура событий.
              </div>
              
            </div>
            <div className={style.leftTextBottom}>
            <div className={style.title}>Сбор данных</div>
              <div className={style.description}>
                Можно отслеживать Web, Mobile apps, Мессенджеры. 
                Автоматитеское отслеживание поведения пользователей.
              </div>
            </div>
          </div>


            <div className={style.centerBg}>
              <div className={cl(style.center, 'rockstat-svg-container')}>
                <Center3 />
              </div>

              <div className={cl(style.two, 'rockstat-svg-container')}>
                <Two />
              </div>

              <div className={cl(style.tree, 'rockstat-svg-container')}>
                <Three />
              </div>
            </div>

          <div className={style.rightText}>
            <div className={style.rightTextTop}>
              <div className={style.title}>Работает на Raw Data </div>
              <div className={style.description}>
                Все отчеты строятся напрямую из Raw Data, за секунды.
                Никакого семплирования, а также задержек поступления данных.
              </div>
            </div>
            <div className={style.rightTextBottom}>
              <div className={style.title}>Сквозная аналитика</div>
              <div className={style.description}>
                Есть все для совмещения данных из разных источников. Кросс-доменное отслеживание web,
                возможно кросс-канальное сопоставление.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
