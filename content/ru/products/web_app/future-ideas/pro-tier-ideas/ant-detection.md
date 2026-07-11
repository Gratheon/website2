---
title: "🐜 Обнаружение муравьёв"
---

Пчелиная семья может полностью покинуть улей при сильном заражении муравьями, особенно если речь идёт об агрессивных инвазивных видах вроде **аргентинского муравья**. Поэтому обнаружение муравьёв важно для раннего предупреждения о слабости семьи или внешней угрозе.

<iframe width="433" height="244" src="https://www.youtube.com/embed/bHL_-70gLFY" title="What To Do About Ants In And On Your Beehive?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/yuaPan9XsO8" title="Ant War with Bees | Bees VS Green ants | Crazy green ants eat my bees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/LGYLT64wzGY" title="Ants Raiding or Moving into a Honey Bee Hive how to STOP/KILL Ants without chemicals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Обычные муравьи редко заходят внутрь сильной семьи. Чаще это происходит, когда улей заброшен, семья ослаблена или внутри остаются доступные запасы мёда.

Нужно больше исследований поведения муравьёв и пчёл, чтобы отделять обычную активность рядом с ульем от реального риска для семьи.

## Критерии приёмки

- Собрать [наборы данных](../../../../research/Datasets.md) по муравьям. Можно рассмотреть iNaturalist, но могут потребоваться разные виды муравьёв и разные условия съёмки.
- Создать или переиспользовать модель, которая обнаруживает муравьёв по:
  - фото. Предполагается, что муравьи находятся на рамках внутри улья и питаются остатками мёда. Фото может быть сделано вручную или получено из [роботизированного улья](../../../robotic_beehive/robotic_beehive.md) во время [полного осмотра улья](../../../robotic_beehive/todo/📸%20Full%20hive%20inspection.md);
  - видео. Предполагается, что [Entrance Observer](../../../entrance_observer/entrance_observer.md) установлен у летка, а муравьи проходят через поле зрения камеры.
- Опубликовать GitHub-репозиторий с моделью.
- По возможности предоставить HTTP-интерфейс для загрузки изображений и/или видео:
  - как пример можно использовать [server.py из models-bee-detector](https://github.com/Gratheon/models-bee-detector/blob/master/server.py).

## Бонус

- Интегрировать модель с image-splitter, который анализирует рамки: [github.com/Gratheon/image-splitter](https://github.com/Gratheon/image-splitter).
- Если муравьи обнаружены на рамках, отправлять пользователю предупреждение о том, что семья может быть слишком слабой или улей заражён - [уведомления](../../flexible-tier/alerts.md).
