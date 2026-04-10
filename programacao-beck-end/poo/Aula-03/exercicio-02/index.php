<?php

class artista {
    public $nome;
    public $genero;

    public function __construct($novoNome, $novoGenero ){
        $this->nome = $novoNome;
        $this->genero = $novoGenero;
}
}

class musica extends artista {
    public $titulo;
    public $duracao;
    public $artista;
    public $metodo;

    public function __construct($novoNome, $novoGenero, $novoTitulo, $novaDuracao, $novoartista, $novoMetodo){
        parent::__construct($novoNome, $novoGenero);
        $this->titulo = $novoTitulo;
        $this->duracao = $novaDuracao;
        $this->artista = $novoartista;
        $this->metodo = $novoMetodo;
    }

    public function exibirdados(){
        return "Back ".$this->titulo." artista ".$this->nome." duração ".$this->duracao. "<br/>"
        ." Gravadora ".$this->metodo.".";
    }
}

echo "<br>";
$musica1 = new musica("Queen |", "Rock", " to Black |", 3.5, "João", " XYZ");
echo $musica1->exibirdados();
