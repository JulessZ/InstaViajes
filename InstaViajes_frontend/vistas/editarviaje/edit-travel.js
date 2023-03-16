//Example of inputs dates to obtain the form 
const trip1 = {
    id: 1,
    name: "Vacaciones en Lisboa",
    //---IMPORTANT--- 
    date: "2023-06-01", //THE FORMAT OF THE DATES TO PRINT ON THE HMTL
    dateEnd: "2023-07-01", //THE FORMAT OF THE DATES TO PRINT ON THE HMTL
    origin: "La palma",
    destination: "Lisboa",
    description: "El viaje consistirá en un mes de blablablalbal",
    budget: 3000,
    estado: 'abierto',
    //Var to introduce friends into the trip
    friendsOnTrip: [
        { id: 1, image: 'imageDiegoB.png' },
        { id: 2, image: 'imageBrian.png' }
    ]

};
const friends = [
    { id: 3, name: 'diegoR', mail: 'diego@example.com', image: 'image.png' },
    { id: 4, name: 'aram', mail: 'aram@example.com', image: 'image.png' },
    { id: 5, name: 'carmen', mail: 'carmen@example.com', image: 'image.png' },
    { id: 6, name: 'sara', mail: 'sara@example.com', image: 'image.png' },
    { id: 7, name: 'rai', mail: 'rai@example.com', image: 'image.png' },
    { id: 8, name: 'jorge', mail: 'jorge@example.com', image: 'image.png' },
    { id: 9, name: 'marco', mail: 'marco@example.com', image: 'image.png' },
    { id: 10, name: 'donovan', mail: 'donovan@example.com', image: 'image.png' }
];


// //Const parent to insert the form
// const editContainer = document.querySelector('#formeditarviajes');

//Div mains of searcher realted to friends
const divMainSearch = document.createElement('div');
//Adding to the img Main Search parent the classname necessary
divMainSearch.className = 'style-friends-searched';
//Const to the friends parent
const friendsOnTrip = document.createElement('div');
friendsOnTrip.id = 'style-friends-invited';

