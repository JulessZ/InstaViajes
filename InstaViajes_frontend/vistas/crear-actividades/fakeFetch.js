// import Fetch from 'fetch-simulator';

import { baseUrl } from "../../config";

// Fetch.addRoute('https://instaviajes.com/places', {
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
// Fetch.use();

export class fakeFetch {
    static getPlacesData() {
        let url= baseUrl+"places";
        return fetch(url)
        .then((response) => {
            return response.json();
        })
    }
    
}