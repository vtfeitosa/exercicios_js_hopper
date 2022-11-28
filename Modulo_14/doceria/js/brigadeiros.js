export default function printPageBrigadeiros(){
    const contentBox = document.querySelector("#pageMainContent");
    contentBox.innerHTML = `
    <h1>Brigadeiros</h1>
    <p>Você foi redirecionado. Essa é a página Brigadeiros :)</p>
    <p>Clique no botão abaixo para voltar para Pagina Principal</p>
    <button id="btnHome" type="button">Voltar para o Início</button>
    `
    return "Brigadeiros"
}