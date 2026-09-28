---
title: Датасеты
description: Фото осмотров, видео Entrance Observer, метрики, треки и внешние датасеты пчёл из полевой работы Gratheon.
layout: research
order: 2
hideToc: true
heroImage: /assets/img/research/img/Screenshot 2025-09-10 at 09.11.23.png
---

<div class="dataset-catalog">
<p class="research-lead">Полевые данные с осмотров Gratheon и камер Entrance Observer. Файлы большие, поэтому архив лежит на Google Drive, а не на этом сайте.</p>
<div class="research-actions">
<a class="research-button research-button--primary" href="https://drive.google.com/drive/folders/105PmxDKFUR6NCPLHBkXGdkfcZwWf9ABI?usp=drive_link">Открыть архив Google Drive</a>
<a class="research-button" href="/ru/products/entrance_observer/">Продукт Entrance Observer</a>
</div>

<h2>Фото</h2>
<div class="dataset-feature">
<div>
<p><a href="https://drive.google.com/drive/folders/1exDMgrv8fPcysB4dLQIs-ru7QNW0UPxN?usp=drive_link">Фотографии осмотров</a> рамок улья. JPG, около 15 МП, без аннотаций. Годы: 2019, 2020, 2021, 2024.</p>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1exDMgrv8fPcysB4dLQIs-ru7QNW0UPxN?usp=drive_link">Скачать фото</a>
</div>
</div>
<figure>
<img src="/assets/img/research/img/IMG_4376.webp" alt="Пример неаннотированного фото рамки улья с осмотра">
<figcaption>Пример фото рамки, повторно сжатый в WebP для веба.</figcaption>
</figure>
</div>

<h2>Видео летка</h2>
<p>Съёмка летка с <a href="/ru/products/entrance_observer/">Entrance Observer</a>. Ролики 2025 года кодировались на edge-устройстве; в более поздние дни менялись зум и положение камеры.</p>

<h3>Кодирование 2025</h3>
<dl class="dataset-spec">
<div><dt>Контейнер</dt><dd>MP4 (isom)</dd></div>
<div><dt>Кодек</dt><dd>MPEG-4 Visual, yuv420p</dd></div>
<div><dt>Размер кадра</dt><dd>1280 &times; 720</dd></div>
<div><dt>Частота</dt><dd>15 fps</dd></div>
<div><dt>Типичный чанк</dt><dd>30 мин, 5-25 МБ</dd></div>
<div><dt>Имена файлов</dt><dd>метки UTC</dd></div>
</dl>
<details class="dataset-probe">
<summary>Сырой вывод ffmpeg для примерного клипа</summary>
<pre>Input #0
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf59.27.100
  Duration: 00:00:30.03, start: 0.000000, bitrate: 14927 kb/s
  Stream #0:0[0x1](und): Video: mpeg4 (Simple Profile) (mp4v / 0x7634706D), yuv420p, 1280x720 [SAR 1:1 DAR 16:9], 14926 kb/s, 15.02 fps, 15.02 tbr, 12016 tbn (default)</pre>
</details>

