import type { NavLink } from '../menu';

const digitalGodWeb = 'https://digitalgod.be';
const RST_GH = 'https://github.com/rockstat';
const GH_TITLE = 'GitHub'

export const langsMenu: NavLink[] = [
  { name: 'ru', path: '/ru' },
  { name: 'en', path: '#', disabled: true }
];

export const headerMenu: NavLink[] = [
  { name: 'main', title: 'Интро', path: '/ru' },
  // { name: 'edu', title: 'Обучение', path: digitalGodWeb, newTab: true }, // path: '/edu' 
  { name: 'docs', title: 'Документация', path: '/docs' }
];

export const linksMenu: NavLink[] = [
  { name: GH_TITLE, path: RST_GH, newTab: true }
];

export const footerMenu: NavLink[] = [
  {
    name: 'Документация',
    path: '/docs',
    children: [
      { name: 'Быстрый старт', path: '/docs/intro/getting-started', active: true },
      { name: 'Архитектура', path: '/docs/architecture/overview', active: true },
      { name: 'популярные вопросы', path: '#', active: false },
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
      { name: GH_TITLE, path: RST_GH, active: true, newTab: true }
    ]
  }
];

