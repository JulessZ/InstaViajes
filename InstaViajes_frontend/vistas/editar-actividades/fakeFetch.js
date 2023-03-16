// import Fetch from 'fetch-simulator';

import { baseUrl } from "../../config";

// Fetch.addRoute('https://instaviajes.com/places1', {
//     get: {
//         response: {
//             place1:{ 
//                 name: 'Plaza de España', 
//             },
//             place2:{ 
//                 name: 'New York', 
//             },
//             place3:{ 
//                 name: 'Paris', 
//             },
//             place4:{ 
//                 name: 'Tokyo', 
//             }
//             ,
//             place5:{ 
//                 name: 'Santa Cruz', 
//             }
//         }
//     }
// });

// Fetch.addRoute('https://instaviajes.com/activity', {
//     get: {
//         response: {
//             place:{ 
//                 name: 'Plaza de España',
//                 description: 'Este va a ser un viaje a la plaza de España',
//                 date: '2023-04-20',
//                 hour: '16:00',
//                 duration: '2',
//                 price: '150'
//             }
//         }
//     }
// });

// Fetch.use();
let url1=baseUrl+"places1";
let url2=baseUrl+"activity";
export class fakeFetch {
    
    static getPlacesData() {
        return fetch(url1)
        .then((response) => {
            return response.json();
        })
    }

    static getActivityData() {
        return fetch(url2)
        .then((response) => {
            return response.json();
        })
    }
    
}