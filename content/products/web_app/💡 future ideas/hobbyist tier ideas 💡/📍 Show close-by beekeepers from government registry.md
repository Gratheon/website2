This feature is very similar to [Apiary position sharing](https://www.notion.so/Apiary-position-sharing-d78e6d14915b49efbb8d8cba331d3542?pvs=21). But instead of using data of our registered users, we want to import and synchronize data from governmental registries, so that users do not need to go outside of the app but can still see relevant information

AC

- In apiary view, show layer of close-by beekeepers (and whatever information government registry has - amount of beehives?)
- In backend
    - create a microservices that periodically crawls country registry, deletes old entries and imports new ones
        - For Estonia - get data from PRIA or [mesi.ee](http://mesi.ee)