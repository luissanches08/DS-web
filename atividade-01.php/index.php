<?php


class mesa{
    public $funcao;
    public $mateiral; 
    public $cor; 
    public $marca; 
    public $textura; 

    public function apoiar(){ 
        return "voce apoiou em uma mesa de marca ".$this->marca;       
    }

    public function centar(){
    return "voce centou em uma mesa de cor ".$this->cor;
    }

    public function subir(){ 
     return "voce subiu em uma mesa de textura ".$this->textura; 
    }
}

$mesadoaluno = new mesa();
$mesadoaluno->marca = "core";
echo $mesadoaluno->apoiar();

echo "<br>";

$mesadoprofessor = new mesa();
$mesadoprofessor->cor = "preta";
echo $mesadoprofessor->centar();

echo "<br>";

$mesadoluisfernando = new mesa();
$mesadoluisfernando->textura = "lisa";
echo $mesadoluisfernando->subir();

echo "<br>";
echo "<hr/>";





class quadra{
    public $tamanho;
    public $cor;
    public $material;
    public $tipo;
    public $localizacao;

    public function jogar(){
        return "voce esta jogando em uma quadra ".$this->tamanho;    
    }

    public function correr(){
        return "voce esta correndo em uma quadra de cor ".$this->cor;
    }

    public function pular(){
        return "voce esta pulando em uma quadra ".$this->material;
    }
}

$quadraaluno = new quadra();
$quadraaluno->tamanho = "grande";
echo $quadraaluno->jogar();

echo "<br>";

$quadraprofessor = new quadra();
$quadraprofessor->cor = "verde";
echo $quadraprofessor->correr();

echo "<br>";

$quadraparatodos = new quadra();
$quadraparatodos->material = "asfalto";
echo $quadraparatodos->pular();

echo "<br>";
echo "<hr/>";



class escola{
    public $estudar;
    public $dormir;
    public $comer;
    public $bagunçar;
    public $conversar;

    public function estudar(){
        return "voce esta estudando na". $this->estudar;   
    }

    public function corversar(){
        return "voce esta conersando muito na". $this->conversar;
    }

      public function sono(){
        return "voce esta conersando demais e". $this->dormir;
    }
}

$escolaaluno = new escola();
$escolaaluno->estudar = "escola";
echo $escolaaluno->estudar();

echo "<br>";

$escolaprofessor = new escola();
$escolaprofessor->conversar = "sala de professor"; 
echo $escolaprofessor->corversar();

echo "<br>";

$escolaparatodos = new escola();
$escolaparatodos->dormir = "atrapalhando";
echo $escolaparatodos->sono();

echo "<br>";
echo "<hr/>";

class carros {
    public $marca;
    public $tipo;
    public $motor;
    public $velocidade;
    public $tamanho;

    public function veiculo(){
        return "seu carro tem o motor". $this->motor;
    }

    public function rapido(){
        return "seu carro é da marca " . $this->velocidade;
    }

    public function tempo(){
        return "seu carro é muito " . $this->tipo;
    }

}

$meucarro = new carros();
$meucarro->motor ="potente";
echo $meucarro->veiculo();

echo "<br>";

$seucarro = new carros();
$seucarro->velocidade = "ferrari";
echo $seucarro->rapido();

echo "<br>";

$nossocarro = new carros();
$nossocarro->tipo = "caro";
echo $nossocarro->tempo();

echo "<br>";
echo "<hr/>";


class celular {
    public $marca;
    public $modelo;
    public $cor;
    public $tamanho;
    public $bateria;

    public function ligar(){
        return "seu celular é da marca ". $this->marca;
    }

    public function desligar(){
        return "seu celular é do modelo " . $this->modelo;
    }

    public function carregar(){
        return "seu celular tem a cor " . $this->cor;
    }
}

$meucelular = new celular();
$meucelular->marca = "samsung";
echo $meucelular->ligar();

echo "<br>";

$seucelular = new celular();
$seucelular->modelo = "galaxy";
echo $seucelular->desligar();

echo "<br>";

$nossocelular = new celular();
$nossocelular->cor = "preto";
echo $nossocelular->carregar();

echo "<br>";
echo "<hr/>";