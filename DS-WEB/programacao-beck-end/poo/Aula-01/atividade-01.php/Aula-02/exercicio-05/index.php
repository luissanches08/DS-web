<?php

class documento {
    private $numero;

    public function __construct($valor = ""){
        $this->numero = $valor;
    }

    public function getnumero(){
        return $this->numero;
    }

    public function setnumero($valor){
        $this->numero = $valor;
    }

    public function exibirValor(){
        echo "Valor atual: ".$this->numero."<br>";
    }
}

class cpf extends documento {

    public function validarCPF(){

        $cpf = preg_replace('/[^0-9]/', '', $this->getnumero());

        if(strlen($cpf) != 11){
            echo "CPF inválido (tamanho incorreto)<br>";
            return false;
        }

        if(preg_match('/(\d)\1{10}/', $cpf)){
            echo "CPF inválido (números repetidos)<br>";
            return false;
        }

        for($t = 9; $t < 11; $t++){
            $soma = 0;
            for($c = 0; $c < $t; $c++){
                $soma += $cpf[$c] * (($t + 1) - $c);
            }

            $digito = ((10 * $soma) % 11) % 10;

            if($cpf[$c] != $digito){
                echo "CPF inválido<br>";
                return false;
            }
        }

        echo "CPF válido<br>";
        return true;
    }
}

$cpf1 = new cpf();
$cpf1->setnumero("482.886.058.42");
$cpf1->exibirValor();
$cpf1->validarCPF();

?>

