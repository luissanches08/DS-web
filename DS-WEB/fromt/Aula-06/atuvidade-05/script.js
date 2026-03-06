// pega o formulário e adiciona um "escutador" quando ele for enviado
document.getElementById("formulario").addEventListener("submit", function(e){

// impede que o formulário seja enviado automaticamente
e.preventDefault()

// variável que controla se tudo está válido
let valido = true


// limpa todos os erros antes de validar novamente
document.querySelectorAll("span").forEach(function(span){
span.innerText = ""
})



/* NOME */

// pega o valor digitado no campo nome e remove espaços extras
let nome = document.getElementById("nome").value.trim()

// verifica se o nome tem menos de 3 caracteres
if(nome.length < 3){

// mostra mensagem de erro
document.getElementById("erro-nome").innerText =
"O nome deve ter no mínimo 3 caracteres"

// marca que o formulário não está válido
valido = false

}



/* EMAIL */

// pega o valor do email
let email = document.getElementById("email").value

// regex simples para validar formato de email
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// testa se o email corresponde ao padrão
if(!regexEmail.test(email)){

// mostra erro
document.getElementById("erro-email").innerText =
"Email deve ter formato usuario@dominio.com"

valido = false
}



/* SENHA */

// pega senha e confirmação
let senha = document.getElementById("senha").value
let confirmar = document.getElementById("confirma-senha").value

// regex que exige:
// letra minúscula
// letra maiúscula
// número
// símbolo
// mínimo 8 caracteres
let regexSenha =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

// verifica se a senha atende aos requisitos
if(!regexSenha.test(senha)){
document.getElementById("erro-senha").innerText =
"Senha deve ter 8 caracteres, maiúscula, minúscula, número e símbolo"
valido = false
}

// verifica se as duas senhas são iguais
if(senha !== confirmar){
document.getElementById("erro-senha").innerText =
"Senhas não coincidem"
valido = false
}



/* CPF COM ALGORITMO */

let cpf = document.getElementById("cpf").value
function validarCPF(cpf){

// CPF deve ter 11 dígitos
if(cpf.length != 11) return false

// evita números iguais
if(/^(\d)\1+$/.test(cpf)) return false
let soma = 0

// calcula primeiro dígito verificador
for(let i=0;i<9;i++){
soma += cpf[i]*(10-i)
}
let resto = (soma*10)%11
if(resto == 10 || resto == 11) resto = 0
if(resto != cpf[9]) return fals
soma = 0

// calcula com o dígito verificador
for(let i=0;i<10;i++){
soma += cpf[i]*(11-i)
}

resto = (soma*10)%11
if(resto == 10 || resto == 11) resto = 0
// retorna se o segundo dígito está correto
return resto == cpf[10]
}

// chama a função de validação do CPF
if(!validarCPF(cpf)){
document.getElementById("erro-cpf").innerText =
"CPF inválido"
valido = false
}



/* TELEFONE */

// pega telefone
let telefone = document.getElementById("telefone").value

// regex para formato (11) 99999-9999
let regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/

// valida formato
if(!regexTelefone.test(telefone)){
document.getElementById("erro-telefone").innerText =
"Telefone deve ser (11) 99999-9999"
valido = false
}



/* CEP */

// pega cep
let cep = document.getElementById("cep").value

// regex formato 00000-000
let regexCep = /^\d{5}-\d{3}$/

// valida
if(!regexCep.test(cep)){
document.getElementById("erro-cep").innerText =
"CEP inválido"
valido = false
}



/* DATA VÁLIDA */

// pega data digitada
let data = document.getElementById("data-nascimento").value

// função para validar data
function validarData(data){

// separa dia mes ano
let partes = data.split("/")

if(partes.length != 3) return false

let dia = parseInt(partes[0])
let mes = parseInt(partes[1])
let ano = parseInt(partes[2])

// cria objeto de data
let dataObj = new Date(ano, mes-1, dia)

// verifica se a data existe de verdade
return dataObj.getDate()==dia &&
dataObj.getMonth()==mes-1 &&
dataObj.getFullYear()==ano


}

// testa a data
if(!validarData(data)){
document.getElementById("erro-data-nascimento").innerText =
"Data inválida"
valido = false
}



/* VALOR MONETÁRIO */

// pega valor digitado
let valor = document.getElementById("valor").value

// regex para formato brasileiro (1.299,90)
let regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/

if(!regexValor.test(valor)){
document.getElementById("erro-valor").innerText =
"Formato inválido (ex: 1.299,90)"
valido = false
}else{

// converte para número real
let numero = parseFloat(valor.replace(/\./g,"").replace(",", "."))

// verifica faixa permitida
if(numero < 1 || numero > 100000){
document.getElementById("erro-valor").innerText =
"Valor deve estar entre 1 e 100000"
valido = false
}

}



/* URL */

// pega url
let url = document.getElementById("url").value

// regex exige http:// ou https://
let regexUrl = /^https?:\/\/.+/

if(!regexUrl.test(url)){
document.getElementById("erro-url").innerText =
"URL deve começar com http:// ou https://"
valido = false
}



/* CARTÃO DE CRÉDITO */

// remove espaços do número do cartão
let cartao = document.getElementById("cartao").value.replace(/\s/g,'')

// verifica se tem 16 dígitos
if(cartao.length != 16){
document.getElementById("erro-cartao").innerText =
"Cartão deve ter 16 dígitos"
valido = false
}else{

// identifica a bandeira do cartão
let bandeira = ""

if(cartao.startsWith("4")){
bandeira = "Visa"
}
else if(cartao.startsWith("5")){
bandeira = "MasterCard"
}
else if(cartao.startsWith("34") || cartao.startsWith("37")){
bandeira = "American Express"
}
else{
bandeira = "Desconhecida"
}

// mostra a bandeira na tela
document.getElementById("resultado").innerHTML =
"Bandeira do cartão: " + bandeira

}



/* RESULTADO FINAL */

// se nenhum erro foi encontrado
if(valido){

// mostra mensagem de sucesso
document.getElementById("resultado").innerHTML +=
"<h2>Cadastro realizado com sucesso!</h2>"
console.log("nome valido, email valido,")
}

})