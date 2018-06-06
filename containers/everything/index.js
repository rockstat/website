import React from 'react';
import cl from 'classnames';

import style from './style.scss';

import { EverythingRhimbusIcon, CircleTransparent, CircleBlur, CircleGreenIcon } from '../../static/icons';
import { linksMenu } from '../../constants';

const Test = () =>
  <svg id={'CircleBlurIconTEST'} viewBox="0 0 1193 785" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" stroke='#fff'/>
  </svg>
;

export class Everything extends React.Component {

  render() {
    return (
      <div className={style.everythingContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>
            Теперь <br /> возможно все
          </div>
          <div className={style.text}>
            Открытая платформа для создания 
            собственной аналитической системы
            и автоматизации маркетинга
          </div>
        </div>
        <div className={style.bgContainer}>
          <div className={style.centerBg}>
            <EverythingRhimbusIcon />
          </div>
          <div className={style.circleTransparentBg}>
            <CircleTransparent />
          </div>
          <div className={style.circleBlurBg}>
            <CircleBlur />
          </div>
          <div className={style.circleGreenBg}>
            <CircleGreenIcon />
          </div>
        </div>
        <div className={style.bottomMenuContainer}>
          <div className={style.socialMenu}>
            {
              linksMenu.map((item, index) => {
                return(
                  <div key={index} className={cl(style.item, {[style.lastItem]: index === linksMenu.length - 1})}>
                    <a href={item.path} target={'__blank'}> { item.name } </a>
                  </div>
                )
              })
            }
          </div>
          <div className={style.demoContainer}>
            <div className={style.btn}> <a href={'/'}> Demo </a> </div>
            <div className={style.description}>
              Open Source <br />
              Apache 2.0
            </div>
          </div>
        </div>
      </div>
    )
  }
}
