"use strict"

//Função para escrever um determinado conteúdo na página
function writePageContent(content){
    contentBox.innerHTML += (content);
}

////////////////////////////

import printPageHome from './home.js';
import printPageBrigadeiros from './brigadeiros.js';
import printPageCupcakes from './cupcakes.js';
import printPageDoces from './doces.js';

console.log(printPageHome());
console.log(printPageBrigadeiros());
console.log(printPageCupcakes());
console.log(printPageDoces());
