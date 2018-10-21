# Rockstat landing

## Работа с меню

Управление меню происходит в файле `data/docs.yml`.

<<<<<<< HEAD
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
=======
>>>>>>> master

## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`. 


<<<<<<< HEAD
#### id gen
=======
```
yarn build:toc
```
>>>>>>> master


<<<<<<< HEAD
### Установка node.js

```bash
nvm install 8
```

Установка менеджера пакетов yarn

```bash
=======

## Запуск dev версии и сборка

### Установка NVM (node version manager) для node.js

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

### Установка node.js и yarn

```
nvm install 8

>>>>>>> master
npm -g install yarn
```

### обновление зависимостей проекта

выполняется в папке с проектом

```bash
yarn
```

<<<<<<< HEAD
Запуск dev-сервера
=======
### Запуск dev версии

произоводится мониторинг измений и частичная пересборка
>>>>>>> master

```bash
yarn start:dev
```

### Экспорт статики

<<<<<<< HEAD
Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`.

Управление меню происходит в файле `data/docs.yml`, но предварительно происходит. Чтобы данные из файла применились, нужно выполнить

```bash
yarn build:toc
=======
Основные версии сайта хостятся в виде статики

```
yarn build:export
>>>>>>> master
```

Предпросмотр статической версии

```
yarn start:serve
```

<<<<<<< HEAD
После коммита в master результат автоматически собирается и становится доступен на [https://preview.rstat.org](https://preview.rstat.org)
=======
>>>>>>> master
