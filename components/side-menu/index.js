import * as React from 'react';
import style from './sideMenu.css';
import cls from 'classnames';
import { Link } from '../../next-routes'
import { ShowIf } from '..'
import { ShowMenuIcon } from '../icons';
import { Logo } from '../logo';

export class SideMenu extends React.Component {
  state = {
    activeMenuItem: [],
    showMenu: false
  }

  setActiveMenuItem = (key) => {
    const { activeMenuItem } = this.state;
    let newActvieMenuItem = [...activeMenuItem];
    let activeShowDetect = activeMenuItem.indexOf(key);

    activeShowDetect >= 0 ? newActvieMenuItem.splice(activeShowDetect, 1) : newActvieMenuItem.push(key)

    this.setState({
      activeMenuItem: newActvieMenuItem
    })
  }

  changeMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  renderItemStatus(enabled, pathname, href) {
    return cls({
      [style['disabled-link']]: !enabled,
      [style.active]: pathname === href
    })
  }

  renderItem({ name, href, enabled, items }, [i1, i2]) {
    const { lang, pathname } = this.props;
    const { activeMenuItem } = this.state;
    const key = `${i1}-${i2}`;
    return (
      <div className={cls(style.childItem, { [style.active]: activeMenuItem.indexOf(key) >= 0 })} key={`side-menu-${key}`}>
        <ShowIf condition={href}>
          <Link route={href} params={{ lang }}>
            <a className={this.renderItemStatus(enabled, pathname, href)}>{name}</a>
          </Link>
        </ShowIf>
        <ShowIf condition={!href}>
          <span
            onClick={() => this.setActiveMenuItem(`${key}`)}
            className={this.renderItemStatus(enabled, pathname, href)}
          >
            <ShowMenuIcon /> {name}
          </span>
        </ShowIf>
        {/* 3rd level */}
        <div className={style.childItemTreeContainer}>
          {items && items.map(({ name, href, enabled }, i3) => (
            <div className={style.childItemTree} key={`side-menu-${key}-${i3}`}>
              <span>
                <Link route={href} params={{ lang }}>
                  <a className={this.renderItemStatus(enabled, pathname, href)}>{name}</a>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderCategory({ name, items }, i1) {
    return (
      <div className={style.mainItem} key={`side-menu-${i1}`}>
        <span className={style.title}>{name}</span>
        {items && items.map((item, i2) => this.renderItem(item, [i1, i2]))}
      </div>
    )
  }

  render() {
    const { menuData } = this.props;
    const { showMenu } = this.state;

    return [
      <div key={0} className={cls(style.sideBar, { [style.show]: showMenu })}>
        <div className={style.floatLogo}>
          <Logo />
        </div>
        {menuData.map((category, i1) => this.renderCategory(category, i1))}
      </div>,
      <div key={1} className={cls(style.closebtn, { [style.show]: showMenu })} onClick={this.changeMenu}>X</div>,
      <div
        key={2}
        onClick={this.changeMenu}
        className={cls(style.mobileShowMenu, { [style.show]: showMenu })}
      >
        Выберите раздел
      </div>
    ]
  }
}
