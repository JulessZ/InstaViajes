// import fetchSim from 'fetch-simulator';
// fetchSim.use();


// fetchSim.addRoute('https://somekindofserver.com/location/miami', {
//     get: {
//         response: 'Miami, Florida, USA'
//     }
// });





fetch('https://somekindofserver.com/location/miami')
  .then((response) => {
      console.log(response);
      return response.json();
  })
  .then((response) => {
      console.log(response);
  });