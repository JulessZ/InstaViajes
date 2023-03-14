renderCreatePost();

function renderCreatePost(){
    let body = document.querySelector("body");

    let formDiv = document.createElement("div");
    let form = document.createElement("form");
    form.method = "POST";
    form.action = "#";

    //Elemento div de la selección de una imagen
    let imgDiv = document.createElement("div");
    let img = document.createElement("input");
    img.type = "file";
    img.accept = "image/x-png,image/gif,image/jpeg";

    imgDiv.appendChild(img);

    //Elemento div del post a escribir
    let postDiv = document.createElement("div");
    let post = document.createElement("textarea");

    postDiv.appendChild(post);

    //Elemento div del submit
    let submitDiv = document.createElement("div");
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Crear Post";

    submitDiv.appendChild(submit);

    form.appendChild(imgDiv);
    form.appendChild(postDiv);
    form.appendChild(submitDiv);

    formDiv.appendChild(form);
    body.appendChild(formDiv);
};