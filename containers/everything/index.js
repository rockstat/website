import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';

import style from './style.scss';

import Vivus from 'vivus';

import VisibleDetect from "react-visibility-sensor";

import { EverythingRhimbusIcon, CircleTransparent, CircleBlur, CircleGreenIcon } from '../../static/icons';
import { linksMenu } from '../../constants';

export class Everything extends React.PureComponent {
  state = {
    mainAnimationStatus: true,
    mountingDetect: false
  }

  static propTypes = {
    setStateLinkMenu: PropTypes.func,
    linksMenuPosition: PropTypes.string
  }

  componentDidMount() {
    this.setState({
      mountingDetect: true
    });

    this.vivus = new Vivus('EverythingRhimbusIcon',
      {
        type: 'delayed',
        duration: 80,
        animTimingFunction: Vivus.LINEAR
      },
      () => {
        this.setState({
          mainAnimationStatus: false
        })
      }
    )
  }

  _linkMenuPositionDetect = (e) => this.props.setStateLinkMenu(e ? 'bottom' : 'top');


  render() {
    const { mainAnimationStatus, mountingDetect } = this.state;
    const { linksMenuPosition } = this.props;

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
          <div className={cl(style.centerBg, {[style.fillNone]: mainAnimationStatus}, {[style.mounted]: mountingDetect})}>
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
            <div className={cl(style.socialMenu, {[style.top]: linksMenuPosition === 'top'})}>
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
          <div className={cl(style.demoContainer, {[style.top]: linksMenuPosition === 'top'})}>
            <VisibleDetect onChange={this._linkMenuPositionDetect} />
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
