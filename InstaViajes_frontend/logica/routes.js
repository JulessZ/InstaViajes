//importaciones de las plantillas de las diferentes secciones de la pagina
import { crearposts as crearPostsTemplate } from './../plantillas/crearposts.js';
import { crearactividades as crearActividadesTemplate } from './../plantillas/crearactividades.js';
import { crearviaje as crearViajeTemplate } from './../plantillas/crearviajes.js';
import { detallesviaje as detallesViajeTemplate } from './../plantillas/detallesviajes.js';
import { login as loginTemplate } from './../plantillas/login.js';
import { misviajes as misViajesTemplate } from './../plantillas/misviajes.js';
import { passwordreset as passwordResetTemplate } from './../plantillas/passwordreset.js';
import { perfil as perfilTemplate } from './../plantillas/perfil.js';
import { registro as registroTemplate } from '../plantillas/registro.js';
import { editaractividades as editarActividadesTemplate } from './../plantillas/editaractividades.js';
import { editarviaje as editarViajeTemplate } from './../plantillas/editarviajes.js';
import { home as homeTemplate } from './../plantillas/home.js';
import { amigos as amigosTemplate } from './../plantillas/amigos.js';

// Importaciones de los métodos de render de cada vista
import * as View from './../viewImports.js';

import { isUserAuth } from './../logica/users.js';
//importacion del css
import './../css/style.css';

export function exportLogicRoutes() {
    // Sistema ruta nuevo
    const routes = {
        "/": {
            pathname: '/',
            template: loginTemplate,
            views: [View.renderLogin]
        },
        login: {
            pathname: '/login',
            template: loginTemplate,
            views: [View.renderLogin]
        },
        registro: {
            pathname: '/registro',
            template: registroTemplate,
            views: [View.renderRegistro]
        },
        // passwordreset: {
        //   pathname: '/home',
        //   template: homeTemplate,
        //   views: [homeView, homeSideView]
        // },
        home: {
            pathname: '/home',
            template: homeTemplate,
            views: [View.homeView, View.homeSideView],
            conditions: [isUserAuth]
        },
        perfil: {
            pathname: '/perfil',
            template: perfilTemplate,
            views: [View.renderPerfil],
            conditions: [isUserAuth]
        },
        detallesviaje: {
            pathname: '/detallesviaje',
            template: detallesViajeTemplate,
            views: [View.renderButtonDetallesViajes, View.renderCarouselDetallesViajes, View.renderHeaderDetallesViajes, View.renderPostDetallesViajes],
            conditions: [isUserAuth]
        },
        misviajes: {
            pathname: '/misviajes',
            template: misViajesTemplate,
            views: [View.renderMisViajes],
            conditions: [isUserAuth]
        },
        amigos: {
            pathname: '/amigos',
            template: amigosTemplate,
            views: [View.renderFriends],
            conditions: [isUserAuth]
        },
        // crearactividades: {
        //   pathname: '/crearactividades',
        //   template: crearActividadesTemplate,
        //   views: [null]
        // },
        crearviaje: {
            pathname: '/crearviaje',
            template: crearViajeTemplate,
            views: [View.renderFormCreateTravel],
            conditions: [isUserAuth]
        },
        crearactividades: {
            pathname: '/crearactividades',
            template: crearActividadesTemplate,
            views: [View.renderFormCreateActivity],
            conditions: [isUserAuth]
        },
        // crearviaje: {
        //   pathname: '/crearviaje',
        //   template: crearViajeTemplate,
        //   views: [null]
        // },
        editaractividades: {
            pathname: '/editaractividades',
            template: editarActividadesTemplate,
            views: [View.renderFormEditActivity],
            conditions: [isUserAuth]
        },
        crearpost: {
            pathname: '/crearpost',
            template: crearPostsTemplate,
            views: [View.renderFormCreatePost],
            conditions: [isUserAuth]
        },
        editarviaje: {
            pathname: '/editarviaje',
            template: editarViajeTemplate,
            views: [View.renderEditarViaje],
            conditions: [isUserAuth]
        },
    };

    const appDiv = document.getElementById('app');

    checkCurrentRoute();

    /**
     * Renderiza el template y vistas adecuadas según la ruta de la página actual
     */
    function checkCurrentRoute() {
        let pathnameNoSlash = window.location.pathname.length > 1 ? window.location.pathname.substring(1) : window.location.pathname;

        if (routes[pathnameNoSlash]) {
            appDiv.innerHTML = routes[pathnameNoSlash].template;

            routes[pathnameNoSlash].views.forEach(view => {
                view();
            });
            if (routes[pathnameNoSlash].conditions) {
                routes[pathnameNoSlash].conditions.forEach(async (condition) => {
                    let { auth } = await isUserAuth(); // obtiene solo el valor booleano 'auth' de la respuesta de isUserAuth()
                    if (!auth) {
                        onNavigate("/login");
                    }
                });
            }


        } else {
            // Aqui debemos mostrar la página de un ERROR HTTP 404 (no se encuentra esta pagina)
        }
    }


    /**
     * Renderiza en la página la plantilla y la vista de una ruta dada
     * @param {*} pathname La ruta a renderizar
     */
    const onNavigate = (pathname) => {
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )

        let pathnameNoSlash = pathname.length > 1 ? pathname.substring(1) : pathname;

        appDiv.innerHTML = routes[pathnameNoSlash].template;

        routes[pathnameNoSlash].views.forEach(view => {
            view();
        });
        //logica para que compruebe si estas logueado cuando pulsas en los enlaces
        if (routes[pathnameNoSlash].conditions) {
            routes[pathnameNoSlash].conditions.forEach(async (condition) => {
                let { auth } = await isUserAuth(); // obtiene solo el valor booleano 'auth' de la respuesta de isUserAuth()
                if (!auth) {
                    onNavigate("/login");
                }
            });
        }

    }

    /**
     * Renderiza las vistas de una ruta despues de que el usuario utilice las flechas del navegador para navegar
     */
    window.onpopstate = () => {
        let pathnameNoSlash = window.location.pathname.length > 1 ? window.location.pathname.substring(1) : window.location.pathname;

        appDiv.innerHTML = routes[pathnameNoSlash].template;

        routes[pathnameNoSlash].views.forEach(view => {
            view();
        });
        if (routes[pathnameNoSlash].conditions) {
            routes[pathnameNoSlash].conditions.forEach(async (condition) => {
                let { auth } = await isUserAuth(); // obtiene solo el valor booleano 'auth' de la respuesta de isUserAuth()
                if (!auth) {
                    onNavigate("/login");
                }
            });
        }


    }

    // Hacemos que onNavigate sea usable globalmente
    window.onNavigate = onNavigate;
}
