export function renderCreatePost(){
    let body = document.querySelector("#formcrearposts");

    let formDiv = document.createElement("div");
    formDiv.className = "formPost container-fluid";

    let formRow = document.createElement("div");
    formRow.className = "row";

    let form = document.createElement("form");

    //Elemento div de la selección de una imagen
    let imgDiv = document.createElement("div");
    imgDiv.className = "col offset-4 mt-3";
    let img = document.createElement("input");
    img.type = "file";
    img.accept = "image/x-png,image/gif,image/jpeg";

    imgDiv.appendChild(img);

    //Elemento div del post a escribir
    let postDiv = document.createElement("div");
    postDiv.className = "col offset-2 mt-5";
    let post = document.createElement("textarea");
    post.cols = "80";
    post.rows = "15";

    postDiv.appendChild(post);

    //Elemento div del submit
    let submitDiv = document.createElement("div");
    submitDiv.className = "col offset-5 mt-5";
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Crear Post";
    submit.className = "form-submit";

    submitDiv.appendChild(submit);

    form.appendChild(imgDiv);
    form.appendChild(postDiv);
    form.appendChild(submitDiv);

    formRow.appendChild(form);

    formDiv.appendChild(formRow);
    body.appendChild(formDiv);


    let formSubmit = document.querySelector(".form-submit");
    formSubmit.addEventListener('click', (e)=>{
        e.preventDefault()
        fetchApiPost()
    })

};

function fetchApiPost() {

    let input = document.querySelector('input[type="file"]');

    let data = new FormData()
    data.append('file', input.files[0]);
    data.append('text', document.querySelector("textarea").value)

    console.log(data)

    
    
}