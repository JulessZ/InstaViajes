//importaciones de las plantillas de las diferentes secciones de la pagina
import {crearactividades} from '/plantillas/crearactividades.js';
import {crearviaje}  from '/plantillas/crearviajes.js';
import {detallesviaje}  from '/plantillas/detallesviajes.js';
import {login}  from '/plantillas/login.js';
import {misviajes}  from '/plantillas/misviajes.js';
import {passwordreset} from '/plantillas/passwordreset.js';
import {perfil}  from '/plantillas/perfil.js';
import {registro}  from '/plantillas/registro.js';
import {editaractividades} from '/plantillas/editaractividades.js';
import {editarviaje}  from '/plantillas/editarviajes.js';
import {home} from './plantillas/home.js';
import {amigos} from './plantillas/amigos.js';

//importacion del css
import './css/style.css' ;
const routes = {
    '/': login,
     '/registro': registro,
    '/passwordreset' : passwordreset, 
    '/home':home,
     '/perfil' : perfil,
    '/detallesviaje' : detallesviaje,
    '/misviajes' : misviajes,
    '/amigos' : amigos,
    '/crearactividades': crearactividades,
    '/crearviaje' : crearviaje,
    '/editarviaje' : editarviaje,
    '/editaractividades' : editaractividades,
}
 const appDiv = document.getElementById('app');
 appDiv.innerHTML=routes[window.location.pathname];

 const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    appDiv.innerHTML = routes[pathname]
  }

  window.onpopstate = () => {
    appDiv.innerHTML = routes[window.location.pathname]
  }

window.onNavigate =onNavigate;