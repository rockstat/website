const summary = require('../content/summary.json');

const docsTOC = require('../content/docs-toc');

const docsMenuConfig = [{
  slug: 'getting-started',
  title: 'С чего начать',
  items: [{
    title: 'Установка платформы',
    slug: 'platform-setup',
  }]
}, {
  title: 'Работа с платформой',
  slug: 'exploitation',
  items: [{
    title: 'Работа с данными',
    slug: 'exploitation-data'
  }]
}, {
  title: 'Сбор данных',
  slug: 'collecting',
  items: [{
    title: 'Сбор с сайта через JSLib',
    slug: 'collecting-jslib',
  }, {
    title: 'Получение Webhooks',
    slug: 'collecting-webhooks',
  }]
}]

// Temp map for accessing menu
const docsItems = {};
// Fill first level
for (const l1 of docsMenuConfig) {
  docsItems[l1.slug] = l1;
  // fill second level
  for (const l2 of l1.items || []) {
    docsItems[l2.slug] = l2
  }
}

const docs = [];

// Fill second and third levels
// for (const [fn, obj] of Object.entries(summary.fileMap)) {
//   const { title, bodyHtml, parent, slug } = obj;
//   if (docsItems[parent] && slug) {
//     path = fn.split('content/docs/').join('').split('.json').join('');
//     const item = { slug, path, title, bodyHtml, parent }
//     docsItems[slug] = item;
//     docsItems[parent].items = docsItems[parent].items || []
//     docsItems[parent].items.push(item)
//     docs.push(item)
//     console.log(item)
//   }
// }
for (const obj of docsTOC.data) {
  const { title, bodyHtml, parent, slug, out } = obj;
  if (docsItems[parent] && slug) {
    // path = out.split('content/docs/').join('').split('.js').join('');
    path = 'hz';
    const item = { slug, path, title, bodyHtml, parent, out }
    docsItems[slug] = item;
    docsItems[parent].items = docsItems[parent].items || []
    docsItems[parent].items.push(item)
    docs.push(item)
    console.log(item)
  }
}

module.exports = {
  docsMenu: docsMenuConfig,
  docsItems: docsItems,
  docs: docs,
}
