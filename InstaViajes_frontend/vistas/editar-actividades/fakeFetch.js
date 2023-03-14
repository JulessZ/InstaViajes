import Fetch from 'fetch-simulator';

Fetch.addRoute('https://instaviajes.com/places1', {
    get: {
        response: {
            place1:{ 
                name: 'Plaza de España', 
            },
            place2:{ 
                name: 'New York', 
            },
            place3:{ 
                name: 'Paris', 
            },
            place4:{ 
                name: 'Tokyo', 
            }
            ,
            place5:{ 
                name: 'Santa Cruz', 
            }
        }
    }
});

Fetch.addRoute('https://instaviajes.com/activity', {
    get: {
        response: {
            place:{ 
                name: 'Plaza de España',
                description: 'Este va a ser un viaje a la plaza de España',
                date: '2023-04-20',
                hour: '16:00',
                duration: '2',
                price: '150'
            }
        }
    }
});

Fetch.use();

export class fakeFetch {

    static getPlacesData() {
        return fetch('https://instaviajes.com/places1')
        .then((response) => {
            return response.json();
        })
    }

    static getActivityData() {
        return fetch('https://instaviajes.com/activity')
        .then((response) => {
            return response.json();
        })
    }
    
}