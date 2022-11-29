"use strict"

//Capturando elementos do DOM para "imprimir" o header e footer
const headerBox = document.querySelector("#developmentBox");
const footerBox = document.querySelector("#infoBox");

//Header
headerBox .innerHTML = (`
<p>Developed by <a href="https://github.com/vtfeitosa" target="_blank">vtfeitosa</a></p>
`);

//Footer
footerBox.innerHTML = (`
<p>So this page was developed as an activity of WEB Development Trail at Alpha EdTech, by the student <a href="https://www.linkedin.com/in/vtfeitosa/" target="_blank">Vitória Feitosa</a>.<br/> All the code is being studied, patience... Thank you for understanding. :) </p>
<p>Last Update on November | 29 | 2022 </p>
`);

////////////////////////////

import router from './router.js';
const routerFunction = router();

const contentBox = document.querySelector("#pageMainContent");

contentBox.addEventListener("onstatechange", function(event){
    const url = event.detail.url;
    
    history.pushState("","", url);

    contentBox.innerHTML = "";
    contentBox.appendChild(routerFunction.getPage(url));
})

contentBox.appendChild(routerFunction.getPage("/"));