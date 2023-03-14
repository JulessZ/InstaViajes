export function renderProfile() {
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
    userDiv.appendChild(userInput);
    inputsDiv.appendChild(userDiv);

    //Elemento div del label nombre del usuario
    let nameLabelDiv = document.createElement("div");
    nameLabelDiv.className = "mt-4"

    let nameLabel = document.createElement("label");
    let nameLabelText = document.createTextNode("Nombre");
    let br = document.createElement("br");
    let nameLabelTextDown = document.createTextNode("Completo");

    nameLabel.appendChild(nameLabelText);
    nameLabel.appendChild(br);
    nameLabel.appendChild(nameLabelTextDown);

    nameLabelDiv.appendChild(nameLabel)
    labelsDiv.appendChild(nameLabelDiv);

    //Elemento div del input del nombre
    let nameDiv = document.createElement("div");
    nameDiv.className = "mt-4";

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameDiv.appendChild(nameInput);
    inputsDiv.appendChild(nameDiv);

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
    emailDiv.appendChild(emailInput);
    inputsDiv.appendChild(emailDiv);


    //Elemento div del label contraseña
    let passwordLabelDiv = document.createElement("div");
    passwordLabelDiv.className = "mt-4";

    let passwordLabel = document.createElement("label");
    let passwordLabelText = document.createTextNode("Contraseña");
    passwordLabel.appendChild(passwordLabelText);
    passwordLabelDiv.appendChild(passwordLabel)
    labelsDiv.appendChild(passwordLabelDiv);

    //Elemento div del input de la contraseña
    let passwordDiv = document.createElement("div");
    passwordDiv.className = "mt-4";

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordDiv.appendChild(passwordInput);
    inputsDiv.appendChild(passwordDiv);

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
}