//importamos la clase userRegistered que tiene datos de prueba
import { UserRegistered } from "./userRegistered";

export function render() {
    //elemento body
    let body = document.querySelector("#form-login");

    //Elemento div padre
    let fatherDiv = document.createElement("div");

    //Elemento div para el logo con un elemento imagen
    let logoDiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("id", "login-img");
    img.src = "public/logo-Instaviajes.png";
    let logoDivSalto = document.createElement("br");
    logoDiv.appendChild(img);
    logoDiv.appendChild(logoDivSalto);

    //Elemento div para el formulario con un formulario y dos inputs
    let formDiv = document.createElement("div");
    let form = document.createElement("form");

    let userLabel = document.createElement("label");
    let userLabelText = document.createTextNode("Usuario:");
    userLabel.appendChild(userLabelText);

    let user = document.createElement("input");
    let userSalto = document.createElement("br");
    user.type = "text";
    user.required = true;

    let passwordLabel = document.createElement("label");
    let passwordLabelText = document.createTextNode("Contraseña:");
    passwordLabel.appendChild(passwordLabelText);

    let password = document.createElement("input");
    let passwordSalto = document.createElement("br");
    password.type = "password";
    password.required = true;

    form.appendChild(userLabel)
    form.appendChild(user);
    form.appendChild(userSalto)
    form.appendChild(passwordLabel);
    form.appendChild(password);
    form.appendChild(passwordSalto);


    //Elemento div para los elemento extra del login
    let extra = document.createElement("div");
    let remember = document.createElement("input");
    remember.type = "checkbox"
    remember.checked = false;
    let rememberLabel = document.createElement("label");
    let rememberText = document.createTextNode("Recordar Login");
    let rememberSalto = document.createElement("br");

    rememberLabel.appendChild(rememberText);

    extra.appendChild(remember);
    extra.appendChild(rememberLabel);
    extra.appendChild(rememberSalto);

    //AQUÍ VA EL LOGIN CON GOOGLE
    //--------

    let rememberPassword = document.createElement("a");
    let rememberPasswordText = document.createTextNode("¿Has olvidado la contraseña?")
    let rememberPasswordSalto = document.createElement("br");

    rememberPassword.appendChild(rememberPasswordText);
    extra.appendChild(rememberPassword);
    extra.appendChild(rememberPasswordSalto);

    form.appendChild(extra);

    //Elemento div para el boton de loguearse
    let loginButtonDiv = document.createElement("div");
    let loginButton = document.createElement("input");
    loginButton.className = "boton-principal";
    loginButton.type = "submit";
    loginButton.value = "LOGIN";

    loginButtonDiv.appendChild(loginButton);
    form.appendChild(loginButtonDiv);

    //Conectamos los divs
    formDiv.appendChild(form)
    fatherDiv.appendChild(logoDiv);
    fatherDiv.appendChild(formDiv);

    body.appendChild(fatherDiv);


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let loggedUser = new UserRegistered();

        if (loggedUser.user !== user.value) {
            console.log("Usuario Incorrecto")
        } else if (loggedUser.password !== password.value) {
            console.log("Contraseña Incorrecta")
        } else {
            console.log("Usuario logueado")
        }
    })
}