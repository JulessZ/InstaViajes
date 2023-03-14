// // Define una función para filtrar la lista de usuarios por el valor del campo "firstName"
// function filterUsersByName(name) {
//     return userList.filter(user => user.firstName.toLowerCase().includes(name.toLowerCase()));
//   }
  
//   // Obtén la lista de usuarios filtrada
//   const filteredUsers = filterUsersByName(searchInput.value);
  
//   // Pasa la lista filtrada a las funciones friendsList() y otherPeople()
//   friendsList(filteredUsers, friendships, userLogged);
//   otherPeople(filteredUsers, friendships, userLogged);
  


//Import fake-simulator for develop
import Fetch from 'fetch-simulator';
Fetch.use();

//Generate fake routes to use
//Need to the API send this info with the profileImage in it
fetch.addRoute('https://instaviajes.com/profile/users', {
    get: {
        response: [
            { id: 1, firstName: 'Juan', lastName: 'Pérez', image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg' , email: 'juan.perez@example.com' },
            { id: 2, firstName: 'María', lastName: 'García', image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg', email: 'maria.garcia@example.com' },
            { id: 3, firstName: 'Pedro', lastName: 'Martínez', image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg' , email: 'pedro.martinez@example.com' },
            { id: 4, firstName: 'Ana', lastName: 'Hernández', image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg', email: 'Ana.hdez@example.com' },
            { id: 5, firstName: 'Luis', lastName: 'Expósito', image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg' , email: 'luis.exposito@example.com' },
            { id: 6, firstName: 'Belén', lastName: 'Ruíz', image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg' , email: 'belen.ruiz@example.com' },
        ]
    }
});
fetch.addRoute('https://instaviajes.com/profile/{user_id}/friends', {
    get: {
        response: [
            { id: 1, user_id_sender: 1, user_id_receptor: 2, state: true },
            { id: 2, user_id_sender: 1, user_id_receptor: 3, state: false },
            { id: 3, user_id_sender: 1, user_id_receptor: 4, state: false },
            { id: 4, user_id_sender: 1, user_id_receptor: 5, state: false },
        ]
    }
});

//Variables to use
// let divRoot = document.getElementById('contactosamigos');
// let divRoot2 = document.getElementById('usuariosamigos');
// let divRoot3 = document.getElementById('peticionesamigos');
// let divRoot4 = document.getElementById('botonfiltroamigos');
let userList;
let friendships;
let userLogged = 1;
//get th user logged id
// let userLogged;

//Fetch to the fake routes
const fetch1 = fetch('https://instaviajes.com/profile/users')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        userList = response;
        console.log(userList)

        
    });
//Fetch to take friendships
const fetch2 = fetch('https://instaviajes.com/profile/{user_id}/friends')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        friendships = response;
    });

export async function showData() {
    //Call the funciont for friendRequest for now we use an static
    await fetch1;
    await fetch2;
    friendsRequests(userLogged);
    //Call to the function to list de FriendshipList
    friendsList(userLogged);
    //Show other users that are not friends
    otherPeople(userLogged);
    //Show the top buttons
    buttons();

}
//Function to create the friends list
export function friendsList(userId) {
    let divRoot = document.getElementById('contactosamigos');

    // Create a div element to contain the friends list
    const friendListDiv = document.createElement("div");

    // Add a header
    let header = document.createElement("h2");
    header.textContent = "Tus amigos ";
    friendListDiv.appendChild(header);

    // Add a div for every friend
    friendships.map((friendship) => {
        if (friendship.state) {
            const friendId = friendship.user_id_sender === userId ? friendship.user_id_receptor : friendship.user_id_sender;
            const friend = userList.find((user) => user.id === friendId);

            // Create a div element to contain a friend's information
            const friendDiv = document.createElement("div");

            // Add a profile picture
            const imgDiv = document.createElement("div");
            const img = document.createElement("img");
            img.src = `${friend.image}`;
            imgDiv.appendChild(img);
            friendDiv.appendChild(imgDiv);

            // Add friend's name
            const nameDiv = document.createElement("div");
            // nameDiv.textContent = `${friend.firstName} ${friend.lastName}`;
            nameDiv.textContent = `${friend.firstName}`;
            friendDiv.appendChild(nameDiv);

            // Add a button
            const button = document.createElement("button");
            button.textContent = "...";
            friendDiv.appendChild(button);

            // Create a new div for the information
            const infoDiv = document.createElement("div");

            // Set the initial state of the information div
            let showInfo = false;
            infoDiv.style.display = "none";

            // Add event listener to button
            button.addEventListener("click", () => {
                // Toggle the showInfo value
                showInfo = !showInfo;

                // Show or hide the information div based on the showInfo value
                if (showInfo) {
                    infoDiv.style.display = "block";
                } else {
                    infoDiv.style.display = "none";
                }

                // Add information to the div
                const deleteLink = document.createElement("a");
                deleteLink.textContent = "Eliminar a " + `${friend.firstName}` + " de la lista de amigos";
                deleteLink.style.cursor = "pointer";
                deleteLink.addEventListener("click", () => {
                    // Code to delete friend from the list goes here
                    manageFriendRequest(friendship.id, false);
                    // Hide the information div after deletion
                    infoDiv.style.display = "none";
                });
                infoDiv.innerHTML = "";
                infoDiv.appendChild(deleteLink);

                // Append the new div to the userDiv
                friendDiv.appendChild(infoDiv);
            });


            // Add the friend's div element to the friends list
            friendListDiv.appendChild(friendDiv);
        }
    });

    // Agregar la lista de amigos al DOM
    divRoot.appendChild(friendListDiv);
}

export function otherPeople(userId) {
    let divRoot2 = document.getElementById('usuariosamigos');

    // Create a div element to contain the friends list
    const friendListDiv = document.createElement("div");

    // Add a header
    let header = document.createElement("h2");
    header.textContent = "Otros usuarios";
    friendListDiv.appendChild(header);

    // Add a div for every non-friend user
    userList.map((user) => {
        // Check if the user is not already a friend and is not the current user
        const isNotFriend = !friendships.find(friendship =>
            (friendship.user_id_sender === userId && friendship.user_id_receptor === user.id) ||
            (friendship.user_id_sender === user.id && friendship.user_id_receptor === userId));
        const isNotCurrentUser = user.id !== userId;
        if (isNotFriend && isNotCurrentUser) {

            // Create a div element to contain a user's information
            const userDiv = document.createElement("div");

            // Add a profile picture
            const imgDiv = document.createElement("div");
            const img = document.createElement("img");
            img.src = `${user.image}`;
            imgDiv.appendChild(img);
            userDiv.appendChild(imgDiv);

            // Add user's name
            const nameDiv = document.createElement("div");
            nameDiv.textContent = `${user.firstName}`;
            userDiv.appendChild(nameDiv);

            // Add a button
            const button = document.createElement("button");
            button.textContent = "...";
            userDiv.appendChild(button);

            // Create a new div for the information
            const infoDiv = document.createElement("div");

            // Set the initial state of the information div
            let showInfo = false;
            infoDiv.style.display = "none";

            // Add event listener to button
            button.addEventListener("click", () => {
                // Toggle the showInfo value
                showInfo = !showInfo;

                // Show or hide the information div based on the showInfo value
                if (showInfo) {
                    infoDiv.style.display = "block";
                } else {
                    infoDiv.style.display = "none";
                }

                // Add information to the div
                const addLink = document.createElement("a");
                addLink.textContent = "Agregar a " + `${user.firstName}` + " a la lista de amigos";
                addLink.style.cursor = "pointer";
                addLink.addEventListener("click", () => {
                    // Code to add user to the list goes here
                    sendFriendRequest(user.id);
                    // Hide the information div after addition
                    infoDiv.style.display = "none";
                });
                infoDiv.innerHTML = "";
                infoDiv.appendChild(addLink);

                // Append the new div to the userDiv
                userDiv.appendChild(infoDiv);
            });



            // Add the user's div element to the friends list
            friendListDiv.appendChild(userDiv);
        }
    });

    // Add the friends list to the DOM
    divRoot2.appendChild(friendListDiv);
}

//Function to create the top buttons
export function buttons() {
    let divRoot4 = document.getElementById('botonfiltroamigos');
    // Create the first button
    const button1 = document.createElement("button");
    button1.textContent = "TODOS";

    // Create the second button
    const button2 = document.createElement("button");
    button2.textContent = "RECIENTES";

    // Create a container div for the buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.appendChild(button1);
    buttonsDiv.appendChild(button2);

    // Create the search input
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Buscar";

    const divSearchedElements = document.createElement('div');
    divSearchedElements.id = 'prueba';

    searchInput.addEventListener('input', function () { 
        borrarNodo(divSearchedElements);
        if (searchInput.value.length != 0) {
            userList.filter(element => {
                if(((element.firstName).toLowerCase()).includes((searchInput.value).toLowerCase())) {
                    createSearchedFriends(element.firstName);
                }
            }
            );
        }
        
    });
    
    function borrarNodo(nodo) {
        while (nodo.firstChild) {
            nodo.removeChild(nodo.firstChild);
        }
    }

    // Function to create the structure of searched friends
    function createSearchedFriends (name) {
        const divStyleFriends = document.createElement('div');

        divStyleFriends.textContent = name;
        divSearchedElements.appendChild(divStyleFriends);
    }

    // Create a container div for the search input
    const searchDiv = document.createElement("div");
    searchDiv.appendChild(searchInput);

    // Add the buttons and search divs to the root div
    divRoot4.appendChild(buttonsDiv);
    divRoot4.appendChild(searchDiv);
    divRoot4.appendChild(divSearchedElements);
}

export function friendsRequests(userId) {

    let divRoot3 = document.getElementById('peticionesamigos');

    if (friendships.length === 0) {
        return;
    }
    // Create a div element to contain the list of pending requests
    const pendingListDiv = document.createElement("div");

    // Add a header
    let header = document.createElement("h2");
    header.textContent = "Solicitudes de amistad pendientes";
    pendingListDiv.appendChild(header);

    // Add a div for every pending friend request
    friendships.map((friendship) => {
        const friend = userList.find(
            (user) =>
                user.id === (friendship.user_id_sender === userId ? friendship.user_id_receptor : friendship.user_id_sender)
        );

        if (!friendship.state) {
            // Create a div element to contain the information of a pending request
            const friendDiv = document.createElement("div");

            // Add a profile picture
            const img = document.createElement("img");
            img.src = `${friend.image}`;
            friendDiv.appendChild(img);

            // Add friend's name
            const nameDiv = document.createElement("div");
            // nameDiv.textContent = `${friend.firstName} ${friend.lastName}`;
            nameDiv.textContent = `${friend.firstName}`;
            friendDiv.appendChild(nameDiv);

            // Add a button to accept request
            const acceptButton = document.createElement("button");
            acceptButton.textContent = "Aceptar solicitud";
            acceptButton.addEventListener("click", () => {
                manageFriendRequest(friendship.id, true);
            });
            friendDiv.appendChild(acceptButton);

            // Add a reject button
            const rejectButton = document.createElement("button");
            rejectButton.textContent = "Rechazar solicitud";
            rejectButton.addEventListener("click", () => {
                manageFriendRequest(friendship.id, false);
            });
            friendDiv.appendChild(rejectButton);


            // Add the div element of the request to the list of pending requests
            pendingListDiv.appendChild(friendDiv);
        }

    });

    // Add list of pending requests to the DOM
    divRoot3.appendChild(pendingListDiv);
}

//Functions to manage friends request
export function manageFriendRequest(friendshipId, state) {
    //If the petition is accepted, send a PUT fetch, if not send a DELETE fetch
    if (state) {
        // Define the URL of the API that will receive the friend request
        const apiUrl = "https://mi-api.com/amigos";

        // Defines the data object to be sent to the server
        const requestData = {
            friendshipId: friendshipId,
        };

        // Define the application options
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        };

        // Sends the request to the server using fetch
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al enviar la solicitud");
                }
                console.log("Solicitud enviada con éxito");
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        // Define the URL of the API that will receive the friend request
        const apiUrl = "https://mi-api.com/amigos";

        // Defines the data object to be sent to the server
        const requestData = {
            friendshipId: friendshipId,
            accepted: state
        };

        // Define the application options
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        };

        // Sends the request to the server using fetch
        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al enviar la solicitud");
                }
                console.log("Solicitud enviada con éxito");
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

}
//Funcion to send a friend request
export function sendFriendRequest(userId) {

    // Define the URL of the API that will receive the friend request
    const apiUrl = "https://mi-api.com/amigos/peticionDeAmistad";

    // Defines the data object to be sent to the server
    const requestData = {
        userId: userLogged,
        userInvitedId: userId
    };
    // Define the application options
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    };

    // Sends the request to the server using fetch
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }
            console.log("Solicitud enviada con éxito");
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}


// showData();
