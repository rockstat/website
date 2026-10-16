# Rockstat landing

## Contributing guide

1. Создаете бранч
2. Вносите правки
3. Присылаете pull-request
4. Ждете результатов сборки и фидбека
5. Администратор мерджит pull-request в основную ветку

## Работа с меню

Управление меню происходит в файле `data/docs.yml`. Пункты, для которых нет страницы, показываются неактивными.

## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `docs-drafts/template.mdx`.
Заголовок и описание задаются во frontmatter в начале файла:

```mdx
---
title: "Заголовок раздела"
description: "Коротко о чём страница"
---
```

Обёртка документации (меню, шапка, подвал) применяется автоматически ко всем страницам под `/docs`
(см. `components/doc-layout.js` и `pages/_app.js`). Общие фрагменты для вставки в несколько страниц
лежат в `components/mdx/` (`import Footer from '@app/components/mdx/setup-footer.mdx'`).
Черновики и тестовые страницы разметки лежат в `docs-drafts/` и в сборку не попадают.

## Отладка Mermaid

Проще всего воспользоваться визивиг https://mdp.tylingsoft.com/ 
или любым другим из "Downstream projects" https://mermaidjs.github.io/

### Стек

- Next.js 16 (Pages Router, Turbopack), React 19, TypeScript
- MDX 3 (`@next/mdx`) — документация и блог в `pages/**/*.mdx`
- PostCSS (mixins, variables, nested, `rem()`), CSS Modules (`*.module.css`), styled-jsx
- Node.js 24, pnpm

### Локальная разработка

```bash
pnpm install
pnpm dev          # http://localhost:3000 (сначала генерирует оглавление документации)
```

Сборка и статический экспорт (результат в `out/`):

```bash
pnpm build        # серверная сборка (.next)
pnpm build:export # статический экспорт в out/ (MAIN=1 — production robots.txt)
pnpm serve        # раздать out/ локально
pnpm lint         # eslint + stylelint
```

Вспомогательные команды (`./rockstat`):

- `node ./rockstat build-sitemap` — записать `public/sitemap.xml` и `public/robots.txt` (вызывается из `pnpm build`)

Статика (картинки, шрифты, favicon) лежит в `public/static` и доступна по `/static/...`.

### Особенности MDX

- Блоки `[[tip]]`, `[[info]]`, `[[success]]`, `[[alert]]`, `[[chapter]]` с телом в строках `| ...`
  обрабатывает плагин `lib/remark/custom-blocks.mjs`.
- Таблицы из CSV: `import rows from '../structs/file.csv'` и `<RenderTable data={rows} />`.
- Меню `data/docs.yml` импортируется напрямую (`import menu from '@app/data/docs.yml'`), лоадер
  `lib/loaders/docs-menu-loader.js` сам проверяет наличие страниц.
- Отступ в 4 пробела больше **не** является блоком кода — используйте ограждения ```.

### Деплой

Сайт деплоится на Vercel (`vercel.json`): пуш в `master` — production, остальные ветки и PR — preview.
Локально: `vercel` (preview) или `vercel --prod`; то же через `make deploy-preview` / `make deploy`.
Production-версия `robots.txt` подставляется автоматически при `VERCEL_ENV=production` (или `MAIN=1`).

CI (GitHub Actions, `.github/workflows/ci.yml`) на каждый пуш и PR запускает `pnpm lint` и `pnpm build`.

### Код

Прикладной код (`components/`, `lib/`, `pages/`) на TypeScript в режиме `strict`; проверка типов
входит в `next build`, отдельно: `npx tsc --noEmit`. Инструменты сборки (`next.config.js`,
`postcss.config.js`, `lib/loaders`, `lib/postcss`, `lib/remark`, `lib/recma`, `lib/docs-menu.js`, `rockstat`)
остаются на JavaScript: webpack/Turbopack и PostCSS подключают их напрямую через `require`.
Декларации для нестандартных импортов (`*.csv`, `*.yml`, `*.mdx`) лежат в `types/`.

### Docker

```bash
make build-dev && make start-dev   # dev-сервер в контейнере на :3000
docker build -t website .          # статическая сборка + nginx
```

## License

- Content (pages/** ) licensed under CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/legalcode
- Source code and others licensed under Apache-2.0

```
   Copyright 2018 Dmitry Rodin

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
