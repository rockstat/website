---
title: Меню Webhooks
---
# Webhooks

### Что такое Webhook / Postback?

По сути, это обычные HTTP запросы между серверами. В некоторых сервисах может называться иначе, вроде нотификации, но от этого суть не меняется.

Поддерживается куча различных сервисов

  * CRM системы
  * Коллтрекинги
  * CPA-трекеры: например Affise, HasOffers
  * Мобильные трекеры: например  Yandex Metrika, AppsFlyer
  * И множество других

### Выполнение запросов

HTTP запросы при помощи `GET` или `POST` методов

```
POST https://aclo.yourdomain.ru/webhook/{projectId}/{service}/{action}?a=b
```

```
GET https://aclo.yourdomain.ru/webhook/{projectId}/{service}/{action}?param1=pampara1&param2...
```

 * Принимаются параметры из строки запроса
 * JSON или UrlEncoded body

Параметры `{projectId}`, `{service}` и `{action}` просто придумываются, но с учетом, чтобы потом было удобно отличать эти данные. `{projectId}` должен быть числом.  `{service}` и `{action}` удобнее использовать текстовые

### Пример на curl

```bash
curl --request POST \
  --url https://stage.alcolytics.ru/webhook/99/calltracking/call \
  --data '{"phone":"79990109999"}'
```

