
// import fetchSim from 'fetch-simulator';
// fetchSim.use();

import { baseUrl } from "../../config";

// // Viajes de otros usuarios de la plataforma
// fetchSim.addRoute('https://somekindofserver.com/travelsRandom', {
//     get: {
//         response: [{

//             location: 'Grecia',
//             image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg',
//             imageuser: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//             username: 'Aram Hernandez',
//             days: 8,
//             NumUsers: 4,

//         },
//         {

//             location: 'Italia',
//             image: 'https://www.surfingtheplanet.com/wp-content/uploads/2017/08/plaza-navona-roma-italia-800x400.jpg',
//             imageuser: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//             username: 'Carmen',
//             days: 4,
//             NumUsers: 2,
//         },
//         {

//             location: 'Berlin',
//             image: 'https://humanidades.com/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg',
//             imageuser: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//             username: 'Diego',
//             days: 3,
//             NumUsers: 8,
//         }
//         ]
//     }
// });


// Viajes de mis amigos
// fetchSim.addRoute('https://somekindofserver.com/user/friends/travels', {
//     get: {
//         response: [{

//             location: 'Grecia',
//             image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg',
//             imageuser: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//             username: 'Aram Hernandez',
//             days: 8,
//             NumUsers: 4,

//         },
//         {

//             location: 'Italia',
//             image: 'https://www.surfingtheplanet.com/wp-content/uploads/2017/08/plaza-navona-roma-italia-800x400.jpg',
//             imageuser: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//             username: 'Carmen',
//             days: 4,
//             NumUsers: 2,
//         },
//         {

//             location: 'Berlin',
//             image: 'https://humanidades.com/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg',
//             imageuser: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//             username: 'Diego',
//             days: 3,
//             NumUsers: 8,
//         }
//         ]
//     }
// });

// Función principal que crea el contenido de la página



export async function renderIndex() {
    const container = document.querySelector('#todosviajeshome')

    const datos = await fetchDatos();
    Creartarjetas(datos);

    async function fetchDatos() {
        const token = localStorage.getItem("auth_token");
        const apiUrl = baseUrl+"api/viajes";
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        };
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    

    function Creartarjetas(datos) {
        datos.forEach(element => {
            let linkDetallesViaje = document.createElement("a");
            linkDetallesViaje.setAttribute("href", "/detallesviaje");
            
            //console.log(element);
            const tarjeta = document.createElement('div');
            tarjeta.setAttribute("class", "tarjetaviaje");

            const divInsideCard = document.createElement('div');
            divInsideCard.setAttribute('class', 'infoViaje');

            const divInsideCard2 = document.createElement('div');
            const divInsideCard3 = document.createElement('div');
            const divInsideCard4 = document.createElement('div');

            divInsideCard2.setAttribute('class', 'cajablancauno');
            divInsideCard3.setAttribute('class', 'cajablancados');

            const image = document.createElement('img');
            image.setAttribute('src', element.image);
            image.setAttribute('class', 'imgViaje');

            const imageuser = document.createElement('img')
            imageuser.setAttribute('src', element.imageuser);
            imageuser.setAttribute('class', 'imageuser');

            const location = document.createElement('h3');
            location.textContent = element.location;

            const user = document.createElement('h5')
            user.textContent = element.username;

            const Numuser = document.createElement('span')
            Numuser.textContent = element.NumUsers;

            const NumDay = document.createElement('span')
            NumDay.textContent = element.days + 'dias';

            linkDetallesViaje.appendChild(tarjeta);
            container.appendChild(linkDetallesViaje);
            tarjeta.appendChild(image);
            divInsideCard.appendChild(divInsideCard2);
            divInsideCard.appendChild(divInsideCard3);
            tarjeta.appendChild(divInsideCard);
            divInsideCard2.appendChild(location);
            divInsideCard2.appendChild(divInsideCard4);
            divInsideCard4.appendChild(imageuser);
            divInsideCard4.appendChild(user);
            divInsideCard3.appendChild(Numuser);
            divInsideCard3.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>');
            divInsideCard3.appendChild(NumDay);
        });

    }
}