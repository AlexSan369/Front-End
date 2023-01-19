// Agora vamos buscar os elementos do formulário e salvá-los em variáveis para trabalharmos com eles
// Busca pelos elementos do Formulário

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg.email');
const userList = document.querySelector('#users');

// Escutando o formulário com addEventListener
myForm.addEventListener('click', cadastraCli);
// Chamando função do click => cadastroCli
function cadastraCli(elemento) {
    elemento.preventDefault();
    alert('Botão funcionando com sucesso!');
}