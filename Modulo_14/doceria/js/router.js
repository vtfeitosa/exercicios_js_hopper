import printPageBrigadeiros from './brigadeiros.js';
import printPageCupcakes from './cupcakes.js';
import printPageDoces from './doces.js';
import printPageHome from './home.js';

export default function router(){
    const routerObj = {
        "/": printPageHome,
        "/brigadeiros": printPageBrigadeiros,
        "/cupcakes": printPageCupcakes,
        "/doces": printPageDoces,

        getPage: function(url){
            switch(url){
                case "/":
                    console.log(printPageHome)
                    return printPageHome();

                case "/brigadeiros":
                    console.log(printPageBrigadeiros)

                    return printPageBrigadeiros();

                case "/cupcakes":
                    return printPageCupcakes();
                
                case "/doces":
                    return printPageDoces();

            }
        }
    }
    return routerObj;
} 