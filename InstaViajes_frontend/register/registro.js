import {RegisterUser} from "./registerUser.js";
import Fetch from 'fetch-simulator';

const root = document.querySelector("#root");

let form = document.createElement("form");
form.method = "POST";

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");

let user = document.createElement("input");
let mail = document.createElement("input");
let password = document.createElement("input");
let repeatPassword = document.createElement("input");

user.type = "text";
user.required = true;

mail.type = "email";
mail.required = true;

password.type = "password";
password.required = true;

repeatPassword.type = "password";
repeatPassword.required = true;

craeteLabel("user");
div1.appendChild(user);
form.appendChild(div1);

craeteLabel("Email");
div2.appendChild(mail);
form.appendChild(div2);

craeteLabel("Password");
div3.appendChild(password);
form.appendChild(div3);

craeteLabel("Repeat Password");
div4.appendChild(repeatPassword);
form.appendChild(div4)

let submit = document.createElement("input"); 
submit.type = "submit";
submit.value = "Registrarse";

form.appendChild(submit);

root.appendChild(form);

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



// fetch('https://instaviajes.com/register', {method:'POST'})
// .then((response) => {
//     console.log(response);
//     return response.json();
// })
// .then((response) => {
//     console.log(response);
// })
// .catch((e)=>{
//     console.log(e.message)
// });

    }})

//función que crea labels
function craeteLabel(text) {
    let label = document.createElement("label");
    let labelText = document.createTextNode(text);
    label.appendChild(labelText);
    form.appendChild(label)
}



