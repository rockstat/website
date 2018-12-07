import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export class CenterRounds extends React.Component {
  // static propTypes = {
  //   startAnimation: PropTypes.bool
  // }
  // state = {
  //   actualRound: 10,
  //   count: 10,
  //   animated: false
  // }
  // componentWillReceiveProps(nextProps) {
  //   const { animated } = this.state;
  //   let paths = this.circleContainer.children;
  //   !nextProps.startInterval &&
  //     Object.keys(paths).map(item => {
  //       paths[item].style.transform = 'scale(0)';
  //     });
  //   nextProps.startAnimation && !animated ? this.startInterval() : this.stopInterval();
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // circleContainer = null;
  // interval = null;

  // startInterval = () => {
  //   let paths = this.circleContainer.children;
  //   let length = Object.keys(paths).length;

  //   this.setState({
  //     count: length,
  //     actualRound: length - 1,
  //     animated: true
  //   });
  //   this.interval = setInterval(this.renderAnimation, 300);
  // }

  // stopInterval = () => {
    // let paths = this.circleContainer.children;
    // let length = Object.keys(paths).length;

    // this.setState({
    //   count: length,
    //   actualRound: length - 1,
    //   animated: false
    // });
    // clearInterval(this.interval);
  // }

  // renderAnimation = () => {
  //   let paths = this.circleContainer.children;
  //   let { actualRound } = this.state;

  //   paths[actualRound].style.transform = 'scale(1)';
  //   this.setState({
  //     actualRound: actualRound - 1
  //   });
  //   if (actualRound === 0) this.stopInterval();
  // }

  render() {
    return (
        <span className={style.roundContainer} ref={ref => this.circleContainer = ref}>
          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.09}
                d="M154.1 293.05c77.11 0 139.62-62.48 139.62-139.55 0-77.07-62.5-139.55-139.62-139.55C77 13.95 14.48 76.43 14.48 153.5c0 77.07 62.5 139.55 139.62 139.55z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>
          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.18}
                d="M154.1 279.4c69.57 0 125.96-56.37 125.96-125.9S223.66 27.6 154.1 27.6 28.14 83.97 28.14 153.5s56.4 125.9 125.96 125.9z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>

          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.27}
                d="M154.1 266.1c62.22 0 112.66-50.41 112.66-112.6S216.32 40.9 154.1 40.9 41.44 91.3 41.44 153.5 91.88 266.1 154.1 266.1z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>

          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.36}
                d="M154.1 253.16c55.07 0 99.72-44.62 99.72-99.66 0-55.05-44.65-99.67-99.72-99.67S54.38 98.45 54.38 153.5c0 55.04 44.65 99.66 99.72 99.66z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>

          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.45}
                d="M154.1 240.86c48.28 0 87.41-39.11 87.41-87.36s-39.13-87.37-87.4-87.37c-48.29 0-87.42 39.12-87.42 87.37 0 48.25 39.13 87.36 87.41 87.36z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>

          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.55}
                d="M154.1 229.56a76.08 76.08 0 0 0 76.1-76.06c0-42-34.07-76.06-76.1-76.06A76.08 76.08 0 0 0 78 153.5c0 42 34.07 76.06 76.1 76.06z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>

          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.64}
                d="M154.1 219.61a66.13 66.13 0 0 0 66.15-66.11 66.13 66.13 0 0 0-66.15-66.11 66.13 66.13 0 0 0-66.15 66.1 66.13 66.13 0 0 0 66.15 66.12z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>
          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.73}
                d="M154.1 211.74a58.26 58.26 0 0 0 58.28-58.24 58.26 58.26 0 0 0-58.28-58.25 58.26 58.26 0 0 0-58.27 58.25 58.26 58.26 0 0 0 58.27 58.24z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>
          <svg viewBox={'0 0 308 307'} fill="none">
            <path
              d="M154.1 209.12a55.64 55.64 0 0 0 55.65-55.62 55.64 55.64 0 0 0-55.65-55.62 55.64 55.64 0 0 0-55.65 55.62 55.64 55.64 0 0 0 55.65 55.62z"
              stroke="#fff"
              strokeMiterlimit={10}
            />
          </svg>
          <svg viewBox={'0 0 308 307'} fill="none">
            <path
                opacity={0.82}
                d="M154.1 206.86a53.37 53.37 0 0 0 53.39-53.36 53.37 53.37 0 0 0-53.39-53.36 53.37 53.37 0 0 0-53.39 53.36 53.37 53.37 0 0 0 53.4 53.36z"
                stroke="#fff"
                strokeMiterlimit={10}
              />
          </svg>
        </span>
    )
  }
};
