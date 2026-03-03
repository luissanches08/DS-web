<?php

class produto {
    public $nome = "camisa";
    public $preco = 50;
    public $estoque = 100;

    public function desconto(){
        return $this->preco * 0.10;
    }
}

class roupa extends produto {
    public $tamanho = "M";

      public function desconto(){
        return $this->preco * 0.20;
        if ($this->estoque < 5){
            return $this->preco * 0.30;
}
}
}

class eletronico extends produto {
    public $cor = "preto";

     public function desconto(){
        return $this->preco * 0.10;
        if($this->estoque < 5){
            return $this->preco * 0.20;
        }
}
}

$produto = new produto();
echo "O produto ".$produto->nome." tem um preço de R$".
$produto->preco." e um desconto de R$".$produto->desconto();
echo "<br>";
$roupa = new roupa();
echo "A roupa ".$roupa->nome." tem um preço de R$".$roupa->preco." e um desconto de R$".$roupa->desconto();
echo "<br>";
$eletronico = new eletronico();
echo "O eletronico ".$eletronico->nome." tem um preço de R$
".$eletronico->preco." e um desconto de R$".$eletronico->desconto();


