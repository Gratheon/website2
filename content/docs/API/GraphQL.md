---
hide_table_of_contents: true
title: 🎨 GraphQL API
order: 3
---
We use federated GraphQL as main flexible way to query and modify web-app data.

This API is most flexible, but it is also changing often and can introduce breaking changes.

You can explore the schema and run queries in the self-hosted Altair GraphQL IDE below. The query endpoint is https://graphql.gratheon.com/graphql, and API tokens can be sent as `Authorization: Bearer <token>` headers.

The embedded Altair editor opens with a real Gratheon web-app query for listing hive internals. It is based on the hive edit screen and reads the hive layout, boxes, frames, frame sides, vision detection status, and frame-side cell composition.

<iframe class="api-docs-iframe api-docs-iframe--graphql" title="Gratheon GraphQL Altair IDE" src="https://graphql.gratheon.com/altair/" width="100%" height="760" loading="lazy"></iframe>
