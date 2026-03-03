<?php

class Pessoa {
    public $nome = "ferreira";
    public $idade = "16";
    }

    class Funcionario extends Pessoa {
        public $salario = 1400;
    }

    class gerente extends Funcionario {
        public $departamento = "vendas";
        public function bonus(){
            return $this->salario * 0.20;
        }
    }


    class desenvolvedor extends Funcionario {
        public $linguagem = "php";
        public function bonus(){
            return $this->salario * 0.10;
        }
    }

    $gerente = new gerente();
    echo "O gerente ".$gerente->nome." tem um salario de R$".
    $gerente->salario." e um bonus de R$".$gerente->bonus();
    echo "<br>";
    $desenvolvedor = new desenvolvedor();
    echo "O desenvolvedor ".$desenvolvedor->nome." tem um salario de R$
    ".$desenvolvedor->salario." e um bonus de R$".$desenvolvedor->bonus();


    ?>

    