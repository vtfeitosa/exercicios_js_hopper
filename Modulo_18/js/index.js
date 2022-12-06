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
<p>Last Update on monthName | dayNumber | 2022 </p>
`);

////////////////////////////


const title = document.createElement("h1");
const paragraph = document.createElement("p");
const selectState = document.createElement("select");
const audio = document.createElement("audio");

let option = "";
let timerStatus = "";
let intervalStatus = "";
let timer = "";
let remainingTime = "";

const btn = document.createElement("button");

function printPage(){
    timerStatus = "off";

    contentBox.appendChild(title);
    contentBox.appendChild(paragraph);
    contentBox.appendChild(selectState);

        for(let o = 1 ; o < 61; o++){
            let option = document.createElement("option");

            selectState.appendChild(option);
            option.id = "opt" + o;
            option.value = o;
            option.innerHTML = o;
        }

    contentBox.appendChild(btn);

    title.innerText = "Timer";
    paragraph.innerText = "Selecione abaixo um número em minutos para que o alarme dispare após a contagem acabar"
    btn.innerText = "Iniciar Contagem";

    btn.addEventListener('click', btnAction);

}

printPage();