<?php

class pessoa {
    public $nome;
    public $idade;

    public function __construct($novoNome, $novoIdade ){
        $this->nome = $novoNome;
        $this->idade = $novoIdade;
    }

    public function exibirdados(){
        return "Olá, meu nome é ".$this->nome." e tenho ".$this->idade." anos.";
    }

    public function alterardados($novoNome, $novoIdade){
        $this->nome = $novoNome;
        $this->idade = $novoIdade;
    }
}

$pessoa1 = new pessoa("João", 30);

echo $pessoa1->exibirdados();

$pessoa1->alterardados("Maria", 25);

echo "<br>";

echo $pessoa1->exibirdados();
?>