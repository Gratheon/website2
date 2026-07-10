---
hide_table_of_contents: true
title: 🎨 GraphQL API
order: 3
---
Мы используем federated GraphQL как основной гибкий способ запрашивать и изменять данные web-app.

Этот API самый гибкий, но он также часто меняется и может вносить breaking changes.

Вы можете изучить схему и выполнять запросы во встроенной Altair GraphQL IDE ниже. Endpoint запросов: https://graphql.gratheon.com/graphql, а API-токены можно передавать в заголовке `Authorization: Bearer <token>`.

Встроенный редактор Altair открывается с реальным запросом Gratheon web-app для получения внутренней структуры улья. Он основан на экране редактирования улья и читает планировку улья, корпуса, рамки, стороны рамок, статус vision-детекции и состав ячеек на стороне рамки.

```graphql
query ListHiveInternals($hiveId: ID!) {
  hive(id: $hiveId) {
    id
    hiveNumber
    hiveType
    notes
    beeCount
    inspectionCount
    boxes {
      id
      position
      type
      color
      holeCount
      roofStyle
      frames {
        id
        position
        type
        leftSide {
          id
          frameId
          frameSideFile {
            frameSideId
            queenDetected
            isQueenDetectionComplete
            isBeeDetectionComplete
            isCellsDetectionComplete
            detectedWorkerBeeCount
            detectedDroneCount
          }
          cells {
            broodPercent
            droneBroodPercent
            cappedBroodPercent
            eggsPercent
            nectarPercent
            pollenPercent
            honeyPercent
          }
        }
        rightSide {
          id
          frameId
          frameSideFile {
            frameSideId
            queenDetected
            isQueenDetectionComplete
            isBeeDetectionComplete
            isCellsDetectionComplete
            detectedWorkerBeeCount
            detectedDroneCount
          }
          cells {
            broodPercent
            droneBroodPercent
            cappedBroodPercent
            eggsPercent
            nectarPercent
            pollenPercent
            honeyPercent
          }
        }
      }
    }
  }
}
```

Переменные:

```json
{
  "hiveId": "replace-with-your-hive-id"
}
```

<iframe class="api-docs-iframe api-docs-iframe--graphql" title="Gratheon GraphQL Altair IDE" src="https://graphql.gratheon.com/altair/" width="100%" height="760" loading="lazy"></iframe>
