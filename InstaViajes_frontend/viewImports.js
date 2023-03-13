/**
 * Este archivo contiene todos los imports necesarios para renderizar los contenidos de cada vista  en los templates
 */

// HOME
export { renderIndex as homeView } from './vistas/home/javaIndex.js';
export { renderIndex as homeSideView } from './vistas/home/javaIndexLog.js'

// LOGIN
export { render as renderLogin } from './vistas/login/login.js';

// AMIGOS
export { showData as renderFriends } from './vistas/amigos/feature-friends.js';

// MIS VIAJES
export { getMisViajesData as renderMisViajes } from './vistas/mis-viajes/mis-viajes.js';

// DETALLES DE UN VIAJE
export { renderHeader as renderHeaderDetallesViajes } from './vistas/detallesviaje/travel-show.js';
export { renderButtonTravel as renderButtonDetallesViajes } from './vistas/detallesviaje/travel-show.js';
export { renderDivCarousel as renderCarouselDetallesViajes } from './vistas/detallesviaje/travel-show.js';

//EDICIÓN DE UN VIAJE
export { renderEditForm as renderEditarViaje } from './vistas/editarviaje/edit-travel.js';


// PERFIL
export { renderProfile as renderPerfil } from './vistas/perfil/perfil.js';

//EDICIÓN DE UN VIAJE
export { renderEditForm as renderEditarViaje } from './vistas/editarviaje/edit-travel.js';