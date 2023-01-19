// Agora vamos buscar os elementos do formulário e salvá-los em variáveis para trabalharmos com eles
// Busca pelos elementos do Formulário

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg.email');
const userList = document.querySelector('#users');

//procure por algumas dessas variáveis pelo console e veja seu conteúdo

//Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(elemento) {
    elemento.preventDefault();

    if (nameInput.value === '' || emailInput.value === '')
    {
        alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.style.textAlign = 'center';
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(()=> msg.classList.remove('error') ='', 5000);
        setTimeout(()=> msg.innerHTML ='', 5000);
    }    
    else {
        //Criando o li (Item List)
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        // add o LI criado na UL
        userList.appendChild(li);
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus();
    }
}

// Validando e-mail
    emailInput.addEventListener('change', (e) =>{
        
        let padrao = new RegExp(/.*@.*\..*/i);
        if (!padrao.test(emailInput.value)) {
            msg_email.classList.add('error');
            msg_email.style.textAlign = 'center';
            msg_email.innerHTML = 'Por favor, preencha seu email corretamente.';
            setTimeout(()=> msg_email.innerHTML = '', 3000);
            setTimeout(()=> msg_email.classList.remove('error'), 4000);
        } 
    });

//let padrao = new RegExp(/.*@.*\..*/i);
//console.dir(padrao);