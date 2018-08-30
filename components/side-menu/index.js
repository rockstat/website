import * as React from 'react';
import style from './sideMenu.css';
import styleCommon from '../../lib/style/common.css';
import cls from 'classnames';
import { Link } from '../../next-routes'
import { ShowIf } from '..'
import { ShowMenuIcon } from '../icons';

export class SideMenu extends React.Component {
  state = {
    activeMenuItem: []
  }

  setActiveMenuItem = (index) => {
    const { activeMenuItem } = this.state;
    let newActvieMenuItem = [...activeMenuItem];
    let activeShowDetect = activeMenuItem.indexOf(index);

    activeShowDetect > -1 ? newActvieMenuItem.splice(activeShowDetect, 1) : newActvieMenuItem.push(index)

    this.setState({
      activeMenuItem: newActvieMenuItem
    })
  }

  renderItem({ name, href, enabled, items }, index) {
    const { lang } = this.props;
    const { activeMenuItem } = this.state;
    return (
      <div 
        className={cls(style.childItem, {[style.active]: activeMenuItem.indexOf(index) > -1})} key={href || name} 
      >
        <ShowIf condition={href}>
          <Link route={href} params={{ lang }}>
            <a className={cls({ [styleCommon['disabled-link']]: !enabled })}>{name}</a>
          </Link>
        </ShowIf>
        <ShowIf condition={!href}>
          <span onClick={this.setActiveMenuItem.bind(this, index)} className={cls(style.itemTwo, { [styleCommon['disabled-link']]: !enabled })}>
            <ShowMenuIcon /> {name}
          </span>
        </ShowIf>
        {/* 3rd level */}
        <div className={style.childItemTreeContainer}>
          {items && items.map(({ name, href, enabled }) => (
            <div className={style.childItemTree} key={href || name}>
              <span>
                <Link route={href} params={{ lang }}>
                  <a className={cls({ [styleCommon['disabled-link']]: !enabled })}>{name}</a>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderCategory({ name, items }, index) {
    return (
      <div className={style.mainItem} key={name}>
        <span className={style.title}>{name}</span>
        {items && items.map((item, index) => this.renderItem(item, index))}
      </div>
    )
  }

  render() {
    const { menuData } = this.props;

    return (
      <div className={style.sideBar}>
        {menuData.map(category => this.renderCategory(category))}
      </div>
    )
  }
}
