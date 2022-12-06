"use strict"

//Elemento do DOM no qual o conteúdo será impresso
const contentBox = document.querySelector("#pageMainContent");

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
<p>Last Update on December | 05 | 2022 </p>
`);

////////////////////////////

const title = document.createElement("h1");
const paragraph = document.createElement("p");
const imgBox = document.createElement("img");
const selectBox = document.createElement("div")
const select = document.createElement("select");
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
    contentBox.appendChild(selectBox);
    selectBox.appendChild(select);
    contentBox.style.backgroundColor = "white";

        for(let o = 1 ; o < 61; o++){
            let option = document.createElement("option");

            select.appendChild(option);
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

function btnAction(){
    if(timerStatus === "off"){
        ativarTimer();

    }else if(timerStatus === "on"){
        desativarTimer();

    }else{
        resetTimer();

    }

}

function ativarTimer(){
    timerStatus = "on";
    btn.innerText = "Parar Contagem";
    selectBox.innerHTML = "";
    remainingTime = select.value *60;
    const maxTime = select.value *60;

    intervalStatus = setInterval(contagem, 1000);

    function contagem() {

        if(remainingTime <= (5/100)*maxTime){
            contentBox.style.backgroundColor = "red";

        }

        if(remainingTime === 0){
            return dispararAlarme();

        }
        
        paragraph.innerText = "Seu timer vai disparar dentro de " + remainingTime + " segundos.";

        audio.src = "./assets/audio/tick.mp3";
        audio.play();
        remainingTime--;
        
    }

    select.innerHTML = "";

}

function desativarTimer(){
    timerStatus = "paused";
    btn.innerText = "Zerar Timer";

    clearInterval(intervalStatus);

}

function resetTimer(){
    console.log("zerei")
    remainingTime = "";

    printPage();

}

function dispararAlarme(){
    timerStatus = "end";
    paragraph.innerText = "Seu tempo acabou! :)";

    clearInterval(intervalStatus);

    audio.src = "./assets/audio/pow.mp3"
    audio.play();
    
}

