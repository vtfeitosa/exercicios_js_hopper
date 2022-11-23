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
<p id="result"></p>
<button id="resetGameBtn">Restart</button>
</br>
`);

//Capturando todos os elementos do DOM com essa classe e colocando em um array.
let space = document.querySelectorAll('.space');

//Capturando elemento do DOM onde será exibido o resultado
let result = document.querySelector("#result");

//Contagem de moviemntos que sempre será 1 ou 0 para identificar "X" ou "O"
let move = 0 ;

//Array que armazena onde eu preenchi com "O" ou "X"
let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

//Loop que passa por todos os .space enquanto o comprimento a "contagem" for menor que o comprimento do array 
//...e adiciona um evento de click a cada .space, correspondente á posição que ele está no array e chama a função verify
for (let index = 0; index < space.length; index++) {
    space[index].addEventListener('click',verify);
}

//Função para verificar e preencher a tabela com "X" ou "O" dependendo se tem conteúdo ou não na div do html correspondente ao espaço clicado
function verify(e){
    const spaceClicked = e.target;
    // o e.target tá capturando o "movimento", de acordo com o evento, ele ta identificando qual dos espaços foi clicado

    if(!spaceClicked.innerHTML){
        //O "!" é para iverter o resultado de false e true,  a linha acima está verificando se o espaço clicado está preenchido,
        //...se o conteúdo dele é vazio ou não para que só se estiver vazio ele preencha, se ele já tiver algum caractere (não vazio), não faz nada.
        fill();
    } 

    //Função para alternar entre "X" e "O" e preencher
    function fill(){

        if (move === 0 ){
            //Se o movimento for 0, preenche com "X"
            spaceClicked.innerHTML = "X";
            move++;
            //...e aumenta o move para 1
        }else {
            //Já se for diferente de 0(ou seja, 1), ele vai preencher o espaço com "O"
            spaceClicked.innerHTML = "O";
            move--;
            //...e diminuir o contador move para 0, para que volte a preencher com o "X", assim alternando.
        }
        
        //Objeto criado para armazenar a posição do espaço clicado
        const position = {
            line: Number(spaceClicked.dataset.line), 
            colun: Number(spaceClicked.dataset.colun)
        };

        //Preenchendo o array das jogadas com a posição clicada em cada movimento
        board[position.line][position.colun] = spaceClicked.innerHTML;
        handleResultValidation();
        //... e aí fazendo a validação se o movimento preencheu o array de jogadas com alguma condição de vitória

    }
} 

//Essas são as condições de vitória, se o array de jogadas for preenchido com alguma dessas linhas, o jogador
//... correspondente venceu, se não, ele continua as jogadas enquanto não der "velha".
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

//Contador para identificar a jogada, o máximo são 9, que identificas que todos os 9 espaços já foram preenchidos
let velha = 0;

//Capturando o botão de reset no DOM e adicionando á ele um evento para rodar a função que vai resetar o jogo
let resetGameBtn = document.querySelector('#resetGameBtn');
resetGameBtn.addEventListener("click", reset);

//Essa validação vai verificar se o movimento preencheu o array de jogadas com alguma condição de vitória
function handleResultValidation() {
    //Antes de qualquer coisa, o round"Vencido" foi declarado como falso, pq "ninguem ganhou ainda"
    let roundWon = false;
    velha++
    //Aumenta a jogada a cada vez que a função roda

    //Loop que vai passar por todas as posições do array "tabuleiro" e verificar se o array está preenchido com alguma jogada "vencedora"
    for (let i = 0; i <= 7; i++) {
        const WC = winningConditions[i];
        let a = board[ WC[0][0] ][ WC[0][1] ];
        let b = board[ WC[1][0] ][ WC[1][1] ];
        let c = board[ WC[2][0] ][ WC[2][1] ];

        if (a === '' || b === '' || c === '') {
            //Se a, b e c estiverem preenchidas com nada, continua...
            continue;
        }
        if (a === b && b === c) {
            //Se as posições a, b e c estiverem preenchidas com um valor igual("O" ou "X"), aí é declarada a vitória
            roundWon = true;
            //... e o round"Vencido" agora é verdadeiro
            break;
        }
    }

    if (roundWon) {
        //Se o round for declarado um vencedor, vai imprimir um result de acordo com o if abaixo

        //Nesse if inline, faz a verificação se o movimento está em 0 ou 1, que identifica "X" e "O"
        result.innerHTML += (move == 1)? "X é o Vencedor!": "O é o Vencedor!";
        
        //Adiciona a classe "vencedor" ao result, colorindo de verde
        result.classList.add("winner");

        return;
    }
    else if (velha === 9){
        //Se a contagem de jogadas chegar em 9 e não foi declarada a vitória ainda, significa que todos os espaços foram
        //... preenchidos e ninguém ganhou, ou seja, deu "Velha"
        
        //Adiciona a classe "velha" ao html, colorindo de vermelho
        contentBox.classList.add("velha");
        resetGameBtn.style.backgroundColor = "rgb(185, 30, 30)";
        resetGameBtn.style.border = "rgb(185, 30, 30)";

        return;
    }
}

//Função para resetar o jogo
function reset() {
    //Limpa o array "tabuleiro" onde foram armazenadas as jogadas
    board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    //Aqui é executada uma função de limpar o espaço em cada um dos elementos .space
    space.forEach((element) => {
        element.innerHTML = "";
    });

    //Limpa o conteúdo do resultBox
    result.innerHTML = "";

    //Limpa as classes que foram adicionadas "vitória" e "velha", e volta para as cores iniciais neutras
    result.classList.remove("winner");
    contentBox.classList.remove("velha");
    resetGameBtn.style.backgroundColor = "black";
    resetGameBtn.style.border = "black";

    //Volta o contador de jogadas para 0
    velha = 0

    return;

}

