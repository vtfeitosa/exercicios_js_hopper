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
<p>Last Update on November | 30 | 2022 </p>
`);

////////////////////////////

const audio = document.createElement("audio");
const leg = document.createElement("h3");
const imgBox = document.createElement("img");
let bombaStatus = "";
let timeStatus = "";
let intervalStatus = "";
let maxTime = 60*1000;   

function printPage(){
    bombaStatus = "off";

    leg.innerText = "Clique na bomba para armá-la"
    imgBox.id = "imgBox";
    imgBox.src = "./assets/img/bomba_off.png";

    contentBox.appendChild(leg);
    contentBox.appendChild(imgBox);

    imgBox.addEventListener('click', disparar);

}

printPage();

function disparar(){

    if(bombaStatus === "off"){
        let remainingTime = 59;
        bombaStatus = "on";
        showIMG();
        intervalStatus = setInterval(contagem, 1000);
        leg.innerText = "";
        
        function contagem() {
        leg.innerHTML = "Agora você tem " + remainingTime + " segundos restantes para evitar que a bomba exploda, clique na imagem novamente para desativá-la!";
        remainingTime--;

        audio.src = "./assets/audio/tick.mp3"
        audio.play();
        contentBox.appendChild(audio);
        }

        timeStatus = setTimeout(explodir,maxTime);
        

    }else if(bombaStatus === "on"){
        bombaStatus = "off";
        leg.innerText = "Clique na bomba para armá-la";
        showIMG();
        clearTimeout(timeStatus);
        clearInterval(intervalStatus);

    }else{
        printPage();
    }
       
}

function explodir(){
    bombaStatus = "pow";
    leg.innerText = "Ops... Clique na imagem para resetar a bomba!";

    audio.src = "./assets/audio/pow.mp3"
    audio.play();
    clearInterval(intervalStatus);

    showIMG();

}

function showIMG(){
    if(bombaStatus === "off"){
        imgBox.src = "./assets/img/bomba_off.png";

    }else if(bombaStatus === "on"){
        imgBox.src = "./assets/img/bomba_on.png";

    }else{
        imgBox.src = "./assets/img/pow.jpg";

    }
}
