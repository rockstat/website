const digitalGodWeb = 'https://digitalgod.be';
const RST_FB = 'https://fb.com/rockstat.pub';
const RST_TG = 'https://t.me/rockstats';
const RST_GH = 'https://github.com/rockstat';
const TG_TITLE = 'Telegram'
const FB_TITLE = 'Facebook'
const GH_TITLE = 'GitHub'

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
export const langsMenu = [
  { name: 'ru', key: 'ru', path: '/ru' },
  { name: 'en', key: 'en', path: '#', disabled: true }
];

export const headerMenu = [
  { name: 'main', title: 'Интро', path: '/ru' },
  // { name: 'blog', title: 'Блог', path: '/blog' }, 
  // { name: 'edu', title: 'Обучение', path: digitalGodWeb, newTab: true }, // path: '/edu' 
  { name: 'docs', title: 'Документация', path: '/docs' }
];

export const linksMenu = [
  { name: FB_TITLE, path: RST_FB, newTab: true },
  { name: TG_TITLE, path: RST_TG, newTab: true },
  { name: GH_TITLE, path: RST_GH, newTab: true }
];

export const footerMenu = [
  {
    name: 'Документация',
    path: '/docs',
    children: [
      { name: 'Быстрый старт', path: '/docs/intro/getting-started', active: true },
      { name: 'Архитектура', path: '/docs/architecture/overview', active: true },
      { name: 'популярные вопросы', page: 'docs', path: '#', active: false },
    ]
  },
  {
    name: 'Обучение', path: '#', event: false,
    children: [
      { name: 'Курсы Digital God', path: digitalGodWeb, active: true, newTab: true },
      { name: 'Типовые решения', path: '#', active: false, newTab: true },
      { name: 'Рекомендации', path: '#', active: false, newTab: true }
    ]
  },
  {
    name: 'Сообщество', path: '#', event: false,
    children: [
      { name: FB_TITLE, path: RST_FB, active: true, target: true, newTab: true },
      { name: TG_TITLE, path: RST_TG, active: true, target: true, newTab: true },
      { name: GH_TITLE, path: RST_GH, active: true, target: true, newTab: true }
    ]
  }
];

export const footerRightMenu = [
  // { name: 'Личный кабинет', path: '#', active: false },
  { name: 'Блог', path: '#', active: false }
];
