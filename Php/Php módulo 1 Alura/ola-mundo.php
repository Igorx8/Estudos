<?php
echo 'Olá mundo!';


$idade = null;
echo gettype($idade);
//gettype pega o tipo da váriavel

$idade = 25;
echo '  Minha idade é ' . $idade . ' anos';

echo "\n";

echo "Minha idade é $idade anos";
//" aspas duplas permite adicionar o valor de variaveis nas strings


echo "\nEu tenho \"$idade\" anos";
// aspas ao contrário (\) servem para escapar alguma coisa
?>