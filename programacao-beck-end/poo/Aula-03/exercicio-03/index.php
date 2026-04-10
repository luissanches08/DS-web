<?php

class fabricante {
    public $nome;
    public $pais;

    public function __construct($novoNome, $novoPais ){
        $this->nome = $novoNome;
        $this->pais = $novoPais;

}
}

class carro extends fabricante {
    public $modelo;
    public $ano;
    public $fabricante;

    public function __construct($novoNome, $novoPais, $novoModelo, $novoAno){
        parent::__construct($novoNome, $novoPais);
        $this->modelo = $novoModelo;
        $this->ano = $novoAno;
    }

    public function exibirdados(){
        return "marca ".$this->nome. " ano ".$this->ano."<br/>"
        ." Fabricante: ".$this->pais." modelo ".$this->modelo.".";
    }
}

class motor extends fabricante {
    public $tipo;
    public $potencia;
    public $fabricante;

    public function __construct($novoNome, $novoPais, $novoTipo, $novaPotencia){
        parent::__construct($novoNome, $novoPais);
        $this->tipo = $novoTipo;
        $this->potencia = $novaPotencia;
    }

    public function exibirdados(){
        return " Origem: ".$this->pais." motor: ".$this->tipo." cv | ".$this->potencia."Diesel.";
    }
}


$carro1 = new carro("Civic | ", "Alemanha | ", "Golf", 2020); 
echo $carro1->exibirdados();
echo "<br>";
$motor1 = new motor("Volkswagen", "Japao | ", "150", "combustivel: ");
echo $motor1->exibirdados();
