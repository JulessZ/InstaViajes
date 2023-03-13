// Insert the URL with friends users.
urlFetchUsers = 'https://ejemplo.com/datos';


usuarios = [];
createTravelForm();

// Function that initialices the form.
function createTravelForm() {
    fakeFetch(urlFetchUsers)
        .then((response) => {
            console.log(response);
            usuarios = response;
            generateCreateTravelForm("origen");
        })
        .catch((error) => {
            console.error(error);
        });
}

// Fake fetch to test.
function fakeFetch(url) {
    return new Promise((resolve, reject) => {
        if (true) {
            const fakeData = [];

            for (let i = 1; i <= 10; i++) {
                const fakeItem = {
                    id: i,
                    name: `Usuario ${i}`,
                    mail: `usuario${i}@ejemplo.com`,
                    image: `https://ejemplo.com/usuario${i}.jpg`
                };
                fakeData.push(fakeItem);
            }
            resolve(fakeData);
        }
    });
}


// When this function is called, you need to provide the ID of the node where you want to build it.
// For example, if you want to append to <div id="example"/>, you need to call: generateCreateTravelForm("example");
function generateCreateTravelForm(idToAppend) {
    // Div container
    const formContainer = document.createElement("div");
    formContainer.setAttribute("class", "col-12 border");
    formContainer.setAttribute("id", "formcrearviajes");
    // form
    const form = document.createElement("form");
    form.setAttribute("id", "form-crear-viajes");
        // Name container
        const nameContainer = document.createElement("div"); 
            // Name Label/Input
            const nameLabel = document.createElement("label");
            nameLabel.textContent = "Nombre para el viaje";
            const nameInput = document.createElement("input");
            nameInput.setAttribute("id", "name");
            nameInput.setAttribute("placeholder", "Añade un nombre descriptivo para el viaje...");
            // !! Name Error
            const nameError = document.createElement("span");
            nameError.setAttribute("id", "name-error");
        nameContainer.appendChild(nameLabel);
        nameContainer.appendChild(nameInput);
        nameContainer.appendChild(nameError);
    form.appendChild(nameContainer);
        // Dates Container
        const datesContainer = document.createElement("div"); 
        datesContainer.setAttribute("class", "style-dates")
            // Starting Date Container
            const startingDateContainer = document.createElement("div"); 
                // Starting Date Label/Input
                const fechaInicioLabel = document.createElement("label");
                fechaInicioLabel.textContent = "Fecha de inicio ";
                const fechaInicioInput = document.createElement("input");
                fechaInicioInput.setAttribute("type", "date");
                fechaInicioInput.setAttribute("id", "startDate");
                // !! Starting date Error
                const fechaInicioError = document.createElement("span");
                fechaInicioError.setAttribute("id", "startDate-error");

                startingDateContainer.appendChild(fechaInicioLabel);
                startingDateContainer.appendChild(fechaInicioInput);
                startingDateContainer.appendChild(fechaInicioError);
        datesContainer.appendChild(startingDateContainer);
            // End date container
            const endDateContainer = document.createElement("div");
                // End date Label/input
                const fechaFinalLabel = document.createElement("label");
                fechaFinalLabel.textContent = "Fecha final ";
                const fechaFinalInput = document.createElement("input");
                fechaFinalInput.setAttribute("type", "date");
                fechaFinalInput.setAttribute("id", "endDate");
                // !! End date error
                const fechaFinalError = document.createElement("span");
                fechaFinalError.setAttribute("id", "endDate-error");

                endDateContainer.appendChild(fechaFinalLabel);
                endDateContainer.appendChild(fechaFinalInput);
                endDateContainer.appendChild(fechaFinalError);
        datesContainer.appendChild(endDateContainer);
    form.appendChild(datesContainer);
        // Locations Container
        const locationsContainer = document.createElement("div"); 
        locationsContainer.setAttribute("class", "style-location")
            // Origin Location Container
            const originLocationsContainer = document.createElement("div"); 
                // Origin Location Label/input
                const origenLabel = document.createElement("label");
                origenLabel.textContent = "Origen";
                const origenInput = document.createElement("input");
                origenInput.setAttribute("id", "origin");
                origenInput.setAttribute("placeholder", "Desde donde va a salir el viaje...");
                // !! Origin Location Origin Error
                const origenError = document.createElement("span");
                origenError.setAttribute("id", "origin-error");
            originLocationsContainer.appendChild(origenLabel);
            originLocationsContainer.appendChild(origenInput);
            originLocationsContainer.appendChild(origenError);
        locationsContainer.appendChild(originLocationsContainer);
            // Destiny Location Container
            const destinyLocationsContainer = document.createElement("div"); 
                // Destiny Location Label/Input
                const destinyLabel = document.createElement("label");
                destinyLabel.textContent = "Destino ";
                const destinyInput = document.createElement("input");
                destinyInput.setAttribute("id", "destiny");
                destinyInput.setAttribute("placeholder", "Hacia donde va a llegar...");
                // !! Destiny Location Error
                const destinyError = document.createElement("span");
                destinyError.setAttribute("id", "destiny-error");
            destinyLocationsContainer.appendChild(destinyLabel);
            destinyLocationsContainer.appendChild(destinyInput);
            destinyLocationsContainer.appendChild(destinyError);
        locationsContainer.appendChild(destinyLocationsContainer);
    form.appendChild(locationsContainer);
        // Description/Budget Container
        const extraInfoContainer = document.createElement("div");
        extraInfoContainer.setAttribute("class", "style-desc");
            // Description Container
            const descriptionContainer = document.createElement("div");
                // Description Label/TextArea
                const descriptionLabel = document.createElement("label");
                descriptionLabel.textContent = "Descripción del viaje ";
                const descriptionTextarea = document.createElement("textarea");
                descriptionTextarea.setAttribute("id", "description");
                descriptionTextarea.setAttribute("cols", "30");
                descriptionTextarea.setAttribute("rows", "10");
                descriptionTextarea.setAttribute("placeholder", "Describe expectativas, posibles sitios a visitar...");
                // !! Description Error
                const descriptionError = document.createElement("span");
                descriptionError.setAttribute("id", "description-error");
            descriptionContainer.appendChild(descriptionLabel);
            descriptionContainer.appendChild(descriptionTextarea);
            descriptionContainer.appendChild(descriptionError);
        extraInfoContainer.appendChild(descriptionContainer);
            // Budget Container
            const budgetContainer = document.createElement("div");
            budgetContainer.setAttribute("class", "style-budget")
                // Budget Label Container
                const budgetLabelContainer = document.createElement("div");
                    // Budget Label
                    const budgetLabel = document.createElement("label");
                    budgetLabel.textContent = "Presupuesto aproximado ";
                budgetLabelContainer.appendChild(budgetLabel);
            budgetContainer.appendChild(budgetLabelContainer);
                // Budget Input/Span
                const budgetInput = document.createElement("input");
                budgetInput.setAttribute("type", "range");
                budgetInput.setAttribute("min", "0");
                budgetInput.setAttribute("max", "1000");
                budgetInput.setAttribute("value", "0");
                budgetInput.setAttribute("id", "budgetBar");
                const budgetValue = document.createElement("span");
                budgetValue.setAttribute("id", "budget-value");
                budgetValue.textContent = " 0€";
            budgetContainer.appendChild(budgetInput);
            budgetContainer.appendChild(budgetValue);
        extraInfoContainer.appendChild(budgetContainer);
    form.appendChild(extraInfoContainer);
        // Friends Container
        const friendsContainer = document.createElement("div");
        friendsContainer.setAttribute("class", "style-friends");
        // TODO: Friends List / Searcher
    form.appendChild(friendsContainer);
        // Buttons Container
        const buttonsContainer = document.createElement("div");
        buttonsContainer.setAttribute("class", "style-buttons-create");
            // Submit Button Container
            const submitButtonContainer = document.createElement("div");
                // Submit Button
                const submitButton = document.createElement("button");
                submitButton.setAttribute("id", "submit")
                submitButton.setAttribute("class", "boton-principal")
                submitButton.textContent = "Añadir viaje";
                submitButton.setAttribute("onclick", "validateForm()");
            submitButtonContainer.appendChild(submitButton);
        buttonsContainer.appendChild(submitButtonContainer);
            // Cancel Button Container
            const cancelButtonContainer = document.createElement("div");
                // Cancel Button
                const cancelButton = document.createElement("button");
                cancelButton.setAttribute("id", "cancel")
                cancelButton.setAttribute("class", "boton-cancelar")
                cancelButton.textContent = "Cancelar";
                cancelButton.setAttribute("onclick", "cancelarForm()");
            cancelButtonContainer.appendChild(cancelButton);
        buttonsContainer.appendChild(cancelButtonContainer);
    form.appendChild(buttonsContainer);
    formContainer.appendChild(form);
    document.getElementById(idToAppend).appendChild(formContainer)

    document.querySelector("#budgetBar").addEventListener("input", function () {
        document.querySelector("#budget-value").innerHTML = document.querySelector("#budgetBar").value + "€";
    });

    document.querySelector("#form-crear-viajes").onsubmit = () => {
        return false;
    }
}

