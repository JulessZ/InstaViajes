import {exportLogicRoutes}  from "./logica/routes.js";

// Recoger el elemento body y llamamos a la función init() para que se ejecute mediante event onload
document.querySelector('body').addEventListener('load', init());

// Se recogen todas las funciones de los javascripts que extieneden de este
function init(){
  exportLogicRoutes();
  
}