//Function to create edit-Form
function editForm(object) {

    //Const parent to insert the form
    const editContainer = document.querySelector('#formeditarviajes');

    //If the trip is on road
    if (object.estado == 'en curso') {
        //Create elements
        const form = document.createElement('form');
        const divName = document.createElement('div');
        const labelName = document.createElement('label');
        const name = document.createElement('input');
        const nameError = document.createElement('span');
        nameError.setAttribute("class", "msg-error");
        const divDates = document.createElement('div');
        const divDateEnd = document.createElement('div');
        const labelDateEnd = document.createElement('label');
        const dateEnd = document.createElement('input');
        const dateEndError = document.createElement('span');
        dateEndError.setAttribute("class", "msg-error");
        const divBudgetMain = document.createElement('div');
        const divBudget = document.createElement('div');
        const divLabelBudget = document.createElement('div');
        const labelBudget = document.createElement('label');
        const budget = document.createElement('input');
        const budgetValue = document.createElement('span');
        const divButtons = document.createElement('div');
        const divSubmit = document.createElement('div');
        const submitButton = document.createElement('input');
        const divCancel = document.createElement('div');
        const cancelButton = document.createElement('button');

        //Setting the attributes to the different elements
        form.id = 'formEdit';

        labelName.setAttribute('for', 'name');
        labelName.textContent = 'Nombre para el Viaje';

        name.type = 'text';
        name.setAttribute('name', 'name');
        //Inserting the values on the html
        name.value = object.name;
        name.id = 'nameTrip';
        name.setAttribute("placeholder", "Añade un nombre descriptivo para el viaje...");
        nameError.id = 'name-error';

        divDates.className = 'style-dates';
        labelDateEnd.setAttribute('for', 'dateEnd');
        labelDateEnd.textContent = 'Fecha Final';

        dateEnd.type = 'date';
        dateEnd.setAttribute('name', 'dateEnd');
        //Inserting the values on the html
        dateEnd.value = object.dateEnd;
        dateEnd.id = 'endDate';
        dateEndError.id = 'endDate-error';

        divBudgetMain.className = 'style-desc';
        divBudget.className = 'style-budget';
        labelBudget.setAttribute('for', 'budget');
        labelBudget.textContent = 'Presupuesto Aproximado';

        budget.type = 'range';
        budget.setAttribute('name', 'budget');
        budget.min = 0;
        budget.max = 10000;
        budget.value = object.budget;
        budgetValue.innerHTML = budget.value + '€';
        budget.addEventListener('input', function () {
            budgetValue.innerHTML = budget.value + '€';
        });
        budget.id = 'budgetTrip';

        divButtons.className = 'style-buttons-create';

        submitButton.type = 'submit';
        submitButton.value = 'Editar viaje';
        submitButton.className = 'boton-secundario';

        cancelButton.textContent = 'Cancelar';
        
        //Inserting the elements into de html
        editContainer.appendChild(form);
        form.appendChild(divName);
        divName.appendChild(labelName);
        divName.appendChild(name);
        divName.appendChild(nameError);

        form.appendChild(divDates);
        divDates.appendChild(divDateEnd);
        divDateEnd.appendChild(labelDateEnd);
        divDateEnd.appendChild(dateEnd);
        divDateEnd.appendChild(dateEndError);

        form.appendChild(divBudgetMain);
        divBudgetMain.appendChild(divBudget);
        divBudget.appendChild(divLabelBudget);
        divLabelBudget.appendChild(labelBudget);
        divBudget.appendChild(budget);
        divBudget.appendChild(budgetValue);

        form.appendChild(divButtons);
        divButtons.appendChild(divSubmit);
        divButtons.appendChild(divCancel);
        divSubmit.appendChild(submitButton);
        divButtons.appendChild(divCancel);
        divCancel.appendChild(cancelButton);

    } else {
        //Elements of the form and form
        const form = document.createElement('form');
        const divName = document.createElement('div');
        const labelName = document.createElement('label');
        const name = document.createElement('input');
        const nameError = document.createElement('span');
        nameError.setAttribute("class", "msg-error");
        const divDates = document.createElement('div');
        const divDate = document.createElement('div');
        const dateStartError = document.createElement('span');
        dateStartError.setAttribute("class", "msg-error");
        const divDateEnd = document.createElement('div');
        const labelDate = document.createElement('label');
        const date = document.createElement('input');
        const labelDateEnd = document.createElement('label');
        const dateEnd = document.createElement('input');
        const dateEndError = document.createElement('span');
        dateEndError.setAttribute("class", "msg-error");
        const labelOrigin = document.createElement('label');
        const divOriDes = document.createElement('div');
        const divOrigin = document.createElement('div');
        const origin = document.createElement('input');
        const originError = document.createElement('span');
        originError.setAttribute("class", "msg-error");
        const labelDestination = document.createElement('label');
        const divDestination = document.createElement('div');
        const destination = document.createElement('input');
        const destinationError = document.createElement('span');
        destinationError.setAttribute("class", "msg-error");
        const divDesBud = document.createElement('div');
        const divDescription = document.createElement('div');
        const labelDescription = document.createElement('label');
        const description = document.createElement('textarea');
        const divBudget = document.createElement('div');
        const divLabelBudget = document.createElement('div');
        const labelBudget = document.createElement('label');
        const budget = document.createElement('input');
        const budgetValue = document.createElement('span');
        const divStyleFriends = document.createElement('div');
        const divFriendsInvited = document.createElement('div');
        const labelFriendSearch = document.createElement('label');
        const friendsSearch = document.createElement('input');
        const divButtons = document.createElement('div');
        const divSubmit = document.createElement('div');
        const submitButton = document.createElement('input');
        const divCancel = document.createElement('div');
        const cancelButton = document.createElement('button');


        //Setting the attributes to the different elements
        form.id = 'formEdit';

        labelName.setAttribute('for', 'name');
        labelName.textContent = 'Nombre para el Viaje';

        name.type = 'text';
        name.setAttribute('name', 'name');
        //Inserting the values on the html
        name.value = object.name;
        name.id = 'nameTrip';
        name.setAttribute("placeholder", "Añade un nombre descriptivo para el viaje...");
        nameError.id = 'name-error';


        divDates.className = 'style-dates';
        labelDate.setAttribute('for', 'date');
        labelDate.textContent = 'Fecha de Inicio'

        date.type = 'date';
        date.setAttribute('name', 'date');
        //Inserting the values on the html
        date.value = object.date;
        date.id = 'startDate';
        dateStartError.id = 'startDate-error';

        labelDateEnd.setAttribute('for', 'dateEnd');
        labelDateEnd.textContent = 'Fecha Final';

        dateEnd.type = 'date';
        dateEnd.setAttribute('name', 'dateEnd');
        //Inserting the values on the html
        dateEnd.value = object.dateEnd;
        dateEnd.id = 'endDate';
        dateEndError.id = 'endDate-error';

        divOriDes.className = 'style-location';
        labelOrigin.setAttribute('for', 'origin');
        labelOrigin.textContent = 'Origen';

        origin.type = 'text';
        origin.setAttribute("placeholder", "Desde donde va a salir el viaje...");
        origin.setAttribute('name', 'origin');
        //Inserting the values on the html
        origin.value = object.origin;
        origin.id = 'originTrip';
        originError.id = 'origin-error';

        labelDestination.setAttribute('for', 'destination');
        labelDestination.textContent = 'Destino';

        destination.type = 'text';
        destination.setAttribute('name', 'destination');
        //Inserting the values on the html
        destination.value = object.destination;
        destination.id = 'destinationTrip';
        destination.setAttribute("placeholder", "Hacia donde va a llegar...");
        destinationError.id = 'destination-error';

        divDesBud.className = 'style-desc';
        labelDescription.setAttribute('for', 'description');
        labelDescription.textContent = 'Descripción del Viaje';

        description.setAttribute('name', 'description');
        description.textContent = object.description;
        description.id = 'descriptionTrip';
        description.setAttribute("placeholder", "Describe expectativas, posibles sitios a visitar...");

        divBudget.className = 'style-budget';
        labelBudget.setAttribute('for', 'budget');
        labelBudget.textContent = 'Presupuesto Aproximado';

        budget.type = 'range';
        budget.setAttribute('name', 'budget');
        budget.min = 0;
        budget.max = 10000;
        budget.value = object.budget;
        budgetValue.innerHTML = budget.value + '€';
        budget.addEventListener('input', function () {
            budgetValue.innerHTML = budget.value + '€';
        });
        budget.id = 'budgetTrip';


        labelFriendSearch.setAttribute('for', 'search');
        labelFriendSearch.textContent = 'Invitar Amigos';
        friendsSearch.type = 'search';
        friendsSearch.name = 'search';


        //Adding the event listener to search into the friends of an user
        friendsSearch.addEventListener('input', function () {
            removeAllChilds(divMainSearch);
            if ((friendsSearch.value).length != 0) {
                //If we obtain the value needed we print the divs 
                (friends).filter(element => {
                    if ((element.name).includes(friendsSearch.value)) {
                        createNameSearch(element.id, element.image, element.name);
                    }
                })
            }
        });

        divStyleFriends.className = 'style-friends';

        divButtons.className = 'style-buttons-create';

        submitButton.type = 'submit';
        submitButton.value = 'Editar viaje';
        submitButton.className = 'boton-secundario';

        cancelButton.textContent = 'Cancelar';

        //Inserting the elements into de html
        editContainer.appendChild(form);
        form.appendChild(divName)
        divName.appendChild(labelName);
        divName.appendChild(name);
        divName.appendChild(nameError);

        form.appendChild(divDates);
        divDates.appendChild(divDate);
        divDate.appendChild(labelDate);
        divDate.appendChild(date);
        divDate.appendChild(dateStartError);

        divDates.appendChild(divDateEnd);
        divDateEnd.appendChild(labelDateEnd);
        divDateEnd.appendChild(dateEnd);
        divDateEnd.appendChild(dateEndError);

        form.appendChild(divOriDes);
        divOriDes.appendChild(divOrigin);
        divOrigin.appendChild(labelOrigin);
        divOrigin.appendChild(origin);
        divOrigin.appendChild(originError);

        divOriDes.appendChild(divDestination);
        divDestination.appendChild(labelDestination);
        divDestination.appendChild(destination);
        divDestination.appendChild(destinationError);

        form.appendChild(divDesBud);
        divDesBud.appendChild(divDescription);
        divDescription.appendChild(labelDescription);
        divDescription.appendChild(description);

        divDesBud.appendChild(divBudget);
        divBudget.appendChild(divLabelBudget);
        divLabelBudget.appendChild(labelBudget);
        divBudget.appendChild(budget);
        divBudget.appendChild(budgetValue);

        form.appendChild(divStyleFriends);
        divStyleFriends.appendChild(divFriendsInvited);
        divFriendsInvited.appendChild(labelFriendSearch);
        divFriendsInvited.appendChild(friendsOnTrip);
        divFriendsInvited.appendChild(friendsSearch);
        divStyleFriends.appendChild(divMainSearch);

        form.appendChild(divButtons);
        divButtons.appendChild(divSubmit);
        divButtons.appendChild(divCancel);
        divSubmit.appendChild(submitButton);
        divButtons.appendChild(divCancel);
        divCancel.appendChild(cancelButton);

        updateTripFriends(object);
    }

}

