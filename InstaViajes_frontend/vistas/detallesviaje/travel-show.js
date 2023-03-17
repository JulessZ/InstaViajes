
// import fetchSim from 'fetch-simulator';
// fetchSim.use();

import { baseUrl } from "../../config";

// fetchSim.addRoute('https://somekindofserver.com/travel/2', {
//     get: {
//         response: [{
//             trip: {
//                 title: "Viaje a Madrid",
//                 participants: ["Diego", "Aram", "Jorge", "Carmen"],
//                 state: "En curso",
//                 budget: 2000.54,
//                 days: [
//                     {
//                         date: "Día 23/03/2023",
//                         activities: [
//                             {
//                                 id: 1,
//                                 title: "Visita al museo de cera.",
//                                 budget: 255.45,
//                                 type: "Museo",
//                                 votes: 15,
//                                 image: "https://ep01.epimg.net/verne/imagenes/2015/03/05/articulo/1425549987_841133_1425571033_noticia_normal.jpg",
//                                 description: "Visita guiada al museo del prado de Madrid.",
//                                 duration: "2 horas"
//                             },
//                             {
//                                 id: 2,
//                                 title: "Visita al parque del retiro.",
//                                 budget: 24,
//                                 type: "Monumentos públicos",
//                                 votes: 10,
//                                 image: "https://madridando.com/wp-content/uploads/2018/07/el-retiro.jpeg",
//                                 description: "Vuelta de reconocimiento a la plaza de españa.",
//                                 duration: "1 horas"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         }]
//     }
// });
let id_viaje = 3;
let url = baseUrl + "api/viajes/3";

export function renderHeader() {
    const container = document.querySelector("#detallesviaje");
    const token = localStorage.getItem("auth_token");
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        },
    };
    // Sends the request to the server using fetch
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const headerContainer = document.createElement('div'); // Nuevo contenedor para el encabezado
            const container_title = document.createElement('h1'); //? Titulo para el Viaje.
            const container_participants = document.createElement('h3'); //? Sub-titulo para los nombres de los participantes del viaje.
            const container_budget = document.createElement('h3'); //? Sub-titulo para el presupuesto del viaje.
            const container_state = document.createElement('h4'); //? Titulo pequeño para el estado del viaje.
            const container_owner = document.createElement('h5'); //? dueño del viaje.
            container_title.innerText = data.title;
            container_participants.innerText = "Participantes: " + data.participants[0];
            container_budget.innerText = "Presupuesto: " + data.budget + "€";
            container_state.innerText = "Estado: " + data.state;
            // container_owner.innerText = "Dueño: " + data[0].trip.owner;
            headerContainer.appendChild(container_title);
            headerContainer.appendChild(container_state);
            container.appendChild(headerContainer);
            container.appendChild(container_participants);
            container.appendChild(container_budget);
            container.appendChild(container_owner);
            headerContainer.classList.add('d-flex', 'justify-content-between', 'align-items-center'); // Aplicar clases de Bootstrap
            container_title.classList.add('mr-4'); // Agregar margen derecho para separar el título del estado
            // principalDiv.appendChild(container);
        })
        .catch(error => {
            console.log(error);
        });
}


