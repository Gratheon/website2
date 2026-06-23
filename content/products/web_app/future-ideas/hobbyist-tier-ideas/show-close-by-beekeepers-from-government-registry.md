---
title: "📍 Show close by beekeepers from government registry"
---

This feature is very similar to [Apiary position sharing](apiary-position-sharing.md). But instead of using data of our registered users, we want to import and synchronize data from governmental registries, so that users do not need to go outside of the app but can still see relevant information

AC

- In apiary view, show layer of close-by beekeepers (and whatever information government registry has - amount of beehives?)
- In backend
    - create a microservices that periodically crawls country registry, deletes old entries and imports new ones
        - For Estonia - get data from PRIA or [mesi.ee](http://mesi.ee)