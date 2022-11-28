import printPageHome from './home.js';

export default function printPageCupcakes(){
    const contentBox = document.querySelector("#pageMainContent");
    contentBox.innerHTML = `
    <img id="logo" src="./assets/img/logo/logo_lc.png">
    <section id="pageBox">
        <h1>Cupcakes</h1>
        <p>Você foi redirecionado. Essa é a página "Cupcakes" :)</p>
        <p>Clique no botão abaixo para voltar para Pagina Principal</p>
        <button id="btnHome" type="button">Voltar para o Início</button>
    </section>
    `
    const btnHome = document.querySelector("#btnHome").addEventListener('click', printPageHome);

    return "Cupcakes"
}