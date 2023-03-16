
// import fetchSim from 'fetch-simulator';

// fetchSim.addRoute('https://instaviajes.com/mis-viajes', {
//     get: {
//         response: {
//             journey1:{ 
//                 name: 'Viaje fin de curso', destination: 'Italia', days: 10, participants: 30, dateStart: '20/05/2023', dateEnd: '31/05/2023', status: 'Abierto', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
//             },
//             journey2:{ 
//                 name: 'Viaje a Portugal', destination: 'Portugal', days: 8, participants: 18, dateStart: '30/05/2023', dateEnd: '08/06/2023', status: 'Cerrado', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
//             }
//         }
//     }
// });

// fetchSim.addRoute('https://instaviajes.com/viajes-compartidos', {
//     get: {
//         response: {
//             journey1:{ 
//                 name: 'Viaje fin erasmus', destination: 'Roma', days: 12, participants: 20, dateStart: '20/05/2023', dateEnd: '31/05/2023', status: 'Cerrado', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
//             },
//             journey2:{ 
//                 name: 'Viaje a Madrid', destination: 'Madrid', days: 8, participants: 9, dateStart: '31/05/2023', dateEnd: '28/06/2023', status: 'Abierto', img: 'https://media.traveler.es/photos/62fe1ebd47832420e24c36d8/16:9/w_2580,c_limit/SurItalia_Positano1-Global.jpg',
//             }
//         }
//     }
// });

// fetchSim.use();

export class fetchMisViajes {
    static async showMisViajesData() {
        return fetch('https://instaviajes.com/mis-viajes')
        .then((response) => {
            return response.json();
        })
    }
    static async showViajesCompartidosData() {
        return fetch('https://instaviajes.com/viajes-compartidos')
        .then((response) => {
            return response.json();
        })
    }
}