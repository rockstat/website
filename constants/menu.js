const digitalGodWeb = 'https://digitalgod.be';

export const langsMenu = [
  {
    name: 'ru',
    key: 'ru',
    path: '/ru'
  },
  {
    name: 'en',
    key: 'en',
    path: '/en',
    disabled: true
  }
];

export const headerMenu = [
  {
    name: 'main',
    title: 'Интро',
    path: '/ru'
  },
  {
    name: 'edu',
    title: 'Обучение',
    // path: '/edu'
    path: digitalGodWeb,
    newTab: true
  },
  {
    name: 'docs',
    title: 'Документация',
    path: '/docs'
  }
];

export const linksMenu = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/rockstatX/',
    newTab: true
  },
  {
    name: 'Telegram',
    path: 'https://t.me/rockstats',
    newTab: true
  },
  {
    name: 'Github',
    path: 'https://github.com/rockstat',
    newTab: true
  }
];

export const footerMenu = [
  {
    name: 'Документация',
    path: '/docs',
    children: [
      {
        name: 'ахитектура',
        page: 'docs',
        slug: 'arhitecture',
        path: '/docs/arhitecture',
        active: false
      },
      {
        name: 'сбор данных',
        page: 'docs',
        path: '/docs/get_data',
        active: true
      },
      {
        name: 'популярные вопросы',
        page: 'docs',
        path: '/docs/populare_get',
        active: false
      },
      {
        name: 'микросервисы',
        page: 'docs',
        path: '/docs/mikroservices',
        active: false
      }
    ]
  },
  {
    name: 'Обучение',
    path: '/edu',
    event: false,
    children: [
      {
        name: 'Курсы Digital God',
        path: digitalGodWeb,
        active: true,
        newTab: true
      },
      {
        name: 'Типовые решения',
        path: '/training/type',
        active: false,
        newTab: true
      },
      {
        name: 'Рекомендации',
        path: '/dock/recomendation',
        active: false,
        newTab: true
      }
    ]
  },
  {
    name: 'Сообщество',
    path: '/community',
    event: false,
    children: [
      {
        name: 'Facebook',
        path: 'https://www.facebook.com/',
        active: true,
        target: true,
        newTab: true
      },
      {
        name: 'Telegram',
        path: 'https://t.me/rockstats',
        active: true,
        target: true,
        newTab: true
      },
      {
        name: 'Github',
        path: 'https://github.com/rockstat',
        active: true,
        target: true,
        newTab: true
      }
    ]
  }
];

export const footerRightMenu = [
  {
    name: 'Личный кабинет',
    path: '/',
    active: false
  },
  {
    name: 'Блог',
    path: '/',
    active: false
  },
  {
    name: 'Premium support',
    path: '/',
    active: false
  }
];
