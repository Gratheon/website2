## Контекст

Шершни, особенно азиатские, представляют серьёзную угрозу для пчелиной семьи. Без вмешательства человека семья может погибнуть.

## Цель

Создать AI-модель детекции шершней, наблюдающую за входом в улей, и оповещать пчеловода в таких случаях.

## Предлагаемые шаги

- использовать существующий датасет и/или модель, например из

[https://universe.roboflow.com/search?q=hornet](https://universe.roboflow.com/search?q=hornet)

- альтернативно - собрать датасет самостоятельно
- обучить модель

## Интеграция

- Запуск inference на 10-секундных mp4-фрагментах видео
- Возможность детекции шершней в реальном времени через веб-камеру, например как часть YOLO v8 с cv2

## Оповещения

- Отправка детекций в [Оповещения](../../web_app/flexible-tier/alerts.md)
- Возможность влиять на [Закрытие механизированного входа при атаке шершня](/products/robotic_beehive/ideas/🛑%20Close%20mechanized%20hive%20entrance%20in%20case%20of%20hornet%20attack.md)

## Полезные ссылки

Пример из японского университета:

[https://satoh.cs.uec.ac.jp/ja/research/bee/images/bee/hornet.mp4](https://satoh.cs.uec.ac.jp/ja/research/bee/images/bee/hornet.mp4)

[https://www.nature.com/articles/s42003-024-05979-z](https://www.nature.com/articles/s42003-024-05979-z)
