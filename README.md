# Rockstat landing

## Danger!

Доки уехали в другой репозиторий! Тут они будут в `.tmp/...` как суб репозиторий

Make symlinks
```
ln -s ../../.tmp/static/images/docs static/images/docs
ln -s ../.tmp/pages/docs pages/docs
```

## Работа с меню

Управление меню происходит в файле `data/docs.yml`.


## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`. 

## Запуск dev версии

### Установка NVM (node version manager) для node.js

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

### Установка node.js и yarn

```bash
nvm install 8

npm -g install yarn
```

### обновление зависимостей проекта

выполняется в папке с проектом

```bash
yarn
```

### Запуск dev версии

произоводится мониторинг измений и частичная пересборка

```bash
yarn start:dev
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
