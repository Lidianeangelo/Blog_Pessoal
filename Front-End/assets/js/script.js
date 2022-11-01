/* 
Case Sensitive: reconhece letras maiusculas e minusculas
acessar por Tag: getElementByTagName()
acessar por Id: getElementById()
acessar por Nome: getElementsByName()
acessar por Classe: getElementsByClassName()
acessar por Seletor: querySelector() 
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email') // # chama seletor ou . chama a classe
let assunto = document.querySelector('#assunto')
let nomeOk=false
let emailOk=false
let assuntoOk=false

nome.style.width = '77%'
email.style.width = '77%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'insira seu nome completo' //alert('Insira seu nome completo')
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk=true
    }
}

function validaEmail(){
    let txtEmail=document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1 && email.value.indexOf('.')){
        txtEmail.innerHTML='e-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML='email válido'
        txtEmail.style.color = 'green'
        emailOk=true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = 'insira até 100 caracteres' 
        txtAssunto.style.color = 'red'
        txtAssunto.style.display='block'
    } else {
        txtAssunto.innerHTML = 'texto válido'
        txtAssunto.style.color = 'green'
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}

function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulário enviado com sucesso!');
    }else{
        alert('Preencha o formulário corretamente!');s
        
    }
}

