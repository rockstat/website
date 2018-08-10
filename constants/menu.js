const digitalGodWeb = 'https://digitalgod.be';

export const langsMenu = [
  {
    name: 'ru',
    path: '/ru'
  },
  {
    name: 'en',
    path: '/en'
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
]

export const headerMenu = [
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
]

export const footerMenu = [
  {
    name: 'Документация',
    path: '/docs',
    children: [
      {
        name: 'ахитектура',
        path: '/dock/arhitecture',
        active: false
      },
      {
        name: 'сбор данных',
        path: '/dock/get_data',
        active: true
      },
      {
        name: 'популярные вопросы',
        path: '/dock/populare_get',
        active: false
      },
      {
        name: 'микросервисы',
        path: '/dock/mikroservices',
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
