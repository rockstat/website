import React from 'react';
import cl from 'classnames';

import style from './style.scss';
import { AnalyticMain } from '../../static/icons/AnalyticMainIcon';

import LinesAnalytic from '../../static/images/linesAnalytic.png';

import docker from '../../static/images/logoPlatforms/docker.png';
import js from '../../static/images/logoPlatforms/js.png';
import lines from '../../static/images/logoPlatforms/lines.png';
import python from '../../static/images/logoPlatforms/Python-logo-notext.png';
import ts from '../../static/images/logoPlatforms/ts.png';
import what from '../../static/images/logoPlatforms/what.png';

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
        <div className={style.contentCenter}>
          <img src={docker} />
          <img src={js} />
          <img src={lines} />
          <img src={python} />
          <img src={ts} />
          <img src={what} />
        </div>
      </div>
    )
  }
}
