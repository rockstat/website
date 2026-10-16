/** A node of data/docs.yml after enrichment by lib/loaders/docs-menu-loader.js. */
export interface MenuItem {
  name: string;
  href?: string;
  items?: MenuItem[];
  /** descendant hrefs, used to highlight a collapsed parent */
  hrefs?: string[];
  /** stable id like "0-1-2" */
  path: string;
  enabled?: boolean;
  modified?: string;
  newTab?: boolean;
}

/** Links in the header/footer menus (lib/constants/menu.ts). */
export interface NavLink {
  name: string;
  title?: string;
  path: string;
  newTab?: boolean;
  active?: boolean;
  disabled?: boolean;
  /** footer: non-clickable group heading */
  event?: boolean;
  children?: NavLink[];
}

export function itemTarget(item?: { newTab?: boolean } | null): '_blank' | '_self' {
  return item && item.newTab === true ? '_blank' : '_self';
}