//function to call the front end
export function renderEditForm() {

    editForm(trip1);
    setupSubmitEventListener();
}

// This function is called when submit button is pressed. Validates the form.
function validateForm() {
    clearErrors();
    // Checks if travel name is defined.
    if (!nameTrip.value) {
        generateError("name-error", "No se introdució un nombre para el viaje");
    }
    // Checks if starting date is correct.
    if (!startDate.value) {
        generateError("startDate-error", "No se introdució una fecha de inicio");
    }
    if (startDate.value && checkDateToActual(startDate.value) == 2) {
        generateError("startDate-error", "¡La fecha introducida no puede ser antes de hoy!");
    }
    // // Checks if end date is correct.
    if (!endDate.value) {
        generateError("endDate-error", "No se introdució una fecha de fin de viaje");
    } else if (checkDateToActual(endDate.value) == 2) {
        generateError("endDate-error", "¡La fecha introducida no puede ser antes de hoy!");
    } else if (startDate.value && compareDates(startDate.value, endDate.value) == 1) {
        generateError("endDate-error", "¡La fecha final no puede ser antes de la fecha de inicio!");
    }
    // Checks if other fields are filled.
    if (!originTrip.value) {
        generateError("origin-error", "Tiene que haber un lugar de origen");
    }
    if (!destinationTrip.value) {
        generateError("destination-error", "Tiene que haber un lugar de destino");
    }
    // Checks if there are any errors in the form. If there are not, fetch to server is done.
    if (verifyErrors()) {
        if (document.querySelector("#budgetTrip").value == 0) {
            if (!window.confirm("¿Estás seguro de poner el presupuesto en 0?")) {
                return;
            }
        }
    }
}
// This function is called when submit button is pressed. Validates the form.
function validateFormShort() {
    clearErrors();
    // Checks if travel name is defined.
    if (!nameTrip.value) {
        generateError("name-error", "No se introdució un nombre para el viaje");
    }

    // // Checks if end date is correct.
    if (!endDate.value) {
        generateError("endDate-error", "No se introdució una fecha de fin de viaje");
    } else if (checkDateToActual(endDate.value) == 2) {
        generateError("endDate-error", "¡La fecha introducida no puede ser antes de hoy!");
    }
    // Checks if there are any errors in the form. If there are not, fetch to server is done.
    if (verifyErrors()) {
        if (document.querySelector("#budgetTrip").value == 0) {
            if (!window.confirm("¿Estás seguro de poner el presupuesto en 0?")) {
                return;
            }
        }
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
            (trip1.friendsOnTrip).push(element);
            updateTripFriends(trip1);
        }
    });
    //Insert the elements into html
    divMainSearch.appendChild(divNameSearch);
    divNameSearch.appendChild(divImg);
    divImg.appendChild(imgSearch);
    divNameSearch.appendChild(divName);
}


