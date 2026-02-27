//===============  Eventos do Mouse  ===============


var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function() {
    mensagem.textContent = "Você clicou na área!";
    area.style.backgroundColor = "blue";
    area.style.color = "white";
});

area.addEventListener("dblclick", function() {
    mensagem.textContent = "Você clicou duas vezes na área!";
    if(area.style.backgroundColor == "red") {
        area.style.backgroundColor = "white";
    } else {
        area.style.backgroundColor = "red";
    }
});

area.addEventListener("mouseenter", function(){
    mensagem.textContent = "Você entrou na área!";
    area.style.backgroundColor = "lightgreen";
});

area.addEventListener("mouseleave", function(){
    mensagem.textContent = "Você saiu da área!";
    area.style.backgroundColor = "white";
});

var posicao = document.getElementById("posicao");
area.addEventListener("mousemove", function(event){
posicao.textContent = "X:" + event.clientX + " Y:"
+ event.clientY;
});

area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});

//===============  Eventos do Teclado  ===============

document.addEventListener("keydown", function(event){
console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("keyup", function(event){
console.log("Tecla liberada: " + event.key);
});

document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});


document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.keyCode;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});


//===============  Eventos de Formulário  ===============




//===============  Eventos de Janela  ===============

