//Importamos la clase RegisterUser a la que le pasamos datos de usuario de prueba
import {RegisterUser} from "./registerUser.js";

//Elemento body del DOM
let body = document.querySelector("body");

//Elemento div padre
let fatherDiv = document.createElement("div");

//Elemento div para el logo con un elemento imagen
let logoDiv = document.createElement("div");
let img = document.createElement("img");
img.src = "#";
logoDiv.appendChild(img);

//Elemento div para el formulario con un formulario y los inputs
let formDiv = document.createElement("div");
let form = document.createElement("form");

//Label de usuario
let userLabel = document.createElement("label");
let userLabelText = document.createTextNode("Usuario:");
userLabel.appendChild(userLabelText);

//input de usuario
let user = document.createElement("input");
user.type = "text";
user.required = true;

//label de mail
let mailLabel = document.createElement("label");
let mailLabelText = document.createTextNode("Correo:")
mailLabel.appendChild(mailLabelText);

//input de mail
let mail = document.createElement("input");
mail.type = "email";
mail.required = true;

//label de password
let passwordLabel = document.createElement("label");
let passwordLabelText = document.createTextNode("Contraseña:");
passwordLabel.appendChild(passwordLabelText);

//input de password
let password = document.createElement("input");
password.type = "password";
password.required = true;

//label de repetir password
let repeatPasswordLabel = document.createElement("label");
let repeatPasswordLabelText = document.createTextNode("Repetir Contraseña:");
repeatPasswordLabel.appendChild(repeatPasswordLabelText);

//input de repetir password
let repeatPassword = document.createElement("input");
repeatPassword.type = "password";
repeatPassword.required = true;

form.appendChild(userLabel);
form.appendChild(user);
form.appendChild(mailLabel);
form.appendChild(mail);
form.appendChild(passwordLabel);
form.appendChild(password);
form.appendChild(repeatPasswordLabel);
form.appendChild(repeatPassword);

//Elemento div para el boton de registrarse
let loginButtonDiv = document.createElement("div");
let loginButton = document.createElement("input");
loginButton.type = "submit";
loginButton.value = "REGISTRARSE";

loginButtonDiv.appendChild(loginButton);
form.appendChild(loginButtonDiv);

//Conectamos los divs
formDiv.appendChild(form);
fatherDiv.appendChild(logoDiv);
fatherDiv.appendChild(formDiv);

body.appendChild(fatherDiv);

//crear objeto de tipo RegisterUser con los datos del formulario
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let newUser = new RegisterUser();

    if (password.value !== repeatPassword.value) {
        let error = document.createElement("p");
        let errorText = document.createTextNode("Las contraseñas deben ser iguales");

        error.appendChild(errorText);
        form.appendChild(error);
    }else{

        newUser.user = user.value;
        newUser.mail = mail.value;
        newUser.password = password.value;
        newUser.repeatPassword = repeatPassword.value;

        console.log(newUser)

    }})




