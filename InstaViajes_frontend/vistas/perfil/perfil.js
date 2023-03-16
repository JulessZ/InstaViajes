import { isUserAuth } from "../../logica/users";

export async function renderProfile() {
    let name;
    let email;
    let id;
    await isUserAuth()
    .then(data => {
        id = data.userData.user.id;
        name = data.userData.user.name;
        email = data.userData.user.email;
    });
    
    let body = document.querySelector("#profile");

    let fatherDiv = document.createElement("div");

    //Elemento div de la imagen
    let imgDiv = document.createElement("div");
    imgDiv.className = "col-12 mt-5";

    let imgElementDiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = "././public/profile-test.jpg";
    img.className = "profile-image";

    let imgChangeDiv = document.createElement("div");
    imgChangeDiv.className = "mt-3"

    let imgChange = document.createElement("a");
    imgChange.href = "#";
    imgChange.className = "text-decoration-none"

    let imgChangeText = document.createTextNode("Cambiar imagen");
    imgChange.appendChild(imgChangeText);
    
    imgElementDiv.appendChild(img);
    imgChangeDiv.appendChild(imgChange)
    imgDiv.appendChild(imgElementDiv);
    imgDiv.appendChild(imgChangeDiv);

    //Elemento div del formulario
    let profileDiv = document.createElement("div");
    profileDiv.className = "col-12 mt-5"
    let profileForm = document.createElement("form");

    //Elementos sub-divs del formulario
    let subDivsRow = document.createElement("div");
    subDivsRow.className = "row";

    let labelsDiv = document.createElement("div");
    labelsDiv.className = "col-3 col-md-3 offset-2 offset-md-3 mt-1";

    let verticalLineDiv = document.createElement("div");
    verticalLineDiv.className = "vertical-line col-1 offset-1 offset-md-0";

    let inputsDiv = document.createElement("div");
    inputsDiv.className = "col-1 col-md-3";

    let submitDiv = document.createElement("div");
    submitDiv.className = "col-6 offset-3 mt-5";

    //Elemento div del label usuario 
    let userLabelDiv = document.createElement("div");
    userLabelDiv.className = "mt-4";

    let userLabel = document.createElement("label");
    let userLabelText = document.createTextNode("Usuario");
    userLabel.appendChild(userLabelText);
    userLabelDiv.appendChild(userLabel)
    labelsDiv.appendChild(userLabelDiv);

    //Elemento div del input del usuario
    let userDiv = document.createElement("div");
    userDiv.className = "mt-4";

    let userInput = document.createElement("input");
    userInput.type = "text";
    userInput.value = name;
    userDiv.appendChild(userInput);
    inputsDiv.appendChild(userDiv);

    //Elemento div del label email del usuario
    let emailLabelDiv = document.createElement("div");
    emailLabelDiv.className= "mt-4";

    let emailLabel = document.createElement("label");
    let emailLabelText = document.createTextNode("Email");
    emailLabel.appendChild(emailLabelText);
    emailLabelDiv.appendChild(emailLabel);
    labelsDiv.appendChild(emailLabelDiv);

    //Elemento div del input del email
    let emailDiv = document.createElement("div");
    emailDiv.className = "mt-4";

    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.value = email;
    emailDiv.appendChild(emailInput);
    inputsDiv.appendChild(emailDiv);

    //Elemento div del submit
    let submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.value = "Guardar";
    submitInput.className = "boton-secundario";

    submitDiv.appendChild(submitInput);

    //Append child del formulario

    subDivsRow.appendChild(labelsDiv);
    subDivsRow.appendChild(verticalLineDiv);
    subDivsRow.appendChild(inputsDiv);
    subDivsRow.appendChild(submitDiv);

    profileForm.appendChild(subDivsRow);

    profileDiv.appendChild(profileForm);

    //Append child de los div
    fatherDiv.appendChild(imgDiv);
    fatherDiv.appendChild(profileDiv);

    body.appendChild(fatherDiv);
   
    profileForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const token = localStorage.getItem("auth_token");

        const apiUrl = `http://localhost/api/perfil/${id}/update`;

        const requestData = {
            name: userInput.value,
            email: emailInput.value
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(requestData)
        };

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
    }) 

}


    
