<?php

class dono {
    public $nome;
    public $telefone;

    public function __construct($novoNome, $novoTelefone ){
        $this->nome = $novoNome;
        $this->telefone = $novoTelefone;
}
}

class cachorro extends dono {
    public $nomecachorro;
    public $raca;
    public $dono;

    public function __construct($novoNome, $novoTelefone, $novaRaca){
        parent::__construct($novoNome, $novoTelefone);
        $this->raca = $novaRaca;
    }

    public function exibirdados(){
        return "O dono do cachorro é ".$this->nome. "<br/>"
        ." seu telefone é: ".$this->telefone." e o nome do cachorro é ".$this->raca;
    }
}

$cachorro1 = new cachorro("João", "(12)34345-6789", "Rex.");
    
echo $cachorro1->exibirdados();

