"use strict"

//Elemento do DOM no qual o conteúdo será impresso
const contentBox = document.querySelector("#pageMainContent");

//Função para pular linha
function skipLine(){
    contentBox.innerHTML += ("</br>");
}

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    contentBox.innerHTML += (content);
}

//Capturando elementos do DOM para "imprimir" o header e footer
const headerBox = document.querySelector("#developmentBox");
const footerBox = document.querySelector("#infoBox");

//Header
headerBox .innerHTML = (`
<p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
`);

//Footer
footerBox.innerHTML = (`
<p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
<p>Last Update on November | 22 | 2022 </p>
`);

////////////////////////////

writePageContent(`
<h1>Jogo da Velha</h1>
<div id="board">
    <div class="line">
        <div data-line="0" data-colun="0" class="space"></div>
        <div data-line="0" data-colun="1" class="space"></div>
        <div data-line="0" data-colun="2" class="space"></div>
    </div>
    <div class="line">
        <div data-line="1" data-colun="0" class="space"></div>
        <div data-line="1" data-colun="1" class="space"></div>
        <div data-line="1" data-colun="2" class="space"></div>
    </div>
    <div class="line">
        <div data-line="2" data-colun="0" class="space"></div>
        <div data-line="2" data-colun="1" class="space"></div>
        <div data-line="2" data-colun="2" class="space"></div>
    </div>
</div>
<h2 id="result"></h2>
<button id="resetGameBtn">Restart</button>
</br>
`);

let space = document.querySelectorAll('.space');
let result = document.querySelector("#result");

let move = 0 ;

let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

for (let index = 0; index < space.length; index++) {
    space[index].addEventListener('click',verify);
}

function verify(e){
    const spaceClicked = e.target;
    if(!spaceClicked.innerHTML){
        fill();
    } 

    function fill(){

        if (move === 0 ){
            spaceClicked.innerHTML = "X";
            move++;
        }else {
            spaceClicked.innerHTML = "O";
            move--;
        }
        
        const position = {
            line: Number(spaceClicked.dataset.line), 
            colun: Number(spaceClicked.dataset.colun)
        };

        board[position.line][position.colun] = spaceClicked.innerHTML;
        handleResultValidation();

    }
} 

const winningConditions = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
];

let velha = 0;
let resetGameBtn = document.querySelector('#resetGameBtn');
resetGameBtn.addEventListener("click", reset);

function handleResultValidation() {
    let roundWon = false;
    velha++

    for (let i = 0; i <= 7; i++) {
        const WC = winningConditions[i];
        let a = board[ WC[0][0] ][ WC[0][1] ];
        let b = board[ WC[1][0] ][ WC[1][1] ];
        let c = board[ WC[2][0] ][ WC[2][1] ];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        // adicionar uma função para fim de jogo
        result.innerHTML += (move == 1)? "X é o Vencedor!": "O é o Vencedor!";
        result.classList.add("winner");
        return;
    }
    else if (velha === 9){
        contentBox.classList.add("velha");
        resetGameBtn.style.backgroundColor = "rgb(185, 30, 30)";
        resetGameBtn.style.border = "rgb(185, 30, 30)";
        return;
    }
}

function reset() {
    board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    space.forEach((element) => {
        element.innerHTML = "";
    });

    result.innerHTML = "";
    result.classList.remove("winner");
    contentBox.classList.remove("velha");
    resetGameBtn.style.backgroundColor = "black";
    resetGameBtn.style.border = "black";

    velha = 0

    return;

}

