// Lógica para usuarios que hereda de app.js

let logoutBtn;

export function init() {
    console.log("entra?");
    cacheElements();
    setupEventListeners();
}

function cacheElements() {
    logoutBtn = document.querySelector("#logoutBtn");
    console.log(logoutBtn);
}


function setupEventListeners() {
    logoutBtn.addEventListener("click", logout);
}

export function logout() {
    console.log("Haciendo logout");
    //Set de auth token to send for request
    const token = localStorage.getItem("auth_token");
    console.log(token);
    // Define the URL of the API that will receive the friend request
    const apiUrl = "http://localhost/api/logout";

    // Defines the data object to be sent to the server
    // const requestData = {
    // };
    // Define the application options
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        //body: JSON.stringify(requestData)
    };

    // Sends the request to the server using fetch
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }
            console.log("Solicitud enviada con éxito");
            console.log(response);
            localStorage.removeItem("auth_token");
            console.log("Token borrado con éxito");
        })
        .catch(error => {
            console.log(error);
        });
}

export function isUserAuth() {
    
}