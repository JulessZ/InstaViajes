import Fetch from 'fetch-simulator';
Fetch.use();

// Viajes de otros usuarios de la plataforma
fetch.addRoute('https://somekindofserver.com/travelsRandom', {
    get: {
        response: [{

            location: 'Grecia',
            image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg',
            imageuser:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            username: 'Aram Hernandez',
            days: 8,
            NumUsers:4,
            
        },
        {

            location: 'Italia',
            image: 'https://www.surfingtheplanet.com/wp-content/uploads/2017/08/plaza-navona-roma-italia-800x400.jpg',
            imageuser:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            username: 'Carmen',
            days: 4,
            NumUsers:2,
        },
        {

            location: 'Berlin',
            image: 'https://humanidades.com/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg',
            imageuser:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            username: 'Diego',
            days: 3,
            NumUsers:8,
        }
    ]
    }
});


// Viajes de mis amigos
fetch.addRoute('https://somekindofserver.com/user/friends/travels', {
    get: {
        response: [{

            location: 'Grecia',
            image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg',
            imageuser:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            username: 'Aram Hernandez',
            days: 8,
            NumUsers:4,
            
        },
        {

            location: 'Italia',
            image: 'https://www.surfingtheplanet.com/wp-content/uploads/2017/08/plaza-navona-roma-italia-800x400.jpg',
            imageuser:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            username: 'Carmen',
            days: 4,
            NumUsers:2,
        },
        {

            location: 'Berlin',
            image: 'https://humanidades.com/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg',
            imageuser:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            username: 'Diego',
            days: 3,
            NumUsers:8,
        }
    ]
    }
});

init();

export function init(){
    renderIndex();
}

// Función principal que crea el contenido de la página

export function renderIndex(){

const container = document.querySelector('#todosviajeshome')


window.addEventListener('DOMContentLoaded', async () => {
    const datos = await fetchDatos();
    Creartarjetas(datos);
});

async function fetchDatos() {
    const response = await fetch('https://somekindofserver.com/user/friends/travels');
    console.log(response);
    return await response.json();
}

function Creartarjetas(datos){
    datos.forEach(element => {
        const tarjeta = document.createElement('div');
        
        const divInsideCard2 = document.createElement('div');
        const divInsideCard3 = document.createElement('div');
        const divInsideCard4 = document.createElement('div');

        const image = document.createElement('img');
        image.setAttribute('src',element.image);

        const imageuser = document.createElement('img')
        imageuser.setAttribute('src',element.imageuser);
        
        const location = document.createElement('h3');
        location.textContent=element.location;

        const user = document.createElement('h5')
        user.textContent = element.username;

        const Numuser = document.createElement('span')
        Numuser.textContent = element.NumUsers;

        const NumDay = document.createElement('span')
        NumDay.textContent =element.days + 'dias';
       
        container.appendChild(tarjeta);
        tarjeta.appendChild(image);
        
        tarjeta.appendChild(divInsideCard2);
        tarjeta.appendChild(divInsideCard3);
        divInsideCard2.appendChild(location);
        divInsideCard2.appendChild(divInsideCard4);
        divInsideCard4.appendChild(user);
        divInsideCard4.appendChild(imageuser)
        divInsideCard3.appendChild(Numuser);
        divInsideCard3.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>');
        divInsideCard3.appendChild(NumDay)
    });

    const divFoot=document.createElement('div');
    const botonEdit = document.createElement('a');
    botonEdit.setAttribute('href',"edit-travel.html");
    botonEdit.textContent ='Editar viaje';
    container.appendChild(divFoot);
    divFoot.appendChild(botonEdit);
}

}