<h3>Тип 1 · прилётная доска 40 см</h3>
<p>Солнечные дни, в кадре около 40 см прилётной доски. У части чанков есть пара с суффиксом <code>_detect.mp4</code> с оверлеями YOLOv8.</p>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>4 сентября 2025</h4>
<ul>
<li>Парные оверлеи детекции на части чанков</li>
<li>5-25 МБ на MP4-чанк</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1BY7RrQdQI-6iaSzx4-CVES0kwVlpzX2u?usp=drive_link">Google Drive</a>
</div>
</article>
<article class="dataset-day">
<h4>5 сентября 2025</h4>
<ul>
<li>~8 ч (11:30-20:00 EEST)</li>
<li>Солнечно, ~25 ГБ суммарно</li>
<li>1280&times;720, 15 fps, чанки по 30 мин</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/12oV370f8HqrZsuXUU9mLWeT9NAs8HcO2?usp=drive_link">Google Drive</a>
<a href="https://drive.google.com/file/d/18b2aKTxrS1K9YpQciDybXwDlNYuEE4yh/view?usp=drive_link">Метрики JSONL</a>
<a href="https://drive.google.com/file/d/1J6I2KOeUa4dns7OmXidvc6Oqc0VF2goC/view?usp=drive_link">Треки пчёл JSONL</a>
</div>
</article>
<article class="dataset-day">
<h4>6 сентября 2025</h4>
<ul>
<li>~8 ч (08:00-15:36 и 19:35-20:35 EEST)</li>
<li>Солнечно</li>
<li>Характерный облёт около 13:20</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1TQxpUFSc13xWLE_0gA4BkzPv8amcFyc-?usp=drive_link">Google Drive</a>
<a href="https://drive.google.com/file/d/1oHRftj_zvbZXd8vKCcTIg9VRGoslf4vy/view?usp=drive_link">Метрики JSONL</a>
<a href="https://drive.google.com/file/d/1SibnVr5I8ifYLJlxiqiWBpNWbBxm7lEl/view?usp=drive_link">Треки пчёл JSONL</a>
</div>
</article>
</div>
<figure class="dataset-media">
<video controls playsinline preload="metadata" width="1280" height="720" aria-label="Пример записи прилётной доски Entrance Observer">
<source src="/assets/research/img/videos-at-entrance-example.mp4" type="video/mp4">
</video>
<figcaption>Пример клипа, перекодированный ffmpeg для веба. <a href="/assets/research/img/videos-at-entrance-example.mp4">Скачать MP4</a></figcaption>
</figure>

<h3>Тип 2 · прилётная доска 23 см</h3>
<p>Более крупный зум с 12:00 EEST 7 сентября. Те же 1280&times;720, 15 fps, чанки по 30 мин.</p>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>7 сентября 2025</h4>
<ul>
<li>~3 ч (12:00-15:05 EEST)</li>
<li>Солнце, облака и порывы ветра после 16:00</li>
<li>Прилётная доска ~23 см в ширину</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1E8p_d_rdb_Mq2IjoOyw4OVaWrs37xj2s?usp=drive_link">Google Drive</a>
<a href="https://drive.google.com/file/d/1vzIe7SRJP_jarai9jqNIVPac8l6efrQv/view?usp=drive_link">Метрики JSONL</a>
<a href="https://drive.google.com/file/d/1ij0A15NC2XDdUy3ghvZ6GYT_458uqzZn/view?usp=drive_link">Треки пчёл JSONL</a>
</div>
</article>
<article class="dataset-day">
<h4>8 сентября 2025</h4>
<ul>
<li>~3.5 ч пикового окна (13:52-17:33 EEST) с ориентационными облётами</li>
<li>Полный день ~8 ч также на YouTube</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1L25SnvC_IDGOZlkE_vWidIPIKZilKURE?usp=drive_link">Google Drive</a>
<a href="https://youtu.be/oG791JNb1aA">YouTube (8 ч)</a>
<a href="https://drive.google.com/file/d/1Uz0I-nzvRPiNe1QH-PK1XcPpCMrfV2NY/view?usp=drive_link">Метрики JSONL</a>
<a href="https://drive.google.com/file/d/1o9Z6c7-JunYptKTGUFV7aJqYdjkKKYUr/view?usp=drive_link">Треки пчёл JSONL</a>
</div>
</article>
<article class="dataset-day">
<h4>9 сентября 2025</h4>
<ul>
<li>~3 ч (12:00-15:00 EEST)</li>
<li>Папка Drive пока не опубликована</li>
</ul>
</article>
</div>
<div class="dataset-embed">
<iframe src="https://www.youtube.com/embed/oG791JNb1aA" title="Леток улья, 8 сентября 2025" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h3>Тип 3 · камера на втором корпусе</h3>
<p>Камера на втором корпусе улья, ближе к пчёлам. Изменён зум, стеклянные и алюминиевые границы убраны, вместо них камни.</p>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>10 сентября 2025</h4>
<ul>
<li>11:30-17:00 EEST</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1T9zKrfkNYAl4NHn6E1F8O6stDdiA544f?usp=drive_link">Google Drive</a>
<a href="https://www.youtube.com/watch?v=3O4oy4sBHtM">YouTube</a>
</div>
</article>
<article class="dataset-day">
<h4>11 сентября 2025</h4>
<ul>
<li>Дождливый день, очень мало активности</li>
<li>Папка Drive пока не опубликована</li>
</ul>
</article>
<article class="dataset-day">
<h4>13 сентября 2025</h4>
<ul>
<li>Дождливый день</li>
<li>Папка Drive пока не опубликована</li>
</ul>
</article>
<article class="dataset-day">
<h4>14 сентября 2025</h4>
<ul>
<li>Облачный день</li>
<li>Папка Drive пока не опубликована</li>
</ul>
</article>
</div>
<div class="dataset-embed">
<iframe src="https://www.youtube.com/embed/3O4oy4sBHtM" title="Леток улья, 10 сентября 2025" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h3>Более ранние сезоны</h3>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>19 мая 2024</h4>
<ul>
<li>640&times;480, чанки по 10 с</li>
<li>Белый фон, сильные тени</li>
<li>~1 ч суммарно, 1.1 ГБ</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1bD9uFYu0c2Y4NfKOqTwB-NGl1ZIwEyI1?usp=drive_link">Google Drive</a>
</div>
</article>
<article class="dataset-day">
<h4>18-20 июля 2023</h4>
<ul>
<li>Небольшой набор для проверки детекции нейросети</li>
<li>3840&times;2160, разные ракурсы и длительности</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1qBWlhLSE0Q4B7cw3E0reS8a0RNKdkSI8?usp=drive_link">Google Drive</a>
</div>
</article>
</div>

