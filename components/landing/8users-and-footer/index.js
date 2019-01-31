import React from 'react';
import cl from 'classnames';

import style from './information.css';
import { Link } from 'app/next-routes'
import * as Icons from 'app/components/icons/users';



export class Information extends React.Component {
  state = {
    wrapperPosition: 0
  };

  in = (e) => {
    let x = e.clientX;
    let width = this.wrapper.offsetWidth;
    let result = parseInt(100 / width * x);

    this.setState({
      wrapperPosition: result > 0 ? result + 10 : 0
    })
  };



  users = [
    <Icons.Virgins />,
    <Icons.BurlesqueLogo />,
    <Icons.Flora />,
    <Icons.TcehLogo />,
    <Icons.UtairIcon />,
    <Icons.Textapp />,
    <Icons.UrbanLogo />,
    <Icons.Vrtech />
  ];


  render() {
    const { wrapperPosition } = this.state;

    return (
      <div className={style.analyticContainer}>
        <div
          className={style.partnersContainer}
        // onMouseMove={this.in}
        // onMouseLeave={this.out}
        >
          <div
            className={style.wrapper}
            ref={ref => this.wrapper = ref}
            style={{
              transform: `translateX(${-wrapperPosition}%)`
            }}
          >
            {
              this.users.map((item, index) => {
                return (
                  <div className={cl(style.item, 'rockstat-svg-container')} key={index}>
                    {item}
                  </div>
                )
              })
            }
          </div>
        </div>

        <hr />

        <div className={style.reviewsContainer}>
          <div className={style.item}>
            <div className={style.title}>
            Мы используем Рокстат как основной инструмент веб-аналитики - собираем события в свою базу, замеряем результаты экспериментов, настраиваем оповещения.
            </div>
            <div className={style.text}>
              — Артем Шевченко, Utair
            </div>
          </div>
          <div className={style.item}>
            <div className={style.title}>
              Мы реализовали сквозную аналитику и свою междоменную модель атрибуции. Благодаря этому мы успешно перераспреляем бюджеты между каналами.
            </div>
            <div className={style.text}>
              — Константин Подъяков, pride.marketing
            </div>
          </div>
        </div>

        <div className={style.btn}>
          <Link href={'/docs'}>
            <a>
              Установить Rockstat

            <svg viewBox="0 0 272 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="271" height="48" rx="24" stroke="url(#paint0_linear_information)" />
                <defs>
                  <linearGradient id="paint0_linear_information" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(160 33 -183.184 888.163 171.592 -436.082)">
                    <stop stopColor="#D900FF" />
                    <stop offset="1" stopColor="#00F0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    )
  }
}
