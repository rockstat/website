import * as React from 'react';
import style from './style.scss';
import cl from 'classnames';
import { Link } from '../../next-routes'

export class SideMenu extends React.Component {
  goTo = (menuItem) => {
    // Router.pushRoute('docs', {
    //   slug: menuItem.id,
    //   lang: 'ru'
    // });
  }

  render() {
    const { query, docsMenu, lang } = this.props;

    return (
      <div className={style.sideBar}>
        {
          docsMenu.map(({ items, ...first }, fi) => {
            return (
              <div
                className={style.mainItem}
                key={fi}
              >

                <span className={style.title}>{first.title}</span>

                {items && items.map(({ items, ...second }, si) => (
                  <div
                    className={style.childItem}
                    // onClick={this.goTo(item)}
                    key={`${fi}-${si}`}
                  >
                    {second.title}
                    {items && items.map(({ items, ...third }, ti) => (
                      <div
                        className={style.childItemTree}
                        key={`${fi}-${si}-${ti}`}
                      >
                        <span>
                          {/* <Link route='docs' params={{ slug: third.id, lang: 'ru' }}> */}
                          {/* <Link href='/blog?id=first' as='/blog/first'><a>My first blog post</a></Link> */}
                          <Link route={`docs`} params={{ lang, slug: third.slug }}>
                            <a
                              className={cl({ [style.active]: query && third.slug === query.slug })}
                            >{third.title}</a>
                          </Link>

                          {/* </Link> */}
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
