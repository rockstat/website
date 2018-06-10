import * as React from 'react';
import style from './style.scss';
import { Router, Link } from '../../routes';
import cl from 'classnames';

export class SideMenu extends React.Component {
  goTo = (menuItem) => {
    // Router.pushRoute('docs', {
    //   slug: menuItem.id,
    //   lang: 'ru'
    // });
  }

  render() {
    const { query, docsMenu } = this.props;
    return (
      <div className={style.sideBar}>
        {
          docsMenu.map(({ items, ...first }, fi) => {
            return (
              <div
                className={style.mainItem}
                key={fi}
              >

                {first.title}
                {items && items.map(({ items, ...second }, si) => (
                  <div
                    className={style.mainItem}
                    // onClick={this.goTo(item)}
                    key={`${fi}-${si}`}
                  >
                    - {second.title}
                    {items && items.map(({ items, ...third }, ti) => (
                      <div
                        className={style.mainItem}
                        key={`${fi}-${si}-${ti}`}
                      >
                      <span>
                        <Link route='docs' params={{ slug: third.id, lang: 'ru' }}>
                          <a>{`- - ${third.title}`}</a>
                        </Link>
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )
          })
        }
      </div>
    )
  }
}
