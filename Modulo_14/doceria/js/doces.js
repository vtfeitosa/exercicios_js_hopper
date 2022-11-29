import createEvent from './event.js';

export default function printPageDoces(){
        const contentBox = document.querySelector("#pageMainContent");
    const pageBox = document.createElement("section");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const btnHome = document.createElement("button");

    contentBox.appendChild(pageBox);

    pageBox.appendChild(h1);
    pageBox.appendChild(p);
    pageBox.appendChild(btnHome);

    pageBox.id = "pageBox";
    btnHome.id = "btnHome";
    btnHome.type = "button";

    h1.innerText = "Doces";
    p.innerText = `Você foi redirecionado. Essa é a página "Doces". Clique no botão abaixo e volte para a Página Principal`
    btnHome.innerText = "Voltar para o Início";

    btnHome.addEventListener('click', function(){
        const clickHome = createEvent("/");
        contentBox.dispatchEvent(clickHome);
    });

    return contentBox;
}