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
