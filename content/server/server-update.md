Проект развивается очень быстро, обновления могут выходить часто, вплоть до нескольких раз в день. 
Обо всех важных или обязательных обновах можно узнать в телеге https://t.me/alcolytic

Процесс обновления повторяет установку и приводит в порядок все, что не так:

```
bash <(curl -Ss https://raw.githubusercontent.com/alcolytics/alco-bootstrap/master/bin/from-scratch)

cd /srv/alco/alco-bootstrap && ansible-playbook alcolytics.yml --connection=local
```
