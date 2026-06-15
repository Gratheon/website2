Some of Gratheon resources can be publicly shared (and do not require explicit login by the viewer). For example, a beehive inspection view can be shared. 

For such cases, we support a special **Share Token** authentication. This token provides limited, **read-only** access based on predefined **scopes**. This token is included in the URL that is used for sharing.

### Passing token
When making requests using a share token, our app includes token from URL in in the `X-Share-Token` HTTP headers when making [GraphQL](GraphQL.md) requests:
```
X-Share-Token: <your_share_token>
```
### Scopes

Each share token has embedded scopes defining exactly which queries are allowed and for which specific resource IDs. For example, a token for sharing inspection `123` of hive `456` might have scopes like:
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

The `graphql-router` validates the `X-Share-Token` by calling the `validateShareToken` query on the `user-cycle` service. If the token is valid, the router **enforces** the embedded scopes by parsing the incoming GraphQL request. 

It checks if the requested operation (query) and its arguments match an entry in the token's `allowedQueries`. Requests attempting operations or arguments outside the defined scopes, or any mutations, will be denied directly by the router with a `403 Forbidden` error before reaching downstream services.