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
    path: 'https://www.facebook.com/'
  },
  {
    name: 'Telegram',
    path: 'https://t.me/rockstats'
  },
  {
    name: 'Github',
    path: 'https://github.com/rockstat'
  }
]

export const headerMenu = [
  {
    name: 'edu',
    title: 'Обучение',
    path: '/edu'
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
    children: [
      {
        name: 'курс digital rockstar',
        path: 'https://digitalgod.be',
        active: true
      },
      {
        name: 'типовые задачи',
        path: '/training/type',
        active: false
      },
      {
        name: 'рекомендации',
        path: '/dock/recomendation',
        active: false
      }
    ]
  },
  {
    name: 'Сообщество',
    path: '/community',
    children: [
      {
        name: 'Facebook',
        path: 'https://www.facebook.com/',
        active: true
      },
      {
        name: 'Telegram',
        path: 'https://t.me/rockstats',
        active: true
      },
      {
        name: 'Github',
        path: 'https://github.com/rockstat',
        active: true
      }
    ]
  }
];

export const footerRightMenu = [
  {
    name: 'Личный кабинет',
    path: '/'
  },
  {
    name: 'Блог',
    path: '/'
  },
  {
    name: 'Premium support',
    path: '/'
  }
];
