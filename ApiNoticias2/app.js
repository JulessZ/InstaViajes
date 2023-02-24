//Coger la cookie y setearla en el div de noticias.
let temaGuardado = getCookie('temaActual');
document.getElementById("ultimo-tema").textContent = "Último tema visto: " + temaGuardado;

//Cantida de noticias que se cargaran cada vez que se presione siguiente (5 + 1)
let cantidadNoticias = 5;
let pageFinal = cantidadNoticias;
let pageInicial = 0;
let temaActual = "Programación";

//Evento para solo tener que darle al enter cuando estás buscando en el buscador de noticias
var searchBtn = document.getElementById("busqueda");
searchBtn.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    buscarTema();
  }
});

let noticias = {
    "apiKey": "3538a4d9cd27480b9f206060fdb9fbdd",
    fetchNoticias: function (categoria) {
        // categoria = temaGuardado ? temaGuardado : categoria;
        fetch(
            "https://newsapi.org/v2/everything?q="
            + categoria +
            "&language=en&apiKey=" + this.apiKey
        )

            .then((response) => response.json())
            .then((data) => this.displayNoticias(data))
            .catch(error => {
                if (error.code === 'Not Found') {
                    document.getElementById("ultimo-tema").textContent = ('Error 404: Recurso no encontrado');
                } else if (error.code === 'Bad Request') {
                    document.getElementById("ultimo-tema").textContent = ('Error 400: Solicitud mal formada');
                } else {
                    document.getElementById("ultimo-tema").textContent = (error);
                }
            });
    },
    displayNoticias: function (data) {
        // Cálculo de la fecha promedio
        const fechas = data.articles.map(({ publishedAt }) => new Date(publishedAt));
        const fechaPromedio = fechas.reduce((acc, fecha) => acc + fecha, 0) / fechas.length;
        
        //elimino todo si ha seleccionado un nuevo tema
        if (pageInicial == 0) {
            document.querySelector(".container-noticias").textContent = "";
        }

        data.articles
        //obtener un subconjunto de elementos para mostrar.
            .slice(pageInicial, pageFinal + 1)
        // asegurarse de que solo se muestren noticias con imágenes
            .filter(({ urlToImage }) => urlToImage)
            .map(({ title, urlToImage, publishedAt, source: { name }, url }) => {
                const h2 = document.createElement("h2");
                h2.textContent = title;

                const img = document.createElement("img");
                img.setAttribute("src", urlToImage);

                const fecha = document.createElement("span");
                fecha.className = "fecha";
                fecha.textContent = publishedAt.split("T")[0].split("-").reverse().join("-");

                const fuente = document.createElement("span");
                fuente.className = "fuente";
                fuente.textContent = name;

                const info_item = document.createElement("div");
                info_item.className = "info_item";
                info_item.appendChild(fecha);
                info_item.appendChild(fuente);

                const item = document.createElement("div");
                item.className = "item";
                item.appendChild(h2);
                item.appendChild(img);
                item.appendChild(info_item);
                item.setAttribute("onclick", `location.href='${url}'`);

                document.querySelector(".container-noticias").appendChild(item);
            });


        let btnSiguiente = document.createElement("span");
        btnSiguiente.id = "btnSiguiente";
        btnSiguiente.textContent = "MÁS NOTICIAS";
        btnSiguiente.setAttribute("onclick", "siguiente()");
        document.querySelector(".container-noticias").appendChild(btnSiguiente);
    }
}



function buscar(cat) {
    pageInicial = 0;
    pageFinal = cantidadNoticias;
    temaActual = cat;
    setCookie('temaActual', temaActual);

    noticias.fetchNoticias(cat);
}

function buscarTema() {
    pageInicial = 0;
    pageFinal = cantidadNoticias;
    let tema = document.querySelector("#busqueda").value;
    temaActual = tema;
   
    setCookie('temaActual', temaActual);

    noticias.fetchNoticias(temaActual);
}

function siguiente() {
    pageInicial = pageFinal + 1;
    pageFinal = pageFinal + cantidadNoticias + 1;
    //eliminamos el botón siguiente
    document.querySelector("#btnSiguiente").remove();

    setCookie('temaActual', temaActual);

    noticias.fetchNoticias(temaActual);

}

noticias.fetchNoticias(temaActual);

if (temaGuardado) {
    noticias.fetchNoticias(temaGuardado);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



// for(i=pageInicial;i<=pageFinal;i++){
//     const {title} = data.articles[i];
//     let h2 = document.createElement("h2");
//     h2.textContent = title;

//     const {urlToImage} = data.articles[i];
//     let img = document.createElement("img");
//     img.setAttribute("src", urlToImage);

//     let info_item = document.createElement("div");
//     info_item.className = "info_item";
//     const {publishedAt} = data.articles[i];
//     let fecha = document.createElement("span");
//     let date = publishedAt;
//     date=date.split("T")[0].split("-").reverse().join("-");
//     fecha.className = "fecha";
//     fecha.textContent = date;

//     const {name} = data.articles[i].source;
//     let fuente = document.createElement("span");
//     fuente.className = "fuente";
//     fuente.textContent = name;

//     info_item.appendChild(fecha);
//     info_item.appendChild(fuente);

//     const {url} = data.articles[i];

//     let item = document.createElement("div");
//     item.className = "item";
//     item.appendChild(h2);
//     item.appendChild(img);
//     item.appendChild(info_item);
//     item.setAttribute("onclick", "location.href='"+url+"'");
//     document.querySelector(".container-noticias").appendChild(item);
// }


