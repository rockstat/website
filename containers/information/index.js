import React from 'react';
import cl from 'classnames';

import style from './style.scss';

import { parthners } from '../../constants';

export class Information extends React.Component {
  state = {
    wrapperPosition: 0
  };

  in = (e) => {
    let x = e.clientX;
    let width = this.wrapper.offsetWidth;
    let result = parseInt( 100 / width * x);

    this.setState({
      wrapperPosition: result > 0 ? result + 10 : 0
    })
  };

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
              parthners.map((item, index) => {
                return (
                  <div className={style.item} key={index}>
                    { item }
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
              RethinkDB has the best query language of all new databased i’ve seen.
            </div>
            <div className={style.text}>
              — Guillermo Rauch, Cloudup CTO, creator of Mongroose
            </div>
          </div>
          <div className={style.item}>
            <div className={style.title}>
              RethinkDB has the best query language of all new databased i’ve seen.
            </div>
            <div className={style.text}>
              — Guillermo Rauch, Cloudup CTO, creator of Mongroose
            </div>
          </div>
        </div>

        <div className={style.btn}>
          <a href={'https://github.com/rockstat'} target={'__blank'}>
            Установить Rockstat

            <svg viewBox="0 0 272 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="271" height="48" rx="24" stroke="url(#paint0_linear_information)"/>
            <defs>
              <linearGradient id="paint0_linear_information" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(160 33 -183.184 888.163 171.592 -436.082)">
                <stop stopColor="#D900FF"/>
                <stop offset="1" stopColor="#00F0FF"/>
              </linearGradient>
            </defs>
          </svg>
          </a>
        </div>

      </div>
    )
  }
}
