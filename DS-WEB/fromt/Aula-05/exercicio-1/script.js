const inputLetra = document.getElementById("letra");
const btnEnviar = document.getElementById("enviar");
const imagem1 = document.getElementById("imagem1");
const imagem2 = document.getElementById("imagem2");
const imagem3 = document.getElementById("imagem3");
const imagem4 = document.getElementById("imagem4");
const imagem5 = document.getElementById("imagem5");
const imagem6 = document.getElementById("imagem6");
const imagem7 = document.getElementById("imagem7");
const imagem8 = document.getElementById("imagem8");
const imagem9 = document.getElementById("imagem9");
const imagem10 = document.getElementById("imagem10");
const imagem11 = document.getElementById("imagem11");
const imagem12 = document.getElementById("imagem12");
const nomeDiv = document.getElementById("nome");
const bolinha = document.querySelector(".bolinha");


imagem1.classList.remove("mostrar");
imagem2.classList.remove("mostrar");
imagem3.classList.remove("mostrar");
imagem4.classList.remove("mostrar");
imagem5.classList.remove("mostrar");
imagem6.classList.remove("mostrar");
imagem7.classList.remove("mostrar");
imagem8.classList.remove("mostrar");
imagem9.classList.remove("mostrar");
imagem10.classList.remove("mostrar");
imagem11.classList.remove("mostrar");
imagem12.classList.remove("mostrar");


document.addEventListener("mousemove", function(event) {
    bolinha.style.left = event.clientX + "px";
    bolinha.style.top = event.clientY + "px";
});

btnEnviar.addEventListener("click", function() {
    const letra = inputLetra.value.toLowerCase();


    imagem1.classList.remove("mostrar");
    imagem2.classList.remove("mostrar");
    imagem3.classList.remove("mostrar");
    imagem4.classList.remove("mostrar");
    imagem5.classList.remove("mostrar");
    imagem6.classList.remove("mostrar");
    imagem7.classList.remove("mostrar");
    imagem8.classList.remove("mostrar");
    imagem9.classList.remove("mostrar");
    imagem10.classList.remove("mostrar");
    imagem11.classList.remove("mostrar");
    imagem12.classList.remove("mostrar");


    if(letra === "c") {
        imagem1.classList.add("mostrar");
        nomeDiv.textContent = "Cauly";
    } else if(letra === "r") {
        imagem2.classList.add("mostrar");
        nomeDiv.textContent = "Ronaldo";
    } else if(letra === "t") {
        imagem3.classList.add("mostrar");
        nomeDiv.textContent = "Tchoameni";
    } else if(letra === "v") {
        imagem4.classList.add("mostrar");
        nomeDiv.textContent = "Vini Jr.";
    } else if(letra === "n") {
        imagem5.classList.add("mostrar");
        nomeDiv.textContent = "Neymar";
    } else if(letra === "k") {
        imagem6.classList.add("mostrar");
        nomeDiv.textContent = "Kvaratskhelia";
    } else if(letra === "l") {
        imagem7.classList.add("mostrar");
        nomeDiv.textContent = "Luis Suárez";
    } else if(letra === "m") {
        imagem8.classList.add("mostrar");
        nomeDiv.textContent = "Mbappé";
    } else if(letra === "f") {
        imagem9.classList.add("mostrar");
        nomeDiv.textContent = "Ferreirinha";
    } else if(letra === "y") {
        imagem10.classList.add("mostrar");
        nomeDiv.textContent = "Yuri Alberto";
    } else if(letra === "a") {
        imagem11.classList.add("mostrar");
        nomeDiv.textContent = "Aubameyang";
    } else if(letra === "h") {
        imagem12.classList.add("mostrar");
        nomeDiv.textContent = "Halland";
    } else {
        

        alert("Letra não reconhecida");
        nomeDiv.textContent = "";
    }

    inputLetra.value = "";
    inputLetra.focus();
});


const quantidade = 5; 
const bolinhas = [];

for (let i = 0; i < quantidade; i++) {
    const div = document.createElement("div");
    div.classList.add("bolinha");
    document.body.appendChild(div);

    bolinhas.push({
        el: div,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });
}

let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animar() {
    let x = mouse.x;
    let y = mouse.y;

    bolinhas.forEach((b, index) => {
        b.x += (x - b.x) * 0.25;
        b.y += (y - b.y) * 0.25;

        b.el.style.left = b.x + "px";
        b.el.style.top = b.y + "px";

        x = b.x;
        y = b.y;
    });

    requestAnimationFrame(animar);
}

animar();