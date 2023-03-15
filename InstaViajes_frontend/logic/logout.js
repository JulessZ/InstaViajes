export function logout() {
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
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "": "",
        },
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
        })
        .catch(error => {
            console.log(error);
        });
}