import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import style from './everething.css';

// import Vivus from 'vivus';

import VisibleDetect from "react-visibility-sensor";

import { LogoIcon } from '../../static/icons';
import { EverythingRhimbusIcon, Circletransparent, CircleBlur, CircleGreenIcon } from '../../static/icons/everything';
import { linksMenu } from '../../constants';


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


class IncrediblePoing extends React.PureComponent {

}


class Mixer extends React.PureComponent {
  componentWillMount() {
    d3.interval(() => this.setState({
      alphabet: d3.shuffle(Alphabet.letters)
        .slice(0, Math.floor(Math.random() * Alphabet.letters.length))
        .sort()
    }), 1500);
  }

}


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

    // this.vivus = new Vivus('EverythingRhimbusIcon',
    //   {
    //     type: 'delayed',
    //     duration: 80,
    //     animTimingFunction: Vivus.LINEAR
    //   },
    //   () => {
    //     this.setState({
    //       mainAnimationStatus: false
    //     })
    //   }
    // )
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
            <span>Открытая платформа для создания</span>
            <span>собственной аналитической системы</span>
            <span>и автоматизации маркетинга</span>
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
                    <a href={item.path} target={'__blank'}> {item.name} </a>
                  </div>
                )
              })
            }
          </div>
          <div className={cl(style.demoContainer, { [style.top]: linksMenuPosition === 'top' })}>
            <VisibleDetect onChange={this._linkMenuPositionDetect} />
            <div className={style.btn}> <a href={'/'}> Demo </a> </div>
            <div className={style.description}>
              <div>Open Source</div>
              <div>Apache 2.0</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
