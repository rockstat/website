# Rockstat landing

## Работа с меню

Управление меню происходит в файле `data/docs.yml`.


## Добавление страниц документации

Документация расположена в `pages/docs`. Новую страницу можно создать, скопировав `template.mdx`. 


```
yarn build:toc
```



## Запуск dev версии и сборка

### Установка NVM (node version manager) для node.js

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

### Установка node.js и yarn

```
nvm install 8

npm -g install yarn
```

### обновление зависимостей проекта

выполняется в папке с проектом

```
yarn
```

### Запуск dev версии

произоводится мониторинг измений и частичная пересборка

```
yarn start:dev
```

### Экспорт статики

Основные версии сайта хостятся в виде статики

```
yarn build:export
```

Предпросмотр статической версии

```
yarn start:serve
```

