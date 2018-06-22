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
    path: 'https://www.facebook.com/rockstatX/'
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
    event: false,
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
    event: false,
    children: [
      {
        name: 'Facebook',
        path: 'https://www.facebook.com/',
        active: true,
        target: true
      },
      {
        name: 'Telegram',
        path: 'https://t.me/rockstats',
        active: true,
        target: true
      },
      {
        name: 'Github',
        path: 'https://github.com/rockstat',
        active: true,
        target: true
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
