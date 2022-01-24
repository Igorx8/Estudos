<?php


$idade = 17;

echo "Você só pode entrar a partir de 18 anos e beber a partir de 21 anos" . PHP_EOL;

if($idade >= 18){
  echo "Você tem $idade anos" . PHP_EOL;
  echo 'Pode entrar' . PHP_EOL;

  if($idade >= 21){
    echo 'Você pode beber';
  }
}
else{
  echo 'Você não pode entrar nem beber';
}