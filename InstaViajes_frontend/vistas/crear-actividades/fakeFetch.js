// import Fetch from 'fetch-simulator';

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
        return fetch('https://instaviajes.com/places')
        .then((response) => {
            return response.json();
        })
    }
    
}