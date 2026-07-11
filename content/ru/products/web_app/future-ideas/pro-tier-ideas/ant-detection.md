---
title: "🐜 Обнаружение муравьёв"
---

Семья может полностью покинуть улей при заражении **аргентинскими** муравьями, поэтому это важная задача для мониторинга.

<iframe width="433" height="244" src="https://www.youtube.com/embed/bHL_-70gLFY" title="What To Do About Ants In And On Your Beehive?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/yuaPan9XsO8" title="Ant War with Bees | Bees VS Green ants | Crazy green ants eat my bees" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="433" height="244" src="https://www.youtube.com/embed/LGYLT64wzGY" title="Ants Raiding or Moving into a Honey Bee Hive how to STOP/KILL Ants without chemicals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Обычные муравьи редко заходят внутрь улья. Обычно это происходит только если улей заброшен или пчелиная семья слишком слабая.

(Нужно больше исследований поведения муравьёв и пчёл.)

## Критерии приёмки

- Собрать [наборы данных](../../../../research/Datasets.md) по муравьям. Возможно, использовать iNaturalist. Могут потребоваться разные виды муравьёв.
- Создать или использовать существующую модель, которая может обнаруживать муравьёв на основе:
  - фото. Предполагается, что муравьи ползают по рамкам внутри улья и, вероятно, питаются остатками мёда. Фото может быть сделано вручную или, что вероятнее, получено из [роботизированного улья](../../../robotic_beehive/robotic_beehive.md) в рамках [полного осмотра улья](/products/robotic_beehive/todo/📸%20Full%20hive%20inspection/);
  - видео. Предполагается, что у входа работает [наблюдатель летка](../../../entrance_observer/entrance_observer.md), а муравьи проходят через его поле зрения.
- Опубликовать GitHub-репозиторий с моделью.
- В идеале модель должна предоставлять HTTP-интерфейс для загрузки изображений и/или видео:
  - как пример можно использовать [server.py из models-bee-detector](https://github.com/Gratheon/models-bee-detector/blob/master/server.py).

## Бонус

- Интегрировать модель с image-splitter, который анализирует рамки: [https://github.com/Gratheon/image-splitter](https://github.com/Gratheon/image-splitter).
- Когда муравьи будут обнаружены на рамках улья, нужно отправить пользователю оповещение о том, что семья слишком слабая или улей заражён - [Оповещения](../../flexible-tier/alerts.md).
