import { baseUrl } from "../../config";
import { isUserAuth } from "../../logica/users";

// Insert the URL with friends users.
let urlFetchUsers = baseUrl+'datos';


let usuarios = [];
let usuariosEnViaje = [];


// Function that initialices the form.
function createTravelForm() {
    let urlFetchUsers = baseUrl+'datos';
     fakeFetch(urlFetchUsers)
        .then((response) => {
            console.log(response);
            usuarios = response;
            generateCreateTravelForm("formcrearviajes");
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
                    image: baseUrl+`usuario${i}.jpg`
                };
                fakeData.push(fakeItem);
            }
            resolve(fakeData);
        }
    });
}

//function to call the front
export async function renderCreateForm() {
    await createTravelForm();
    setupSubmitEventListener();
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
            nameError.setAttribute("class", "msg-error");
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
                fechaInicioError.setAttribute("class", "msg-error");

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
                fechaFinalError.setAttribute("class", "msg-error");

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
                origenError.setAttribute("class", "msg-error");
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
                destinyError.setAttribute("class", "msg-error");
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
                descriptionTextarea.setAttribute("placeholder", "Describe expectativas, posibles sitios a visitar...");

            descriptionContainer.appendChild(descriptionLabel);
            descriptionContainer.appendChild(descriptionTextarea);
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
                budgetInput.setAttribute("max", "10000");
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
        const divFriendOnTrip = document.createElement('div');
        const divStyleFriends = document.createElement('div');
        const labelFriendSearch = document.createElement('label');
        labelFriendSearch.textContent = 'Invitar amigos';
        const friendsSearch = document.createElement('input');
        const divMainSearch = document.createElement('div');
        divMainSearch.className = 'style-friends-searched';
        friendsSearch.setAttribute('type', 'search');
        // TODO: Friends List / Searcher

        //  ------------------------------------------------------

        //Adding the event listener to search into the friends of an user
        friendsSearch.addEventListener('input', function () {
            removeAllChilds(divMainSearch);
            if ((friendsSearch.value).length != 0) {
                //If we obtain the value needed we print the divs 
                (usuarios).filter(element => {
                    if ((element.name).includes(friendsSearch.value)) {
                        createNameSearch(element.id, element.image, element.name);
                    }
                })
            }
        });
        
        //Function to create the elements of the search
        function createNameSearch(id, img, name) {
            //Giving the necesary elements
            const divNameSearch = document.createElement('div');
            const divImg = document.createElement('div');
            const imgSearch = document.createElement('img');
            const divName = document.createElement('div');

            //Setting some attributes
            imgSearch.src = img;
            imgSearch.alt = 'img';
            divName.textContent = name;


            divNameSearch.addEventListener('click', function () {
                const element = {
                    id: id,
                    image: img
                }
                if (searchOnTrip(element)) {
                    window.alert('No se puede insertar este amigo ya que se encuentra en el viaje');
                } else {
                    (usuariosEnViaje).push(element);
                    updateTripFriends(usuariosEnViaje);
                }
            });
            //Insert the elements into html
            divMainSearch.appendChild(divNameSearch);
            divNameSearch.appendChild(divImg);
            divImg.appendChild(imgSearch);
            divNameSearch.appendChild(divName);
        }

        //Function to load the friends already on trip
        function updateTripFriends(object) {
            //we remove the childs of the element
            removeAllChilds(divStyleFriends);
            //Then we charge the elements in trip
            (usuariosEnViaje).forEach(element => {
                const imageDiv = document.createElement('div');
                imageDiv.id = element.id;
                imageDiv.style.backgroundImage = `url(` + element.image + `)`;
                divStyleFriends.appendChild(imageDiv);

                //Deleting the friends into the trip
                imageDiv.addEventListener('click', function () {
                    console.log(this.id);
                    usuariosEnViaje = usuariosEnViaje.filter(friend => friend.id != this.id);
                    updateTripFriends(usuariosEnViaje);
                });
            });
        }
        
        //Function to remove all childs
        function removeAllChilds(div) {
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }

        //Function to search if the friend is on the trip
        function searchOnTrip(element) {
            return usuariosEnViaje.some(friend => friend.id === element.id);
        }



        //  -----------------------------------------------------

    form.appendChild(friendsContainer);
    friendsContainer.appendChild(divFriendOnTrip);
    divFriendOnTrip.appendChild(labelFriendSearch);
    divFriendOnTrip.appendChild(divStyleFriends);
    divFriendOnTrip.appendChild(friendsSearch);
    friendsContainer.appendChild(divMainSearch);

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
                // submitButton.setAttribute("onclick", "validateForm()");
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

}

//Event listener to validate form when we submit
function setupSubmitEventListener() {
    console.log(document.querySelector('#form-crear-viajes'));
    document.querySelector('#form-crear-viajes').addEventListener('submit', function (e) {
        e.preventDefault();
        validateForm();
    });
}


// This function is called when submit button is pressed. Validates the form.
async function validateForm() {
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
    // Checks if there are any errors in the form. If there are not, fetch to server is done.
    if (verifyErrors()) {
        if (document.querySelector("#budgetBar").value == 0) {
            if (!window.confirm("¿Estás seguro de poner el presupuesto en 0?")) {
                return;
            }
        }
        const token = localStorage.getItem("auth_token");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify( await createObjectWithValues())
        };
        console.log(requestOptions);
        fetch(baseUrl+'api/misviajes/crear', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }
            console.log("Solicitud enviada con éxito");
            console.log(response);
        })
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
    let dateSplit = [];
    console.log(date);
    dateSplit = date.split("-");
    date = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    let localDate = new Date();
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
    let dateSplit = date1.split("-");
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

async function createObjectWithValues() {
    let { userData } = await isUserAuth();
    let userLogged = userData.user.id;
    const viaje = {
        user_id: userLogged,
        travel_states_id: 3,
        name: document.getElementById("name").value,
        description: description.value,
        start_date: startDate.value,
        end_date: endDate.value,
        origin: document.getElementById("origin").value,
        destiny: destiny.value,
        budget: document.getElementById("budgetBar").value,
        //amigosInvitados: usuariosEnViaje.slice()
    };
    return viaje;
}