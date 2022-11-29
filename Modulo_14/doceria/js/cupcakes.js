import printPageHome from './home.js';

export default function printPageCupcakes(){
    const contentBox = document.querySelector("#pageMainContent");
    const imgBox = document.createElement("img");
    const pageBox = document.createElement("section");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const btnHome = document.createElement("button");

    contentBox.appendChild(imgLogo);
    contentBox.appendChild(pageBox);

    pageBox.appendChild(h1);
    pageBox.appendChild(p);
    pageBox.appendChild(btnHome);

    imgBox.id = "logo";
    imgBox.src = "./assets/img/logo/logo_lc.png"    
    pageBox.id = "pageBox";
    btnHome.id = "btnHome";
    btnHome.type = "button";

    h1.innerText = "Cupcakes";
    p.innerText = `Você foi redirecionado. Essa é a página "Cupcakes". Clique no botão abaixo e volte para a Página Principal`
    btnHome.innerText = "Voltar para o Início";

    btnHome.addEventListener('click', printPageHome);

    return contentBox;
}