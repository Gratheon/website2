## Languages

To have consistent experience across code repos and due to limitations of teams, we want to limit possible tech stack (at least for now) to these languages:

- Javascript (Typescript)
    - React / TSX for frontend
    - NodeJS (for low-load BE services)
- Go (for high-load BE services)
	- C/C++ - for embedded devices
- Python
    - for ML and data-science models. Ex. using
    - for early prototypes of a service where ease/speed of integration is important, can be copy-pasted. Ex. video-processing with opencv

## Storage

For Databases and persistance we use

- MySQL ← maybe we could switch to Postgres in the future, but atm lets stick to this
- Redis ← for caching & pub-sub
- SQLLite ← for edge devices if something needs to be stored for a longer time, but no willingness to mess with a dedicated service

## (Cloud) API limitations

For public API we rely on [graphql federation](https://www.apollographql.com/docs/federation/), so if you create a microservice, make sure that language and framework supports that.

GraphQL federation allows us to declare schema in a strictly typed format, while keeping services independent.

If you’re worried about standardization of GraphQL schema variations, like pagination standard or global ID pattern then use simple pagination first, complicate it later. For UUID

## Frontend

We use urql because

- we do not use apollo-client because its heavy in filesize
- we do not use Relay because its very opinionated on types, makes queries too dynamic with its fragments

## Edge Devices OS

But, you should not care about it that much, because you should write service as a **docker container**.

- Ubuntu 18 for [Jetson Nano](https://www.notion.so/Jetson-Nano-6500eadfbab64e7b8bd0d0896df30701?pvs=21) with NVidia GPU
- Ubuntu 20 for [Jetson Orin Nano](https://www.notion.so/Jetson-Orin-Nano-0432edfb44f748a6874c41ddefa7f69c?pvs=21) with NVidia GPU

## Edge devices API

Its not yet fully clear yet.

- Use **Protobuf &** **GRPC**. Mostly because you’re not dealing with serving external customers and efficiency is the most important issue
- Use REST API / graphql if service is a hybrid. For example if its a model that runs both on the edge and in the cloud.