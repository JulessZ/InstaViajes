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
    const form = document.createElement("form");
    form.setAttribute("id", "form-crear-viajes");
    // Starting date
    const fechaInicioLabel = document.createElement("label");
    fechaInicioLabel.textContent = "Fecha de inicio ";
    const fechaInicioInput = document.createElement("input");
    fechaInicioInput.setAttribute("type", "date");
    fechaInicioInput.setAttribute("id", "startDate");
    // !! Starting date error
    const fechaInicioError = document.createElement("span");
    fechaInicioError.setAttribute("id", "startDate-error");
    // End date
    const fechaFinalLabel = document.createElement("label");
    fechaFinalLabel.textContent = "Fecha final ";
    const fechaFinalInput = document.createElement("input");
    fechaFinalInput.setAttribute("type", "date");
    fechaFinalInput.setAttribute("id", "endDate");
    // !! End date error
    const fechaFinalError = document.createElement("span");
    fechaFinalError.setAttribute("id", "endDate-error");
    // Origin input
    const origenLabel = document.createElement("label");
    origenLabel.textContent = "Origen";
    const origenInput = document.createElement("input");
    origenInput.setAttribute("id", "origin");
    // !! Origin error
    const origenError = document.createElement("span");
    origenError.setAttribute("id", "origin-error");
    // Destiny input
    const destinoLabel = document.createElement("label");
    destinoLabel.textContent = "Destino ";
    const destinoInput = document.createElement("input");
    destinoInput.setAttribute("id", "destiny");
    // !! Destiny error
    const destinoError = document.createElement("span");
    destinoError.setAttribute("id", "destiny-error");
    // Description input
    const descripcionLabel = document.createElement("label");
    descripcionLabel.textContent = "Descripción del viaje ";
    const descripcionTextarea = document.createElement("textarea");
    descripcionTextarea.setAttribute("id", "description");
    descripcionTextarea.setAttribute("cols", "30");
    descripcionTextarea.setAttribute("rows", "10");
    // !! Description error
    const descripcionError = document.createElement("span");
    descripcionError.setAttribute("id", "description-error");
    // Budget
    const presupuestoLabel = document.createElement("label");
    presupuestoLabel.textContent = "Presupuesto aproximado ";
    const presupuestoInput = document.createElement("input");
    presupuestoInput.setAttribute("type", "range");
    presupuestoInput.setAttribute("min", "0");
    presupuestoInput.setAttribute("max", "1000");
    presupuestoInput.setAttribute("value", "0");
    presupuestoInput.setAttribute("id", "budgetBar");
    const presupuestoValue = document.createElement("span");
    presupuestoValue.setAttribute("id", "budget-value");
    presupuestoValue.textContent = " 0€";
    // Invite friends
    const amigosMenu = document.createElement("div");
    amigosMenu.setAttribute("id", "friends");
    const amigosTitulo = document.createElement("h5");
    amigosTitulo.textContent = "Invitar amigos";
    // Select invite friends

    // Invited friends and recommended

    // Submit button
    const botonSubmit = document.createElement("button");
    botonSubmit.textContent = "Añadir viaje";
    botonSubmit.setAttribute("onclick", "validateForm()");
    botonSubmit.setAttribute("class", "boton-principal");
    botonSubmit.setAttribute("id", "submit");

    // Generate structure
    form.appendChild(fechaInicioLabel);
    form.appendChild(fechaInicioInput);
    form.appendChild(fechaInicioError);
    form.appendChild(document.createTextNode(" "));
    form.appendChild(fechaFinalLabel);
    form.appendChild(fechaFinalInput);
    form.appendChild(fechaFinalError);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(origenLabel);
    form.appendChild(origenInput);
    form.appendChild(origenError);
    form.appendChild(document.createTextNode(" "));
    form.appendChild(destinoLabel);
    form.appendChild(destinoInput);
    form.appendChild(destinoError);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(descripcionLabel);
    form.appendChild(descripcionTextarea);
    form.appendChild(descripcionError);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(presupuestoLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(presupuestoInput);
    form.appendChild(presupuestoValue);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    form.appendChild(amigosMenu);
    form.appendChild(botonSubmit);
    // Final append
    document.getElementById(idToAppend).appendChild(form);

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
        fechaInicio: startDate.value,
        fechaFinal: endDate.value,
        origen: document.getElementById("origin").value,
        destino: destiny.value,
        descripcion: description.value,
        presupuesto: 2000,
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