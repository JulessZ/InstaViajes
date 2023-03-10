//Import fake-simulator for develop
import Fetch from 'fetch-simulator';
Fetch.use();

//Generate fake routes to use
fetch.addRoute('https://instaviajes.com/profile/users', {
    get: {
        response: [
            { id: 1, firstName: 'Juan', lastName: 'Pérez', email: 'juan.perez@example.com' },
            { id: 2, firstName: 'María', lastName: 'García', email: 'maria.garcia@example.com' },
            { id: 3, firstName: 'Pedro', lastName: 'Martínez', email: 'pedro.martinez@example.com' },
            { id: 4, firstName: 'Ana', lastName: 'Hernández', email: 'Ana.hdez@example.com' },
            { id: 5, firstName: 'Luis', lastName: 'Expósito', email: 'luis.exposito@example.com' },
            { id: 6, firstName: 'Belén', lastName: 'Ruíz', email: 'belen.ruiz@example.com' },
        ]
    }
});
fetch.addRoute('https://instaviajes.com/profile/users/friendships', {
    get: {
        response: [
            { id: 1, user_id_sender: 1, user_id_receptor: 2, state: true },
            { id: 2, user_id_sender: 1, user_id_receptor: 4, state: false },
            { id: 3, user_id_sender: 1, user_id_receptor: 6, state: false },
            { id: 4, user_id_sender: 2, user_id_receptor: 3, state: false },
            { id: 5, user_id_sender: 2, user_id_receptor: 4, state: false },
            { id: 6, user_id_sender: 2, user_id_receptor: 6, state: false },
            { id: 7, user_id_sender: 3, user_id_receptor: 1, state: true },
            { id: 8, user_id_sender: 3, user_id_receptor: 5, state: true },
            { id: 9, user_id_sender: 3, user_id_receptor: 6, state: true },
        ]
    }
});

//Variables to use
let divRoot = document.getElementById('root');
let userList;
let friendships;
let userLogged;
//Fetch to the fake routes
await fetch('https://instaviajes.com/profile/users')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        userList = response;
    });
//Fetch to take friendships
await fetch('https://instaviajes.com/profile/users/friendships')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        friendships = response;
    });

async function showData() {
    //Get a random user logged for test
    userLogged = userList[Math.floor(Math.random() * userList.length)].id;
    console.log(userLogged);
    //Call to the function to list de FriendshipList
    friendsList(3);
}

function friendsList(userId) {
    // Filter the list of friends to get only those where the logged in user is the sender or the receiver
    const friends = friendships.filter(
        (friendship) =>
            friendship.user_id_sender === userId || friendship.user_id_receptor === userId
    );

    // Crear un elemento div para contener la lista de amigos
    const friendListDiv = document.createElement("div");

    // Add a header with the user's name
    let header = document.createElement("h2");
    header.textContent = "Tus amigos ";
    friendListDiv.appendChild(header);

    // Add a div for every friend
    friends.map((friendship) => {
        if (friendship.state) {
            const friendId = friendship.user_id_sender === userId ? friendship.user_id_receptor : friendship.user_id_sender;
            const friend = userList.find((user) => user.id === friendId);

            // Create a div element to contain a friend's information
            const friendDiv = document.createElement("div");

            // Add a profile picture
            const imgDiv = document.createElement("div");
            const img = document.createElement("img");
            img.src = friend.profileImage;
            imgDiv.appendChild(img);
            friendDiv.appendChild(imgDiv);

            // Add friend's name
            const nameDiv = document.createElement("div");
            nameDiv.textContent = `${friend.firstName} ${friend.lastName}`;
            friendDiv.appendChild(nameDiv);

            // Add a button
            const button = document.createElement("button");
            button.textContent = "Eliminar amigo";
            friendDiv.appendChild(button);

            // Add the friend's div element to the friends list
            friendListDiv.appendChild(friendDiv);
        }
    });

    // Agregar la lista de amigos al DOM
    divRoot.appendChild(friendListDiv);
}


showData();