import React from 'react';
import cl from 'classnames';
import style from './style.css';

export class Center extends React.Component {
  render() {
    let { startAnimation } = this.props;

    return (
      <svg className={cl(style.centrContainer, {[style.active]: startAnimation})} viewBox={'0 0 175 176'} fill="none">
        <g filter="url(#filter0_d_centerRepository)">
          <ellipse
            cx={53.39}
            cy={53.36}
            rx={53.39}
            ry={53.36}
            transform="translate(34.07 34.6)"
            fill="#fff"
          />
          <path
            d="M140.35 87.96a52.87 52.87 0 0 1-52.89 52.86 52.87 52.87 0 0 1-52.89-52.86 52.87 52.87 0 0 1 52.9-52.86 52.87 52.87 0 0 1 52.88 52.86z"
            stroke="#fff"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_centerRepository"
            x={0.07}
            y={0.6}
            width={174.78}
            height={174.72}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation={17} />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    )
  }
};
