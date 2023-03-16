
// import fetchSim from 'fetch-simulator';
// fetchSim.use();

import { baseUrl } from "../../config";


// fetchSim.addRoute('https://somekindofserver.com/user/travels', {
//     get: {
//         response: [{

//             location: 'India',
//             image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg',
//             days: 8,
//             NumUsers: 4,

//         },
//         {

//             location: 'Thailandia',
//             image: 'https://www.surfingtheplanet.com/wp-content/uploads/2017/08/plaza-navona-roma-italia-800x400.jpg',
//             days: 3,
//             NumUsers: 5,
//         },
//         {

//             location: 'Francia',
//             image: 'https://humanidades.com/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg',
//             days: 2,
//             NumUsers: 7,
//         }
//         ]
//     }
// });
//url necesarias para el fetch necesaria en esta vista
let url1=baseUrl+"user/travels";

// Función principal que crea el contenido de la página
export async function renderIndex() {
    const container = document.querySelector('#misviajeshome')

    // Hace una solicitud a la URL definida anteriormente usando fetchDatos() y espera a que se complete la solicitud para crear tarjetas de viaje.
    const datos = await fetchDatos();

    Creartarjetas(datos);

    if (datos.length == 0) {
        window.alert('')
    }

    /**
     * Hace una solicitud a la URL utilizando fetch() y devuelve los datos en formato JSON.
     * @returns 
     */
    async function fetchDatos() {
        const response = await fetch(url1);
        console.log(response);
        return await response.json();
    }

    // Crea una tarjeta de viaje para cada elemento del objeto JSON devuelto por la función fetchDatos()
    function Creartarjetas(datos) {
        // ------creamos el titulo de nuevo viaje------
        const title = document.createElement('h1');
        title.textContent = 'Mis viajes';
        container.appendChild(title);
        //comprobamos que no ha datos en el fetch y solo entonces mostramos el boto de crea tu primer viaje
        if (datos.length === 0) {
            const NewTripDiv = document.createElement('div')
            container.appendChild(NewTripDiv)
            const aNewtrip = document.createElement('a');
            aNewtrip.setAttribute('href', "edit-travel.html");
            aNewtrip.textContent = 'Crea tu primer viaje';
            const buttonNewTrip = document.createElement('button')
            buttonNewTrip.setAttribute('class', 'boton-principal')
            buttonNewTrip.appendChild(aNewtrip);
            NewTripDiv.appendChild(buttonNewTrip);

        } else {

            // Crea el contenido de "Mis viajes"
            const tarjetacontainer = document.createElement('div');
            container.appendChild(tarjetacontainer);
            datos.forEach(element => {
                //Creamos un link para que nos redireccione a los detalles del viaje
                let linkDetallesViaje = document.createElement("a");
                linkDetallesViaje.setAttribute("href", "/detallesviaje");
                // Crea los elementos de la tarjeta de viaje
                const tarjeta = document.createElement('div');
                tarjeta.setAttribute("class",'tarjetaviajehome');
                const divInfo = document.createElement('div');
                divInfo.setAttribute("class","divInfo");
                const divLocation = document.createElement('div');
                const divUserDays = document.createElement('div');
                divUserDays.setAttribute("class","divUserDays");
                // Establece el contenido de los elementos creados
                const image = document.createElement('img');
                image.setAttribute('src', element.image);

                const location = document.createElement('h3');
                location.textContent = element.location
                const Numuser = document.createElement('span')
                Numuser.textContent = element.NumUsers;

                const NumDay = document.createElement('span')
                NumDay.textContent = element.days + 'dias';

                // Agrega los elementos a la tarjeta de viaje
                linkDetallesViaje.appendChild(tarjeta);
                tarjetacontainer.appendChild(linkDetallesViaje);
                tarjeta.appendChild(image);
                divInfo.appendChild(divLocation);
                divInfo.appendChild(divUserDays);
                tarjeta.appendChild(divInfo);
                divLocation.appendChild(location);
                divUserDays.appendChild(Numuser);

                // Agrega un ícono y el número de días a la tarjeta de viaje
                divUserDays.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>');
                divUserDays.appendChild(NumDay)
            });

        }

        if (datos.length === 0) {
            // para que no sea redudante el campo de nuevo viaje se omite en caso de que el usuario no tenga ningun viaje creado.
       
        } else {
            // -----creamos el link a nuevo viaje--------
            const divFoot = document.createElement('div');
            divFoot.setAttribute("class","divFoot");
            const NuevoViaje = document.createElement('a');
            const btnNuevoViaje = document.createElement('input');
            btnNuevoViaje.type="submit";
            btnNuevoViaje.value="Nuevo Viaje";
            btnNuevoViaje.setAttribute('class','boton-secundario');
            NuevoViaje.setAttribute('href', "/crearviaje");
            /* NuevoViaje.textContent = 'Nuevo Viaje'; */
            NuevoViaje.appendChild(btnNuevoViaje);
            container.appendChild(divFoot);
            divFoot.appendChild(NuevoViaje);
        }
    }
}