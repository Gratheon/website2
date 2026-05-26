with RAG

## Idea

This is a continuation of work done by [Beekeeping advice with LLM](https://www.notion.so/Beekeeping-advice-with-LLM-085f16137ed14781be25379238204037?pvs=21).

Next step of this feature is [Audio-interface (to talk with bees)](https://www.notion.so/Audio-interface-to-talk-with-bees-14ba260d671d4a05970b7b1279b89f09?pvs=21)

We want here to not only give advice based on hive state, but also allow user to do question-and-answers. For such querying we need to make LLM smarter by also building own knowledge base.

Knowledge base initially could be just a

- dataset of beekeeping books [need to collect available books though]

Over time we could build knowledge base from some internal, discovered data or patterns, like bee movements, sounds etc.

Which means we need to

- take knowledge base
- encode it sentense by sentense and pages as embeddings
- store embeddings in vector DB
- on query, do an embeddings similarity search, retrieve closest topics
- enrich context, pass to LLM, generate output

In terms of UX, we can make LLM act such that it would impersonate a bee colony