import React from 'react';
import cl from 'classnames';

import style from './platform.css';

import { Docker, Js, Golang, Python, Ts, Clickhouse } from '@app/components/icons/technologies';

export class Platform extends React.Component {

  render() {
    return (
      <div className={style.analyticContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>Эта платформа — ваша</div>
          <div className={style.description}>
            Открыто распространяется в исходным коде под лицензией
            Apache 2.0 <br /> Установка производится на ваш сервер, а данные собираются в привязке <br />
            к cookie вашего домена.</div>
        </div>
        <div className={cl(style.contentCenter, 'rockstat-svg-container')}>
          <Docker />
          <Js />
          <Clickhouse />
          <Python />
          <Ts />
          <Golang />

        </div>
      </div>
    )
  }
}