//Function to remove all childs
function removeAllChilds(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//Function to load the friends already on trip
function updateTripFriends(object) {
    //we remove the childs of the element
    removeAllChilds(friendsOnTrip);
    //Then we charge the elements in trip
    (object.friendsOnTrip).forEach(element => {
        const imageDiv = document.createElement('div');
        const friendsOnTripImg = document.createElement('img');
        imageDiv.id = element.id;
        imageDiv.style.backgroundImage = `url(` + element.image + `)`;
        friendsOnTrip.appendChild(imageDiv);

        //Deleting the friends into the trip
        friendsOnTripImg.addEventListener('click', function () {
            console.log(this.id);
            trip1.friendsOnTrip = trip1.friendsOnTrip.filter(friend => friend.id != this.id);
            updateTripFriends(trip1);
        });
    });
}



//Function to search if the friend is on the trip
function searchOnTrip(element) {
    return trip1.friendsOnTrip.some(friend => friend.id === element.id);
}


function setupSubmitEventListener() {

    //Submit the edit-form
    document.getElementById('formEdit').addEventListener('submit', function (e) {
        // console.log("test frm submit");
        e.preventDefault();
        if (trip1.estado == 'abierto') {
            validateForm();
        } else {
            validateFormShort();
        }
        if (verifyErrors()){
            if (trip1.estado == 'abierto') {
                trip1.name = nameTrip.value;
                trip1.date = startDate.value;
                trip1.dateEnd = endDate.value;
                trip1.origin = originTrip.value;
                trip1.destination = destinationTrip.value;
                trip1.description = descriptionTrip.value;
                trip1.budget = budgetTrip.value;
                Object.values(trip1).forEach(element => {
                    console.log(element);
                });
                //WE ONLY HAVE TO SEND THE TRIP1 READJUSTED WITH A FETCH
                // fetch('https://ejemplo.com/editar', {
                //     method: 'POST',
                //     body: JSON.stringify(createObjectWithValues()),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // })
                //     .then(response => response.json())
                //     .then(data => console.log(data))
                //     .catch(error => console.error(error));
                //      <-------------------------              ------------------------->
            } else {
                trip1.name = nameTrip.value;
                trip1.dateEnd = endDate.value;
                trip1.budget = budgetTrip.value;
                Object.values(trip1).forEach(element => {
                    console.log(element);
                });
                //WE ONLY HAVE TO SEND THE TRIP1 READJUSTED WITH A FETCH
                // fetch('https://ejemplo.com/datos', {
                //     method: 'POST',
                //     body: JSON.stringify(createObjectWithValues()),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // })
                // .then(response => response.json())
                // .then(data => console.log(data))
                // .catch(error => console.error(error));
                //      <-------------------------              ------------------------->
            }
        }
        
    });
}