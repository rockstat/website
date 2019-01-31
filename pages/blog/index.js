import React from 'react';
import style from '../../static/styles/blog.css';
import { Wrapper } from '@app/components'
import { PostList, BlogSideBar } from '../../components';

const lang = 'ru';

export default class Blog extends React.Component {
  state = {
    linkMenuPosition: 'bottom'
  }

  componentDidMount() {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth <= 720) {
      this.setState({
        linkMenuPosition: 'top'
      })
    }
  }

  render() {
    const { linkMenuPosition } = this.state;

    return (
      <span>
        <Wrapper activeSection={'blog'} {...this.props} lang={lang} headerBgActive={false} linkMenuPosition={linkMenuPosition}>
          <div className={style.rockstatBlogContainer}>
              <div className={style.pstslist}><PostList /></div>
              <div className={style.sidebar}><BlogSideBar /></div>
          </div> 
        </Wrapper>
      </span>
    )
  }
}
