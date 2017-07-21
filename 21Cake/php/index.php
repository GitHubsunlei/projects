<?php

	$DataList= '[{
            "goodsId": "1234",
            "img": "imgs/g1.jpg",
            "name": "Cappuccino In Mind",
            "describe": "新卡",
            "price": "398.00"
        }, {
            "goodsId": "1224",
            "img": "imgs/g2.jpg",
            "name": "Ice Cream Lon...",
            "describe": "桂圆冰淇淋蛋糕",
            "price": "198.00"
        }, {
            "goodsId": "1134",
            "img": "imgs/g3.jpg",
            "name": "Black and White Chocolate",
            "describe": " （撒粉生日）黑白巧克力慕斯",
            "price": "298.00"
        }, {
            "goodsId": "1424",
            "img": "imgs/g4.jpg",
            "name": "Café Mocha",
            "describe": "摩卡",
            "price": "398.00"
        }
              
            ]';

   

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  echo $DataList;
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
  echo $DataList;
}
