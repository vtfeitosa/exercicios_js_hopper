import printPageBrigadeiros from './brigadeiros.js';
import printPageCupcakes from './cupcakes.js';
import printPageDoces from './doces.js';

export default function printPageHome(){
    const contentBox = document.querySelector("#pageMainContent");

    contentBox.innerHTML = `
        <img id="logo" src="./assets/img/logo/logo_lc.png">
        <div id="categories">
        <button id="btnBrigadeiros" type="button">Brigadeiros</button>
        <button id="btnCupcakes" type="button">Cupcakes</button>
        <button id="btnDoces" type="button">Doces</button>
        </div>
    `

    const btnBrigadeiros = document.querySelector("#btnBrigadeiros").addEventListener('click', printPageBrigadeiros);
    const btnCupcakes = document.querySelector("#btnCupcakes").addEventListener('click', printPageCupcakes);
    const btnDoces = document.querySelector("#btnDoces").addEventListener('click', printPageDoces);

    return "Home"
}