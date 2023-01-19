// Buscar os elementos da página
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Adicionando os eventos

// Enviar form 
form.addEventListener ('submit', addItem);
// Pressionar uma tecla no input buscar item
filter.addEventListener ('keyup', buscarItems);
// Remover Item da lista
itemList.addEventListener ('click', removeItem);


// Função para adicionar Item
function addItem (evento) {
    evento.preventDefault();
    // Recebendo o valor
    let newItem = document.getElementById('item').value;
    // Criar elemento <li>
    let li = document.createElement('li');
    // Adicionar a classe do Bootstrap
    li.className = 'list-group-item';
    // Inserindo texto recebido e armazenado na var newItem
    li.appendChild(
        document.createTextNode(newItem)
    );
    // Criando o botão
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    deleteBtn.appendChild(
        document.createTextNode('X')
    );
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    form.reset();
}

// Função remover Itens
function removeItem (evento) {
    //console.dir(evento.target);
    if (evento.target.classList.contains('delete')) {
        let li = evento.target.parentElement;
        itemList.removeChild(li);
    }
};

// Função buscar Itens
function buscarItems (busca) {
    // Converter o texto "procurado" para maiúsculo
    let texto = busca.target.value.toLowerCase();
    // Buscar todos os itens da lista
    let items = itemList.getElementsByTagName('li');
   Array.from(items).forEach(function (item){
    // Buscar o primeiro item da lista
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(texto) != -1 ){
        item.style.display = 'block';
    }else {
        item.style.display = 'none';
    }
   });
}