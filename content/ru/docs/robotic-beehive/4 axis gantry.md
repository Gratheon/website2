Это список идей, выработанных методом мозгового штурма, о том, как перемещать кадры при съемке фотографий и автоматизировать проверки:

![](docs/robotic-beehive/img/Screenshot%202023-11-15%20at%2022.04.35.png)

## Аппаратное решение

Копируем решение Юлии Торрас Амат в области биомедицинской инженерии.

![](docs/robotic-beehive/img/Screenshot%202023-11-17%20at%2000.16.26.png)

![](docs/robotic-beehive/img/Screenshot%202023-11-17%20at%2000.01.03.png)

![](docs/robotic-beehive/img/Screenshot%202023-11-17%20at%2000.20.08.png)

![](docs/robotic-beehive/img/Screenshot%202023-11-16%20at%2023.55.38.png)


- Размер
    - Внешний размер улья - высота 285 мм, длина 450 мм и ширина 506 мм.
    - Эстонский размер рамы - 448
    - х 279 мм
    - Итак, нам нужен линейный привод с **ходом не менее 500 мм**.
- Боковое позиционирование
- Как открывать/закрывать рамки, чтобы улей был герметичным?
- Как сделать так, чтобы механизм не ржавел и не загрязнялся органическими отходами?
- Какой механизм движения нам лучше, планетарный или линейный?

## Драйвер шагового двигателя

Драйверы шаговых двигателей — это электронные устройства, используемые для управления и привода шаговых двигателей. Они служат интерфейсом между системой управления (в данном случае контроллером) и шаговым двигателем, обеспечивая необходимые сигналы и мощность для точного управления его движением.

При выборе подходящего драйвера для системы это необходимо делать в соответствии с током, который необходимо подавать на шаговый двигатель для правильной работы. Как видно из таблицы 7, в рассмотренные системы моторизованного позиционирования XYZ включены шаговые двигатели Nema23 и Nema24, и эти конкретные модели требуют 2 и 2,8 А [66] соответственно. Кроме того, драйвер шагового двигателя позволяет контролировать количество импульсов, необходимых для выполнения полного оборота шагового двигателя, то есть позволяет точно настраивать точность движения двигателя. Чем больше импульсов необходимо для совершения оборота, тем выше точность. Это будет означать минимальное количество миллиметров, на которое система позиционирования может переместиться при выполнении траектории.

## Контроллер
<iframe width="100%" height="400" src="https://www.youtube.com/embed/idVcItHfGS4" title="TB6600 Stepper Motor Driver with Arduino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Соответствующая информация
(стр. 38)

- [Torras_Amat_Júlia_TFG.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/a8d93a70-2cb3-4900-8bda-b7cb55cd982d/Torras_Amat_Julia_TFG.pdf)
- [TFG-I-1682.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/6b3663fb-4bc2-4044-80e1-5d6ea956abef/7ed8d376-7b61-40a2-b0fa-97e4940552f0/TFG-I-1682.pdf)
- [**6-осевой робот-манипулятор Yahboom**](https://www.notion.so/Yahboom-6-Axis-Robot-Arm-1236c7765b2e4524a88fee8281b1bc33?pvs=21)

[PDF](/assets/img/docs/robotic-beehive/img/TFG-I-1682.pdf)

<object data="/assets/img/docs/robotic-beehive/img/TFG-I-1682.pdf" type="application/pdf" width="100%" height="800"></object>

[PDF](/assets/img/docs/robotic-beehive/img/Torras_Amat_J%C3%BAlia_TFG.pdf)

<object data="/assets/img/docs/robotic-beehive/img/Torras_Amat_J%C3%BAlia_TFG.pdf" type="application/pdf" width="100%" height="800"></object>



![](docs/robotic-beehive/img/Raspberry-Pi-Pinout-Random-Nerd-Tutorials.webp)

![](docs/robotic-beehive/img/Screenshot%202023-12-29%20at%2016.59.55.png)

![](docs/robotic-beehive/img/FE0B4TLKF6TQ13E.webp)