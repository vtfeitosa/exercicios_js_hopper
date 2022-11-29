import printPageBrigadeiros from './brigadeiros.js';
import printPageCupcakes from './cupcakes';
import printPageDoces from './doces.js';
import printPageHome from './home.js';

export default function router(page){
    const routerObj = {
        "/": printPageHome,
        "/brigadeiros": printPageBrigadeiros,
        "/cupcakes": printPageCupcakes,
        "/doces": printPageDoces,

        getPage: function(url){
            switch(url){
                case "/":
                    return printPageHome();

                case "/brigadeiros":
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