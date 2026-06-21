---
title: Detekcja matek pszczelich
layout: research
order: 2
---

Wewnętrzny detektor obiektów do znajdowania **matek pszczelich wśród robotnic, trutni, pszczół z pyłkiem oraz treści ramki i tła**.

Repozytorium: https://github.com/Gratheon/models-queen-bee-detector

Obsługuje dwie ścieżki wdrożenia:

- inferencję w przeglądarce dla [Live Queen Finder](/products/web_app/free-tier/live-queen-finder/) przez ONNX + `onnxruntime-web`
- usługę inferencji HTTP dla eksperymentów i integracji po stronie serwera

Bazowa konfiguracja treningu:

- Model: `yolov8n.pt`
- Rozmiar obrazu: `512`
- Epoki: `60`
- Zbiór danych: połączone zbiory danych matek pszczelich z etykietami matek znormalizowanymi do klasy `queen` oraz obrazami bez matek zachowanymi jako próbki negatywne/tło

Metryki testowe (`weights/best.pt`):

- Precision: `0.9727`
- Recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Precision jest wysokie, ale recall nadal zostawia miejsce na pominięte matki, dlatego detekcje w użyciu terenowym powinny być potwierdzane wizualnie.

![Przykład detekcji Live Queen Finder](../../blog/img/live-queen-finder-detection.png)
