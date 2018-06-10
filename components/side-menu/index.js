import * as React from 'react';
import style from './style.scss';
// import { Router, Link } from '../../routes';
import cl from 'classnames';
import Link from 'next/link'

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
                          {/* <Link route='docs' params={{ slug: third.id, lang: 'ru' }}> */}
                          {/* <Link href='/blog?id=first' as='/blog/first'><a>My first blog post</a></Link> */}
                          <Link href={`/docs?slug=${third.slug}&lang=ru&path=${third.path}`} as={`/ru/docs/${third.slug}`}>
                            <a>{`- - ${third.title}`}</a>
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
