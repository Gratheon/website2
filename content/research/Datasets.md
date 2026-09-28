---
title: Datasets
description: Inspection photos, Entrance Observer videos, metrics, tracks, and external bee datasets from Gratheon field work.
layout: research
order: 2
hideToc: true
heroImage: /assets/img/research/img/Screenshot 2025-09-10 at 09.11.23.png
---

<div class="dataset-catalog">
<p class="research-lead">Field data from Gratheon inspections and Entrance Observer cameras. Files are large, so the archive lives on Google Drive rather than on this site.</p>
<div class="research-actions">
<a class="research-button research-button--primary" href="https://drive.google.com/drive/folders/105PmxDKFUR6NCPLHBkXGdkfcZwWf9ABI?usp=drive_link">Open Google Drive archive</a>
<a class="research-button" href="/products/entrance_observer/">Entrance Observer product</a>
</div>

<h2>Photos</h2>
<div class="dataset-feature">
<div>
<p><a href="https://drive.google.com/drive/folders/1exDMgrv8fPcysB4dLQIs-ru7QNW0UPxN?usp=drive_link">Manual inspection photos</a> of beehive frames. JPG, about 15 MP, no annotations. Years: 2019, 2020, 2021, 2024.</p>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1exDMgrv8fPcysB4dLQIs-ru7QNW0UPxN?usp=drive_link">Download photos</a>
</div>
</div>
<figure>
<img src="/assets/img/research/img/IMG_4376.webp" alt="Example unannotated beehive frame photo from a hive inspection">
<figcaption>Example frame photo, re-compressed as WebP for the web.</figcaption>
</figure>
</div>

<h2>Entrance videos</h2>
<p>Hive-entrance footage from the <a href="/products/entrance_observer/">Entrance Observer</a>. 2025 clips were encoded on the edge device; later days change zoom and camera placement.</p>

<h3>2025 encoding</h3>
<dl class="dataset-spec">
<div><dt>Container</dt><dd>MP4 (isom)</dd></div>
<div><dt>Codec</dt><dd>MPEG-4 Visual, yuv420p</dd></div>
<div><dt>Frame size</dt><dd>1280 &times; 720</dd></div>
<div><dt>Frame rate</dt><dd>15 fps</dd></div>
<div><dt>Typical chunk</dt><dd>30 min, 5-25 MB</dd></div>
<div><dt>File names</dt><dd>UTC timestamps</dd></div>
</dl>
<details class="dataset-probe">
<summary>Raw ffmpeg probe from an example clip</summary>
<pre>Input #0
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2mp41
    encoder         : Lavf59.27.100
  Duration: 00:00:30.03, start: 0.000000, bitrate: 14927 kb/s
  Stream #0:0[0x1](und): Video: mpeg4 (Simple Profile) (mp4v / 0x7634706D), yuv420p, 1280x720 [SAR 1:1 DAR 16:9], 14926 kb/s, 15.02 fps, 15.02 tbr, 12016 tbn (default)</pre>
</details>

