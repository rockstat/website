import * as React from 'react';
import style from './sideMenu.css';
import styleCommon from '../../lib/style/common.css';
import cls from 'classnames';
import { Link } from '../../next-routes'
import { ShowIf } from '..'

export class SideMenu extends React.Component {

  renderItem({ name, href, enabled, items }) {
    const { lang } = this.props;
    return (
      <div className={style.childItem} key={href || name} >
        <ShowIf condition={href}>
          <Link route={href} params={{ lang }}>
            <a className={cls({ [styleCommon['disabled-link']]: !enabled })}>{name}</a>
          </Link>
        </ShowIf>
        <ShowIf condition={!href}>
          <span className={cls({ [styleCommon['disabled-link']]: !enabled })}>
            {name}
          </span>
        </ShowIf>
        {/* 3rd level */}
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
    )
  }

  renderCategory({ name, items }) {
    return (
      <div className={style.mainItem} key={name}>
        <span className={style.title}>{name}</span>
        {items && items.map(item => this.renderItem(item))}
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
