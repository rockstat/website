export default [
  {
    "name": "Введение",
    "items": [
      {
        "name": "О платформе",
        "href": "/docs/intro/about",
        "enabled": true
      },
      {
        "name": "Быстрый старт",
        "href": "/docs/intro/getting-started",
        "enabled": true
      },
      {
        "name": "Лог разработки",
        "href": "/docs/what-s-new",
        "enabled": true
      }
    ],
    "enabled": true
  },
  {
    "name": "Архитектура",
    "items": [
      {
        "name": "Основные компоненты",
        "href": "/docs/architecture/overview",
        "enabled": true
      },
      {
        "name": "Обработка входящих запросов",
        "items": [
          {
            "name": "Жизненный цикл и адресация",
            "href": "/docs/architecture/request-lifecycle",
            "enabled": true
          },
          {
            "name": "Обогащение данных",
            "href": "/docs/architecture/enrichers"
          },
          {
            "name": "Обработчики",
            "href": "/docs/architecture/handlers"
          },
          {
            "name": "Слушатели",
            "href": "/docs/architecture/listeners"
          }
        ],
        "enabled": true
      },
      {
        "name": "Коммуникация сервисов",
        "href": "/docs/architecture/services-commnication"
      },
      {
        "name": "Сетевая инфраструктура",
        "href": "/docs/architecture/network"
      }
    ],
    "enabled": true
  },
  {
    "name": "Справочная информация",
    "items": [
      {
        "name": "Прием данных",
        "items": [
          {
            "name": "GET,POST (webhook/postback)",
            "href": "/docs/reference/collecting/webhooks",
            "enabled": true
          },
          {
            "name": "Pixel (1x1 gif)",
            "href": "/docs/reference/collecting/pixel",
            "enabled": true
          },
          {
            "name": "Redirect",
            "href": "/docs/reference/collecting/redirect"
          },
          {
            "name": "Websocket",
            "href": "/docs/reference/collecting/websocket"
          }
        ],
        "enabled": true
      },
      {
        "name": "Загрузка больших файлов",
        "href": "/docs/reference/collecting/large-files"
      },
      {
        "name": "Web-SDK",
        "items": [
          {
            "name": "Общее",
            "href": "/docs/reference/web-sdk/common"
          },
          {
            "name": "JavaScript api",
            "href": "/docs/reference/web-sdk/js-api"
          },
          {
            "name": "Авто-отслеживание",
            "href": "/docs/reference/web-sdk/auto-track"
          },
          {
            "name": "Транспорт",
            "href": "/docs/reference/web-sdk/transport"
          }
        ]
      },
      {
        "name": "Библиотеки для ClickHouse",
        "items": [
          {
            "name": "Синхронная SimpleCH",
            "href": "/docs/reference/a-simplech/simplech"
          },
          {
            "name": "Асинхронная ASimpleCH",
            "href": "/docs/reference/a-simplech/asimplech"
          }
        ]
      },
      {
        "name": "JSON-RPC 2.0 RST",
        "href": "/docs/reference/json-rpc-rst"
      },
      {
        "name": "Director API",
        "href": "/docs/reference/director-service/api"
      },
      {
        "name": "Front API",
        "href": "/docs/reference/font-service/api"
      },
      {
        "name": "Переменные окружения",
        "href": "/docs/reference/environment"
      },
      {
        "name": "API band framework",
        "href": "/docs/reference/band-framework/api"
      },
      {
        "name": "API rockme.ts",
        "href": "/docs/reference/rockme-framework/api"
      },
      {
        "name": "Схема хранилища ClickHouse",
        "href": "/docs/reference/clickhouse/schema"
      }
    ],
    "enabled": true
  },
  {
    "name": "Руководство пользователя",
    "items": [
      {
        "name": "Установка платформы",
        "href": "/docs/guides/setup/main",
        "enabled": true
      },
      {
        "name": "Отслеживание событий на сайте",
        "href": "/docs/guides/web-sdk/setup"
      },
      {
        "name": "Сбор данных других данных",
        "href": "/docs/guides/data-sources"
      },
      {
        "name": "Использование Панели управления",
        "href": "/docs/guides/dashboard/using"
      },
      {
        "name": "Работа с Jupyter",
        "href": "/docs/guides/jupyter/using"
      },
      {
        "name": "Работа с Theia",
        "href": "/docs/guides/theia/using"
      },
      {
        "name": "Мониторинг Netdata",
        "href": "/docs/guides/netdata/using"
      },
      {
        "name": "Работа с ClickHouse",
        "items": [
          {
            "name": "Основные принципы",
            "href": "/docs/guides/clickhouse/base"
          },
          {
            "name": "Модификация схемы",
            "href": "/docs/guides/clickhouse/schema-modify"
          }
        ]
      },
      {
        "name": "Подключение по VPN",
        "href": "/docs/guides/connect-vpn"
      }
    ],
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
            "href": "/docs/build-service-band/stucture"
          },
          {
            "name": "Коммуникация с другими сервисами",
            "href": "/docs/build-service-band/call-other-method"
          },
          {
            "name": "Создание обработчиков",
            "href": "/docs/build-service-band/handlers"
          },
          {
            "name": "Создание воркеров",
            "href": "/docs/build-service-band/workers"
          },
          {
            "name": "Создание обогатителей",
            "href": "/docs/build-service-band/enrichers"
          },
          {
            "name": "Работа с ClickHouse",
            "href": "/docs/build-service-band/clickhouse"
          },
          {
            "name": "Другие возможности",
            "href": "/docs/build-service-band/other-functions"
          }
        ]
      },
      {
        "name": "TypeScript + Rockme Framework",
        "items": [
          {
            "name": "Организация сервиса",
            "href": "/docs/build-service-rockme/stucture"
          }
        ]
      }
    ]
  },
  {
    "name": "Туториалы",
    "items": [
      {
        "name": "Построение истории отдельного пользователя",
        "href": "/docs/tutorials/user-history"
      },
      {
        "name": "Классические модели атрибуции",
        "href": "/docs/tutorials/attribution/classic"
      },
      {
        "name": "Вероятностное прохождение воронки",
        "href": "/docs/tutorials/attribution/funnel"
      },
      {
        "name": "Атрибуция по индексу активности",
        "href": "/docs/tutorials/attribution/activity"
      },
      {
        "name": "Воронки",
        "href": "/docs/tutorials/funnel"
      },
      {
        "name": "Реализация Cookie-Sync",
        "href": "/docs/tutorials/cookie-sync"
      },
      {
        "name": "Сегментация пользователей",
        "href": "/docs/tutorials/segmentation"
      }
    ]
  },
  {
    "name": "Отладка сайта",
    "items": [
      {
        "name": "Markdown typo",
        "href": "/docs/debug/markdown-typo",
        "enabled": true
      }
    ],
    "enabled": true
  }
]