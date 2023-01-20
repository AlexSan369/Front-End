const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// VELOCIDADE DO JOGO
let speed = 7;

// TAMANHO DE CADA LADRILHO
// CANVAS = WIDTH 400/20 HEIGHT 400/20
const tileCount = 20;
const tileSize = canvas.width / tileCount - 2;

//POSIÇÃO DA CABEÇA DA COBRA
const headX = 10;
const headY = 10;

let xVelocity = 0;
let yVelocity = 0;

// CHAMADA DO JOGO
function drawGame() {

    clearScreen();
    drawSnake();
    changeSnakePosition();
    setTimeout(drawGame, 1000 / speed);
}

// ESTILO DA TELA
function clearScreen() {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
// SNAKE ORIGIN
function drawSnake() {
    ctx.fillStyle = 'purple';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}
// MOVIMENTANDO A COBRA
function changeSnakePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    
    //UP
    if(event.keyCode == 38) {

        yVelocity = -1;
        xVelocity = 0;
    }
}
drawGame();