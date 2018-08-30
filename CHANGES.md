# Rockstat changes list

### bootstrap 3.1.0 / 15 aug 2018

- clickhouse column `channel` changed from enum to string. Only `events`, `webhooks`, `activity` tables updated automatically, others need to be updated. Look at `clickhouse_migrations/002-...`

### bootstrap 3.1.1 / 25 aug 2018

- main version switched to master.

### band xx

- Изменился базоывый образ у сервисов на питоне. Вмето rst/band-base-py будеи использоваться madiedinro/band-base.py
- Появился промежуточный образ графаны, при помощи которого можно вносить изменения в ее сборку

### band 27 aug 2018

- Вместо переменной CH_DSN, указывающей на ClickHouse Proxy теперь есть CHS_DSN, указывающая на ClickHouse Server и CHP_DSN ClickHouse Proxy
- Родительскиф образ для сервисов на Band Framework теперь rockstat/band-base-py (вместо rst/band-base-py)
