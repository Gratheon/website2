# Detection of Varroa destructor Infestation of Honeybees Based on Segmentation and Object Detection Convolutional Neural Networks

**Year:** 2023  
**DOI:** 10.3390/agriengineering5040102  
**URL:** https://doi.org/10.3390/agriengineering5040102  
**Authors:** Mochen Liu, et al.  
**PDF:** [Detection of Varroa destructor Infestation of Honeybees Based on Segmentation and Object Detection Convolutional Neural Networks.pdf](pdfs/Detection of Varroa destructor Infestation of Honeybees Based on Segmentation and Object Detection Convolutional Neural Networks.pdf)

## Abstract
Varroa destructor infestation is a major factor leading to the global decline of honeybee populations. Monitoring the level of Varroa mite infestation in order to take timely control measures is crucial for the protection of bee colonies. Machine vision systems can achieve non-invasive Varroa mite detection on bee colonies, but it is challenged by two factors: the complex dynamic scenes of honeybees and small-scale and limited data on Varroa destructor. We design a convolutional neural network integrated with machine vision to solve these problems. To address the first challenge, we separate the image of the honeybee from its surroundings using a segmentation network, and the object-detection network YOLOX detects Varroa mites within the segmented regions. This collaboration between segmentation and object detection allows for more precise detection and reduces false positives. To handle the second challenge, we add a Coordinate Attention (CA) mechanism in YOLOX to extract a more discriminative representation of Varroa destructor and improve the confidence loss function to alleviate the problem of class imbalance. The experimental results in the bee farm showed that the evaluation metrics of our model are better than other models. Our network’s detection value for the percentage of honeybees infested with Varroa mites is 1.13%, which is the closest to the true value of 1.19% among all the detection values.

## Notes
- Topic: Computer vision, deep learning, YOLOX for Varroa mite detection on bees.
- Highlights using a segmentation network + YOLOX.
