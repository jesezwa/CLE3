<?php
/**
 * @return array
 */
function getProducts()
{
    return [
        [
            "id" => 1,
            "name" => "Water",
            "image" => "https://drinkdelivery.nl/wp-content/uploads/2016/07/Spa-Reine-mineraalwater-1.png",
        ],
        [
            "id" => 2,
            "name" => "Appelsap",
            "image" => "https://fivestartrading-holland.eu/wp-content/uploads/2023/08/Appelsientje-Goudappeltje-330ML.png",
        ],
        [
            "id" => 3,
            "name" => "Toilet papier",
            "image" => "https://www.jumbo.com/dam-images/fit-in/720x720/Products/29092023_1695996275284_1695996288040_5029053583273_9.png"
        ],
        [
            "id" => 4,
            "name" => "Shampoo",
            "image" => "https://www.pngall.com/wp-content/uploads/4/Shampoo-PNG-Photo.png"
        ],
        [
            "id" => 5,
            "name" => "Rijst",
            "image" =>  "https://images.ctfassets.net/s0lodsnpsezb/274034_M/9155d5fc24812c6739502631a1a2385c/274034.png"
        ],
        [
            "id" => 6,
            "name" => "M&M's",
            "image" =>  "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjgzNTc3OWNmNWU1YTAyNmE4OWM4NmNjZjg5NTZlNDk3Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=3edb320b6bcc7b96ae774c9a6de923eca80cbc8fa8fe70725226a963d9332310"
        ],
        [
            "id" => 7,
            "name" => "Koekjes",
            "image" =>  "https://www.verkade.nl/assets/Maria_3D560x280.png"
        ],
        [
            "id" => 8,
            "name" => "Schoonmaakmiddel",
            "image" =>  "https://beeldbank.prepublisher.com/pictures/PP/VNK/1/VNKK8131.png"
        ],
        [
            "id" => 9,
            "name" => "Luiers",
            "image" =>  "https://images.ctfassets.net/q4tov2kgy425/1m7tpGDigQOUhUgjht2B1x/5313c3f4840f5ed4d8e783dafeace127/1027_58_Pampers_NL_PPTaped_PDPUpdate_MAR23_Pack_200x200.png"
        ],
        [
            "id" => 10,
            "name" => "Bananen",
            "image" =>  "https://static.vecteezy.com/system/resources/previews/015/100/112/non_2x/bunch-of-bananas-free-png.png"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getProductDetails($id)
{
    $tags = [
        1 => [
            "productName" => "Water",
            "image" => "https://drinkdelivery.nl/wp-content/uploads/2016/07/Spa-Reine-mineraalwater-1.png"
        ],
        2 => [
            "productName" => "Appelsap",
            "image" => "https://fivestartrading-holland.eu/wp-content/uploads/2023/08/Appelsientje-Goudappeltje-330ML.png",
        ],
        3 => [
            "productName" => "Toilet papier",
            "image" => "https://www.jumbo.com/dam-images/fit-in/720x720/Products/29092023_1695996275284_1695996288040_5029053583273_9.png"
        ],
        4 => [
            "productName" => "Shampoo",
            "image" => "https://www.pngall.com/wp-content/uploads/4/Shampoo-PNG-Photo.png"
        ],
        5 => [
            "productName" => "Rijst",
            "image" =>  "https://images.ctfassets.net/s0lodsnpsezb/274034_M/9155d5fc24812c6739502631a1a2385c/274034.png"
        ],
        6 => [
            "productName" => "M&M's",
            "image" =>  "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjgzNTc3OWNmNWU1YTAyNmE4OWM4NmNjZjg5NTZlNDk3Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=3edb320b6bcc7b96ae774c9a6de923eca80cbc8fa8fe70725226a963d9332310"
        ],
        7 => [
            "productName" => "Koekjes",
            "image" =>  "https://www.verkade.nl/assets/Maria_3D560x280.png"
        ],
        8 => [
            "productName" => "Schoonmaakmiddel",
            "image" =>  "https://beeldbank.prepublisher.com/pictures/PP/VNK/1/VNKK8131.png"
        ],
        9 => [
            "productName" => "Luiers",
            "image" =>  "https://images.ctfassets.net/q4tov2kgy425/1m7tpGDigQOUhUgjht2B1x/5313c3f4840f5ed4d8e783dafeace127/1027_58_Pampers_NL_PPTaped_PDPUpdate_MAR23_Pack_200x200.png"
        ],
        10 => [
            "productName" => "Bananen",
            "image" =>  "https://static.vecteezy.com/system/resources/previews/015/100/112/non_2x/bunch-of-bananas-free-png.png"
        ]


    ];


    return $tags[$id];
}

