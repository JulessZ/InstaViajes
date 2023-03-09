
import Fetch from 'fetch-simulator';

Fetch.addRoute('https://instaviajes.com/mis-viajes', {
    get: {
        response: {
            journey1:{ 
                name: 'Viaje fin de curso', destination: 'Italia', days: 5, participants: 30, dateStart: '20/05/2023', dateEnd: '31/05/2023', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
            },
            journey2:{ 
                name: 'Viaje a Portugal', destination: 'Portugal', days: 8, participants: 30, dateStart: '20/05/2023', dateEnd: '31/05/2023', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
            }
        }
    }
});

Fetch.addRoute('https://instaviajes.com/viajes-compartidos', {
    get: {
        response: {
            journey1:{ 
                name: 'Viaje fin de curso', destination: 'Italia', days: 5, participants: 30, dateStart: '20/05/2023', dateEnd: '31/05/2023', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
            },
            journey2:{ 
                name: 'Viaje a Portugal', destination: 'Portugal', days: 8, participants: 30, dateStart: '20/05/2023', dateEnd: '31/05/2023', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
            }
        }
    }
});

Fetch.use();

export class fetchMisViajes {
    static showMisViajesData() {
        return fetch('https://instaviajes.com/mis-viajes')
        .then((response) => {
            return response.json();
        })
    }
    static showViajesCompartidosData() {
        return fetch('https://instaviajes.com/mis-viajes')
        .then((response) => {
            return response.json();
        })
    }
}