---
title: Detecção de abelhas-rainhas
layout: research
order: 2
---

Detector de objetos interno da Gratheon para encontrar **abelhas-rainhas entre operárias, zangões, abelhas com pólen e conteúdo do quadro/fundo**.

Repositório: https://github.com/Gratheon/models-queen-bee-detector

Ele oferece suporte a dois caminhos de implantação:

- inferência no navegador para o [Live Queen Finder](/about/products/web_app/free-tier/live-queen-finder/) via ONNX + `onnxruntime-web`
- serviço de inferência HTTP para experimentos e integrações do lado do servidor

Configuração-base de treinamento:

- Modelo: `yolov8n.pt`
- Tamanho da imagem: `512`
- Épocas: `60`
- Conjunto de dados: datasets de rainhas combinados, com rótulos de rainha normalizados para a classe `queen` e imagens sem rainha mantidas como amostras negativas/de fundo

Métricas de teste (`weights/best.pt`):

- Precisão: `0.9727`
- Recall: `0.8590`
- mAP50: `0.9187`
- mAP50-95: `0.6114`

A precisão é alta, mas o recall ainda deixa margem para rainhas não detectadas, portanto as detecções devem ser confirmadas visualmente em uso de campo.

![Exemplo de detecção do Live Queen Finder](/assets/img/blog/img/live-queen-finder-detection-preview.webp)
