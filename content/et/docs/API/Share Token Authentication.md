---
title: "Jagage märgi autentimist"
order: 6
---

Mõnda Gratheoni ressurssi saab avalikult jagada (ja need ei nõua vaataja selgesõnalist sisselogimist). Näiteks saab jagada mesipuu ülevaatuse vaadet. 

Sellistel juhtudel toetame spetsiaalset **Share Token** autentimist. See luba pakub piiratud **kirjutuskaitstud** juurdepääsu, mis põhineb eelmääratletud **ulatustel**. See tunnus sisaldub jagamiseks kasutatavas URL-is.

### Märgi edastamine
Kui esitate taotlusi jagamismärgiga, lisab meie rakendus `X-Share-Token` HTTP päistesse URL-i luba, kui esitate [GraphQL](GraphQL.md) taotlusi:
```
X-Share-Token: <your_share_token>
```
### Ulatused

Igal jagamismärgil on manustatud ulatused, mis määravad täpselt, millised päringud on lubatud ja milliste konkreetsete ressursi ID-de jaoks. Näiteks taru `456` kontrolli `123` jagamise märgil võivad olla järgmised ulatused:
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

### Valideerimine ja jõustamine

`graphql-router` kinnitab `X-Share-Token`, helistades teenuse `user-cycle` päringule `validateShareToken`. Kui luba on kehtiv, **jõustab ruuter** manustatud ulatused, sõeludes sissetuleva GraphQL päringu. 

See kontrollib, kas taotletud toiming (päring) ja selle argumendid vastavad märgi `allowedQueries` kirjele. Päringud, mis üritavad teha toiminguid või argumente väljaspool määratletud ulatust või mis tahes mutatsioone, lükkab ruuter enne allavooluteenusteni jõudmist otse tagasi veaga `403 Forbidden`.