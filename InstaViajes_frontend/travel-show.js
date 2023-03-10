const principalDiv = document.querySelector("#root"); //? Contenedor principal.

const carouselDiv = document.createElement("div");
const container = document.createElement('div');
const buttonsTravelDiv = document.createElement("div");

const itineraryListDiv = document.createElement("div"); //? Contenedor padre donde se guardan los itinerarios de las actividades.
const itineraryTitleDiv = document.createElement("div"); //? Contenedor para almacenar el titulo del itinerario.

renderHeader();
renderDivCarousel();
renderButtonTravel();

export function renderHeader() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const container_title = document.createElement('h1'); //? Titulo para el Viaje.
            const container_participants = document.createElement('h3'); //? Sub-titulo para los nombres de los participantes del viaje.
            const container_budget = document.createElement('h3'); //? Sub-titulo para el presupuesto del viaje.
            const container_state = document.createElement('h4'); //? Titulo pequeño para el estado del viaje.
            container_title.innerText = data.trip.title;
            container_participants.innerText = "Participantes: " + data.trip.participants;
            container_budget.innerText = "Presupuesto: " + data.trip.budget + "€";
            container_state.innerText = "Estado: " + data.trip.state;
            container.appendChild(container_title);
            container.appendChild(container_state);
            container.appendChild(container_participants);
            container.appendChild(container_budget);
            principalDiv.appendChild(container);
        })
}

export function renderButtonTravel() {
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
    principalDiv.appendChild(buttonsTravelDiv);
}

export function renderDivCarousel() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            data.trip.days.forEach((day, index) => {
                const dayItem = document.createElement("div"); //? Contenedor para almacenar los datos de cada día de un viaje.
                dayItem.classList.add("day-item");
                dayItem.innerHTML = `<h2>${day.date}</h2>`;
                dayItem.dataset.index = index;
                carouselDiv.appendChild(dayItem); //? Agregar al contendor padre del HTML cada contenedor (día) que tiene el viaje.
                carouselDiv.classList.add("carousel-item");
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
                principalDiv.appendChild(carouselDiv);
            });
            function handleDayClick(event) {
                deleteSpecificNode(itineraryListDiv); //? Borrar el itinerario primero para luego crear el nuevo.
                const dayItem = event.target.closest(".day-item"); //? Buscar elemento más cercano con la clase ".day-item". Almacenarlo en una constante.
                if (dayItem && event.target.tagName !== "BUTTON") {
                    //! Obtener el día seleccionado y sus datos asociados a través del índice del elemento HTML seleccionado.
                    const dayIndex = dayItem.dataset.index;
                    const day = data.trip.days[dayIndex];
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
        principalDiv.appendChild(itineraryListDiv);
    });
}

function deleteSpecificNode(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}



