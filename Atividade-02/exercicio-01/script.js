function trocarCor(){
    var elemento = document.getElementById("conteudo");
    elemento.innerHTML = "A cor de funda foi alterada com sucesso!";
    elemento.style.backgroundColor = "red";
    var texto = elemento.innerHTML;
    console.log(texto);
}