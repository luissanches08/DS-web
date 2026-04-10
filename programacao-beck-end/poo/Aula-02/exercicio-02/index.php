<?php

class animal {
    public function falar(){
        return "Som";
    }
}

class sapo extends animal {
    public function falar(){
        return "Coaxa";
    }
}

class cavalo extends animal {
    public function falar(){
        return "Relincha";
    }
}

class tartaruga extends animal {
    public function falar(){
        return "Ruge";
    }

}

$sapo = new sapo();
echo $sapo->falar = "pulando";
echo "<br>";
echo $sapo->falar();
echo "<br>";
echo "<hr/>";

$cavalo = new cavalo();
echo $cavalo->falar = "galopa e anda";
echo "<br>";
echo $cavalo->falar();
echo "<br>";
echo "<hr/>";

$tartaruga = new tartaruga();
echo $tartaruga->falar = "andando lentamente";
echo "<br>";
echo $tartaruga->falar();
echo "<br>";
echo "<hr/>";