<h3>Type 1 · 40 cm landing board</h3>
<p>Sunny days, about 40 cm of landing board in frame. Some chunks include a pair with a <code>_detect.mp4</code> suffix showing YOLOv8 overlays.</p>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>4 September 2025</h4>
<ul>
<li>Paired detection overlays on some chunks</li>
<li>5-25 MB per MP4 chunk</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1BY7RrQdQI-6iaSzx4-CVES0kwVlpzX2u?usp=drive_link">Google Drive</a>
</div>
</article>
<article class="dataset-day">
<h4>5 September 2025</h4>
<ul>
<li>~8 h (11:30-20:00 EEST)</li>
<li>Sunny, ~25 GB total</li>
<li>1280&times;720, 15 fps, 30 min chunks</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/12oV370f8HqrZsuXUU9mLWeT9NAs8HcO2?usp=drive_link">Google Drive</a>
<a href="https://drive.google.com/file/d/18b2aKTxrS1K9YpQciDybXwDlNYuEE4yh/view?usp=drive_link">Metrics JSONL</a>
<a href="https://drive.google.com/file/d/1J6I2KOeUa4dns7OmXidvc6Oqc0VF2goC/view?usp=drive_link">Bee tracks JSONL</a>
</div>
</article>
<article class="dataset-day">
<h4>6 September 2025</h4>
<ul>
<li>~8 h (08:00-15:36 and 19:35-20:35 EEST)</li>
<li>Sunny</li>
<li>Orientation-flight pattern around 13:20</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1TQxpUFSc13xWLE_0gA4BkzPv8amcFyc-?usp=drive_link">Google Drive</a>
<a href="https://drive.google.com/file/d/1oHRftj_zvbZXd8vKCcTIg9VRGoslf4vy/view?usp=drive_link">Metrics JSONL</a>
<a href="https://drive.google.com/file/d/1SibnVr5I8ifYLJlxiqiWBpNWbBxm7lEl/view?usp=drive_link">Bee tracks JSONL</a>
</div>
</article>
</div>
<figure class="dataset-media">
<video controls playsinline preload="metadata" width="1280" height="720" aria-label="Example Entrance Observer landing-board clip">
<source src="/assets/research/img/videos-at-entrance-example.mp4" type="video/mp4">
</video>
<figcaption>Example clip, re-encoded with ffmpeg for the web. <a href="/assets/research/img/videos-at-entrance-example.mp4">Download MP4</a></figcaption>
</figure>

<h3>Type 2 · 23 cm landing board</h3>
<p>Tighter zoom from 12:00 EEST on 7 September. Same 1280&times;720, 15 fps, 30 min chunks.</p>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>7 September 2025</h4>
<ul>
<li>~3 h (12:00-15:05 EEST)</li>
<li>Sunny with clouds and gusts after 16:00</li>
<li>Landing board ~23 cm wide</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1E8p_d_rdb_Mq2IjoOyw4OVaWrs37xj2s?usp=drive_link">Google Drive</a>
<a href="https://drive.google.com/file/d/1vzIe7SRJP_jarai9jqNIVPac8l6efrQv/view?usp=drive_link">Metrics JSONL</a>
<a href="https://drive.google.com/file/d/1ij0A15NC2XDdUy3ghvZ6GYT_458uqzZn/view?usp=drive_link">Bee tracks JSONL</a>
</div>
</article>
<article class="dataset-day">
<h4>8 September 2025</h4>
<ul>
<li>~3.5 h peak window (13:52-17:33 EEST) with orientation flights</li>
<li>Full ~8 h day also on YouTube</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1L25SnvC_IDGOZlkE_vWidIPIKZilKURE?usp=drive_link">Google Drive</a>
<a href="https://youtu.be/oG791JNb1aA">YouTube (8 h)</a>
<a href="https://drive.google.com/file/d/1Uz0I-nzvRPiNe1QH-PK1XcPpCMrfV2NY/view?usp=drive_link">Metrics JSONL</a>
<a href="https://drive.google.com/file/d/1o9Z6c7-JunYptKTGUFV7aJqYdjkKKYUr/view?usp=drive_link">Bee tracks JSONL</a>
</div>
</article>
<article class="dataset-day">
<h4>9 September 2025</h4>
<ul>
<li>~3 h (12:00-15:00 EEST)</li>
<li>No Drive folder published yet</li>
</ul>
</article>
</div>
<div class="dataset-embed">
<iframe src="https://www.youtube.com/embed/oG791JNb1aA" title="Beehive entrance, 8 September 2025" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h3>Type 3 · closer second-box camera</h3>
<p>Camera on the second hive box, closer to the bees. Zoom changed; glass and aluminium boundaries removed and replaced with stones.</p>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>10 September 2025</h4>
<ul>
<li>11:30-17:00 EEST</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1T9zKrfkNYAl4NHn6E1F8O6stDdiA544f?usp=drive_link">Google Drive</a>
<a href="https://www.youtube.com/watch?v=3O4oy4sBHtM">YouTube</a>
</div>
</article>
<article class="dataset-day">
<h4>11 September 2025</h4>
<ul>
<li>Rainy day, very little activity</li>
<li>No Drive folder published yet</li>
</ul>
</article>
<article class="dataset-day">
<h4>13 September 2025</h4>
<ul>
<li>Rainy day</li>
<li>No Drive folder published yet</li>
</ul>
</article>
<article class="dataset-day">
<h4>14 September 2025</h4>
<ul>
<li>Cloudy day</li>
<li>No Drive folder published yet</li>
</ul>
</article>
</div>
<div class="dataset-embed">
<iframe src="https://www.youtube.com/embed/3O4oy4sBHtM" title="Beehive entrance, 10 September 2025" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h3>Earlier seasons</h3>
<div class="dataset-day-grid">
<article class="dataset-day">
<h4>19 May 2024</h4>
<ul>
<li>640&times;480, 10 s chunks</li>
<li>White background, strong shadows</li>
<li>~1 h total, 1.1 GB</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1bD9uFYu0c2Y4NfKOqTwB-NGl1ZIwEyI1?usp=drive_link">Google Drive</a>
</div>
</article>
<article class="dataset-day">
<h4>18-20 July 2023</h4>
<ul>
<li>Small test set for neural-network detection</li>
<li>3840&times;2160, mixed camera positions and lengths</li>
</ul>
<div class="dataset-links">
<a href="https://drive.google.com/drive/folders/1qBWlhLSE0Q4B7cw3E0reS8a0RNKdkSI8?usp=drive_link">Google Drive</a>
</div>
</article>
</div>

