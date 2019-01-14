# Rockstat landing

## Contributing guide

1. Создаете бранч
2. Вносите правки
3. Присылаете pull-request
4. Ждете результатов сборки и фидбека
5. Администратор мерджит pull-request в основную ветку

## Работа с меню

Управление меню происходит в файле `data/docs.yml`.

## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`. 

## Отладка Mermaid

Проще всего воспользоваться визивиг https://mdp.tylingsoft.com/ 
или любым другим из "Downstream projects" https://mermaidjs.github.io/

### local dev

Подготовка

```bash
yarn
yarn link
```

Запуск

```bash
yarn start:dev
# or
yarn build:export
yarn run serve
```

### Using docker


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
