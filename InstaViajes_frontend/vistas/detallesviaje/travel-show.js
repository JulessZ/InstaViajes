/**
 * Archivo Javascript para renderizar la vista Travel_Show  de un viaje de la App: InstaViajes.
 * En esta se recoge los datos principales de un viaje en concreto cuando este ya está en curso.
 * Al clicar en Home en cualquier viaje, o en Mis viajes de un usuario, te traerá aquí.Contiene 
 * tanto el encabezado con el titulo, participantes y presupuesto, como cada uno de los dias del 
 * viaje con sus actividades e itinerarios.
 */

init();

export function init() {
    renderShowTravel();
}
/**
 * Declaración del evento DOMContentLoaded para recoger los contenedores y recargarlos una vez cargue la página.
 * Se renderizará toda la vista Travel_Show
 */
export function renderShowTravel() {
    document.addEventListener("DOMContentLoaded", function () {
        const principalDiv = document.querySelector(".carousel-inner"); //? Contenedor principal.
        const itineraryListDiv = document.createElement("div"); //? Contenedor padre donde se guardan los itinerarios de las actividades.
        const itineraryTitleDiv = document.createElement("div"); //? Contenedor para almacenar el titulo del itinerario.

        /**
         * Obtenemos los datos por medio de una petición mediante fetch()
         */
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
                const container = document.createElement('div'); //? Contenedor padre para almacenar el titulo y estado del viaje.
                container.setAttribute('class', 'd-flex justify-content-between');
                container.appendChild(container_title);
                container.appendChild(container_state);
                principalDiv.appendChild(container);
                principalDiv.appendChild(container_participants);
                principalDiv.appendChild(container_budget);

                /**
                 * Bucle para renderizar los días del viaje con sus actividades.
                 */
                data.trip.days.forEach((day, index) => {
                    const dayItem = document.createElement("div"); //? Contenedor para almacenar los datos de cada día de un viaje.
                    dayItem.classList.add("day-item");
                    dayItem.innerHTML = `<h2>${day.date}</h2>`;
                    dayItem.dataset.index = index;

                    principalDiv.appendChild(dayItem); //? Agregar al contendor padre del HTML cada contenedor (día) que tiene el viaje.

                    const activitiesDiv = document.createElement("div"); //? Contenedor para almacenar actividades dentro de cada día.
                    activitiesDiv.innerText = `ACTIVIDADES: `;
                    dayItem.appendChild(activitiesDiv);

                    /**
                     * Bucle para renderizar la lista de itinerarios de cada actividad.
                     */
                    const activityList = document.createElement("ul"); //? Lista para almacenar actividades.
                    day.activities.forEach(activity => {
                        const activityItem = document.createElement("li"); //? Elementos de dentro de la lista (activityItem) que son las actividades en sí.
                        activityItem.innerText = `${activity.title} (${activity.type})`;

                        // Creamos botones de borrar y editar a cada actividad
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

                        // Agregamos los botones de borrar y editar una actividad a cada actividad.
                        activityItem.appendChild(editButton);
                        activityItem.appendChild(deleteButton);

                        // Agregar los li al ul y seguidamente, el ul al contenedor de actividades.
                        activityList.appendChild(activityItem);
                        activitiesDiv.appendChild(activityList);
                    });
                });

                /**
                 * Función para manejar el evento de hacer clic en un día y desplegar su itinerario de actividades.
                 * @param {*} event Evento clic para manejar el evento.
                 */
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

                // Manejamos el evento de clic en el carrusel de días
                principalDiv.addEventListener("click", handleDayClick);

                // Llamar a la funcion que crea los botones de editar o borrar un viaje.
                renderButtonTravel();

            })
            .catch(error => console.error(error));

        //---------------------------------------------------------//
        // FUNCIONES DE RENDERIZADO PARA CARGAR O ACTUALIZAR DATOS.//
        //---------------------------------------------------------//

        /**
         * Función para actualizar la vista del itinerario del día seleccionado.
         * @param {*} day Día específico del viaje.
         */
        function updateItineraryView(day) {
            itineraryTitleDiv.innerText = `ITINERARIO: ${day.date}`;
            renderItinerary(day);
        }

        /**
         * Función para renderizar el itinerario de un día
         * @param {*} day Día específico que me entra por párametro.
         */
        function renderItinerary(day) {
            day.activities.forEach(activity => {
                const activityItem = document.createElement("div");
                activityItem.innerHTML = `<h3>${activity.title} - ${activity.budget}€</h3><p>${activity.description}</p><p>Duración: ${activity.duration}</p>`;
                itineraryListDiv.appendChild(activityItem);
                principalDiv.appendChild(itineraryListDiv);
            });
        }

        /**
         * Función para renderizar botones para CRUD de un viaje.
         */
        function renderButtonTravel() {
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
            principalDiv.appendChild(editButtonTravel);
            principalDiv.appendChild(deleteButtonTravel);
            principalDiv.appendChild(createButtonActivity);
        }

    });
}

//----------------------------------------------//
// FUNCIONES AUXILIARES PARA AGILIZAR EL CÓDIGO.//
//----------------------------------------------//

/**
 * Función borrar nodo para eliminar el último nodo del nodo Padre
 * @param {*} nodo El nodo padre del que pretendes eliminar
 */
function deleteSpecificNode(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}