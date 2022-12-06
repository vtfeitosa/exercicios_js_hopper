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

const cep = document.createElement("input");
const btnConsult = document.createElement("button");
const btnMap = document.createElement("button");

const inpBox = document.createElement("div");
const addressBox = document.createElement("div");
const mapBox = document.createElement("div");

const mapFrame = document.createElement("iframe");

let LAT = ""
let LNG = "";


function printPage(){

    contentBox.appendChild(title);
    contentBox.appendChild(inpBox);
    inpBox.appendChild(cep);
    inpBox.appendChild(btnConsult);

    cep.id = "cep";
    btnConsult.id = "btnConsult";
    addressBox.id = "address";

    title.innerText = "Digite um CEP:";
    btnConsult.innerText = "Consultar"

}

printPage();

cep.addEventListener ('input', inputCep);
cep.addEventListener ('keyup', keyupCep);


// Função dedicada a limitar o input apenas para números
function inputCep() {

    if (isNaN(cep.value)){
        cep.value = cep.value.slice(0, -1);

    }
}


// Função dedicada a limitar o input com número 'x' de caracteres
function keyupCep(){

    if(cep.value.length>=9){
        let cont = parseInt( cep.value.length - (cep.value.length - 8));
        cep.value =  cep.value.slice(0, 8);
        return;

    }

}


// Função dedicada a capturar o input 'cep' e preencher o <p> com o Endereço completo.

btnConsult.addEventListener('click',checkAdress);

function checkAdress(){

    if (cep.value.length < 8){
        alert("Insira um CEP válido de 8 dígitos")
        return printPage();

    }

    contentBox.appendChild(addressBox);
    contentBox.appendChild(mapBox);

    mapBox.id = "mapBox";

    addressBox.appendChild(paragraph);
    mapBox.appendChild(btnMap);


    fetch(`https://cep.awesomeapi.com.br/json/${cep.value}`)

        .then((res) => {
            return res.json();
        })

        .then((data) => {
            
            paragraph.innerText = `${data.address}, ${data.district}, ${data.city} - ${data.state} (Latitude: ${data.lat} - Longitude: ${data.lng})`
            btnMap.innerText = "Exibir Mapa"
            LAT = data.lat;
            LNG = data.lng;

        })

}

btnMap.addEventListener('click',showMap);

function showMap(){

    mapBox.appendChild(mapFrame);
    console.log(LNG)

    mapFrame.width = "600";
    mapFrame.height = "250";
    mapFrame.src = `https://maps.google.com/maps?q=${LAT},${LNG}&hl=pt&z=14&output=embed`    

}
