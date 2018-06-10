---
parent: exploitation-data
slug: exploitation-data-grafana
---
# Grafana

?> **Доступ в Grafana** по адресу http://172.16.25.1:3000 после [подключения к VPN](connect-vpn). Данные для входа **admin**/**admin**


#№ Добавление ClickHouse data source в Grafana

Сводится к добавлению нового источника данных

![](/static/media/data_tools_grafana/add_data_source.png)

**Параметры подключения**

Name: AlcolyticsDB
Type: ClickHouse
URL: http://172.16.25.1:8123
Access: proxy
Basic Auth: да
Login/Password: alco
Add CORS flag to requests: да

![](/static/media/data_tools_grafana/data_source_settings.png)

После нажатия "Save & Test" вы должны увидеть сообщение об успешной проверке и добавлении нового источника данных

![](/static/media/data_tools_grafana/add_source_success.png)

## Создание Dashboard

Переходим в раздел дашбордов

![](/static/media/data_tools_grafana/dashboards.png)

Следуя предлагаемым действиям переходим к созданию своего первого дашборда

![](/static/media/data_tools_grafana/create_dashboard.png)

## Первый Graph виджет

В качестве тренировки создадим виджет, который разложит сессии по типу девайса: десктом/мобильный/etc. В интерфейсе конфигурации дашборда выбираем виджет Graph

![](/static/media/data_tools_grafana/create_graph_widget.png)

Попадаем в превью виджета, из которого можем перейти в его настройки

![](/static/media/data_tools_grafana/widget_setup.png)

Установите базу данных **alco** и таблицу **events** , затем перейдите к созданию запроса

![](/static/media/data_tools_grafana/create_request.png)

Первым делом в разделе "Metrics" укажем шаг сглаживания данных 5m (5 минут), этого вполне достаточно. Но при наличии достаточного объема данных, можете поиграться, изменяя в большую или меньшую сторону. Указываем запрос:

```sql
$columns(device_type, count() amount) FROM $table WHERE name = 'session'
```

Тут мы используем готовый макрос для построения запросов $columns и отбираем только события типа session

![](/static/media/data_tools_grafana/filter_session.png)

Переходим на вкладку General. В Title пишем "Device types"

![](/static/media/data_tools_grafana/device_types.png)

Переходим на вкладку Display и устанавливаем Null value = null as zero, затем выходим из режима управления виджетом

![](/static/media/data_tools_grafana/null_value.png)

Теперь можно сохранить дашборд нажатием CMD (CTRL) + S или кликнув на соответствующую иконку

![](/static/media/data_tools_grafana/save_dashboard.png)

## Создание Pie Chart

Наведите курсор в самую левую часть строки, откроется менюха, где выбираем Add Panel, затем Pie Chart.

![](/static/media/data_tools_grafana/add_panel.png)

Как и в предыдущем примере, переходим в интерфейс настроек виджета, первым делом указываем источник данных: база alco, таблица events, переходим к запросу.

```sql
SELECT
  1,
  groupArray((type, Events))
FROM (
  SELECT
    if(session_num = 1, 'New', 'Returning') as type,
    count() AS Events
  FROM $table
  WHERE
    $timeFilter
    AND name = 'session'
  GROUP BY type
  ORDER BY Events desc
)
```

Ставим Step = 1h (один час). Вот, что должно получиться:

![](/static/media/data_tools_grafana/set_step.png)

Устанавливаем имя, выходим из режима редактирования. Вот что получаем в итоге:

![](/static/media/data_tools_grafana/pie_chart_screenshot.png)

Не забываем сохраниться

## Базовый дашборд

Имеется конфигурация простенького дашборда, которую вы можете загрузить себе.
Импорт находится в меню поиска дашборда, [файл конфигурации](/media/grafana_base_dash.json ':ignore').


![](/static/media/data_tools_grafana/home_button.png)

## Полезные ссылки

- Сайт Grafana с кучей примеров https://grafana.com
- Дока Grafana http://docs.grafana.org/guides/basic_concepts
- Дока по использованию ClickHouse в Grafana https://grafana.com/plugins/vertamedia-clickhouse-datasource
