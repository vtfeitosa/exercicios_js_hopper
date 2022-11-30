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

//const h1 =document.createElement("h1");
const audio = document.createElement("audio");
const p = document.createElement("h3");
const imgBox = document.createElement("img");
let bombaStatus = "";
let timeStatus = "";


function printPage(){
    bombaStatus = "off";

    p.innerText = "Clique na bomba para armá-la"
    imgBox.id = "imgBox";
    imgBox.src = "./assets/img/bomba_off.png";

    contentBox.appendChild(p);
    contentBox.appendChild(imgBox);

    imgBox.addEventListener('click', contagem);

}

printPage();

function contagem(){

    if(bombaStatus === "off"){
        bombaStatus = "on";
        armou();
        timeStatus = setTimeout(explodir,10000);

    }else if(bombaStatus === "on"){
        bombaStatus = "off";
        p.innerText = "Clique na bomba para armá-la"
        clearTimeout(timeStatus);
        showIMG();

    }else{
        printPage();
    }
       
}

function armou(){
    showIMG();
    p.innerText = `Agora você tem pouco tempo para evitar que exploda, clique na imagem novamente para desativá-la!`

}

function explodir(){

    audio.src = "./assets/audio/pow.mp3"
    audio.play();
    contentBox.appendChild(audio);


    bombaStatus = "pow";

    showIMG();
    p.innerText = "";

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
