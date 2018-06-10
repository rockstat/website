---
parent: exploitation-data
slug: exploitation-data-jupyter
---
# Jupyter

Шикарный инструмент для анализа данных и машинного обучения, о нем можно рассказывать бесконечно. Установлен в составе сборки аналитического пакета Anaconda, уже есть все необходимое для работы с данными.

?> **Доступ в Jupyter** По адресу http://172.16.25.1:8888 после [подключения к VPN](connect-vpn)

## Блокноты

* [Notebook 1. Миграция на 2.0](/../ipbooks/move_to_new_tables.html ':ignore')
* [Notebook 2. Интеграция с crm]/(/../ipbooks/crm_integration.html ':ignore')

## Подключение к БД

![](/static/media/jupyter/main.png)


Подключение к базе данных

```python
import json
from simpleclickhouse.clickhose import ClickHouse
ch = ClickHouse('172.16.25.1', db='alco')
```

Чтение данных стримом

```python
# период
dt = date.today()
df = dt - timedelta(days=30)

query = '''
SELECT *
FROM events
WHERE date > '{df}' and date <= '{dt}'
LIMIT 100
FORMAT JSONEachRow
'''.format(df=df.strftime('%Y-%m-%d'), dt=dt.strftime('%Y-%m-%d'))

res = ch.select_stream(query)

for line in res.iter_lines():
    if line:
        decoded_line = line.decode('utf-8')
        row = json.loads(decoded_line)
        print(row)

```

Запись данных

```python
for i in range(1, 1000):
	self.storage.push('temp_tamble', {'num': i})

self.storage.flush('temp_tamble')
```

Коннектор автоматически сбрасывает данные в ClickHouse через каждые 50000 строк. В конце обработки необходимо вручную отправить остаток.
