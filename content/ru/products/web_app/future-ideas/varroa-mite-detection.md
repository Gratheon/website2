---
title: "🦀 Распознавание клеща варроа"
---

## Зачем

Клещ варроа - главная угроза для пчелиных семей сегодня:

- питается личинками, куколками и взрослыми пчёлами;
- оставляет открытые раны;
- поглощает жировое тело пчелы, ослабляя их (иммунный ответ, запас энергии, детоксикация).

## Предлагаемое решение

- Наборы данных:
    - [https://universe.roboflow.com/varroa-double/v_test](https://universe.roboflow.com/varroa-double/v_test)
    - [https://universe.roboflow.com/beproj/varroa-mites-detection--test-set](https://universe.roboflow.com/beproj/varroa-mites-detection--test-set)
    - [https://universe.roboflow.com/varroa-virus-detection/varroa-mites-detector](https://universe.roboflow.com/varroa-virus-detection/varroa-mites-detector)
    - [https://universe.roboflow.com/beproj/varroa-mites-detection](https://universe.roboflow.com/beproj/varroa-mites-detection)
    - [https://universe.roboflow.com/myworkspace-8q0cl/bee-detector](https://universe.roboflow.com/myworkspace-8q0cl/bee-detector)
    - [https://universe.roboflow.com/varroa-virus-detection/varroa-mites-detector](https://universe.roboflow.com/varroa-virus-detection/varroa-mites-detector)
    - [https://universe.roboflow.com/yolov5-object-detection-on-honey-bees-u8kya/varroua-mite-detection-in-honey-bees](https://universe.roboflow.com/yolov5-object-detection-on-honey-bees-u8kya/varroua-mite-detection-in-honey-bees)
    - [https://universe.roboflow.com/beproj/varroa-mites-detection--train-set](https://universe.roboflow.com/beproj/varroa-mites-detection--train-set)

## Интеграция в приложение

- Подготовить данные. Для этого нужно вырезать области с пчёлами из исходной рамки - см. [Распознавание рабочих пчёл](../hobbyist-tier/worker-bee-detection.md).
- использовать AI-модель вроде YOLO, получить веса для детекции и подсчёта клещей на отдельных пчёлах;
- возвращать абсолютное число найденных клещей на изображении;
- добавить HTTP API к этой модели;
- интегрировать image-splitter с этой моделью - он управляет фотографиями рамок;
- сохранять результат в БД (потребуется миграция);
- показывать процент заражения клещами на рамку и на улей в веб-приложении;
- генерировать оповещение пчеловоду, если значение выше порога в течение некоторого периода (заблокировано другой задачей).

![](/about/img/varroa-1.png)

## Связанные возможные детекции

- распознавание вируса деформированных крыльев, который распространяется варроа;
- распознавание паразитического клещевого синдрома - незакрытые личинки при высоком заражении клещами;
- вирусы паралича (чёрные блестящие неподвижные пчёлы).

[https://github.com/Gratheon/image-splitter/assets/445122/c5b2954a-0239-4946-91e5-525f2c92ccff](https://github.com/Gratheon/image-splitter/assets/445122/c5b2954a-0239-4946-91e5-525f2c92ccff)

![](/about/img/varroa-2.png)
![](/about/img/varroa-3.png)

## Решение

[https://github.com/Gratheon/web-app/pull/70](https://github.com/Gratheon/web-app/pull/70)

[https://github.com/Gratheon/image-splitter/pull/17](https://github.com/Gratheon/image-splitter/pull/17)

Текущие проблемы:

- Roboflow слишком дорогой;
- слишком жёсткие лимиты бесплатного тарифа;
- предсказания плохо работают для фотографий рамок, даже если они нарезаны на части.
