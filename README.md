# Rockstat landing

## Подготовка системы

### Установка NVM (node version manager)

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

### next

#### id gen

Unsigned integer (0 to 18446744073709551615)
simpleflake ---->??? fuckflake

### Установка node.js

```bash
nvm install 8
```

Установка менеджера пакетов yarn

```bash
npm -g install yarn
```

## Запуск Dev версии

Выполняется в папке проекта. Обновим зависимости:

```bash
yarn
```

Запуск dev-сервера

```bash
yarn start:dev
```

## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`.

Управление меню происходит в файле `data/docs.yml`, но предварительно происходит. Чтобы данные из файла применились, нужно выполнить

```bash
yarn build:toc
```

## Предпросмотр результата

После коммита в master результат автоматически собирается и становится доступен на [https://preview.rstat.org](https://preview.rstat.org)
