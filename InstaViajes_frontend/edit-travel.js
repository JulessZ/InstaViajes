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
    friends: [
        { id: 1, name: 'diegoB', mail: 'diego@example.com', image: 'image.png' },
        { id: 2, name: 'brian', mail: 'brian@example.com', image: 'image.png' },
        { id: 3, name: 'diegoR', mail: 'diego@example.com', image: 'image.png' },
        { id: 4, name: 'aram', mail: 'aram@example.com', image: 'image.png' },
        { id: 5, name: 'carmen', mail: 'carmen@example.com', image: 'image.png' },
        { id: 6, name: 'sara', mail: 'sara@example.com', image: 'image.png' },
        { id: 7, name: 'rai', mail: 'rai@example.com', image: 'image.png' },
        { id: 8, name: 'jorge', mail: 'jorge@example.com', image: 'image.png' },
        { id: 9, name: 'marco', mail: 'marco@example.com', image: 'image.png' },
        { id: 10, name: 'donovan', mail: 'donovan@example.com', image: 'image.png' }
      ]
  };
  
//Const parent to insert the form
const editContainer = document.querySelector('#form-editar-viajes');
const divMainSearch = document.createElement('div');

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
        const friends = document.createElement('select');
        const friendsDescription = document.createElement('option');
        const friendsSearch = document.createElement('input');
        const submitButton = document.createElement('input');


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

        friends.setAttribute('name' , 'friends');
        friendsDescription.setAttribute('selected', 'true');
        friendsDescription.setAttribute('disabled', 'true');
        //Inserting the selected disabled option on the html
        friendsDescription.textContent = "Invitar Amigos";
        //Obtaining the friends values from object array
        friends.appendChild(friendsDescription);
        (object.friends).forEach(element => {
            const optionFriends = document.createElement('option');
            optionFriends.value = element.id;
            optionFriends.textContent = element.name;
            friends.appendChild(optionFriends);
        });

        friendsSearch.type = 'search';


        //Adding the event listener to search into the friends of an user
        friendsSearch.addEventListener('input', function () {
            removeAllChilds(divMainSearch);
            if ((friendsSearch.value).length != 0) {
                //If we obtain the value needed we print the divs 
                (object.friends).filter(element =>  {
                    if ((element.name).includes(friendsSearch.value)) {
                        createNameSearch(element.image, element.name);
                    }
                }) 
            }
        });

        submitButton.type = 'submit';
        submitButton.value = 'Editar viaje';

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

        form.appendChild(friends);

        form.appendChild(friendsSearch);
        form.appendChild(divMainSearch);

        form.appendChild(submitButton);
    }
    
}

editForm(trip1);



//Function to create the elements of the search
function createNameSearch(img,name) {
    //Giving the necesary elements
    const divNameSearch = document.createElement('div');
    const divImg = document.createElement('div');
    const imgSearch = document.createElement('img');
    const divName = document.createElement('div');

    //Setting some attributes
    imgSearch.src = img;
    imgSearch.alt = 'img';
    divName.textContent = name;

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