## Отправка событий

Вы самостоятельно придумываете название и список данных, которые хотите передать. Сразу после отправки, это будет доступно на сервере для обработки

```javascript
aclo('event', 'eventName', [{eventData}])
```


| Property          |Type       |Default    |Description
|-------------------|-----------|-----------|------------------
| eventName         | String*   |           | Произвольное название события, должно характеризовать что произошло
| eventData         | Object    | { }       | Произвольные данные события. Может быть любое количество параметров.


Примеры:

```javascript
aclo('event', 'Added to Cart', {
  id: '1231223', 
  name:'Шторка для ванны', 
  categoryName: 'Товары для дома',
  listing: 'best_seller',
});
```

```javascript
aclo('event', 'Popup Displayed', {
  type: 'Discount Offer',
  offer:'Personal_24h', 
  category: 'Нижнее белье для кошек'
});
```


```javascript
aclo('event', 'User Subscribed', {
  form:'Subscription', 
  formPostiton: 'Bottom'
});
```




## Отправка просмотра страницы

```javascript
aclo('page', [{eventData}])
```
По аналогии с обычными событиями, в **eventData** можно передавать любую доступную информацию, связанную с просмотром страницы, например, тип страницы, название категории сайта и тп. 

```javascript
aclo('page', {
  type: 'content',
  name: 'Контакты'
})
```

Страница товарной категории

```javascript
aclo('page', {
  type: 'category',
  id: '2342344',
  name: 'Товары для дома'
})
```

## Идентификация пользователя

```javascript
aclo('identify', ['userId'], [{traits}])
```

| Property          |Type       |Default    |Description
|-------------------|-----------|-----------|------------------
| userId            | String    |           | Идентификатор пользователя из вашей базы данных.
| traits            | Object    | { }       | Набор характеристик пользователя, вроде email, возраста, сегмента и тд

Пример идентификации

```javascript
aclo('identify', 'wusahshaet0Quae8oa', {
  email: 'user@example.com'
})
```
Или без userId
 
```javascript
aclo('identify', {
  age: '18',
  sex: 'male',
  segment: ['vip']
})
```

