import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import style from './first-screen.module.css';

// import Vivus from 'vivus';
import { VisibilitySensor } from "@app/components/visibility-sensor";

import { EverythingRhimbusIcon, Circletransparent, CircleBlur, CircleGreenIcon, RockFig } from '@app/components/icons/intro';
import { LogoIcon } from '@app/components/icons';
import { linksMenu } from '@app/lib/constants';


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
    // console.log('main pos, vis', pos, isVisible)
    this.props.linksMenuPositionChange(pos);
  }

  render() {
    const { linksMenuPosition } = this.props;

    return (
      <div className={style.everythingContainer}>
        <div className={style.textContainer}>
          <div className={style.title}>
            {/* Почувствуйте<br/>полный контроль<br/>и свободу действий */}
            Откройте<br />силу данных
          </div>
          <div className={style.text}>
            {/* Открытое программное обеспечение для автомаризации маркетинга и аналитики*/}
            {/* <span>Открытая платформа для автоматизации</span> */}
            {/* <span>маркетинга и построения собственной</span> */}
            {/* <span>аналитической системы</span> */}
            <span>Открытое программное обеспечение для</span>
            <span>построения аналитической системы</span>
            <span>и автоматизации маркетинга</span>
          </div>
        </div>
        <div className={style.bgContainer}>
          <div className={style.logoMobile}><LogoIcon /></div>
          <div className={cl(style.centerBg, 'rockstat-svg-container', style.mounted)}>
            <RockFig />
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
            {/* <div className={style.btn}> <a href={'/'}> Demo </a> </div> */}
            <VisibilitySensor onChange={this.linksMenuPositionDetect}>
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
