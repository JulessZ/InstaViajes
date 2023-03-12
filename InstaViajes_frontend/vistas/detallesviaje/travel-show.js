// const principalDiv = document.querySelector("#root"); //? Contenedor principal.

import Fetch from 'fetch-simulator';
Fetch.use();

fetch.addRoute('https://somekindofserver.com/travel/2', {
    get: {
        response: [{
            trip: {
                title: "Viaje a Madrid",
                participants: ["Diego", "Aram", "Jorge", "Carmen"],
                state: "En curso",
                budget: 2000.54,
                days: [
                    {
                        date: "Día 23/03/2023",
                        activities: [
                            {
                                id: 1,
                                title: "Visita al museo de cera.",
                                budget: 255.45,
                                type: "Museo",
                                votes: 15,
                                image: "https://ep01.epimg.net/verne/imagenes/2015/03/05/articulo/1425549987_841133_1425571033_noticia_normal.jpg",
                                description: "Visita guiada al museo del prado de Madrid.",
                                duration: "2 horas"
                            },
                            {
                                id: 2,
                                title: "Visita al parque del retiro.",
                                budget: 24,
                                type: "Monumentos públicos",
                                votes: 10,
                                image: "https://madridando.com/wp-content/uploads/2018/07/el-retiro.jpeg",
                                description: "Vuelta de reconocimiento a la plaza de españa.",
                                duration: "1 horas"
                            }
                        ]
                    }
                ]
            }
        }]
    }
});

// const itineraryListDiv = document.createElement("div"); //? Contenedor padre donde se guardan los itinerarios de las actividades.
const itineraryListDiv = document.querySelector('#itinerary-list');

const itineraryTitleDiv = document.createElement("div"); //? Contenedor para almacenar el titulo del itinerario.

export function renderHeader() {
    const container = document.querySelector("#detallesviaje");

    fetch("https://somekindofserver.com/travel/2")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const container_title = document.createElement('h1'); //? Titulo para el Viaje.
            const container_participants = document.createElement('h3'); //? Sub-titulo para los nombres de los participantes del viaje.
            const container_budget = document.createElement('h3'); //? Sub-titulo para el presupuesto del viaje.
            const container_state = document.createElement('h4'); //? Titulo pequeño para el estado del viaje.
            container_title.innerText = data[0].trip.title;
            container_participants.innerText = "Participantes: " + data[0].trip.participants;
            container_budget.innerText = "Presupuesto: " + data[0].trip.budget + "€";
            container_state.innerText = "Estado: " + data[0].trip.state;
            container.appendChild(container_title);
            container.appendChild(container_state);
            container.appendChild(container_participants);
            container.appendChild(container_budget);
            // principalDiv.appendChild(container);
        })
}

export function renderButtonTravel() {
    const buttonsTravelDiv = document.querySelector("#detallesactividades");

    // Creamos los botones de editar y borrar un viaje.
    const editButtonTravel = document.createElement("button");
    editButtonTravel.innerText = "Editar Viaje";
    editButtonTravel.classList.add("boton-secundario");
    editButtonTravel.addEventListener("click", () => {
        //!Aquí irá la lógica para ir a la vista de editar día
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
    });
    // Agregamos los botones de borrar, editar un viaje al contenedor principal y añadir actividad.
    buttonsTravelDiv.appendChild(editButtonTravel);
    buttonsTravelDiv.appendChild(deleteButtonTravel);
    buttonsTravelDiv.appendChild(createButtonActivity);
    // principalDiv.appendChild(buttonsTravelDiv);
}

export function renderDivCarousel() {
    const carouselDiv = document.querySelector("#carruselitinerario");

    fetch("https://somekindofserver.com/travel/2")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data[0].trip.days.forEach((day, index) => {
                const dayItem = document.createElement("div"); //? Contenedor para almacenar los datos de cada día de un viaje.
                dayItem.classList.add("day-item");
                dayItem.innerHTML = `<h2>${day.date}</h2>`;
                dayItem.dataset.index = index;
                carouselDiv.appendChild(dayItem); //? Agregar al contendor padre del HTML cada contenedor (día) que tiene el viaje.
                carouselDiv.classList.add("carousel-item", "active");
                const activitiesDiv = document.createElement("div"); //? Contenedor para almacenar actividades dentro de cada día.
                activitiesDiv.innerText = `ACTIVIDADES: `;
                dayItem.appendChild(activitiesDiv);
                const activityList = document.createElement("ul"); //? Lista para almacenar actividades.
                day.activities.forEach(activity => {
                    const activityItem = document.createElement("li"); //? Elementos de dentro de la lista (activityItem) que son las actividades en sí.
                    activityItem.innerText = `${activity.title} (${activity.type})`;
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
                    });
                    activityItem.appendChild(editButton);
                    activityItem.appendChild(deleteButton);
                    activityList.appendChild(activityItem);
                    activitiesDiv.appendChild(activityList);
                });
                // principalDiv.appendChild(carouselDiv);
            });


            function handleDayClick(event) {
                deleteSpecificNode(itineraryListDiv); //? Borrar el itinerario primero para luego crear el nuevo.
                const dayItem = event.target.closest(".day-item"); //? Buscar elemento más cercano con la clase ".day-item". Almacenarlo en una constante.

                if (dayItem && event.target.tagName !== "BUTTON") {
                    //! Obtener el día seleccionado y sus datos asociados a través del índice del elemento HTML seleccionado.
                    const dayIndex = dayItem.dataset.index;
                    const day = data[0].trip.days[dayIndex];
                    updateItineraryView(day);
                }
            }

            
            carouselDiv.addEventListener("click", handleDayClick);
        })
}

function updateItineraryView(day) {
    itineraryTitleDiv.innerText = `ITINERARIO: ${day.date}`;
    renderItinerary(day);
}

function renderItinerary(day) {
    day.activities.forEach(activity => {
        const activityItem = document.createElement("div");
        activityItem.innerHTML = `<h3>${activity.title} - ${activity.budget}€</h3><p>${activity.description}</p><p>Duración: ${activity.duration}</p>`;
        itineraryListDiv.appendChild(activityItem);
        // principalDiv.appendChild(itineraryListDiv);
    });
}

function deleteSpecificNode(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}