// This function is called when submit button is pressed. Validates the form.
function validateForm() {
    clearErrors();
    // Checks if travel name is defined.
    if (!document.querySelector("#name").value) {
        generateError("name-error", "No se introdució un nombre para el viaje");
    }
    // Checks if starting date is correct.
    if (!startDate.value) {
        generateError("startDate-error", "No se introdució una fecha de inicio");
    } 
    if (startDate.value && checkDateToActual(startDate.value) == 2) {
        generateError("startDate-error", "¡La fecha introducida no puede ser antes de hoy!");
    }
    // Checks if end date is correct.
    if (!endDate.value) {
        generateError("endDate-error", "No se introdució una fecha de fin de viaje");
    } else if (checkDateToActual(endDate.value) == 2) {
        generateError("endDate-error", "¡La fecha introducida no puede ser antes de hoy!");
    } else if (startDate.value && compareDates(startDate.value, endDate.value) == 1) {
        generateError("endDate-error", "¡La fecha final no puede ser antes de la fecha de inicio!");
    }
    // Checks if other fields are filled.
    if (!document.getElementById("origin").value) {
        generateError("origin-error", "Tiene que haber un lugar de origen");
    }
    if (!destiny.value) {
        generateError("destiny-error", "Tiene que haber un lugar de destino");
    }
    if (!description.value) {
        generateError("description-error", "Tiene que haber una descripción");
    }
    // Checks if there are any errors in the form. If there are not, fetch to server is done.
    if (verifyErrors()) {
        if (document.querySelector("#budgetBar").value == 0) {
            if (!window.confirm("¿Estás seguro de poner el presupuesto en 0?")) {
                return;
            }
        }
        fetch('https://ejemplo.com/datos', {
            method: 'POST',
            body: JSON.stringify(createObjectWithValues()),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
}

/**
Sets the inner HTML of an element with the specified ID to the specified error message.
@param {string} idErrorField - The ID of the element to set the error message on.
@param {string} message - The error message to display.
*/
function generateError(idErrorField, message) {
    document.getElementById(idErrorField).innerHTML = message;
}

/**
Checks if a given date is before, after or the same as the current local date.
@param {string} date - A date string in the format "yyyy-mm-dd".
@returns {number} - Returns 0 if the dates are the same, 1 if the given date is after the local date, 2 if the given date is before the local date.
*/
function checkDateToActual(date) {
    dateSplit = date.split("-");
    date = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    localDate = new Date();
    localDate = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
    if (date.getTime() == localDate.getTime()) {
        return 0;
    } else if (date > localDate) {
        return 1;
    } else {
        return 2;
    }
}

/**
Compares two dates and returns an integer value indicating their relationship.
@param {string} date1 - The first date in the format 'YYYY-MM-DD'.
@param {string} date2 - The second date in the format 'YYYY-MM-DD'.
@returns {number} - 0 if the dates are equal, 1 if the first date is later than the second, and 2 if the second date is later than the first.
*/
function compareDates(date1, date2) {
    dateSplit = date1.split("-");
    date1 = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    dateSplit = date2.split("-");
    date2 = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    if (date1.getTime() == date2.getTime()) {
        return 0;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 2;
    }
}

// All fields that cointains in their id the word "error" are cleaned.
// For example, IDs included: validate-error, compilateerror.
function clearErrors() {
    const elementosError = document.querySelectorAll('[id*="error"]');
    elementosError.forEach(element => {
        element.innerHTML = "";
    });
}

/**
Checks if any error messages are currently displayed on the page.
@return {boolean} - Returns true if no error messages are displayed, and false otherwise.
*/
function verifyErrors() {
    const elementosError = document.querySelectorAll('[id*="error"]');
    for (let i = 0; i < elementosError.length; i++) {
        if (elementosError[i].textContent.trim() !== '') {
            return false;
        }
    }
    return true;
}

/**
Creates an object with the values of the travel form inputs and predefined data for invited friends.
@returns {object} - The created object containing the travel information and invited friends data.
*/
function createObjectWithValues() {
    const viaje = {
        travelName: document.getElementById("name").value,
        fechaInicio: startDate.value,
        fechaFinal: endDate.value,
        origen: document.getElementById("origin").value,
        destino: destiny.value,
        descripcion: description.value,
        presupuesto: document.getElementById("budget").value,
        amigosInvitados: [
          {
            id: 1,
            nombre: 'Juan',
            email: 'juan@example.com',
            imagen: 'https://ejemplo.com/juan.jpg'
          },
          {
            id: 2,
            nombre: 'María',
            email: 'maria@example.com',
            imagen: 'https://ejemplo.com/maria.jpg'
          },
          {
            id: 3,
            nombre: 'Pedro',
            email: 'pedro@example.com',
            imagen: 'https://ejemplo.com/pedro.jpg'
          }
        ]
    };
    return viaje;
}