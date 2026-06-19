---
title: Датасеты
layout: research
sidebar_position: 2
hide_table_of_contents: true
---

Собранные нами данные доступны через [Google Drive](https://drive.google.com/drive/folders/105PmxDKFUR6NCPLHBkXGdkfcZwWf9ABI?usp=drive_link), в основном из-за большого объёма данных.
Сюда входят:

## Фото
[Фотографии, сделанные вручную](https://drive.google.com/drive/folders/1exDMgrv8fPcysB4dLQIs-ru7QNW0UPxN?usp=drive_link) во время **осмотров** рамок улья (без аннотаций, JPG, ~15MP) за 2019, 2020, 2021 и 2024 годы. 

Пример фотографии (webp, повторно сжатой для веба):
![](/assets/img/research/img/IMG_4376.webp)

## Видео
[👁️‍🗨️ Entrance Observer](/about/products/entrance_observer/entrance-observer/) — видео 🎥 летка улья
![](/assets/img/research/img/Screenshot%202025-09-10%20at%2009.11.23-preview.webp)
### 2025

Видео кодировались на edge-устройстве следующим образом:
```
Input #0
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf59.27.100
  Duration: 00:00:30.03, start: 0.000000, bitrate: 14927 kb/s
  Stream #0:0[0x1](und): Video: mpeg4 (Simple Profile) (mp4v / 0x7634706D), yuv420p, 1280x720 [SAR 1:1 DAR 16:9], 14926 kb/s, 15.02 fps, 15.02 tbr, 12016 tbn (default)
```


#### Тип датасета 1
- [September 04](https://drive.google.com/drive/folders/1BY7RrQdQI-6iaSzx4-CVES0kwVlpzX2u?usp=drive_link). 
	- у некоторых чанков есть пары с суффиксом `_detect.mp4`, показывающие детекции модели yolov8.
	- 5-25mb per chunk. mp4
- [September 05](https://drive.google.com/drive/folders/12oV370f8HqrZsuXUU9mLWeT9NAs8HcO2?usp=drive_link) 
	- Длительность датасета ~8 ч (11:30 - 20:00 EEST)
	- Солнечная погода.
	- Зум на прилётной доске ~ 40 см по ширине
	- ~ 25 GB суммарно
	- 1280x720px. Чанки по 30 минут. 15 FPS. 5–25 MB на чанк. mp4
	- имена файлов заданы в UTC timestamps.
	- [метрики в формате jsonl](https://drive.google.com/file/d/18b2aKTxrS1K9YpQciDybXwDlNYuEE4yh/view?usp=drive_link)
	- [траектории пчёл в формате jsonl](https://drive.google.com/file/d/1J6I2KOeUa4dns7OmXidvc6Oqc0VF2goC/view?usp=drive_link)
- [September 6th](https://drive.google.com/drive/folders/1TQxpUFSc13xWLE_0gA4BkzPv8amcFyc-?usp=drive_link). Солнечная погода. 
	- Dataset duration ~8h (8:00-15:36, 19:35-20:35 EEST)
	- около 13:20 наблюдается характерный рисунок облёта
	- [metrics in jsonl](https://drive.google.com/file/d/1oHRftj_zvbZXd8vKCcTIg9VRGoslf4vy/view?usp=drive_link)
	- [bee tracks in jsonl](https://drive.google.com/file/d/1SibnVr5I8ifYLJlxiqiWBpNWbBxm7lEl/view?usp=drive_link)

Пример видео (ffmpeg, повторно сжатого для веба):

<object data="/assets/research/img/videos-at-entrance-example.mp4" type="video/mp4" width="640" height="360"></object>

[VIDEO](/assets/research/img/videos-at-entrance-example.mp4)


#### Тип датасета 2
- [September 7th](https://drive.google.com/drive/folders/1E8p_d_rdb_Mq2IjoOyw4OVaWrs37xj2s?usp=drive_link)
	- Длительность датасета ~ 3 ч (12:00–15:05 EEST)
	- 1280x720px. 30 min chunks. 15FPS.  
	- Солнечная погода с облаками и порывами ветра после 16:00
	- **Новый уровень зума** выставлен в 12:00 EEST на область прилётной доски (ширина 23 см). 
	- [metrics](https://drive.google.com/file/d/1vzIe7SRJP_jarai9jqNIVPac8l6efrQv/view?usp=drive_link)
	- [tracks](https://drive.google.com/file/d/1ij0A15NC2XDdUy3ghvZ6GYT_458uqzZn/view?usp=drive_link)
- [September 8th](https://drive.google.com/drive/folders/1L25SnvC_IDGOZlkE_vWidIPIKZilKURE?usp=drive_link)
	- Длительность датасета ~3.5 ч (13:52–17:33 EEST) в пиковое время с ориентационными облётами
	- Полная длительность (8 ч) доступна на [youtube](https://youtu.be/oG791JNb1aA)
	- [metrics](https://drive.google.com/file/d/1Uz0I-nzvRPiNe1QH-PK1XcPpCMrfV2NY/view?usp=drive_link)
	- [tracks](https://drive.google.com/file/d/1o9Z6c7-JunYptKTGUFV7aJqYdjkKKYUr/view?usp=drive_link)
- September 9th
	- Длительность датасета ~3 ч (12:00–15:00 EEST)


<iframe width="100%" height="400" src="https://www.youtube.com/embed/oG791JNb1aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Тип датасета 3
Камера установлена на **вторую** секцию улья (ближе), изменён зум, убраны стеклянные и алюминиевые границы, вместо них добавлены камни

- [September 10th](https://drive.google.com/drive/folders/1T9zKrfkNYAl4NHn6E1F8O6stDdiA544f?usp=drive_link)
	- 11:30 - 17:00
- September 11th
	- дождливый день, очень низкая активность
- September 13th
	- rainy day
- September 14th
	- облачный день

<iframe width="100%" height="400" src="https://www.youtube.com/embed/3O4oy4sBHtM" title="Beehive entrance, september 10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



### 2024
[2024, 19 мая](https://drive.google.com/drive/folders/1bD9uFYu0c2Y4NfKOqTwB-NGl1ZIwEyI1?usp=drive_link). 
	- разрешение 640x480, чанки по 10 сек
	- белый фон, много теней.
	- ~ 1 ч видео суммарно, 1.1 GB

### 2023
[18–20 июля 2023](https://drive.google.com/drive/folders/1qBWlhLSE0Q4B7cw3E0reS8a0RNKdkSI8?usp=drive_link) — небольшой набор видео для тестирования результатов детекции нейросети
- 3840 x 2160, разные ракурсы и длительность

## Внешние ресурсы, которые могут быть полезны

- Текущая модель детекции пчёл использует веса yolo v5 из [https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb](https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb)
- Датасеты команды из Brno: [https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-1](https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-1) [https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-2](https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-2) [https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-hs](https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-hs)
- датасеты roboflow (с аннотациями) [https://universe.roboflow.com/search?q=varroa](https://universe.roboflow.com/search?q=varroa)
- датасеты inaturalist [https://www.inaturalist.org/observations?place_id=any&taxon_id=54328](https://www.inaturalist.org/observations?place_id=any&taxon_id=54328) [https://www.inaturalist.org/observations?place_id=any&taxon_id=47219](https://www.inaturalist.org/observations?place_id=any&taxon_id=47219)
