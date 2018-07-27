import React from 'react';
import cl from 'classnames';
import style from './style.scss';

export class Two extends React.Component {
  render() {
    const { animationChange } = this.props;

    return (
      <svg className={cl(style.twoContainer, {[style.active]: animationChange})} viewBox="0 0 410 410" fill="none" >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M243.503 2.513a2.969 2.969 0 0 1 3.19-2.5 2.962 2.962 0 0 1 2.62 3.39l-9.39 64.57a2.969 2.969 0 0 1-3.18 2.5 2.959 2.959 0 0 1-2.63-3.39l9.4-64.57h-.01zm-23.8 21.9l-.63 42.35c0 1.69-1.36 2.98-2.95 2.9a2.939 2.939 0 0 1-2.87-2.98l.64-42.35c0-1.61 1.36-2.9 2.95-2.9s2.86 1.37 2.86 2.98zm-140.57 12.48a2.84 2.84 0 0 1 0-4.03 2.9 2.9 0 0 1 4.22 0l44.1 47.67a2.844 2.844 0 0 1 .617 3.098 2.844 2.844 0 0 1-.617.922 2.845 2.845 0 0 1-3.265.694 2.831 2.831 0 0 1-.955-.694l-44.1-47.65v-.01zm30.65 64l-32.32-26.89c-1.27-.96-1.43-2.9-.4-4.18a2.9 2.9 0 0 1 4.14-.4l32.32 26.89a2.98 2.98 0 0 1 .4 4.18 2.89 2.89 0 0 1-3.131.956 2.894 2.894 0 0 1-1.009-.556zm-29.3-11.75a2.9 2.9 0 0 1 4.15-.48l21.33 17.23a2.993 2.993 0 0 1 .48 4.18 2.898 2.898 0 0 1-4.14.49l-21.34-17.23a2.99 2.99 0 0 1-.47-4.19h-.01zm20.94-14.65a2.948 2.948 0 0 0 .32 4.1l14.88 13.53c1.2 1.13 3.1.96 4.14-.32a2.948 2.948 0 0 0-.32-4.1l-14.88-13.53a2.905 2.905 0 0 0-3.243-.398 2.9 2.9 0 0 0-.897.718zm4.7-34.3a2.903 2.903 0 0 0-1.068 3.075c.099.372.272.72.508 1.025l24.2 32.77a2.818 2.818 0 0 0 4.06.57 2.905 2.905 0 0 0 1.134-1.934 2.891 2.891 0 0 0-.584-2.166l-24.2-32.78a2.897 2.897 0 0 0-1.909-1.119 2.888 2.888 0 0 0-2.141.56zm-58.19 181.95c-1.59.33-3.1-.64-3.5-2.25a2.945 2.945 0 0 1 1.174-3.071 2.954 2.954 0 0 1 1.056-.469l26.58-6.12c1.6-.32 3.19.64 3.5 2.25a3 3 0 0 1-2.22 3.54l-26.59 6.12zm-20.61-11.51a2.935 2.935 0 0 0 1.281 1.855 2.933 2.933 0 0 0 2.219.395l41-8.77a2.966 2.966 0 0 0 2.22-3.54 2.929 2.929 0 0 0-3.5-2.26l-40.92 8.78a3.061 3.061 0 0 0-2.3 3.54zm21.17-19.89l19.74-3.38a2.93 2.93 0 0 1 3.329 3.503 2.948 2.948 0 0 1-2.38 2.297l-19.74 3.38a3 3 0 0 1-3.34-2.33 2.948 2.948 0 0 1 2.39-3.47zm-48.49-4.83a3.03 3.03 0 0 0 3.1 2.58l64.32-5.15a2.885 2.885 0 0 0 2.034-1.076 2.881 2.881 0 0 0 .596-2.224 3.027 3.027 0 0 0-3.1-2.58l-64.24 5.15a3.039 3.039 0 0 0-2.7 3.3h-.01zm25.48-19.64l40.43 1.29a3.015 3.015 0 0 1 2.87 3.06 2.956 2.956 0 0 1-.91 2.083 2.95 2.95 0 0 1-2.12.817l-40.43-1.3a2.971 2.971 0 0 1-2.68-1.91 2.962 2.962 0 0 1-.19-1.14 2.951 2.951 0 0 1 3.03-2.9zm97.5 163.68c1.44.72 3.19.08 3.9-1.37l11.86-24.88a2.98 2.98 0 0 0-1.35-3.94 2.926 2.926 0 0 0-3.214.45c-.286.256-.52.565-.686.91l-11.85 24.88c-.72 1.53-.16 3.3 1.35 3.95h-.01zm-13.93 6.44a2.896 2.896 0 0 1-2.808 1.597 2.875 2.875 0 0 1-1.092-.307 2.881 2.881 0 0 1-1.602-2.848c.036-.386.148-.76.332-1.102l18.7-37.84a2.894 2.894 0 0 1 2.807-1.596c.381.029.752.133 1.093.306a2.949 2.949 0 0 1 1.28 3.95l-18.7 37.84h-.01zm-4.93-23.75c1.43.72 3.1.24 3.9-1.21l9.7-17.71c.8-1.45.25-3.3-1.19-4.03a2.885 2.885 0 0 0-3.19.326 2.87 2.87 0 0 0-.71.874l-9.7 17.72a2.962 2.962 0 0 0-.24 2.262 2.96 2.96 0 0 0 1.43 1.768zm-31.2 30.35a2.891 2.891 0 0 1-3.9.88c-1.44-.8-1.84-2.73-.88-4.18l36.14-54.02a2.888 2.888 0 0 1 3.9-.89 2.958 2.958 0 0 1 1.33 1.909 2.952 2.952 0 0 1-.46 2.281l-36.13 54.02zm23-62.64l-26.19 31.16a3.053 3.053 0 0 0 .32 4.19c1.2 1.04 3.1.88 4.14-.33l26.19-31.15a3.051 3.051 0 0 0-.32-4.19c-1.28-1.05-3.1-.97-4.14.32zm162.46 52.17a2.982 2.982 0 0 1-2.455 4.255 2.893 2.893 0 0 1-2.113-.704 2.9 2.9 0 0 1-.692-.901l-11.86-24.87a2.977 2.977 0 0 1 1.36-3.94 2.923 2.923 0 0 1 3.9 1.37l11.86 24.8v-.01zm-6.53 22.87c1.43-.73 2.07-2.42 1.43-3.95l-17.59-38.4a3.003 3.003 0 0 0-3.9-1.45 3.062 3.062 0 0 0-1.43 3.95l17.59 38.4a2.88 2.88 0 0 0 3.9 1.45zm-31.52-35.02a2.967 2.967 0 0 1 1.51-3.87c1.51-.72 3.27 0 3.9 1.53l7.64 18.68a2.97 2.97 0 0 1-1.5 3.86c-1.52.73-3.27 0-3.9-1.53l-7.65-18.67zm13.85 67.46a2.96 2.96 0 0 0 1.75-3.62l-19.26-62.31a2.864 2.864 0 0 0-3.82-1.86 2.96 2.96 0 0 0-1.75 3.63l19.26 62.31a2.919 2.919 0 0 0 3.82 1.85zm-21.25-18.43a2.891 2.891 0 0 1-2.208-.447 2.9 2.9 0 0 1-1.222-1.893l-7.8-40.17a2.938 2.938 0 0 1 3.454-3.457 2.893 2.893 0 0 1 1.855 1.263c.209.323.352.685.421 1.064l7.8 40.17a2.943 2.943 0 0 1-2.3 3.47zm130.55-138.4l-26.59-6.12c-1.6-.4-3.1.64-3.5 2.25a2.938 2.938 0 0 0 2.23 3.55l26.58 6.12c1.6.4 3.1-.65 3.5-2.26a3.07 3.07 0 0 0-2.22-3.54zm11.38 15.86a2.867 2.867 0 0 1 1.833 1.31 2.85 2.85 0 0 1 .317 2.23 2.832 2.832 0 0 1-1.277 1.851 2.822 2.822 0 0 1-2.223.329l-40.68-10.07a2.85 2.85 0 0 1-2.221-2.392 2.87 2.87 0 0 1 .071-1.148 2.809 2.809 0 0 1 1.279-1.844 2.827 2.827 0 0 1 2.221-.326l40.68 10.06zm-42.98.88a2.915 2.915 0 0 0-3.67 2.1 2.9 2.9 0 0 0 2 3.54l19.18 5.64c1.59.48 3.26-.49 3.66-2.1a2.902 2.902 0 0 0-2-3.54l-19.17-5.63v-.01zm57.47 33.18a2.94 2.94 0 0 1 1.75 3.7 2.993 2.993 0 0 1-1.523 1.725 2.994 2.994 0 0 1-2.297.125l-60.18-23.59a2.936 2.936 0 0 1-1.75-3.7c.56-1.61 2.23-2.5 3.82-1.85l60.18 23.59zm-25.71 9.01a2.952 2.952 0 0 0-1.28-3.94l-35.9-18.84a2.901 2.901 0 0 0-2.219-.168 2.9 2.9 0 0 0-1.681 1.458 2.95 2.95 0 0 0 1.28 3.94l35.9 18.84c1.43.72 3.18.16 3.9-1.29zm-46.97-172.29l21.33-17.23c1.28-.96 3.19-.8 4.14.48.96 1.3.8 3.14-.47 4.2l-21.34 17.22c-1.27.97-3.1.8-4.13-.48a3.058 3.058 0 0 1 .47-4.19zm40.68-16.42l-33.12 25.92a2.958 2.958 0 0 0-.55 4.1 2.889 2.889 0 0 0 4.06.57l33.11-25.92a2.96 2.96 0 0 0 .56-4.11 2.886 2.886 0 0 0-3.043-1.056 2.902 2.902 0 0 0-1.017.496zm-6.37 27.77l-16.32 11.68c-1.35.96-3.1.64-4.06-.65a2.915 2.915 0 0 1 .64-4.18l16.32-11.68a2.965 2.965 0 0 1 2.185-.454c.76.139 1.435.57 1.881 1.201a2.96 2.96 0 0 1-.646 4.083zm41.79-17.87l-55.72 32.85a2.965 2.965 0 1 0 2.94 5.15l55.72-32.85a2.96 2.96 0 0 0 .96-4.18 2.85 2.85 0 0 0-1.749-1.293 2.833 2.833 0 0 0-2.151.323zm-49.9 40.98l36.92-16.59c1.44-.64 3.19 0 3.82 1.53.64 1.45 0 3.22-1.5 3.87l-36.94 16.58c-1.43.65-3.19 0-3.82-1.53a2.923 2.923 0 0 1 .571-3.206c.267-.277.586-.499.939-.654h.01zm-115.83-85.34v-27.62a2.971 2.971 0 0 0-.857-2.102 2.96 2.96 0 0 0-2.093-.878 2.9 2.9 0 0 0-2.94 2.98v27.62a2.959 2.959 0 0 0 2.94 2.98 2.96 2.96 0 0 0 2.95-2.98zm23.16.16l1.11-20.2a2.978 2.978 0 0 0-1.717-2.873 2.976 2.976 0 0 0-1.143-.277 2.942 2.942 0 0 0-3.03 2.82l-1.11 20.2a2.97 2.97 0 0 0 .772 2.18 2.979 2.979 0 0 0 2.098.97 3 3 0 0 0 3.02-2.82zm27.7-41.06c-1.6-.4-3.18.56-3.58 2.1l-10.2 39.6a2.999 2.999 0 0 0 2.08 3.63c1.6.4 3.18-.57 3.58-2.1l10.19-39.6a2.929 2.929 0 0 0-2.07-3.63zm50.78 62.8c1.28-.97 3.1-.8 4.14.48a2.99 2.99 0 0 1-.48 4.19l-21.33 17.23c-1.27.96-3.18.8-4.14-.49a3.06 3.06 0 0 1 .48-4.18l21.33-17.23zm3.5-19.16l-32.31 26.89a2.98 2.98 0 0 0-.4 4.18 2.902 2.902 0 0 0 4.14.4l32.32-26.89a2.98 2.98 0 0 0 .4-4.18 2.91 2.91 0 0 0-1.986-1.074 2.897 2.897 0 0 0-2.154.674h-.01zm-24.43 4.67a2.891 2.891 0 0 1 2.137-.712 2.902 2.902 0 0 1 2.003 1.032 2.885 2.885 0 0 1-.32 4.1l-14.89 13.53a2.907 2.907 0 0 1-2.132.708 2.901 2.901 0 0 1-1.998-1.028 3.027 3.027 0 0 1 .31-4.1l14.89-13.53zm22.29-41.23l-44.1 47.67a2.998 2.998 0 0 0 0 4.02 2.898 2.898 0 0 0 4.22 0l44.1-47.66a3.001 3.001 0 0 0 0-4.03 2.783 2.783 0 0 0-4.22 0zm-26.83 7.81a2.891 2.891 0 0 1 4.06-.56 2.9 2.9 0 0 1 .56 4.1l-24.2 32.77a2.899 2.899 0 0 1-1.912 1.13 2.89 2.89 0 0 1-2.148-.56 2.96 2.96 0 0 1-.56-4.1l24.2-32.78zm33.43 171.73a2.942 2.942 0 0 0 1.172 3.074c.318.224.678.383 1.058.466l26.59 6.12c1.59.4 3.1-.64 3.5-2.25a2.95 2.95 0 0 0-2.23-3.54l-26.59-6.12c-1.59-.4-3.1.64-3.5 2.25zm4.94-8.3a2.995 2.995 0 0 1-2.23-3.53 2.88 2.88 0 0 1 3.5-2.26l41 8.78a3 3 0 0 1 2.22 3.54 2.97 2.97 0 0 1-3.5 2.25l-41-8.77.01-.01zm2.62-11.02l19.74 3.38c1.6.24 3.03-.8 3.35-2.33a2.903 2.903 0 0 0-2.4-3.47l-19.73-3.38c-1.6-.24-3.03.8-3.34 2.34a2.898 2.898 0 0 0 2.38 3.46zm66.47-10.55a2.896 2.896 0 0 1 2.548 2.132c.103.38.128.778.072 1.168a2.794 2.794 0 0 1-1.002 1.949 2.802 2.802 0 0 1-2.098.631l-64.31-5.15a2.897 2.897 0 0 1-2.63-3.3 2.856 2.856 0 0 1 1.015-1.932 2.842 2.842 0 0 1 2.085-.648l64.32 5.15zm-66.07-12a3.056 3.056 0 0 0 3.03 2.9l40.43-1.28a3.068 3.068 0 0 0 2.87-3.06 3.06 3.06 0 0 0-3.03-2.9l-40.43 1.29a2.907 2.907 0 0 0-2.7 1.908 2.899 2.899 0 0 0-.17 1.152v-.01zm-52.85 155.4c.334.703.38 1.509.127 2.245a2.975 2.975 0 0 1-2.584 2.002 2.848 2.848 0 0 1-2.793-1.677l-11.86-24.88a2.981 2.981 0 0 1 1.35-3.94 2.934 2.934 0 0 1 2.231-.128c.363.127.696.323.983.578.286.256.519.565.686.91l11.87 24.88-.01.01zm16.48 11.67a2.949 2.949 0 0 0 1.27-3.95l-18.7-37.84a2.882 2.882 0 0 0-1.681-1.458 2.891 2.891 0 0 0-2.219.168 2.952 2.952 0 0 0-1.28 3.95l18.7 37.84a2.886 2.886 0 0 0 3.9 1.29h.01zm-7.57-46.78l9.71 17.71a2.907 2.907 0 0 1-.28 3.3 2.9 2.9 0 0 1-.91.73c-1.43.72-3.1.16-3.9-1.21l-9.71-17.71a2.945 2.945 0 0 1 .3-3.293c.248-.303.554-.553.9-.737a2.953 2.953 0 0 1 3.9 1.2l-.01.01zm43.62 52.97a2.97 2.97 0 0 0 1.331-1.902 2.974 2.974 0 0 0-.451-2.278l-36.14-54.02a2.906 2.906 0 0 0-1.772-1.225 2.907 2.907 0 0 0-2.128.335 2.962 2.962 0 0 0-.87 4.19l36.13 54.02a2.828 2.828 0 0 0 3.9.88zm-5.1-28.58l-26.18-31.15a2.948 2.948 0 0 1 .32-4.11 2.96 2.96 0 0 1 4.14.32l26.19 31.08a3.042 3.042 0 0 1-.32 4.19 2.958 2.958 0 0 1-4.14-.33h-.01zm-182.83 21.18c1.44.72 3.19.08 3.9-1.37l11.87-24.88a2.981 2.981 0 0 0-1.36-3.94 2.928 2.928 0 0 0-2.234-.123 2.916 2.916 0 0 0-1.666 1.493l-11.86 24.87a2.927 2.927 0 0 0 1.35 3.95zm26.59-20.94l-17.6 38.4a2.841 2.841 0 0 1-3.9 1.46 2.933 2.933 0 0 1-1.535-1.678 2.945 2.945 0 0 1 .115-2.272l17.59-38.4c.154-.357.379-.679.661-.946a2.884 2.884 0 0 1 3.239-.504 2.95 2.95 0 0 1 1.541 1.676 2.956 2.956 0 0 1-.111 2.274v-.01zm4.7 2.5l-7.64 18.68c-.63 1.45.08 3.14 1.52 3.86 1.5.65 3.26 0 3.9-1.53l7.64-18.67c.63-1.45-.08-3.14-1.51-3.87a2.87 2.87 0 0 0-3.9 1.53h-.01zm-4.62 67.95a2.943 2.943 0 0 1-1.518 1.736 2.948 2.948 0 0 1-2.302.114 2.957 2.957 0 0 1-1.75-3.62l19.26-62.31a2.962 2.962 0 0 1 1.514-1.742 2.96 2.96 0 0 1 2.306-.118 2.893 2.893 0 0 1 1.75 3.63l-19.26 62.31zm17.35-16.58a2.909 2.909 0 0 0 2.202-.451 2.906 2.906 0 0 0 1.218-1.889l7.8-40.17a2.94 2.94 0 0 0-2.3-3.46 2.9 2.9 0 0 0-3.43 2.33l-7.8 40.17c-.31 1.62.72 3.22 2.31 3.47zm-102.59-138.72l-26.58 6.12a3.008 3.008 0 0 1-3.5-2.26 3 3 0 0 1 2.22-3.54l26.59-6.12c1.59-.32 3.1.64 3.5 2.25a3.002 3.002 0 0 1-2.23 3.55zm-41.47 19.72a2.897 2.897 0 0 0 3.5 2.18l40.69-10.08a2.927 2.927 0 0 0 2.15-3.54 2.894 2.894 0 0 0-1.298-1.814 2.911 2.911 0 0 0-2.202-.356l-40.68 10.06a2.911 2.911 0 0 0-1.819 1.319 2.897 2.897 0 0 0-.331 2.221l-.01.01zm46.8 2.98l-19.18 5.64a2.917 2.917 0 0 1-2.281-.264 2.898 2.898 0 0 1-1.38-1.836 2.929 2.929 0 0 1 1.99-3.54l19.18-5.63c1.6-.49 3.27.48 3.66 2.09a2.94 2.94 0 0 1-1.99 3.54zm-56.99 33.1l60.18-23.6a3.016 3.016 0 0 0 1.75-3.7 2.978 2.978 0 0 0-3.82-1.85l-60.18 23.59a3.022 3.022 0 0 0-1.75 3.7 2.982 2.982 0 0 0 3.82 1.85v.01zm63.44-14.18l-35.9 18.84c-1.43.8-3.18.24-3.9-1.29a2.97 2.97 0 0 1 1.28-3.94l35.9-18.84a2.895 2.895 0 0 1 2.218-.164 2.912 2.912 0 0 1 1.682 1.454 2.97 2.97 0 0 1-1.28 3.94zm-18.3-171.4a2.991 2.991 0 0 0 .47 4.18l21.33 17.23a2.9 2.9 0 0 0 4.14-.48 2.977 2.977 0 0 0-.48-4.19l-21.32-17.23a2.981 2.981 0 0 0-4.14.48v.01zm-18.8 4.99a2.959 2.959 0 0 1-.55-4.11 2.895 2.895 0 0 1 3.043-1.056c.368.097.714.266 1.017.496l33.11 25.92a2.961 2.961 0 0 1 .56 4.1 2.893 2.893 0 0 1-3.042 1.065 2.88 2.88 0 0 1-1.018-.495l-33.11-25.91-.01-.01zm30.34 34.13a2.999 2.999 0 0 0-.64-4.18l-16.4-11.68a2.972 2.972 0 0 0-4.06.65 3 3 0 0 0 .64 4.18l16.32 11.68c1.35.96 3.18.64 4.14-.65zm-65.12-23.82a3.024 3.024 0 0 1-1.377-3.083 3.04 3.04 0 0 1 .427-1.107 2.995 2.995 0 0 1 3.9-.96l55.72 32.85a3.032 3.032 0 0 1 .95 4.18 2.84 2.84 0 0 1-3.9.97l-55.72-32.85zm54.37 39.85a2.898 2.898 0 0 0-1.51-3.86l-36.94-16.6a2.852 2.852 0 0 0-3.82 1.53 2.905 2.905 0 0 0 .564 3.232c.272.278.597.499.956.648l36.93 16.58a2.938 2.938 0 0 0 3.82-1.53zm120.11-116.9v27.62a3 3 0 0 1-2.94 2.98 2.964 2.964 0 0 1-2.732-1.843 2.952 2.952 0 0 1-.218-1.137v-27.63c0-1.69 1.35-2.98 2.95-2.98a2.962 2.962 0 0 1 2.94 2.98v.01zm-14.88 30.52c1.59 0 2.86-1.37 2.86-2.98l-.63-42.35c0-1.61-1.36-2.9-2.95-2.9a2.939 2.939 0 0 0-2.87 2.98l.64 42.35a2.788 2.788 0 0 0 .835 2.101 2.795 2.795 0 0 0 2.115.8zm-8.28-3.15a2.976 2.976 0 0 1-.776 2.173 2.974 2.974 0 0 1-2.094.967c-1.5.08-2.86-1.13-3.02-2.82l-1.12-20.2a2.971 2.971 0 0 1 .772-2.178 2.979 2.979 0 0 1 2.098-.972 3 3 0 0 1 3.02 2.82l1.12 20.19v.02zm-12.42 3.94a2.958 2.958 0 0 0 2.565-2.193 2.97 2.97 0 0 0 .065-1.187l-9.4-64.57a2.931 2.931 0 0 0-3.18-2.5 2.95 2.95 0 0 0-2.036 1.134 2.955 2.955 0 0 0-.584 2.256l9.39 64.57a2.93 2.93 0 0 0 3.18 2.5v-.01zm-23.16-40.98a2.914 2.914 0 0 1 .278-2.242 2.931 2.931 0 0 1 1.792-1.378c1.51-.4 3.1.56 3.58 2.1l10.19 39.6a2.935 2.935 0 0 1-.972 3.197 2.936 2.936 0 0 1-2.226.603 2.928 2.928 0 0 1-2.452-2.27l-10.2-39.6.01-.01z"
        transform="translate(8 11)"
        fill="url(#paint0_radial)"
        filter="url(#twofilter0_d)"
      />
      <defs>
        <filter
          id="twofilter0_d"
          x={-16}
          y={-13}
          width={441.322}
          height={436.023}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={12} />
          <feColorMatrix values="0 0 0 0 0.54902 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="twoeffect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="twoeffect1_dropShadow" result="shape" />
        </filter>
        <radialGradient
          id="paint0_radial"
          cx={0.5}
          cy={0.5}
          r={0.5}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(363.751 351) rotate(-90 .55 .5)"
        >
          <stop offset={0.67} stopColor="#00F0FF" />
          <stop offset={1} stopColor="#D900FF" />
        </radialGradient>
      </defs>
    </svg>
    )
  }
}
