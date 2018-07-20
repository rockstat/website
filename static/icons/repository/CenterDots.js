import React from "react";
import cl from 'classnames';
import style from './style.scss';

export class CenterDots extends React.Component {
  render() {
    let { startAnimation } = this.props;

    return (
        <svg className={cl(style.dotsContainer, {[style.active]: startAnimation})} viewBox={'0 0 378 369'} fill="none">
          <path
            d="M127.16 114.21a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71zm-9.23-15.56a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm12.3-15.01a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-16.56 3.35a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-15.83 8.14a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm12.03 11.57a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm22.53-7.6a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.36zM121 76.32a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-20.99 8.04a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm8.59-10.76a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-1.9-16.82a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm-36.1 9.5a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zM85.53 41.5a7.96 7.96 0 1 0 0-15.93 7.96 7.96 0 0 0 0 15.93zm37.01 21.43a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm24.89 41.69a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm-7.61 23.98a.9.9 0 1 0 0-1.82.9.9 0 0 0 0 1.81zm-12.3-1.46a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62zm-12.49-9.94a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.62zM89.88 88.98a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-7.7-5.43a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm60.99 29.94a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36zm9.69 9.22a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-56.29 65.93a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71zm-18.01-2.34a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.07zm-3.43-19.36a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-7.88 15.19a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-3.44 17.46a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm16.65-2.26a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm7.7-22.25a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-24.53-5.52a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-7.42 21.89a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-3.07-13.57a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-15.3-8.41a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm-17.19 35.09a5.43 5.43 0 1 0 0-10.85 5.43 5.43 0 0 0 0 10.85zM8.62 178.42a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm45.78-18.45a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm47.87 6.7a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm13.85 20.98a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-8.78 8.59a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-15.56 3.62a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-37.47 1.9a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-9.59 2.89a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm61.53-29.03a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm13.12-1.81a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zM135.84 259a1.36 1.36 0 1 0 0-2.7 1.36 1.36 0 0 0 0 2.7zm-13.3 12.67a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zM105.9 262a.72.72 0 1 0 0-1.46.72.72 0 0 0 0 1.45zm6.78 15.64a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm11.58 13.66a.9.9 0 1 0 0-1.82.9.9 0 0 0 0 1.81zm8.69-14.57a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zM120.1 257.1a1.18 1.18 0 1 0 0-2.34 1.18 1.18 0 0 0 0 2.35zm-19.28 15.56a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm11.77 19.72a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-12.49-6.06a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zM83 293.46a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm14.66 36.27a5.43 5.43 0 1 0 0-10.85 5.43 5.43 0 0 0 0 10.85zm-29.96-5.88a7.96 7.96 0 1 0 .01-15.92 7.96 7.96 0 0 0 0 15.92zm20-50.1a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm34.93-33.1a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm24.89 2.25a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm1.35 12.22a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-6.97 14.38a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-21.53 30.3a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-4.34 9.67a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm15.74-66.2a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm6.79-11.4a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm76.74 40.34a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71zm1.53 18.36a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-17.37 6.6a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm16.38 4.61a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm17.82-.54a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-5.79-16a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-23.8-2a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm.54 24.61a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm22.17 3.35a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.07zm-12.58 5.96a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-6.06 18.36a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm35.48 12.12a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zm-25.25 20.62a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm-20.81-49.66a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-4.44-47.75a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm17.2-17.99a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm10.49 6.51a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm6.88 14.38a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm10.59 35.63a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm4.25 9.77a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm-41.99-53.63a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-4.61-12.48a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm79.17-34.74a1.36 1.36 0 1 0 0-2.7 1.36 1.36 0 0 0 0 2.7zm15.2 10.32a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-4.97 17.45a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm13.57-9.95a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm10.68-14.19a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-15.92-5.53a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.45zm-16.74 17.46a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm19.9 14.74a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.45zm15.84-14.83a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-3.08 13.48a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm9.5 16.64a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm29.59-19.17a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zm-1.63 33.64a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm-45.96-17.54a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-40.36-26.23a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-3.44-24.6a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm11.67-4.16a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm15.57 3.52a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62zm34.74 13.85a.45.45 0 1 0 0-.91.45.45 0 0 0 0 .9zm9.6 3.07a1.27 1.27 0 1 0 0-2.54 1.27 1.27 0 0 0 0 2.54zm-67.96-.64a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-12.67-4.16a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zM270.3 138a1.36 1.36 0 1 0 .01-2.72 1.36 1.36 0 0 0 0 2.72zm17.38-5.34a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm11.13 14.38a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm.64-16.74a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-4.44-17.18a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-14.21 8.96a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm3 24.15a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36zm24.24-6.51a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-2.44-21.35a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm8.69 10.85a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm18.01 3.35a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm1.35-34.01a5.43 5.43 0 1 0 0-10.85 5.43 5.43 0 0 0 0 10.85zm23.25 23.07a7.96 7.96 0 1 0 .01-15.93 7.96 7.96 0 0 0 0 15.93zm-36.46 22.15a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-45.88 15.29a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-21.53-12.57a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm4.07-11.67a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm12.49-10.03a.81.81 0 1 0 0-1.64.81.81 0 0 0 0 1.63zm32.75-18.64a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm7.78-5.24a1.27 1.27 0 1 0 0-2.54 1.27 1.27 0 0 0 0 2.54zm-42.89 52.63a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-11.13 7.33a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zM204.52 91.7a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.71zm6.43-16.92a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm18.91 0a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-12.85-10.85a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-16.29-7.24a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-1.62 16.55a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm20.36 12.93a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm10.4-23.15a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zM210.95 51.9a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm13.93 0a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm12.85-11.49a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm-27.87-21.25a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zm30.68-2.9a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm.46 39.53a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-16.93 45.49a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-23.35 9.04a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-6.6-10.58a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm0-15.92a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm6.15-37.35a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm.09-9.13a1.27 1.27 0 1 0 0-2.54 1.27 1.27 0 0 0 0 2.54zm14.57 66.38a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-1.27 13.2a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm37.64-2.71a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71zm9.33-15.56a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-12.4-15.01a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm16.65 3.35a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm15.84 8.14a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-12.13 11.57a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm-22.44-7.6a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.36zm11.31-22.78a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm21.08 8.04a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-8.68-10.76a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm1.9-16.82a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm36.1 9.5a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zM293.02 41.5a7.96 7.96 0 1 0 0-15.93 7.96 7.96 0 0 0 0 15.93zm-37.1 21.43a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-24.79 41.69a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm7.6 23.98a.9.9 0 1 0 0-1.82.9.9 0 0 0 0 1.81zm12.22-1.46a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62zm12.57-9.94a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.62zm25.07-28.22a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm7.69-5.43a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm-60.99 29.94a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36zm-9.59 9.22a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm56.2 65.93a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71zm18.09-2.34a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.07zm3.44-19.36a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm7.87 15.19a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm3.44 17.46a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zM298 197.33a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-7.6-22.25a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm24.52-5.52a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm7.42 21.89a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm3.08-13.57a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm15.28-8.41a2.8 2.8 0 1 0 .01-5.6 2.8 2.8 0 0 0 0 5.6zm17.11 35.09a5.43 5.43 0 1 0 0-10.85 5.43 5.43 0 0 0 0 10.85zm12.13-26.14a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm-45.79-18.45a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-47.87 6.7a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-13.93 20.98a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm8.77 8.59a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm15.57 3.62a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm37.46 1.9a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm9.68 2.89a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm-61.53-29.03a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-13.21-1.81a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zM242.71 259a1.36 1.36 0 1 0 0-2.7 1.36 1.36 0 0 0 0 2.7zm13.21 12.67a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm16.65-9.67a.72.72 0 1 0 0-1.46.72.72 0 0 0 0 1.45zm-6.79 15.64a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zM254.3 291.3a.9.9 0 1 0 0-1.82.9.9 0 0 0 0 1.81zm-8.78-14.57a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm11.94-19.63a1.18 1.18 0 1 0 0-2.34 1.18 1.18 0 0 0 0 2.35zm20.27 15.56a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm-11.85 19.72a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm12.48-6.06a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm17.2 7.14a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm-14.76 36.27a5.43 5.43 0 1 0 0-10.85 5.43 5.43 0 0 0 0 10.85zm29.96-5.88a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm-20-50.1a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-34.84-33.1a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-24.97 2.25a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-1.36 12.22a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm6.97 14.38a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm21.54 30.3a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm4.43 9.67a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm-15.75-66.2a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-6.88-11.4a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-76.64 40.34a1.36 1.36 0 1 0 0-2.71 1.36 1.36 0 0 0 0 2.71zm-1.54 18.36a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm17.28 6.6a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm-16.28 4.61a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-17.82-.54a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm5.78-16a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm23.72-2a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-.46 24.61a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-22.17 3.35a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.07zm12.49 5.96a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm6.06 18.36a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm-35.47 12.12a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zm25.25 20.62a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zM181 318.6a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm4.34-47.75a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm-17.19-17.99a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-10.41 6.51a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-6.97 14.38a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-10.58 35.63a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-4.17 9.77a1.27 1.27 0 1 0 0-2.53 1.27 1.27 0 0 0 0 2.53zm41.9-53.63a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm4.71-12.48a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-79.27-34.74a1.36 1.36 0 1 0 0-2.7 1.36 1.36 0 0 0 0 2.7zm-15.11 10.32a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm4.88 17.45a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm-13.57-9.95a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm-10.68-14.19a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm15.92-5.53a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.45zm16.75 17.46a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zM81.64 248.6a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.45zM65.9 233.77a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm3.07 13.48a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-9.59 16.64a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm-29.5-19.17a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zm1.54 33.64a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm45.97-17.54a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm40.36-26.23a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm3.43-24.6a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-11.67-4.16a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-15.56 3.52a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62zM59.2 223.2a.45.45 0 1 0 0-.91.45.45 0 0 0 0 .9zm-9.6 3.07a1.27 1.27 0 1 0 0-2.54 1.27 1.27 0 0 0 0 2.54zm68.06-.64a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm12.66-4.16a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zM108.15 138a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zm-17.37-5.34a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-11.13 14.38a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-.63-16.74a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm4.52-17.18a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm14.12 8.96a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm-2.9 24.15a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36zm-24.34-6.51a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm2.44-21.35a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-8.59 10.85a1.54 1.54 0 1 0 0-3.07 1.54 1.54 0 0 0 0 3.07zm-18.01 3.35a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zM44.9 98.56a5.43 5.43 0 1 0 0-10.85 5.43 5.43 0 0 0 0 10.85zm-23.34 23.07a7.96 7.96 0 1 0 0-15.93 7.96 7.96 0 0 0 0 15.93zm36.55 22.15a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zM104 159.07a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm21.53-12.57a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm-4.16-11.67a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-12.49-10.03a.81.81 0 1 0 0-1.64.81.81 0 0 0 0 1.63zm-32.76-18.64a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-7.78-5.24a1.27 1.27 0 1 0 0-2.54 1.27 1.27 0 0 0 0 2.54zm42.89 52.63a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm11.13 7.33a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm51.67-69.18a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.71zm-6.52-16.92a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-18.81 0a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm12.84-10.85a.9.9 0 1 0 0-1.81.9.9 0 0 0 0 1.8zm16.29-7.24a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm1.63 16.55a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zM159.1 86.17a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm-10.4-23.15a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm18.81-11.12a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-13.84 0a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm-12.94-11.49a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6zm27.87-21.25a5.43 5.43 0 1 0 0-10.86 5.43 5.43 0 0 0 0 10.86zm-30.59-2.9a7.96 7.96 0 1 0 0-15.92 7.96 7.96 0 0 0 0 15.92zm-.45 39.53a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm16.84 45.49a.72.72 0 1 0 0-1.45.72.72 0 0 0 0 1.45zm23.43 9.04a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zm6.52-10.58a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm0-15.92a.81.81 0 1 0 0-1.63.81.81 0 0 0 0 1.63zm-6.07-37.35a.45.45 0 1 0 0-.9.45.45 0 0 0 0 .9zm-.08-9.13a1.27 1.27 0 1 0 0-2.54 1.27 1.27 0 0 0 0 2.54zm-14.58 66.38a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35zm1.18 13.2a1.18 1.18 0 1 0 0-2.35 1.18 1.18 0 0 0 0 2.35z"
            fill="#E3FFFF"
          />
        </svg>
    )
  }
}