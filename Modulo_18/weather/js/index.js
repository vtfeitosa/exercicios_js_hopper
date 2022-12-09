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
<p>Last Update on monthName | dayNumber | 2022 </p>
`);

////////////////////////////
const stateInput = document.createElement("select");

stateInput.addEventListener('change', citySelection);

function printPage(){
    stateSelection();
    
}

printPage();

function stateSelection(){

    contentBox.appendChild(stateInput);

    fetch(` https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)

    .then((states) => {
        return states.json();
    })

    .then((states) => {
        const option = document.createElement("option");

        option.innerText = "Selecione um Estado";
        option.value = "";
        stateInput.appendChild(option);

        for(let s = 0; s < states.length ; s++){
            const option = document.createElement("option");
            
            option.value = states[s].sigla;
            option.innerText = states[s].nome;
            stateInput.appendChild(option);
        }
    })

}

function citySelection(){
    const UFselected = stateInput.value;
    console.log(UFselected);

    const cityInput = document.createElement("select");
    contentBox.appendChild(cityInput);

    if(UFselected === ""){
        alert("Selecione um estado Válido");
        printPage();

    }else{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UFselected}/distritos`)

        .then((cities) => {
            return cities.json();
        })

        .then((cities) => {
            const option = document.createElement("option");

            option.innerText = "Selecione uma Cidade";
            option.value = "";

            cityInput.appendChild(option);
            console.log("oi");

            for(let s = 0; s < cities.length ; s++){
                const option = document.createElement("option");
                
                option.innerText = cities[s].nome;
                cityInput.appendChild(option);
            }
        })
    }

    

}

//[{"id":520005005,"nome":"Abadia de Goiás","municipio":{"id":5200050,"nome":"Abadia de Goiás","microrregiao":{"id":52010,"nome":"Goiânia","mesorregiao":{"id":5203,"nome":"Centro Goiano","UF":{"id":52,"sigla":"GO","nome":"Goiás","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}}}}