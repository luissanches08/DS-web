<?php

class veiculo {
    public $marca = "ford";
    public $modelo = "ka";
    private $velocidade = 25;

    public function __construct($marca = "ford", $modelo = "ka"){
        $this->marca = $marca;
        $this->modelo = $modelo;
    }

    public function getVelocidade(){
        return $this->velocidade;
    }

    public function setVelocidade($valor){
        if($valor > 0){
            $this->velocidade = $valor;
        } else {
            echo "Valor inválido para velocidade.";
        }
    }

    public function exibirInformacoes(){
        echo "Marca: ".$this->marca."<br>";
        echo "Modelo: ".$this->modelo."<br>";
        echo "Velocidade: ".$this->velocidade." km/h<br>";
    }
}

class carro extends veiculo {
    public function acelerar(){
        $this->setVelocidade($this->getVelocidade() + 15);
        echo "O carro acelerou. Velocidade atual: ".$this->getVelocidade()." km/h<br>";
    }
}

class moto extends veiculo {
    public function acelerar(){
        $this->setVelocidade($this->getVelocidade() + 25);
        echo "A moto acelerou. Velocidade atual: ".$this->getVelocidade()." km/h<br>";
    }
}

$carro1 = new carro("Chevrolet", "Onix");
$moto1 = new moto("Honda", "CB500");

echo "<h2>Informações do Carro:</h2>";
$carro1->exibirInformacoes();
$carro1->acelerar();
echo "<br>";
echo "<hr>";

echo "<h2>Informações da Moto:</h2>";
$moto1->exibirInformacoes();
$moto1->acelerar();

?>