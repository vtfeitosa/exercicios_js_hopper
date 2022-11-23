"use strict"

//Elemento do DOM no qual o conteúdo será impresso
let contentBox = document.querySelector("#pageMainContent");

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
<p>Last Update on November | 23 | 2022 </p>
`);

////////////////////////////

writePageContent(`
<img id="logo" src="./assets/img/logo/logo_lc.png">
<h2>Produtos:</h2>
<div id="categories">
    <button id="btnBrownies" type="button">Brownies</button>
    <button id="btnTorta" type="button">Torta</button>
    <button id="btnOvo" type="button">Ovo de Páscoa</button>
</div>
<section id="boxImg"></section>
`);

const btnBrownies = document.getElementById("btnBrownies");
const btnTorta = document.getElementById("btnTorta");
const btnOvo = document.getElementById("btnOvo");

const boxImg = document.getElementById("boxImg");

import * as pagBrownies from './brownies.js';
import * as pagTorta from './torta.js';
import * as pagOvo from './ovo.js';

btnBrownies.addEventListener('click', browniesPage);
btnTorta.addEventListener('click', tortaPage);
btnOvo.addEventListener('click', ovoPage);

function browniesPage(){
    
    history.pushState('','', 'brownies');

    if (location.pathname == '/brownies'){
        boxImg.innerHTML = pagBrownies.showBrowniesIMG();
    }
}

function tortaPage(){
    history.pushState('','', 'torta');

    if (location.pathname == '/torta'){
        boxImg.innerHTML = pagTorta.showTortaIMG();
    }
}

function ovoPage(){
    history.pushState('','', 'ovo');

    if (location.pathname == '/ovo'){
        boxImg.innerHTML = pagOvo.showOvoIMG();
    }
}