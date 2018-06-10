# Установка счетчика на сайт

## Подготовка сниппета

```html
<script type="text/javascript">
  !function (w, d, st, rst, se, he) {
    if(w.rstat) return; rst = w.rstat = function () {
      var args = Array.prototype.slice.call(arguments);
      return rst.doCall ? rst.doCall.call(rst, args) : rst._q.push(args); };
    rst.push = rst; rst._l = !0; rst._sv = 3.0; rst._q = [];
    rst._jsl = function (src) {
      se = d.createElement(st); se.async = !0; se.src = src;
      he = d.getElementsByTagName(st)[0]; he.parentNode.insertBefore(se, he); };
    rst.attach = function(host){ rst._host = host; rst._jsl('https://'+rst._host+'/lib.js'); }
  }(window, document, 'script');
  // Configuration
  rstat('configure', {
    projectId: 1 // <<< придумайте номер сайта, если их несколько
  });
  rstat('page'); // <<< отправка просмотра страницы, убирается на SPA
  rstat.attach('tracker.rockstat.test') // <<< Подставьте домен, на котором расположен трекер
  //rstat('onReady', function(){
  //  console.log('rstat` ready callback! uid:', rstat('getUid'));
  //});
  //rstat('onEvent', function(name, data){
  //  console.log('rstat event callback:', name, data);
  //});
  //rstat('onServerMessage', 'sm', function(name, data){
  //  console.log('onServerMessage', name, data);
  //});
</script>
```

В коде вместо `TRACKER_DOMAIN` нужно подставить, домен на котором расположен трекер.  
Лучше всего установить код между `<head>` и `</head>` или сразу после `<body>`. Можно поставить через Google Tag Manager, тут есть свои плюсы, минусы и особенности, надо проверять.

**Доступные параметры**

| Property          |Type       |Default    |Description
|---------------------|---------|---------|--------------------------------------------------------------------------------------------------------------------------|
| projectId           | Number  | 1       | Произвольный ID сайта/проекта/чего-то еще                                                                                |
| sessionTimeout      | Number  | 1800    | Тайм-аут сессии: сколько времени с   последнего события должно пройти                                                    |
| lastCampaignExpires | Number  | 7776000 | Период, на который запоминаются   последние рекламные метки. Указывается в секундах.                                      |
| cookieDomain        | String  | auto    | Домен                                                                                                                    |
| trackActivity       | Boolean | true    | Флаг автоматического отслеживания   активности посетителей на сайте. Отслеживается движение мышью                        |
| trackClicks         | Boolean | true    | Автоматическое отслеживание   кликов. Обрабатывает все клики и автоматически классифицирует их на   внутренние и внешние |
| trackForms          | Boolean | true    | Автоматическое отслеживание   взаимодействий с формами. Генерирует события фокуса                                        |
| allowHTTP           | Boolean | false   | По дефолту работает только на   https. Этим параметром можете разрешить работу на http                                   |


## Через GTM



### Создание тега Rockstat

Создайте новый Пользовательский HTML тег, вставьте ваш код счетчика Rockstat.
В расширенных настройках поставьте "Приоритет активации тегов" равным 100.

![](/static/media/alcojs_setup/gtm_tag_creation.png)

В триггерах выберите All Pages / Все страницы
Жмем сохранить, указываем имя, например Rockstat

### События, отправляемые с сайта через dataLayer

Выбираем тип тега "Пользовательский HTML"
```javascript
<script type="text/javascript">
  var name = ({{category}} || '') + '::' + ({{action}} || '');
  var data = {};
  if({{label}}) data.label = {{label}};
  if({{value}}) data.value = {{value}};
  alco('event', name, data)
</script>
```

вместо category, action, label, value подставьте переменные, используемые у вас для передачи этих данных в GA.

Выбираем триггер, используемый для отправки пользовательских событий в Google (Universal) Analytics.

Жмем сохранить, указываем имя, например Custom Events to Rockstat

### События GA, размеченные через GTM

Вам необходимо найти все теги, созданные для отслеживания действий и передачи их в Google (Universal) Analytics, и для каждого их них в расширенных настройках включить активацию тега после. При выборе тега можно сразу создать пользовательский HTML тег, вызывающий событие Rockstat.

![](/static/media/alcojs_setup/activate_gtm_tag.png)

![](/static/media/alcojs_setup/choose_gtmtag.png)

Содержимое тега

```javascript
<script type="text/javascript">
  alco('event', 'CATEGORY::ACTION', {
    label: 'LABEL',
    value: 'VALUE'
  })
</script>
```

Вместо CATEGORY, ACTION, LABEL, VALUE подставьте соответствующие значения. Если Label или Value события отсутствуют, просто удалите соответствующую строку.
