//criando o contador de itens
var contadorItem = 0

function addLista(){
    //incrementando o contador
    contadorItem ++
    //crio o item
    let novoItem = document.createElement("li");
    //adiciono texto ao meu item
    novoItem.textContent = contadorItem + " - " + prompt("Digite o nome da tarefa");
    //atribuo um ID
    novoItem.setAttribute('id', contadorItem);

    //cria o botao remover
    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "remover" //adiciona texto ao botao
    botaoRemover.setAttribute("onclick","remover("+contadorItem+")") //adiciona uma funcao ao botao

    novoItem.appendChild(botaoRemover) //adiciona o bao ao novo item
    document.getElementById("lista").appendChild(novoItem);
}


function remover(contadorItem){
    var Item1 = document.getElementById(contadorItem);
    document.getElementById("lista").removeChild(Item1);


}