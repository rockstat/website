import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import style from './first-screen.css';

// import Vivus from 'vivus';

import VisibilitySensor from "react-visibility-sensor";

import { EverythingRhimbusIcon, Circletransparent, CircleBlur, CircleGreenIcon } from 'components/icons/intro';
import { LogoIcon } from 'components/icons';
import { linksMenu } from 'constants/index';


class CircleComponent extends React.PureComponent {
  render() {
    const { width, height } = this.props;
    return (
      <svg width={width} height={height} className='chart'>
        <circlec x={30} cy={80} r={25} fill={'red'} />
        <circlec x={130} cy={80} r={60} fill={'green'} />
        <circlec x={260} cy={80} r={40} fill={'blue'} />
      </svg>
    );
  }
}

export class Everything extends React.PureComponent {
  state = {
    mainAnimationStatus: true,
  }

  static propTypes = {
    setStateLinkMenu: PropTypes.func,
    linksMenuPosition: PropTypes.string
  }

  linksMenuPositionDetect = (isVisible) => {
    const pos = isVisible ? 'bottom' : 'top'
    console.log('main pos, vis', pos, isVisible)
    this.props.linksMenuPositionChange(pos);
  }

  render() {
    const { linksMenuPosition } = this.props;

    return (
      <div className={style.everythingContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>
            Сила в данных
          </div>
          <div className={style.text}>
            <span>Открытая платформа для создания</span>
            <span>аналитической системы и управления</span>
            <span>жизненным циклом пользователей</span>
          </div>
        </div>
        <div className={style.bgContainer}>
          <div className={style.logoMobile}><LogoIcon /></div>
          <div className={cl(style.centerBg, 'rockstat-svg-container', style.mounted)}>
            <EverythingRhimbusIcon />
          </div>
          <div className={cl(style.circleTransparentBg, 'rockstat-svg-container')}>
            <Circletransparent />
          </div>
          <div className={cl(style.circleBlurBg, 'rockstat-svg-container')}>
            <CircleBlur />
          </div>
          <div className={cl(style.circleGreenBg, 'rockstat-svg-container')}>
            <CircleGreenIcon />
          </div>
        </div>
        <div className={style.bottomMenuContainer}>
          <div className={cl(style.socialMenu, { [style.top]: linksMenuPosition === 'top' })}>
            {
              linksMenu.map((item, index) => {
                return (
                  <div key={index} className={cl(style.item, { [style.lastItem]: index === linksMenu.length - 1 })}>
                    <a href={item.path} target={'_blank'}> {item.name} </a>
                  </div>
                )
              })
            }
          </div>
          <div className={cl(style.demoContainer, { [style.top]: linksMenuPosition === 'top' })}>
            <div className={style.btn}> <a href={'/'}> Demo </a> </div>
            <VisibilitySensor onChange={this.linksMenuPositionDetect} >
              <div className={style.description}>
                <div>Open Source</div>
                <div>Apache 2.0</div>
              </div>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    )
  }
}