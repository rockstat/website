# Rockstat landing

## Contributing guide

1. Создаете бранч
2. Вносите правки
3. Присылаете pull-request
4. Ждете результатов сборки и фидбека
5. Администратор мерджит pull-request в основную ветку

## Работа с меню

Управление меню происходит в файле `pages/docs/docs.yml`.

## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`. 

## Отладка Mermaid

Проще всего воспользоваться визивиг https://mdp.tylingsoft.com/ 
или любым другим из "Downstream projects" https://mermaidjs.github.io/

### Стек

- Next.js 16 (Pages Router, Turbopack), React 19
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
pnpm lint:css     # stylelint
```

Вспомогательные команды (`./rockstat`):

- `node ./rockstat build-toc` — собрать `lib/constants/docs.js` из `pages/docs/docs.yml`
- `node ./rockstat build-sitemap` — записать `public/sitemap.xml` и `public/robots.txt`

Статика (картинки, шрифты, favicon) лежит в `public/static` и доступна по `/static/...`.

### Особенности MDX

- Блоки `[[tip]]`, `[[info]]`, `[[success]]`, `[[alert]]`, `[[chapter]]` с телом в строках `| ...`
  обрабатывает плагин `lib/remark/custom-blocks.mjs`.
- Таблицы из CSV: `import rows from '../structs/file.csv'` и `<RenderTable data={rows} />`.
- Отступ в 4 пробела больше **не** является блоком кода — используйте ограждения ```.

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