export function renderButtonTravel() {
    const buttonsTravelDiv = document.querySelector("#detallesactividades");

    // Creamos los botones de editar y borrar un viaje.
    const editButtonTravel = document.createElement("button");
    editButtonTravel.innerText = "Editar Viaje";
    editButtonTravel.classList.add("boton-secundario");
    editButtonTravel.addEventListener("click", () => {
        //!Aquí irá la lógica para ir a la vista de editar día
        document.location.href = "/editarviaje";
    });
    const deleteButtonTravel = document.createElement("button");
    deleteButtonTravel.innerText = "Borrar Viaje";
    deleteButtonTravel.classList.add("boton-cancelar");
    deleteButtonTravel.addEventListener("click", () => {
        //! Aquí irá la lógica para borrar un día
    });
    // Creamos el boton de añadir nueva actividad.
    const createButtonActivity = document.createElement("button");
    createButtonActivity.innerText = "Agregar actividad";
    createButtonActivity.classList.add("boton-principal");
    createButtonActivity.addEventListener("click", () => {
        //!Aquí irá la lógica para ir a la vista de agregar actividad.
        document.location.href = "/crearactividades";
    });
    // Agregamos los botones de borrar, editar un viaje al contenedor principal y añadir actividad.
    buttonsTravelDiv.appendChild(editButtonTravel);
    buttonsTravelDiv.appendChild(deleteButtonTravel);
    buttonsTravelDiv.appendChild(createButtonActivity);
    // principalDiv.appendChild(buttonsTravelDiv);
}


const prueba = document.createElement("div");
export function renderDivCarousel() {
    const carouselDiv = document.querySelector("#carruselitinerario");
    let isFirstItem = true;
    const token = localStorage.getItem("auth_token");
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        },
    };
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            data.days.forEach((day, index) => {
                const dayItem = document.createElement("div"); //? Contenedor para almacenar los datos de cada día de un viaje.
                dayItem.classList.add("day-item");
                dayItem.innerHTML = `<h2>${day.title}</h2>`;
                dayItem.dataset.index = index;

                carouselDiv.appendChild(dayItem); //? Agregar al contendor padre del HTML cada contenedor (día) que tiene el viaje.
                if (isFirstItem) {
                    dayItem.classList.add("carousel-item", "active");
                    isFirstItem = false; // Cambiar el estado de la variable para los siguientes items del carrusel
                } else {
                    dayItem.classList.add("carousel-item");
                }
                const activitiesDiv = document.createElement("div"); //? Contenedor para almacenar actividades dentro de cada día.
                activitiesDiv.innerText = `ACTIVIDADES: `;
                dayItem.appendChild(activitiesDiv);
                const activityList = document.createElement("ul"); //? Lista para almacenar actividades.
               
                    const activityItem = document.createElement("li");

                    //Parte de los votos
                    const voteButton = document.createElement("span");
                    const voteCount = document.createElement("span");
                    voteButton.innerHTML = '<i class="far fa-heart"></i>';
                    voteCount.innerText = `${day.votes}`;

                    activityList.style.listStyleType = "none";
                    activityItem.innerText = `${day.title} (${day.type})`;
                    const deleteButton = document.createElement("button");
                    deleteButton.innerText = "Borrar";
                    deleteButton.classList.add("boton-cancelar");
                    deleteButton.addEventListener("click", () => {
                        //! Aquí se implementaría la lógica para ir borrar la actividad.
                    });
                    const editButton = document.createElement("button");
                    editButton.innerText = "Editar";
                    editButton.classList.add("boton-secundario");
                    editButton.addEventListener("click", () => {
                        //! Aquí se implementaría la lógica para ir a la vista de editar actividad.
                        document.location.href = "/editaractividades";
                    });

                    voteButton.addEventListener("click", () => {
                        const token = localStorage.getItem("auth_token");
                        const requestOptions = {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + token,
                            },
                        };
                        fetch(url, requestOptions)
                            .then(response => response.json())
                            .then(data => {
                                // si la solicitud se realiza con éxito, actualizar el número de votos y desactivar el botón
                                for (let i = 0; i < data.length; i++) {
                                    voteCount.innerText = `${(data[i].days[i].votes) + 1}`;
                                    voteCount.innerText = "¡Has votado!";
                                }
                                voteButton.disabled = true;
                            })
                            .catch(error => {
                                console.error("Error al registrar el voto:", error);
                            });
                    });

                    activityItem.appendChild(editButton);
                    activityItem.appendChild(deleteButton);
                    activityList.appendChild(activityItem);

                    //Añadir nodos de la votación.
                    activityItem.appendChild(voteButton);
                    activityItem.appendChild(voteCount);

                    activitiesDiv.appendChild(activityList);
                
                // principalDiv.appendChild(carouselDiv);
            });


            function handleDayClick(event) {
                const dayItem = event.target.closest(".day-item"); //? Buscar elemento más cercano con la clase ".day-item". Almacenarlo en una constante.
                if (dayItem && event.target.tagName !== "BUTTON" && event.target.tagName !== "SPAN" && event.target.tagName !== "I") {
                    //! Obtener el día seleccionado y sus datos asociados a través del índice del elemento HTML seleccionado.
                    const dayIndex = dayItem.dataset.index;
                    const day = data.days[dayIndex];
                    renderItinerary(day);
                }
            }
            carouselDiv.addEventListener("click", handleDayClick);

            const prevButton = document.querySelector(".carousel-control-prev");
            const nextButton = document.querySelector(".carousel-control-next");
            prevButton.addEventListener("click", () => {
                const itineraryListDiv = document.querySelector("#itinerarylist");
                borrarNodo(itineraryListDiv);
            });
            nextButton.addEventListener("click", () => {
                const itineraryListDiv = document.querySelector("#itinerarylist");
                borrarNodo(itineraryListDiv);
            });


        })
}

