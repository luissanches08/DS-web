var divresposta = document.getElementById("resposta")

var botaohello = document.getElementById("botaohello")
botaohello.addEventListener("click", requisicaohello)

async function requisicaohello(){
    var requisicao = await fetch("http://localhost/primeira-api/hello")
    var resposta = await requisicao.json()
    console.log(resposta)

    divresposta.innerHTML = "Status:" + resposta.status + "<br>" + "Mensagem: " + resposta.mensagem
}

var botaoEcho = document.getElementById("botaoEcho")
botaoEcho.addEventListener("click", requisicaoecho)

async function requisicaoecho(){
    var echo = document.getElementById("inputEcho").value


    var requisicao = await fetch("http://localhost/primeira-api/echo" ,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({mensagem: echo})

    })
    var resposta = await requisicao.json()
    console.log(resposta.echo.mensagem)

    divresposta.innerHTML = "Status:" + resposta.status + "<br>" + "Mensagem: " + resposta.echo.message

     
}
 
