export default function printPageHome(){
    const contentBox = document.querySelector("#pageMainContent");
    contentBox.innerHTML = `
        <div id="categories">
        <button id="btnBrownies" type="button">Brownies</button>
        <button id="btnTorta" type="button">Torta</button>
        <button id="btnOvo" type="button">Ovo de Páscoa</button>
        </div>
    `
    return "Home"
}