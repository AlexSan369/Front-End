// Agora vamos buscar os elementos do formulário e salvá-los em variáveis para trabalharmos com eles
// Busca pelos elementos do Formulário

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg.email');
const userList = document.querySelector('#users');


// Adicionando escutador(Listener) no Formulário
myForm.addEventListener('submit', cadastraCliente);

// Função para cadastrar
function cadastraCliente (e) {
    e.preventDefault();
    //alert('cutucado com sucesso!');

    if ( nameInput.value === '' || emailInput.value === '' )
    {
        msg.classList.add('error');
        msg.style.textAlign = 'center';
        msg.innerHTML = 'Por favor! Preencha os dados';
        setTimeout(()=> msg.innerHTML = '', 5000);
    }else {
        const li = document.createElement('li');
            li.appendChild(
                document.createTextNode(
                    `${nameInput.value} :: ${emailInput.value} às ${horario.value}`
                )
            );
            userList.appendChild(li);
            nameInput.value = '';
            emailInput.value = '';
            horario.getElementsByTagName('option')[0].selected = 'selected';
            nameInput.focus();
    }
    // Escutando o input email e invocando a função valida email
    emailInput.addEventListener('keyup', () => {
        let padrao = new RegExp(/.*@.*\..*/i);
        if ( !padrao.test(emailInput.value)) {
            msg_email.classList.add('error');
            msg_email.style.textAlign = 'center';
            msg_email.innerHTML = 'E-mail não validado!';
            setTimeout( () => msg.innerHTML = '', 5000 );
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    









    
    
    /* // Verificação de inputs vazio
    if (nameInput.value === '' && emailInput.value === '')
    {
        alert('Por favor, preencha os dados.')
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        msg.style.textAlign = 'center';
        setTimeout(() => msg.remove(), 5000);
        setInterval()
    }    
    // Criando elemento lli 
    const li = document.createElement('li');
    li.appendChild(
        document.createTextNode(
            `${nameInput.value} => ${emailInput.value} às ${horario.value}`
        )
    )
    // Associando <li> criada a <ul id="users">
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value='';
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus(); */
}