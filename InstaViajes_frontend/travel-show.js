// Archivo Javascript para renderizar la vista Travel_Show de la App: InstaViajes.

// Declaración del evento DOMContentLoaded para recoger los contenedores y recargarlos una vez cargue la página.
document.addEventListener("DOMContentLoaded", function () {
    // Recogemos el contenedor principal para generar el árbol DOM en el HTML
    const principalDiv = document.querySelector("#root"); //--> Div principal para meter todos los elementos.
    const activityListDiv = document.createElement("div"); //--> Div para 

    // Renderizar actividades de un día en concreto
    function renderActivities(day) {
        const activityList = document.createElement("ul");
        day.activities.forEach(activity => {
            const activityItem = document.createElement("li");
            activityItem.innerText = `${activity.title} (${activity.type})`;
            activityItem.dataset.id = activity.id;
            activityItem.dataset.votes = activity.votes;
            activityList.appendChild(activityItem);
            activityListDiv.appendChild(activityList);
            principalDiv.appendChild(activityListDiv);
        });

    }

    // Obtenemos los datos por medio de una petición mediante fetch()
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const container_title = document.createElement('h1');
            const container_participants = document.createElement('h3');
            const container_budget = document.createElement('h3');
            const container_state = document.createElement('h4');
            container_title.innerText = data.trip.title;
            container_participants.innerText = "Participantes: " + data.trip.participants;
            container_budget.innerText = "Presupuesto: " + data.trip.budget + "€";
            container_state.innerText = "Estado: " + data.trip.state;

            const container = document.createElement('div');
            container.setAttribute('class', 'd-flex justify-content-between');
            container.appendChild(container_title);
            container.appendChild(container_state);

            principalDiv.appendChild(container);
            principalDiv.appendChild(container_participants);
            principalDiv.appendChild(container_budget);

            // Renderizamos los días del viaje
            data.trip.days.forEach((day, index) => {
                const dayItem = document.createElement("div");
                dayItem.classList.add("day-item");
                dayItem.innerHTML = `<h2>${day.date}</h2>`;
                dayItem.dataset.index = index;
                principalDiv.appendChild(dayItem);
            });

            // Función para actualizar la vista del día seleccionado.
            function updateDayView(day) {
                const titleActivities = document.createElement("div");
                titleActivities.innerText = `ACTIVIDADES: `;
                principalDiv.appendChild(titleActivities);
                // Renderizamos las actividades del día
                renderActivities(day);
            }

            // Función para manejar el evento de selección de un día
            function handleDayClick(event) {
                borrarNodo(activityListDiv);
                const dayItem = event.target.closest(".day-item");
                if (dayItem) {
                    const dayIndex = dayItem.dataset.index;
                    const day = data.trip.days[dayIndex];
                    updateDayView(day);
                }
            }

            // Manejamos el evento de click en el carrusel de días
            principalDiv.addEventListener("click", handleDayClick);


        })
        .catch(error => console.error(error));
});

// Función borrar nodo para eliminar el último nodo del nodo Padre.
function borrarNodo(nodo) {
    while (nodo.firstChild) {
        nodo.removeChild(nodo.firstChild);
    }
}

