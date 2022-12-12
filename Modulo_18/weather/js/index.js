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
<p>Last Update on December | 12 | 2022 </p>
`);

////////////////////////////
const stateInput = document.createElement("select");
const cityInput = document.createElement("select");
const erro = document.createElement("p");

stateInput.addEventListener('change', citySelection);
cityInput.addEventListener('change', checkWeather);

function printPage(){
    stateSelection();
    
}

printPage();

function stateSelection(){

    contentBox.appendChild(stateInput);
    erro.innerText = "";

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)

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
    const ufSelected = stateInput.value;

    contentBox.appendChild(cityInput);
    contentBox.appendChild(erro);


    if(ufSelected === ""){
        alert("Selecione um estado Válido");
        printPage();

    }else{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios`)

        .then((cities) => {
            return cities.json();
        })

        .then((cities) => {

            cities.sort((a,b)=>{
                if(a.nome > b.nome){
                    return 1;
                }else{
                    return -1;
                }
        })

            const option = document.createElement("option");

            option.innerText = "Selecione uma Cidade";
            option.value = "";
            cityInput.appendChild(option);

            for(let s = 0; s < cities.length ; s++){
                const option = document.createElement("option");
                
                option.innerText = cities[s].nome;
                option.value = cities[s].id;
                cityInput.appendChild(option);

            }
        })

    }  

}

function checkWeather(){
    const citySelectedCode = cityInput.value;
    const todayDate = new Date().toLocaleDateString();

    if(citySelectedCode === ""){
        alert("Selecione um estado Válido");
        printPage();

    }else{
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${citySelectedCode}`)

        .then((weather) => {
            if(weather.status === 200){
                return weather.json();
            }else{
                throw "Problema ao fazer requisição na API"
            }
        })

        .then((weather) => {
            dataPrint(weather[citySelectedCode], todayDate);
        })

        .catch((error) =>{
            console.log("ERRO:" + error);
            erro.innerText = "Problema ao fazer requisição na API";
        })

    }

}

function dataPrint(dados, data){
   
    let indice = 1;

    for(let chave in dados){
        const weatherSection= document.createElement("section");
        weatherSection.classList = "weatherSection";
  
        if(indice < 3){

            const infoDiv = document.createElement("div");
            infoDiv.classList = "infoDiv";

                const cityName = document.createElement("h2");
                cityName.innerText = dados[chave].manha.entidade;
            
                const datePrint = document.createElement("p");
                datePrint.innerText = chave;

                const weekDay = document.createElement("p");
                weekDay.innerText = dados[chave].manha.dia_semana;
                
                const tMin =  document.createElement("p");
                tMin.innerText = "Temperatura Mínima:" + dados[chave].manha.temp_min;

                const tMax =  document.createElement("p");
                tMax.innerText = "Temperatura Máxima:" + dados[chave].manha.temp_max;

            infoDiv.appendChild(cityName);
            infoDiv.appendChild(datePrint);
            infoDiv.appendChild(weekDay);
            infoDiv.appendChild(tMin);
            infoDiv.appendChild(tMax);
            weatherSection.appendChild(infoDiv);

            const periodDiv = document.createElement("div");
            periodDiv.classList = "periodDiv";

                const morningBox = document.createElement("div");
                morningBox.classList = "morningBox";

                    const morningLeg = document.createElement("h3");
                    morningLeg.classList = "morningLeg";
                    morningLeg.innerText = "Manhã:";

                    const morningImg =  document.createElement("img");
                    morningImg.src = dados[chave].manha.icone;

                    const morningSummary =  document.createElement("p");
                    morningSummary.innerText = dados[chave].manha.resumo;

                morningBox.appendChild(morningLeg);
                morningBox.appendChild(morningImg);
                morningBox.appendChild(morningSummary);
                periodDiv.appendChild(morningBox);

                const afternoonBox = document.createElement("div");
                afternoonBox.classList = "afternoonBox";

                    const afternoonLeg = document.createElement("h3");
                    afternoonLeg.classList = "afternoonLeg";
                    afternoonLeg.innerText = "Tarde:";

                    const afternoonImg =  document.createElement("img");
                    afternoonImg.src = dados[chave].tarde.icone;

                    const afternoonSummary =  document.createElement("p");
                    afternoonSummary.innerText = dados[chave].tarde.resumo;

                afternoonBox.appendChild(afternoonLeg);
                afternoonBox.appendChild(afternoonImg);
                afternoonBox.appendChild(afternoonSummary);
                periodDiv.appendChild(afternoonBox);

                const nightBox = document.createElement("div");
                nightBox.classList = "afternoonBox";

                    const nightLeg = document.createElement("h3");
                    nightLeg.classList = "nightLeg";
                    nightLeg.innerText = "Noite:";

                    const nightImg =  document.createElement("img");
                    nightImg.src = dados[chave].noite.icone;

                    const nightSummary =  document.createElement("p");
                    nightSummary.innerText = dados[chave].noite.resumo;

                nightBox.appendChild(nightLeg);
                nightBox.appendChild(nightImg);
                nightBox.appendChild(nightSummary);
                periodDiv.appendChild(nightBox);

            weatherSection.appendChild(periodDiv);
           
            contentBox.appendChild(weatherSection);
            
            console.log("oi1");

        }else{ 
        
            const infoDiv = document.createElement("div");
            infoDiv.classList = "infoDiv";

                const cityName = document.createElement("h2");
                cityName.innerText = dados[chave].entidade;
            
                const datePrint = document.createElement("p");
                datePrint.innerText = chave;

                const weekDay = document.createElement("p");
                weekDay.innerText = dados[chave].dia_semana;
                
                const tMin =  document.createElement("p");
                tMin.innerText = "Temperatura Mínima:" + dados[chave].temp_min;

                const tMax =  document.createElement("p");
                tMax.innerText = "Temperatura Máxima:" + dados[chave].temp_max;

                const img =  document.createElement("img");
                img.src = dados[chave].icone;

                const resumo =  document.createElement("p");
                resumo.innerText = dados[chave].resumo;

            infoDiv.appendChild(cityName);
            infoDiv.appendChild(datePrint);
            infoDiv.appendChild(weekDay);
            infoDiv.appendChild(tMin);
            infoDiv.appendChild(tMax);
            infoDiv.appendChild(img);
            infoDiv.appendChild(resumo);

            weatherSection.appendChild(infoDiv);
            
            contentBox.appendChild(weatherSection);

        }   

        indice++

    }

}