function renderItinerary(day) {
    const itineraryListDiv = document.querySelector("#itinerarylist");
    borrarNodo(itineraryListDiv); // borra el contenido anterior del itinerario
    const itineraryTitleDiv = document.createElement("div");
    itineraryTitleDiv.innerHTML = `<h3>ITINERARIO: ${day.title}</h3>`;
    itineraryListDiv.appendChild(itineraryTitleDiv);
    const activityList = document.createElement("ul");
  
        const activityItem = document.createElement("li");
        activityList.style.listStyleType = "none";
        activityItem.innerHTML = `<h4>${day.title} - ${day.budget}€</h4><p>${day.description}</p><p>Duración: ${day.duration} minutos</p>`;
        activityList.appendChild(activityItem);
    
    itineraryListDiv.appendChild(activityList);
}


function borrarNodo(nodo) {
    if (nodo.hasChildNodes()) {
        while (nodo.firstChild) {
            nodo.removeChild(nodo.firstChild);
        }
    }
}

//Función que renderiza los post que crea el usuario
export function renderPost() {
    const travelPostsDiv = document.querySelector("#postsViaje");

    const addPostButtonDiv = document.createElement("div");
    addPostButtonDiv.className = "mt-5";

    const addPostButton = document.createElement("button");
    addPostButton.setAttribute('onclick', 'onNavigate("/crearpost"); return false;');
    addPostButton.className = "boton-principal";
    const postButtonText = document.createTextNode("Agregar Post");

    const addPostCardDiv = document.createElement("div");
    addPostCardDiv.className = "misviajes mb-5 mt-5 ms-5";

    addPostButton.appendChild(postButtonText);
    addPostButtonDiv.appendChild(addPostButton);
    travelPostsDiv.appendChild(addPostButtonDiv);

    const token = localStorage.getItem("auth_token");
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        },
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            let posts = data.posts;

            posts.forEach(element => {
                let card = document.createElement("div");
                card.className = "cajaSombra cajatarjeta";

                let imgDiv = document.createElement("div");
                let img = document.createElement("img");
                img.src = element.img;
                imgDiv.appendChild(img);

                let dataDiv = document.createElement("div");
                dataDiv.className = "divdatos";
                let textElement = document.createElement("p");
                let text = document.createTextNode(element.text);
                textElement.appendChild(text);
                dataDiv.appendChild(textElement);

                card.appendChild(imgDiv);
                card.appendChild(dataDiv);

                addPostCardDiv.appendChild(card);
                travelPostsDiv.appendChild(addPostCardDiv);
            });
        })
}