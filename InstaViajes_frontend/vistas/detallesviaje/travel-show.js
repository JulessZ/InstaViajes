
import Fetch from 'fetch-simulator';
Fetch.use();

fetch.addRoute('https://somekindofserver.com/travel/2', {
    get: {
        response: [{
            trip: {
                title: "Viaje a Madrid",
                participants: ["Diego", "Aram", "Jorge", "Carmen"],
                boss: "Diego",
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
                    },
                    {
                        date: "Día 27/03/2023",
                        activities: [
                            {
                                id: 1,
                                title: "5g4g4g4g4g4",
                                budget: 2556.45,
                                type: "Musg45g45eo",
                                votes: 15,
                                image: "https://ep01.epimg.net/verne/imagenes/2015/03/05/articulo/1425549987_841133_1425571033_noticia_normal.jpg",
                                description: "Visita guiada al museo del prado de Madrid.",
                                duration: "2 horas"
                            },
                            {
                                id: 2,
                                title: "Visita4h4h4hrg4 del retiro.",
                                budget: 244,
                                type: "Monumentos públicos",
                                votes: 10,
                                image: "https://madridando.com/wp-content/uploads/2018/07/el-retiro.jpeg",
                                description: "Vuelta de reconocimiento a la plaza de españa.",
                                duration: "1 horas"
                            }
                        ]
                    },
                ]
            }
        }]
    }
});


export function renderHeader() {
    const container = document.querySelector("#detallesviaje");

    fetch("https://somekindofserver.com/travel/2")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const headerContainer = document.createElement('div'); // Nuevo contenedor para el encabezado
            const container_title = document.createElement('h1'); //? Titulo para el Viaje.
            const container_participants = document.createElement('h3'); //? Sub-titulo para los nombres de los participantes del viaje.
            const container_budget = document.createElement('h3'); //? Sub-titulo para el presupuesto del viaje.
            const container_state = document.createElement('h4'); //? Titulo pequeño para el estado del viaje.
            container_title.innerText = data[0].trip.title;
            container_participants.innerText = "Participantes: " + data[0].trip.participants;
            container_budget.innerText = "Presupuesto: " + data[0].trip.budget + "€";
            container_state.innerText = "Estado: " + data[0].trip.state;
            headerContainer.appendChild(container_title);
            headerContainer.appendChild(container_state);
            container.appendChild(headerContainer);
            container.appendChild(container_participants);
            container.appendChild(container_budget);
            headerContainer.classList.add('d-flex', 'justify-content-between', 'align-items-center'); // Aplicar clases de Bootstrap
            container_title.classList.add('mr-4'); // Agregar margen derecho para separar el título del estado
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


const prueba = document.createElement("div");
export function renderDivCarousel() {
    const carouselDiv = document.querySelector("#carruselitinerario");
    let isFirstItem = true;
    fetch("https://somekindofserver.com/travel/2")
        .then(response => response.json())
        .then(data => {
            data[0].trip.days.forEach((day, index) => {
                const dayItem = document.createElement("div"); //? Contenedor para almacenar los datos de cada día de un viaje.
                dayItem.classList.add("day-item");
                dayItem.innerHTML = `<h2>${day.date}</h2>`;
                dayItem.dataset.index = index;
                console.log(dayItem);
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
                day.activities.forEach(activity => {
                    const activityItem = document.createElement("li");
                    activityList.style.listStyleType = "none";
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
                const dayItem = event.target.closest(".day-item"); //? Buscar elemento más cercano con la clase ".day-item". Almacenarlo en una constante.
                if (dayItem && event.target.tagName !== "BUTTON") {
                    //! Obtener el día seleccionado y sus datos asociados a través del índice del elemento HTML seleccionado.
                    const dayIndex = dayItem.dataset.index;
                    const day = data[0].trip.days[dayIndex];
                    renderItinerary(day);
                }
            }
            carouselDiv.addEventListener("click", handleDayClick);
        })
}

function renderItinerary(day) {
    const itineraryListDiv = document.querySelector("#itinerarylist");
    borrarNodo(itineraryListDiv); // borra el contenido anterior del itinerario
    const itineraryTitleDiv = document.createElement("div");
    itineraryTitleDiv.innerHTML = `<h3>ITINERARIO: ${day.date}</h3>`;
    itineraryListDiv.appendChild(itineraryTitleDiv);
    const activityList = document.createElement("ul");
    day.activities.forEach(activity => {
        const activityItem = document.createElement("li");
        activityList.style.listStyleType = "none";
        activityItem.innerHTML = `<h4>${activity.title} - ${activity.budget}€</h4><p>${activity.description}</p><p>Duración: ${activity.duration}</p>`;
        activityList.appendChild(activityItem);
    });
    itineraryListDiv.appendChild(activityList);
}


function borrarNodo(nodo) {
    if (nodo.hasChildNodes()) {
      while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
      }
    }
  }
  




