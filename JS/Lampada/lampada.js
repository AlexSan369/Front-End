// ATRIBUINDO CONSTANTES PARA OS BTN'S E IMG
//CRIANDO A RELAÇÃO DO HTML PARA O JS

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}


//FUNÇÃO TROCAR IMG OFF PARA ON

function lampOn (){
    if ( !isLampBroken() ){
        //lamp é o id da imagem .src para acessar o 
        //atribito src da tag e trocar seu valor
        lamp.src = 'ligada.jpg';
    }
}

function lampOff (){
    if ( !isLampBroken() ){
        lamp.src = 'desligada.jpg';
    }
}

function lampBreak (){
    if ( !isLampBroken() ){
        lamp.src = 'quebrada.jpg'
    }
}


//ESTABELECENDO A REAÇÃO DO JS AO USER REALIZAR O CLICK

//turnOn é o btn Ligar no HTML
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
//lampOn é a função que irá retornar ao evento click

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseout', lampOff);
lamp.addEventListener ('dblclick', lampBreak);