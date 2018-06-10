import { docsMenu as menuConfig } from '../constants';
import * as summary from '../content/summary.json';

// Temp map for accessing menu
export const docsItems = {};
// заполнение второго уровня - розделы
for (const l1 of menuConfig) {
  docsItems[l1.id] = l1;
  if (l1.items) {
    for (const l2 of l1.items) {
      docsItems[l2.id] = l2
      if (!l2.items) {
        l2.items = [];
      }
    }
  } else {
    l1.items = [];
  }
}

export const pages = {};

// заполнение третьего уровня - докуметов
for (const [fn, obj] of Object.entries(summary.fileMap)) {
  const { id, title, bodyHtml, parent, base, dir } = obj;
  if (parent  && docsItems[parent]) {
    const item = { id, title, parent, fn }
    docsItems[id] = item
    docsItems[parent].items.push(item)    
  }
}

console.log(docsItems)

export const docsMenu = menuConfig;
