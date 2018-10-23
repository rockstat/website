/**
 * generated automatically / don't change manually!
 */

export default [
  {
    "name": "Введение",
    "items": [
      {
        "name": "О платформе",
        "href": "/docs/intro/about",
        "path": "0-0",
        "enabled": true
      },
      {
        "name": "Быстрый старт",
        "href": "/docs/intro/getting-started",
        "path": "0-1",
        "enabled": true
      },
      {
        "name": "Что нового",
        "href": "/docs/what-s-new",
        "path": "0-2",
        "enabled": true
      }
    ],
    "path": "0",
    "enabled": true
  },
  {
    "name": "Архитектура",
    "items": [
      {
        "name": "Основные компоненты",
        "href": "/docs/architecture/overview",
        "path": "1-0",
        "enabled": true
      },
      {
        "name": "Обработка входящих запросов",
        "items": [
          {
            "name": "Жизненный цикл и адресация",
            "href": "/docs/architecture/request-lifecycle",
            "path": "1-1-0",
            "enabled": true
          },
          {
            "name": "Обогащение данных",
            "href": "/docs/architecture/enrichers",
            "path": "1-1-1"
          },
          {
            "name": "Обработчики",
            "href": "/docs/architecture/handlers",
            "path": "1-1-2"
          },
          {
            "name": "Слушатели",
            "href": "/docs/architecture/listeners",
            "path": "1-1-3"
          }
        ],
        "path": "1-1",
        "hrefs": [
          "/docs/architecture/request-lifecycle",
          "/docs/architecture/enrichers",
          "/docs/architecture/handlers",
          "/docs/architecture/listeners"
        ],
        "enabled": true
      },
      {
        "name": "Коммуникация сервисов",
        "href": "/docs/architecture/services-commnication",
        "path": "1-2"
      },
      {
        "name": "Сетевая инфраструктура",
        "href": "/docs/architecture/network",
        "path": "1-3"
      }
    ],
    "path": "1",
    "enabled": true
  },
  {
    "name": "Справочная информация",
    "items": [
      {
        "name": "Web-SDK",
        "items": [
          {
            "name": "Устновка и настройка",
            "href": "/docs/reference/web-sdk/snippet-and-configuration",
            "path": "2-0-0",
            "enabled": true
          },
          {
            "name": "Базовая структура событий",
            "href": "/docs/reference/web-sdk/event-struct",
            "path": "2-0-1",
            "enabled": true
          },
          {
            "name": "Автоматичексие события",
            "href": "/docs/reference/web-sdk/auto-track",
            "path": "2-0-2",
            "enabled": true
          },
          {
            "name": "Процессинг сессий",
            "href": "/docs/reference/web-sdk/sessions",
            "path": "2-0-3",
            "enabled": true
          },
          {
            "name": "JavaScript API",
            "href": "/docs/reference/web-sdk/js-api",
            "path": "2-0-4",
            "enabled": true
          },
          {
            "name": "Используемый транспорт",
            "href": "/docs/reference/web-sdk/transport",
            "path": "2-0-5"
          }
        ],
        "path": "2-0",
        "hrefs": [
          "/docs/reference/web-sdk/snippet-and-configuration",
          "/docs/reference/web-sdk/event-struct",
          "/docs/reference/web-sdk/auto-track",
          "/docs/reference/web-sdk/sessions",
          "/docs/reference/web-sdk/js-api",
          "/docs/reference/web-sdk/transport"
        ],
        "enabled": true
      },
      {
        "name": "Каналы получения данных",
        "items": [
          {
            "name": "GET,POST (webhook/postback)",
            "href": "/docs/reference/collecting/webhooks",
            "path": "2-1-0",
            "enabled": true
          },
          {
            "name": "Pixel (1x1 gif)",
            "href": "/docs/reference/collecting/pixel",
            "path": "2-1-1",
            "enabled": true
          },
          {
            "name": "Redirect",
            "href": "/docs/reference/collecting/redirect",
            "path": "2-1-2"
          },
          {
            "name": "Websocket",
            "href": "/docs/reference/collecting/websocket",
            "path": "2-1-3"
          },
          {
            "name": "Загрузка больших файлов",
            "href": "/docs/reference/collecting/large-files",
            "path": "2-1-4"
          }
        ],
        "path": "2-1",
        "hrefs": [
          "/docs/reference/collecting/webhooks",
          "/docs/reference/collecting/pixel",
          "/docs/reference/collecting/redirect",
          "/docs/reference/collecting/websocket",
          "/docs/reference/collecting/large-files"
        ],
        "enabled": true
      },
      {
        "name": "Обзор конфигурации",
        "items": [
          {
            "name": "Переменные окружения",
            "href": "/docs/reference/environment",
            "path": "2-2-0"
          },
          {
            "name": "Карта путей",
            "href": "/docs/reference/directories",
            "path": "2-2-1"
          }
        ],
        "path": "2-2",
        "hrefs": [
          "/docs/reference/environment",
          "/docs/reference/directories"
        ]
      },
      {
        "name": "Simple ClickHouse",
        "items": [
          {
            "name": "Синхронная версия",
            "href": "/docs/reference/simplech/sync",
            "path": "2-3-0",
            "enabled": true
          },
          {
            "name": "Асинхронная ASimpleCH",
            "href": "/docs/reference/simplech/async",
            "path": "2-3-1"
          }
        ],
        "path": "2-3",
        "hrefs": [
          "/docs/reference/simplech/sync",
          "/docs/reference/simplech/async"
        ],
        "enabled": true
      },
      {
        "name": "JSON-RPC 2.0 RST",
        "href": "/docs/reference/json-rpc-rst",
        "path": "2-4"
      },
      {
        "name": "Director API",
        "href": "/docs/reference/director-service/api",
        "path": "2-5"
      },
      {
        "name": "Front API",
        "href": "/docs/reference/font-service/api",
        "path": "2-6"
      },
      {
        "name": "API band framework",
        "href": "/docs/reference/band-framework/api",
        "path": "2-7"
      },
      {
        "name": "API rockme.ts",
        "href": "/docs/reference/rockme-framework/api",
        "path": "2-8"
      },
      {
        "name": "Схема хранилища ClickHouse",
        "href": "/docs/reference/clickhouse/schema",
        "path": "2-9"
      }
    ],
    "path": "2",
    "enabled": true
  },
  {
    "name": "Руководство пользователя",
    "items": [
      {
        "name": "Установка платформы",
        "items": [
          {
            "name": "Подготовка сервера и dns",
            "href": "/docs/guides/setup/server_and_domain",
            "path": "3-0-0",
            "enabled": true
          },
          {
            "name": "Запуск инсталлятора",
            "href": "/docs/guides/setup/installation",
            "path": "3-0-1",
            "enabled": true
          }
        ],
        "path": "3-0",
        "hrefs": [
          "/docs/guides/setup/server_and_domain",
          "/docs/guides/setup/installation"
        ],
        "enabled": true
      },
      {
        "name": "Отслеживание событий на сайте",
        "href": "/docs/guides/web-sdk/setup",
        "path": "3-1"
      },
      {
        "name": "Получение данных из сервисов",
        "items": [
          {
            "name": "Yandex AppMetrika",
            "href": "/docs/guides/collecting/appmetrika",
            "path": "3-2-0",
            "enabled": true
          }
        ],
        "path": "3-2",
        "hrefs": [
          "/docs/guides/collecting/appmetrika"
        ],
        "enabled": true
      },
      {
        "name": "Использование Панели управления",
        "href": "/docs/guides/dashboard/using",
        "path": "3-3"
      },
      {
        "name": "Работа с Jupyter",
        "href": "/docs/guides/jupyter/using",
        "path": "3-4"
      },
      {
        "name": "Работа с Theia",
        "href": "/docs/guides/theia/using",
        "path": "3-5"
      },
      {
        "name": "Мониторинг Netdata",
        "href": "/docs/guides/netdata/using",
        "path": "3-6"
      },
      {
        "name": "Работа с ClickHouse",
        "items": [
          {
            "name": "Основные принципы",
            "href": "/docs/guides/clickhouse/base",
            "path": "3-7-0"
          },
          {
            "name": "Модификация схемы",
            "href": "/docs/guides/clickhouse/schema-modify",
            "path": "3-7-1"
          }
        ],
        "path": "3-7",
        "hrefs": [
          "/docs/guides/clickhouse/base",
          "/docs/guides/clickhouse/schema-modify"
        ]
      },
      {
        "name": "Подключение к VPN",
        "href": "/docs/guides/connect-vpn",
        "path": "3-8"
      },
      {
        "name": "Хитрости конфигурации",
        "href": "/docs/guides/configuration-tricks",
        "path": "3-9",
        "enabled": true
      }
    ],
    "path": "3",
    "enabled": true
  },
  {
    "name": "Создание сервисов",
    "items": [
      {
        "name": "Python + Band Framework",
        "items": [
          {
            "name": "Организация сервиса",
            "href": "/docs/build-service-band/stucture",
            "path": "4-0-0"
          },
          {
            "name": "Коммуникация с другими сервисами",
            "href": "/docs/build-service-band/call-other-method",
            "path": "4-0-1"
          },
          {
            "name": "Работа с ClickHouse",
            "href": "/docs/build-service-band/clickhouse",
            "path": "4-0-2"
          },
          {
            "name": "Другие возможности",
            "href": "/docs/build-service-band/other-functions",
            "path": "4-0-3"
          }
        ],
        "path": "4-0",
        "hrefs": [
          "/docs/build-service-band/stucture",
          "/docs/build-service-band/call-other-method",
          "/docs/build-service-band/clickhouse",
          "/docs/build-service-band/other-functions"
        ]
      },
      {
        "name": "TypeScript + Rockme Framework",
        "items": [
          {
            "name": "Организация сервиса",
            "href": "/docs/build-service-rockme/stucture",
            "path": "4-1-0"
          }
        ],
        "path": "4-1",
        "hrefs": [
          "/docs/build-service-rockme/stucture"
        ]
      }
    ],
    "path": "4"
  },
  {
    "name": "Туториалы",
    "items": [
      {
        "name": "Собственный формат событий",
        "href": "/docs/tutorials/custom-event-table",
        "path": "5-0",
        "enabled": true
      },
      {
        "name": "Построение истории отдельного пользователя",
        "href": "/docs/tutorials/user-history",
        "path": "5-1"
      },
      {
        "name": "Классические модели атрибуции",
        "href": "/docs/tutorials/attribution/classic",
        "path": "5-2"
      },
      {
        "name": "Вероятностное прохождение воронки",
        "href": "/docs/tutorials/attribution/funnel",
        "path": "5-3"
      },
      {
        "name": "Атрибуция по индексу активности",
        "href": "/docs/tutorials/attribution/activity",
        "path": "5-4"
      },
      {
        "name": "Воронки",
        "href": "/docs/tutorials/funnel",
        "path": "5-5"
      },
      {
        "name": "Реализация Cookie-Sync",
        "href": "/docs/tutorials/cookie-sync",
        "path": "5-6"
      },
      {
        "name": "Сегментация пользователей",
        "href": "/docs/tutorials/segmentation",
        "path": "5-7"
      }
    ],
    "path": "5",
    "enabled": true
  },
  {
    "name": "Отладка сайта",
    "items": [
      {
        "name": "Markdown typo",
        "href": "/docs/debug/markdown-typo",
        "path": "6-0",
        "enabled": true
      }
    ],
    "path": "6",
    "enabled": true
  }
]