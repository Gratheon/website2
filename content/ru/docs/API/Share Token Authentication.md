---
title: Share Token Authentication
order: 6
---
Некоторые ресурсы Gratheon можно публично расшарить (просмотрщику не нужен явный login). Например, можно расшарить просмотр inspection улья.

Для таких случаев мы поддерживаем специальную аутентификацию **Share Token**. Этот token предоставляет ограниченный доступ **read-only** на основе заранее заданных **scopes**. Token включается в URL, который используется для sharing.

### Передача token
При запросах с share token наше приложение добавляет token из URL в HTTP header `X-Share-Token` при выполнении запросов [GraphQL](GraphQL.md):
```
X-Share-Token: <your_share_token>
```
### Scopes

Каждый share token содержит встроенные scopes, которые точно определяют, какие queries разрешены и для каких конкретных resource IDs. Например, token для sharing inspection `123` улья `456` может иметь такие scopes:
```json
{
  "version": 1,
  "allowedQueries": [
	{
	  "queryName": "inspection",
	  "requiredArgs": { "id": "123" }
	},
	{
	  "queryName": "hive",
	  "requiredArgs": { "id": "456" }
	}
  ]
}
```

### Validation & Enforcement

`graphql-router` валидирует `X-Share-Token`, вызывая query `validateShareToken` в service `user-cycle`. Если token валиден, router **enforces** встроенные scopes, разбирая входящий GraphQL request.

Он проверяет, совпадает ли запрошенная operation (query) и её arguments с записью в `allowedQueries` token. Requests, которые пытаются выполнить operations или использовать arguments вне заданных scopes, а также любые mutations, будут отклонены напрямую router с ошибкой `403 Forbidden` до обращения к downstream services.
