import {exportLogicRoutes}  from "./logica/routes.js";
import * as users from './logica/users.js';
import { baseUrl } from "./config.js";
// Recoger el elemento body y llamamos a la función init() para que se ejecute mediante event onload
document.querySelector('body').addEventListener('load', init());

// Se recogen todas las funciones de los javascripts que extieneden de este
function init(){
  // Routes.js
  exportLogicRoutes();
  // Users.js
  users.init();
  // users.isUserAuth();
  window.isUserAuth = users.isUserAuth();
  window.baseUrl= baseUrl;
}




