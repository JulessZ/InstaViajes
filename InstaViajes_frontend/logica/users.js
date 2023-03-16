// Lógica para usuarios que hereda de app.js

import { baseUrl } from "../config";

let logoutBtn;

export function init() {
    cacheElements();
    setupEventListeners();
}

function cacheElements() {
    logoutBtn = document.querySelector("#logoutBtn");
}


function setupEventListeners() {
    logoutBtn.addEventListener("click", logout);
}

export function logout() {
    const token = localStorage.getItem("auth_token");
    // Define the URL of the API that will receive the friend request
    const apiUrl =baseUrl+"api/logout";
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    };
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar la solicitud");
            }
            console.log(response);
            localStorage.removeItem("auth_token");
            console.log("Token borrado con éxito");
            onNavigate("/login");
        })
        .catch(error => {
            console.log(error);
        });
}

export async function isUserAuth() {
    // Set de auth token to send for request
    const token = localStorage.getItem("auth_token");
    // Define the URL of the API that will receive the friend request
    const apiUrl = baseUrl+"api/verify";

    let auth = true;
    let userData = null;

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    };

    // Sends the request to the server using fetch
    const response = await fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                auth = false;
                throw new Error("new error token unauthenticated");
            }

            return response.json();
        })
        .then(response => {
            userData = response;
            return response;
        })
        .catch(error => {
            auth = false;
            console.log(error);
        });

    return { auth, userData };
}


// isUserAuth();

