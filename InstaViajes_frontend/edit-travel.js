//Example of inputs dates to obtain the form 
const trip1 = {
    name: "Vacaciones en Lisboa",
    //---IMPORTANT--- 
    date: "2018-06-01", //THE FORMAT OF THE DATES TO PRINT ON THE HMTL
    dateEnd: "2018-07-01", //THE FORMAT OF THE DATES TO PRINT ON THE HMTL
    origin: "La palma",
    destination: "Lisboa",
    description: "El viaje consistirá en un mes de blablablalbal",
    budget: 3000,
    estado: 'abierto',
    //Var to introduce friends into the trip
    friendsOnTrip : [
        {id: 1, image: 'imageDiegoB.png' },
        {id: 2, image: 'imageBrian.png' }
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
  

//Const parent to insert the form
const editContainer = document.querySelector('#form-editar-viajes');
//Div mains of searcher realted to friends
const divMainSearch = document.createElement('div');
const friendsOnTrip = document.createElement('div');

//Function to create edit-Form
function editForm(object) {
    //If the trip is on road
    if (object.estado == 'en curso') {
        //Create elements
        const form = document.createElement('form');
        const labelName = document.createElement('label');
        const name = document.createElement('input');
        const labelDateEnd = document.createElement('label');
        const dateEnd = document.createElement('input');
        const labelBudget = document.createElement('label');
        const budget = document.createElement('input');
        const budgetValue = document.createElement('span');
        const submitButton = document.createElement('input');

        //Setting the attributes to the different elements
        labelName.setAttribute('for', 'name');
        labelName.textContent = 'Nombre para el Viaje';

        name.type = 'text';
        name.setAttribute('name', 'name');
        //Inserting the values on the html
        name.value = object.name;

        labelDateEnd.setAttribute('for', 'dateEnd');
        labelDateEnd.textContent = 'Fecha Final';

        dateEnd.type = 'date';
        dateEnd.setAttribute('name', 'dateEnd');
        //Inserting the values on the html
        dateEnd.value = object.dateEnd;

        labelBudget.setAttribute('for', 'budget');
        labelBudget.textContent = 'Presupuesto Aproximado';

        budget.type= 'range';
        budget.setAttribute('name', 'budget');
        budget.min = 0;
        budget.max = 10000;
        budget.value = object.budget;
        budgetValue.innerHTML = budget.value +'€';
        budget.addEventListener('input', function() {
            budgetValue.innerHTML = budget.value +'€';
        });

        submitButton.type = 'submit';
        submitButton.value = 'Editar viaje';

        //Inserting the elements into de html
        editContainer.appendChild(form);
        form.appendChild(labelName);
        form.appendChild(name);

        form.appendChild(labelDateEnd);
        form.appendChild(dateEnd);

        form.appendChild(labelBudget);
        form.appendChild(budget);
        form.appendChild(budgetValue);

        form.appendChild(submitButton);

    } else {
        //Elements of the form and form
        const form = document.createElement('form');
        const labelName = document.createElement('label');
        const name = document.createElement('input');
        const labelDate = document.createElement('label');
        const date = document.createElement('input');
        const labelDateEnd = document.createElement('label');
        const dateEnd = document.createElement('input');
        const labelOrigin = document.createElement('label');
        const origin = document.createElement('input');
        const labelDestination = document.createElement('label');
        const destination = document.createElement('input');
        const labelDescription = document.createElement('label');
        const description = document.createElement('textarea');
        const labelBudget = document.createElement('label');
        const budget = document.createElement('input');
        const budgetValue = document.createElement('span');
        const labelFriendSearch = document.createElement('label');
        const friendsSearch = document.createElement('input');
        const submitButton = document.createElement('input');
        const cancelButton = document.createElement('input');


        //Setting the attributes to the different elements
        labelName.setAttribute('for', 'name');
        labelName.textContent = 'Nombre para el Viaje';

        name.type = 'text';
        name.setAttribute('name', 'name');
        //Inserting the values on the html
        name.value = object.name;

        labelDate.setAttribute('for', 'date');
        labelDate.textContent = 'Fecha de Inicio'

        date.type = 'date';
        date.setAttribute('name' , 'date');
        //Inserting the values on the html
        date.value = object.date;

        labelDateEnd.setAttribute('for', 'dateEnd');
        labelDateEnd.textContent = 'Fecha Final';

        dateEnd.type = 'date';
        dateEnd.setAttribute('name', 'dateEnd');
        //Inserting the values on the html
        dateEnd.value = object.dateEnd;

        labelOrigin.setAttribute('for', 'origin');
        labelOrigin.textContent = 'Origen';

        origin.type = 'text';
        origin.setAttribute('name', 'origin');
        //Inserting the values on the html
        origin.value = object.origin;

        labelDestination.setAttribute('for', 'destination');
        labelDestination.textContent = 'Destino';

        destination.type = 'text';
        destination.setAttribute('name', 'destination');
        //Inserting the values on the html
        destination.value = object.destination;

        labelDescription.setAttribute('for', 'description');
        labelDescription.textContent = 'Descripción del Viaje';

        description.setAttribute('name', 'description');
        description.cols = '30';
        description.rows = '10';
        description.textContent = object.description;

        labelBudget.setAttribute('for', 'budget');
        labelBudget.textContent = 'Presupuesto Aproximado';

        budget.type= 'range';
        budget.setAttribute('name', 'budget');
        budget.min = 0;
        budget.max = 10000;
        budget.value = object.budget;
        budgetValue.innerHTML = budget.value +'€';
        budget.addEventListener('input', function() {
            budgetValue.innerHTML = budget.value +'€';
        });

        friendsOnTrip

        labelFriendSearch.setAttribute('for', 'search');
        labelFriendSearch.textContent = 'Invitar Amigos';
        friendsSearch.type = 'search';
        friendsSearch.name = 'search';


        //Adding the event listener to search into the friends of an user
        friendsSearch.addEventListener('input', function () {
            removeAllChilds(divMainSearch);
            if ((friendsSearch.value).length != 0) {
                //If we obtain the value needed we print the divs 
                (friends).filter(element =>  {
                    if ((element.name).includes(friendsSearch.value)) {
                        createNameSearch(element.id,element.image, element.name);
                    }
                }) 
            }
        });

        submitButton.type = 'submit';
        submitButton.value = 'Editar viaje';

        cancelButton.type = 'reset';
        cancelButton.value = 'Cancelar';

        //Inserting the elements into de html
        editContainer.appendChild(form);
        form.appendChild(labelName);
        form.appendChild(name);

        form.appendChild(labelDate);
        form.appendChild(date);

        form.appendChild(labelDateEnd);
        form.appendChild(dateEnd);

        form.appendChild(labelOrigin);
        form.appendChild(origin);

        form.appendChild(labelDestination);
        form.appendChild(destination);

        form.appendChild(labelDescription);
        form.appendChild(description);

        form.appendChild(labelBudget);
        form.appendChild(budget);
        form.appendChild(budgetValue);

        form.appendChild(friendsOnTrip);

        form.appendChild(labelFriendSearch);
        form.appendChild(friendsSearch);
        form.appendChild(divMainSearch);

        form.appendChild(submitButton);

        form.appendChild(cancelButton);

        updateTripFriends(object);
    }
    
}

editForm(trip1);



//Function to create the elements of the search
function createNameSearch(id,img,name) {
    //Giving the necesary elements
    const divNameSearch = document.createElement('div');
    const divImg = document.createElement('div');
    const imgSearch = document.createElement('img');
    const divName = document.createElement('div');

    //Setting some attributes
    imgSearch.src = img;
    imgSearch.alt = 'img';
    divName.textContent = name;


    divNameSearch.addEventListener('click', function() {
        const element = {
            id: id,
            image: img
        }
        if (searchOnTrip(element)) {
            window.alert('No se puede insertar este amigo ya que se encuentra en el viaje');
        } else {
            (trip1.friendsOnTrip).push(element);
            updateTripFriends(trip1);
            console.log(trip1.friendsOnTrip); 
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

//Function to submit the edit-form
function submitEditForm (e){
    e.preventDefault();
}

//Function to load the friends already on trip
function updateTripFriends (object) {
    //we remove the childs of the element
    removeAllChilds(friendsOnTrip);
    //Then we charge the elements in trip
    (object.friendsOnTrip).forEach(element => {
        const friendsOnTripImg = document.createElement('img');
        friendsOnTripImg.id = element.id;
        friendsOnTripImg.src = element.image;
        friendsOnTrip.appendChild(friendsOnTripImg);

        //friendsOnTripImg.setAttribute('onclick', 'deleteFriendsTrip(this)');
    });
}

//Function to delete friends from the trip
function deleteFriendsTrip (element) {
    console.log(element.id);
}

//Function to search if the friend is on the trip
function searchOnTrip(element) {
    return trip1.friendsOnTrip.some(friend => friend.id === element.id);
}