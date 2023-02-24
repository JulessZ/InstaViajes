// coger el id del html Para imprimir los cocteles
var cocktailsContainer = document.getElementById('cocktails');
// coger el id del html Para imprimir el carrito
let bloqueDeFilas = document.getElementById('cart-table');
// Array para guardar el carrito
let cart = [];

function tabla() {
    if (checkcookie('carrito') == null) {
        console.log("No existe");
    } else {
        let carrito2 = getcookie('carrito');
        cart = JSON.parse(carrito2);
        cart.forEach(drink => {
            let fila = document.createElement('tr');
            let columnaUno = document.createElement('td');
            columnaUno.innerHTML = drink.name;
            let columnaDos = document.createElement('td');
            columnaDos.innerHTML = drink.id;
            let columnaTres = document.createElement('td');
            //Meterle la clase 'texto a la derecha' de bootstrap para poner el boton eliminar en el tercer tr
            columnaTres.classList.add('text-right');
            let botonBorrar = document.createElement('button');
            botonBorrar.innerHTML = 'X';
            botonBorrar.classList.add('btn', 'btn-danger');
            //Evento necesario para cuando clico en Eliminar del carrito se borre la fila entera
            botonBorrar.addEventListener('click', function () {
                bloqueDeFilas.removeChild(fila);
                updateCartCount2();
                cart = cart.filter(i => i.id !== drink.id);
                //convierte el array cart en una cadena de texto en formato JSON.
                //formato en que se almacenan las cookies.
                setcookie('carrito', JSON.stringify(cart), 7);
            });
            columnaTres.appendChild(botonBorrar);
            fila.appendChild(columnaUno);
            fila.appendChild(columnaDos);
            fila.appendChild(columnaTres);
            bloqueDeFilas.appendChild(fila);
        });

    };
}



fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
    .then(response => response.json())
    .then(data => {
        const drinks = data.drinks;
        drinks.forEach(drink => {
            cocktailsContainer.innerHTML += `<div class="card" style="width: 18rem;"> 
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body"><h5 class="card-title">${drink.strDrink}</h5>
            <p class="card-text">${drink.idDrink}</p>
            <a href="#"  id="${drink.idDrink}" class="btn btn-light">Añadir al carrito</a>
            </div>
            </div>`;
        });
        cocktailsContainer.innerHTML += '</div>';
        drinks.forEach(drink => {
            //Recoger el Id del boton que estoy pulsando
            let boton = document.getElementById(`${drink.idDrink}`);
            boton.addEventListener("click", function () {
                let fila = document.createElement('tr');
                let columnaUno = document.createElement('td');
                columnaUno.innerHTML = drink.strDrink;
                let columnaDos = document.createElement('td');
                columnaDos.innerHTML = drink.idDrink;
                let columnaTres = document.createElement('td');
                //Meterle la clase texto a la derecha de bootstrap
                columnaTres.classList.add('text-right');
                let botonBorrar = document.createElement('button');
                botonBorrar.innerHTML = 'X';
                botonBorrar.classList.add('btn', 'btn-danger');
                //Evento necesario para cuando clico en Eliminar del carrito se borre la fila entera
                botonBorrar.addEventListener('click', function () {
                    bloqueDeFilas.removeChild(fila);
                });
                columnaTres.appendChild(botonBorrar);
                fila.appendChild(columnaUno);
                fila.appendChild(columnaDos);
                fila.appendChild(columnaTres);
                bloqueDeFilas.appendChild(fila);
                //------------
                //
                //Crear una cookie (Nombre, valor, numero de tiempo, dias)
                //
                //------------
                cart.push({ name: drink.strDrink, id: drink.idDrink });
                //Convierte un valor en un objeto JSON (Necesario para las cookies)
                setcookie('carrito', JSON.stringify(cart), 7);
                updateCartCount();
            });


        });

    });

//Cuando la página se recargue, carga el contenido de la cookie del carrito en la tabla de carrito. 
window.addEventListener('load', function () {
    getcookie('carrito');
    tabla();
    updateCartCount();
});

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cart.length;
}

function updateCartCount2() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cart.length - 1;
}


//----------------------------
//
//FUNCIONES DE COOKIES
//
//----------------------------  
function setcookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getcookie(name) {
    return checkcookie(name);
}
function checkcookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
//----------------------------

const generatePdfButton = document.getElementById('generate-pdf-button');
generatePdfButton.addEventListener('click', () => {

    const cartTable = document.getElementById('cart-table');
    const rows = cartTable.querySelectorAll('tr');
    const pdf = new jsPDF();
    var vertical = 20;
    pdf.setFontType("bold");
    pdf.setFontSize(24);
    pdf.text(90, 10, "FACTURA");
    pdf.setFontType("normal");
    pdf.setFontSize(15);
    rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        var horizontal = 10;
        for (let i = 0; i < (cells.length - 1); i++) {
            pdf.text(horizontal, vertical, cells[i].textContent);
            horizontal = horizontal + 80;
        }
        vertical = vertical + 10;
        pdf.text(8, vertical - 5, "--------------------------------------------------------");

    });
    pdf.text(10,140,"¡GRACIAS POR TÚ COMPRA!");
    pdf.save('pedido.pdf');
});














