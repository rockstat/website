# Подписка на события AlcoJS

## Успешная загрузка

```javascript
alco('onReady', function(){
  console.log('alco ready callback! uid:', alco('getUid'));
});

//> alco ready callback! uid: 4752253616879771366
```
Если трекер уже загружен, коллбек будет выполнен сразу

## Получение Alco User ID

```javascript
alco('getUid')
```

Но получить его можно только после загрузки трекера, поэтому следует оборачивать в обработчик загрузки

```javascript
alco('onReady', function(){
  console.log('alcoUID:',alco('getUid'));
});

// Или так

alco('onReady', function(){
  dataLayer.push({
    'alcoUserId': alco('getUid')
  });
});
```

```javascript

```

## Подписка на все события

Еще до того, как данные будут отправлены на сервер, они станут доступны на странице

```javascript
alco('onEvent', function(name, data){
  //... your code here
  console.log(name, data);
});
```


```javascript
alco('onEvent', function(name, data){
  // Ловим событие ошибки при заполнении адреса доставки
  if (name === 'Form invalid' && data.fname === 'delivery') {
    // Ждем 5 секунд
    setTimeout(function(){
      // Открываем окно чата, передаем пометку оператору
      SomeChat.openChat({info: 'Проблемы с заполнением формы доставки'});
      // Передаем событие открытия чата в Rockstat, чтобы можно было оценить эффективность
      aclo('event', 'Chat Opened', {reason: 'Invalid delivery details'})
    }), 5*1000);
  }
});
```
