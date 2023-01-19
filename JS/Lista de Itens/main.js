// Criando as variáveis

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Adicionando Evento

// Evento para Enviar o Forms
form.addEventListener('submit', addItem);
// Evento de Buscar item
/* filter.addEventListener('keyup', buscarItems); */


//Adicionando Funções

// Adicionar um Item na lista
function addItem (evento) {
    evento.preventDefault();
    alert('Tá certinho! Paramos por aqui')    
}

