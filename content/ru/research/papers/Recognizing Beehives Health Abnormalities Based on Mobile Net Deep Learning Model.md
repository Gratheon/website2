---
hideNav: true
layout: research
hideToc: true
title: "Распознавание нарушений здоровья ульев на основе модели глубокого обучения MobileNet"
description: "Открытая статья 2023 года о модифицированной MobileNet-модели для классификации нарушений здоровья улья, включая Varroa, малого ульевого жука, муравьёв и отсутствие матки."
year: "2023"
authors:
- Mohamed Torky
- Aida A. Nasr
- Aboul Ella Hassanien
orgs:
- 🇪🇬 Egyptian Russian University
- 🇪🇬 Cairo University
- 🇪🇬 Tanta University
- 🇪🇬 Scientific Research Group in Egypt
topics:
- computer-vision
- varroa-health
- colony-health
productAreas:
- hive-scanner
- colony-health
paperType: journal
pdf: "/assets/research/papers/pdfs/recognizing-beehives-health-abnormalities-mobilenet.pdf"
doi: 10.1007/s44196-023-00311-9
---

[PDF](/assets/research/papers/pdfs/recognizing-beehives-health-abnormalities-mobilenet.pdf)

<object data="/assets/research/papers/pdfs/recognizing-beehives-health-abnormalities-mobilenet.pdf" type="application/pdf" width="100%" height="800"></object>

## Внешние ссылки

- DOI: https://doi.org/10.1007/s44196-023-00311-9
- [PDF издателя](https://link.springer.com/content/pdf/10.1007/s44196-023-00311-9.pdf)

## Аннотация

Мониторинг здоровья улья включает обнаружение клеща Varroa destructor, малого ульевого жука, проблем с муравьями и отсутствия матки. В статье предложена методика распознавания таких нарушений здоровья улья с помощью модифицированной модели MobileNet.

Авторы сравнили три алгоритма оптимизации - Adam, Nadam и SGD - на benchmark-наборе данных по ульям. Модель MobileNet с оптимизатором Adam показала заявленную тестовую точность 95% для целевых классов нарушений. Исследование рассматривает ИИ, компьютерное зрение и IoT как компоненты систем предупреждения, прогнозирования и распознавания состояния улья и поведения пчёл.

## Значимость для Gratheon

Для Gratheon это полезный ориентир по лёгким vision-моделям, которые классифицируют несколько типов проблем со здоровьем улья, а не только один вредитель или одно поведение. MobileNet важна для edge- и mobile-сценариев, где вычислительные ресурсы ограничены.

Категории нарушений хорошо соответствуют пользовательским предупреждениям в веб-приложении. При этом работу нужно рассматривать как benchmark, а не как готовое производственное решение: Gratheon должен отдельно проверить репрезентативность данных, определения классов и устойчивость модели на реальных пасеках.
