import * as React from 'react';
import style from './style.css';
import cl from 'classnames';
import { Link } from '../../next-routes'
import { ShowIf } from '..'

export class SideMenu extends React.Component {

  render() {
    const { query, docsMenu, lang } = this.props;

    return (
      <div className={style.sideBar}>
        {
          docsMenu.map(({ items, ...first }, fi) => {
            return (
              <div className={style.mainItem} key={fi}>
                <span className={style.title}>{first.title}</span>

                {/* 2nd level */}
                {items && items.map(({ items, ...second }, si) => (
                  <div className={style.childItem} key={`${fi}-${si}`} >
                    <ShowIf condition={second.path}>
                      <Link route={`docs`} params={{ lang, slug: second.slug }}>
                        <a className={cl({ [style.active]: query && second.slug === query.slug })} >{second.title}</a>
                      </Link>
                    </ShowIf>
                    <ShowIf condition={!second.path}>
                      {second.title}
                    </ShowIf>
                    {/* 3rd level */}
                    {items && items.map(({ items, ...third }, ti) => (
                      <div
                        className={style.childItemTree}
                        key={`${fi}-${si}-${ti}`}
                      >
                        <span>
                          <Link route={`docs`} params={{ lang, slug: third.slug }}>
                            <a className={cl({ [style.active]: query && third.slug === query.slug })} >{third.title}</a>
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
