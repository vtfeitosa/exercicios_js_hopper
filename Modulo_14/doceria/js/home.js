import printPageBrigadeiros from './brigadeiros.js';
import printPageCupcakes from './cupcakes.js';
import printPageDoces from './doces.js';

export default function printPageHome(){
    const contentBox = document.querySelector("#pageMainContent");

    const imgBox = document.createElement("img");
    const div = document.createElement("div");
    const btnBrigadeiros = document.createElement("button");
    const btnCupcakes = document.createElement("button");
    const btnDoces = document.createElement("button");

    contentBox.appendChild(imgBox);
    contentBox.appendChild(div);

    div.appendChild(btnBrigadeiros);
    div.appendChild(btnCupcakes);
    div.appendChild(btnDoces);

    imgBox.id = "logo";
    imgBox.src = "./assets/img/logo/logo_lc.png"
    div.id = "categories";

    btnBrigadeiros.id = "btnBrigadeiros";
    btnCupcakes.id = "btnCupcakes";
    btnDoces.id = "btnDoces";

    btnBrigadeiros.type = "button";
    btnCupcakes.type = "button";
    btnDoces.type = "button";

    btnBrigadeiros.innerText = "Brigadeiros";
    btnCupcakes.innerText = "Cupcakes";
    btnDoces.innerText = "Doces";

    btnBrigadeiros.addEventListener('click', printPageBrigadeiros);
    btnCupcakes.addEventListener('click', printPageCupcakes);
    btnDoces.addEventListener('click', printPageDoces);

    return contentBox
}

