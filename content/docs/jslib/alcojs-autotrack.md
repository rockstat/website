# Автоматичексие события

## Старт сессии

Сессионные данные общие на все события, у сессии есть только название. Даже data нет

```json
{
  //...
  "name": "session"
  //...
  "session": {
    // подробнее в разделе общей структуры данных и разделе про сессии
  }
  //...
}
```

## Загрузка страницы

Просмотры страниц могут дополняться информацией о странице, вроде типа страницы или категории.

```json
{
  //...
  "name": "pageview",
  //...
  "data": {
    "category": "content page",
    "name": "delivery"
  }
  //...
  "perf": {
    // подробнее в разделе с общей структурой данных
  }
  //...
}
```

## Страница загружена

Содержит данные производительности сети и браузера, которые находятся в `perf` [общей структуры данных](alcojs-data-format)

```json
{
  //...
  "name": "Page loaded",
  //...
  "perf": {
    // подробнее в разделе с общей структурой данных
  }
  //...
}
```

## Выгрузка страницы

Вызывается при переходе на другую страницу или закрытии браузера/вкладки

```json
{
  //...
  "name": "Page unload",
  //...
  "perf": {
    // подробнее в разделе с общей структурой данных
  }
  //...
}
```

## Клики по ссылкам

```json
{
  //...
  "name": "Link click",
  //...
  "data": {
    "href": "https://oooooo....",
    "text": "Текст ссылки",
    // Ссылка уводит посетителя на другой сайт
    "outbound": true | false
  }
  //...
}
```

## Взаимодействие с полями формы

Три события с одинаковым набором параметров: `Field focus` каретка поставлена в поле ввода `Field change` в поле поменялись данные `Field blur` каретка покинула поле ввода


```json
{
  //...
  "name": "Field change",
  //...
  "data": {
    // Название события DOM.
    "event": "change",
    // element tag: html тэг элемента формы
    "etag": "input",
    // element type: атрибут type элемента формы
    "etype": "text",
    // element name: атрибут name элемента формы
    "ename": "delivery_address", // Название поля формы
    // element placeholder: атрибут placeholder (значение пока ничего не вписано)
    "eph": null,
    // element class: атрибут class элемента формы (css)
    "ecl": "select2-selection form-field",
    // element id: атрибут id элемента формы
    "eid": "",
    // form method: http метрод отправки формы
    "fmthd": "post",
    // form action: url, куда будет отправлена форма
    "fact": "/checkout/purchase",
    // form name: атрибут name элемента формы
    "fname": "order-form",
    // form class: атрибут class элемента формы (css)
    "fcls": "",
    // element id: атрибут id элемента формы
    "fid": "order-form",
  }
  //...
}
```

In case of form tag is absent

```json
{
  //...
  "name": "field_change",
  //...
  "data": {
    // Название события DOM.
    "event": "change",
    // element tag: html тэг элемента формы
    "etag": "input",
    // element type: атрибут type элемента формы
    "etype": "text",
    // element name: атрибут name элемента формы
    "ename": "delivery_address", // Название поля формы
    // element placeholder: атрибут placeholder (значение пока ничего не вписано)
    "eph": "",
    // element class: атрибут class элемента формы (css)
    "ecl": "select2-selection form-field",
    // element id: атрибут id элемента формы
    "eid": "",
    // if form not present
    "ferr": "Form element absent"
  }
  //...
}
```

Это одни из самых важных автоматических событий, по ним можно понимать, где произошел затык

## Отправка формы

```json
{
  //...
  "name": "Form submit",
  //...
  "data": {
    // DOM событие отправки формы
    "event": "submit",
    // адрес назначения формы
    "fact": "/cart",
    // form class: атрибут class элемента формы (css)
    "fcls": "cart-submit",
    // element id: атрибут id элемента формы
    "fid": "cart-submit",
    // form method: http метрод отправки формы
    "fmthd": "post",
    // form name: атрибут name элемента формы
    "fname": "cart"
  }
  //...
}
```
Еще один важный этап воронки

## Скролл / прокрутка

Событие прокрутки на определенную позицию страницы. Сами данные скрола находятся в `scroll` [общей структуры данных](alcojs-data-format) и прикладываются ко всем событиям связанными с действиями пользователя.

```json
{
  //...
  "name": "Scroll"
  //...
  "scroll": {
    // подробнее в разделе общей структуры данных
  }
  //...
}
```

## Активность: движение мышью и др...

Внутри Rockstat имеется счетчик браузерных событий, который отправляется на сервер через одинаковый интервал времени (по дефолту 5 секунд) и обнуляется. Если активности нет, то событие не отправляется, но добавляется единица к `iteration`.

```json
{
  //...
  "name": "Activity",
  //...
  "data": {
    // Номер итерации обработки активности
    "iteration": 65,
    // Номер итерации содержащей действия (другие 61 были без активности пользователя и не отправлялись)
    "active": 4,
    // Интервал отправки данных об активности, секунд
    "interval": 5,
    // Событий движения мыши
    "mousemove": 62,
    // Событий нажатия кнопки мыши
    "mousedown": 2,
    // Событий отпускания кнопки мыши
    "mouseup": 2,
    // Событий кликов
    "click": 2,
    // Событий прокрутки (именно на уровне мыши/трекпада)
    "wheel": 23,
    // Событий скролла станицы
    "scroll": 22
    // и другие
  }
  //...
}
```

Полный список отслеживаемых событий браузера:

`touchmove`, `touchstart`, `touchleave`, `touchenter`, `touchend`, `touchcancel`, `click`, `mouseup`, `mousedown`, `mousemove`, `mousewheel`, `mousewheel`, `wheel`, `scroll`, `keypress`, `keydown`, `keyup`, `resize`, `focus`, `blur`

Описание: https://developer.mozilla.org/en-US/docs/Web/Events
Если в списке отсутствует какое-то важное событие, напишите в сообществе и оно будет добавлено.


```json

```