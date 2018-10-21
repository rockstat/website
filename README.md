# Rockstat landing

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
