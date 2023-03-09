import Fetch from 'fetch-simulator';
Fetch.use();


fetch.addRoute('https://somekindofserver.com/mainV', {
    get: {
        response: [{

            location: 'India',
            image: 'https://concepto.de/wp-content/uploads/2019/05/cultura-griega-acropolis-e1559077275552-800x400.jpg',
            days: 8,
            NumUsers:4,
            
        },
        {

            location: 'Thailandia',
            image: 'https://www.surfingtheplanet.com/wp-content/uploads/2017/08/plaza-navona-roma-italia-800x400.jpg',
            days: 3,
            NumUsers:5,
        },
        {

            location: 'Francia',
            image: 'https://humanidades.com/wp-content/uploads/2018/09/Berlin-min-e1536096458165.jpg',
            days: 2,
            NumUsers:7,
        }
    ]
    }
});

const container = document.querySelector('.containerViaje')


window.addEventListener('DOMContentLoaded', async () => {
    const datos = await fetchDatos();
    Creartarjetas(datos);
});

async function fetchDatos() {
    const response = await fetch('https://somekindofserver.com/mainV');
    console.log(response);
    return await response.json();
}

function Creartarjetas(datos){
    // ------creamos el titulo de nuevo viaje------
    const title = document.createElement('h2');
    title.textContent='Mis viajes';
    container.appendChild(title);



//    ----------creamos el contenido de mis viajes--------

    datos.forEach(element => {
        const tarjeta = document.createElement('div');
        const divLocation= document.createElement('div');
        const divUserDays= document.createElement('div');
        
        const image = document.createElement('img');
        image.setAttribute('src',element.image);

        const location = document.createElement('h3');
        location.textContent = element.location
        const Numuser = document.createElement('span')
        Numuser.textContent = element.NumUsers;

        const NumDay = document.createElement('span')
        NumDay.textContent =element.days + 'dias';

        container.appendChild(tarjeta);
        tarjeta.appendChild(image);
        tarjeta.appendChild(divLocation);
        tarjeta.appendChild(divUserDays);
        divLocation.appendChild(location);
        

        

        
    });
    // -----creamos el link a nuevo viaje--------
    const divFoot=document.createElement('div');
    const NuevoViaje = document.createElement('a');
    NuevoViaje.setAttribute('href',"index.html");
    NuevoViaje.textContent ='Nuevo Viaje';
    container.appendChild(divFoot);
    divFoot.appendChild(NuevoViaje);
}


