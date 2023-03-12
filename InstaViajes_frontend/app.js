//importaciones de las plantillas de las diferentes secciones de la pagina
import { crearactividades as crearActividadesTemplate } from '/plantillas/crearactividades.js';
import { crearviaje as crearViajeTemplate } from '/plantillas/crearviajes.js';
import { detallesviaje as detallesViajeTempalte } from '/plantillas/detallesviajes.js';
import { login as loginTemplate } from '/plantillas/login.js';
import { misviajes as misViajesTemplate } from '/plantillas/misviajes.js';
import { passwordreset as passwordResetTemplate } from '/plantillas/passwordreset.js';
import { perfil as perfilTemplate } from '/plantillas/perfil.js';
import { registro as registroTemplate } from '/plantillas/registro.js';
import { editaractividades as editarActividadesTemplate } from '/plantillas/editaractividades.js';
import { editarviaje as editarViajeTemaplte } from '/plantillas/editarviajes.js';
import { home as homeTemplate } from './plantillas/home.js';
import { amigos } from './plantillas/amigos.js';

// Importaciones de los métodos de render de cada vista
// HOME
import { renderIndex as homeView } from './vistas/home/javaIndex.js';
import { renderIndex as homeSideView } from './vistas/home/javaIndexLog.js'

//importacion del css
import './css/style.css';

// Sistema ruta antiguo
// const routes = {
//   '/': login,
//   '/registro': registro,
//   '/passwordreset': passwordreset,
//   '/home': home,
//   '/perfil': perfil,
//   '/detallesviaje': detallesviaje,
//   '/misviajes': misviajes,
//   '/amigos': amigos,
//   '/crearactividades': crearactividades,
//   '/crearviaje': crearviaje,
//   '/editarviaje': editarviaje,
//   '/editaractividades': editaractividades
// }

// Sistema ruta nuevo
const routes = {
  home: {
    pathname: '/home',
    template: homeTemplate,
    views: [homeView, homeSideView]
  }
};

const appDiv = document.getElementById('app');


checkCurrentRoute();

function checkCurrentRoute() {
  console.log(window.location.pathname);

  let pathnameNoSlash = window.location.pathname.substring(1);

  if (routes[pathnameNoSlash]) {
    appDiv.innerHTML = routes[pathnameNoSlash].template;

    routes[pathnameNoSlash].views.forEach(view => {
      view();
    });

  } else {
    // Aqui debemos mostrar un ERROR 404 (no se encuentra esta pagina)
  }

}


const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )

  let pathnameNoSlash = pathname.substring(1);
  appDiv.innerHTML = routes[pathnameNoSlash].template;

  routes[pathnameNoSlash].views.forEach(view => {
    view();
  });
}

window.onpopstate = () => {
  appDiv.innerHTML = routes[window.location.pathname]
}

window.onNavigate = onNavigate;