<h2 id="external-datasets">External datasets</h2>
<p>Public sets we use or compare against for bee and varroa experiments.</p>
<section class="research-source-list" aria-label="External bee datasets">
<article class="research-source-card research-source-card--primary">
<a class="research-source-card__title" href="https://universe.roboflow.com/matt-nudi/honey-bee-detection-model-zgjnb">
<img src="https://www.google.com/s2/favicons?domain=roboflow.com&amp;sz=64" alt="" loading="lazy">
<span>Roboflow honey bee detection</span>
</a>
<p class="research-card-meta">Current bee detector weights</p>
<p>YOLOv5 weights used by the current Gratheon bee detection model.</p>
</article>
<article class="research-source-card">
<a class="research-source-card__title" href="https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-1">
<img src="https://www.google.com/s2/favicons?domain=kaggle.com&amp;sz=64" alt="" loading="lazy">
<span>Brno BUT bee dataset 1</span>
</a>
<p class="research-card-meta">Kaggle · Brno team</p>
<p>First Brno University of Technology bee imagery set. Also see <a href="https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-2">dataset 2</a> and the <a href="https://www.kaggle.com/datasets/imonbilk/bee-dataset-but-hs">HS set</a>.</p>
</article>
<article class="research-source-card">
<a class="research-source-card__title" href="https://universe.roboflow.com/search?q=varroa">
<img src="https://www.google.com/s2/favicons?domain=roboflow.com&amp;sz=64" alt="" loading="lazy">
<span>Roboflow varroa datasets</span>
</a>
<p class="research-card-meta">Annotated imagery</p>
<p>Searchable annotated varroa datasets on Roboflow Universe.</p>
</article>
<article class="research-source-card">
<a class="research-source-card__title" href="https://www.inaturalist.org/observations?place_id=any&amp;taxon_id=54328">
<img src="https://www.google.com/s2/favicons?domain=inaturalist.org&amp;sz=64" alt="" loading="lazy">
<span>iNaturalist honey bees</span>
</a>
<p class="research-card-meta">Citizen-science photos</p>
<p>Global <em>Apis mellifera</em> observations, plus a broader <a href="https://www.inaturalist.org/observations?place_id=any&amp;taxon_id=47219">Apidae set</a>.</p>
</article>
</section>
</div>
