import * as React from 'react';
import cls from 'classnames';
import { ShowIf, ShowIfElse, GenericLink } from '..'
import { ShowMenuIcon } from '../icons';
import { Logo } from '../logo';

import style from './sideMenu.module.css';

export class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: SideMenu.findActiveItems(props.menuData, props.pathname),
      showMenu: false
    };
  }

  static findActiveItems(menuData, pathname) {
    const activeMenuItem = [];
    const iter = (items) => {
      for (const item of items) {
        const active = item.href === pathname || (item.hrefs || []).indexOf(pathname) >= 0;
        if (active) {
          activeMenuItem.push(item.path);
        }
        if (item.items) {
          iter(item.items);
        }
      }
    };
    iter(menuData || []);
    return activeMenuItem;
  }

  setActiveMenuItem = (key) => {
    this.setState(({ activeMenuItem }) => {
      const next = [...activeMenuItem];
      const idx = next.indexOf(key);
      idx >= 0 ? next.splice(idx, 1) : next.push(key);
      return { activeMenuItem: next };
    });
  }

  changeMenu = () => {
    this.setState((prev) => ({ showMenu: !prev.showMenu }));
  }

  renderItemStatus(enabled, pathname, href) {
    return cls({
      [style['disabled-link']]: !enabled,
      [style.active]: Array.isArray(href) ? href.indexOf(pathname) >= 0 : pathname === href
    })
  }

  renderItem({ name, href, hrefs, enabled, items, path }) {
    const { lang, pathname } = this.props;
    const { activeMenuItem } = this.state;
    return (
      <div className={cls(style.childItem, { [style.active]: activeMenuItem.indexOf(path) >= 0 })} key={path}>
        <ShowIfElse condition={href && enabled}>
          <GenericLink href={href} className={this.renderItemStatus(enabled, pathname, href)}>
            {name}
          </GenericLink>
          <span
            onClick={() => this.setActiveMenuItem(path)}
            className={this.renderItemStatus(enabled, pathname, hrefs)}
          >
            <span className={cls({ [style.open_close]: items && items.length })}>{name}</span>
          </span>
        </ShowIfElse>
        {/* 3rd level */}
        <div className={style.childItemTreeContainer}>
          {items && items.map(({ name, href, enabled, path }) => (
            <div className={style.childItemTree} key={path}>
              <span>
                <ShowIfElse condition={href && enabled}>
                  <GenericLink href={href} className={this.renderItemStatus(enabled, pathname, href)}>
                    {name}
                  </GenericLink>
                  <span
                    className={this.renderItemStatus(enabled, pathname, hrefs)}
                  >{name}</span>
                </ShowIfElse>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderCategory({ name, items, path }) {
    return (
      <div className={style.mainItem} key={path}>
        <span className={style.title}>{name}</span>
        {items && items.map((item) => this.renderItem(item))}
      </div>
    )
  }

  render() {
    const { menuData } = this.props;
    const { showMenu } = this.state;

    return [
      <div key={100} className={cls(style.sideBar, { [style.show]: showMenu })}>
        <div className={style.floatLogo}>
          <Logo url='/ru/' />
        </div>
        {menuData.map((category) => this.renderCategory(category))}
      </div>,
      <div key={101} className={cls(style.closebtn, { [style.show]: showMenu })} onClick={this.changeMenu}>X</div>,
      <div
        key={102}
        onClick={this.changeMenu}
        className={cls(style.mobileShowMenu, { [style.show]: showMenu })}
      >
        Выберите раздел
      </div>
    ]
  }
}