<h2>Внешние датасеты</h2>
<p>Публичные наборы, с которыми мы работаем или сравниваемся в экспериментах по пчёлам и варроа.</p>
<section class="research-source-list" aria-label="Внешние датасеты пчёл">
<article class="research-source-card research-source-card--primary">
<a class="research-source-card__title" href="https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb">
<img src="https://www.google.com/s2/favicons?domain=roboflow.com&amp;sz=64" alt="" loading="lazy">
<span>Roboflow: детекция медоносных пчёл</span>
</a>
<p class="research-card-meta">Текущие веса детектора</p>
<p>Веса YOLOv5, которые использует текущая модель детекции пчёл Gratheon.</p>
</article>
<article class="research-source-card">
<a class="research-source-card__title" href="https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-1">
<img src="https://www.google.com/s2/favicons?domain=kaggle.com&amp;sz=64" alt="" loading="lazy">
<span>Brno BUT bee dataset 1</span>
</a>
<p class="research-card-meta">Kaggle · команда Brno</p>
<p>Первый набор изображений Brno University of Technology. Также есть <a href="https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-2">dataset 2</a> и <a href="https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-hs">HS set</a>.</p>
</article>
<article class="research-source-card">
<a class="research-source-card__title" href="https://universe.roboflow.com/search?q=varroa">
<img src="https://www.google.com/s2/favicons?domain=roboflow.com&amp;sz=64" alt="" loading="lazy">
<span>Датасеты варроа на Roboflow</span>
</a>
<p class="research-card-meta">Аннотированные изображения</p>
<p>Поиск аннотированных датасетов варроа на Roboflow Universe.</p>
</article>
<article class="research-source-card">
<a class="research-source-card__title" href="https://www.inaturalist.org/observations?place_id=any&amp;taxon_id=54328">
<img src="https://www.google.com/s2/favicons?domain=inaturalist.org&amp;sz=64" alt="" loading="lazy">
<span>iNaturalist: медоносные пчёлы</span>
</a>
<p class="research-card-meta">Фото гражданских наблюдений</p>
<p>Глобальные наблюдения <em>Apis mellifera</em> и более широкий <a href="https://www.inaturalist.org/observations?place_id=any&amp;taxon_id=47219">набор Apidae</a>.</p>
</article>
</section>
</div>
