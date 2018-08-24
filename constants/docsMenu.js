export const docsMenuHz = [{
  id: 'getting-started',
  title: 'С чего начать',
  parent: 'docs',
  items: [{
    id: 'setup',
    title: 'Установка платформы',
    parent: 'getting-started'
  }]
}, {
  id: 'exploitation',
  title: 'Работа с платформой',
  parent: 'docs',
  items: [{
    id: 'exploit-data',
    title: 'Работа с данными',
    parent: 'exploitation'
  }]
}, {
  id: 'collecting',
  title: 'Получение данных',
  parent: 'exploitation',
  items: [{
    id: 'colliect-jslib',
    title: 'Сбор с сайта через JSLib',
    parent: 'collecting'
  }, {
    id: 'collect-webhooks',
    title: 'Получение Webhooks',
    parent: 'collecting'
  }]
}]


export const docsMenu = []
docsMenu.push({
  slug: 'getting-started',
  title: 'С чего начать',
  items: [{
    title: 'Установка платформы',
    slug: 'platform-setup',
  }]
})

docsMenu.push({
  title: 'Работа с платформой',
  slug: 'exploitation',
  items: [{
    title: 'Работа с данными',
    slug: 'exploitation-data'
  }]
})

docsMenu.push({
  title: 'Сбор данных',
  slug: 'collecting',
  items: [{
    title: 'Сбор с сайта через JSLib',
    slug: 'collecting-jslib',
  }, {
    title: 'Получение Webhooks',
    slug: 'collecting-webhooks',
  }]
})
