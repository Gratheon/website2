---
status: complete
title: 👑 Live Queen Finder
layout: products
---

## Cel
Live Queen Finder pomaga pszczelarzom znaleźć matkę pszczelą podczas inspekcji ula za pomocą kamery w telefonie.

Otwórz aplikację Gratheon, skieruj kamerę na ramkę, a detektor zaznaczy prostokątem możliwe matki pszczele w trakcie inspekcji.

## Historia użytkownika
- Jako pszczelarz kontrolujący ul,
- chcę otrzymywać pomoc kamery w czasie rzeczywistym podczas szukania matki,
- aby znaleźć ją szybciej i spędzać mniej czasu nad każdą ramką.

## Najważniejsze korzyści
- **Gotowe do pracy w terenie**: działa w aplikacji Gratheon na telefonie komórkowym z dostępem do kamery.
- **Bez przesyłania zdjęć**: klatki z kamery są przetwarzane lokalnie w przeglądarce.
- **Dostępne w pakiecie Free**: funkcja jest dostępna w darmowym planie, ponieważ inferencja odbywa się na urządzeniu użytkownika.
- **Szybsze inspekcje**: pomaga skupić uwagę na potencjalnych wykryciach matki, nawet gdy porusza się po ramce.

## Jak używać
1. Otwórz [app.gratheon.com](https://app.gratheon.com/) na telefonie.
2. Przejdź do menu **Queens** → **Live detector**.
3. Zezwól przeglądarce na dostęp do kamery.
4. Przesuwaj kamerę spokojnie po plastrze i obserwuj ramkę detekcji.

Link bezpośredni: [app.gratheon.com/warehouse/queens/detect](https://app.gratheon.com/warehouse/queens/detect)

## Przegląd techniczny
Live Queen Finder używa modelu detekcji matki pszczelej YOLOv8 nano wyeksportowanego do formatu ONNX i uruchamianego w przeglądarce za pomocą ONNX Runtime Web. Inferencja nie zużywa serwerowych kredytów Gratheon do przetwarzania obrazów.

Aktualne metryki testowe:
- precision: `0.9727`
- recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

Repozytorium modelu: [github.com/Gratheon/models-queen-bee-detector](https://github.com/Gratheon/models-queen-bee-detector)

## Ograniczenia
- Wymaga nowoczesnej przeglądarki i dostępu do kamery.
- Szybkość zależy od telefonu, przeglądarki i warunków oświetleniowych.
- System może pominąć matkę albo dać wynik fałszywie dodatni, szczególnie przy rozmyciu, słabym fokusie, zatłoczonych ramkach albo częściowo zasłoniętej matce.
- Przed podjęciem decyzji dotyczących zarządzania matką zawsze potwierdź wynik wizualnie.

## Powiązane funkcje
Te linki pozostają obecnie po angielsku:
- [Zarządzanie matkami](/products/web_app/hobbyist-tier/queen-management/)
- [Detekcja matki](/products/web_app/hobbyist-tier/queen-detection/)

---
**Ostatnia aktualizacja**: 8 czerwca 2026
