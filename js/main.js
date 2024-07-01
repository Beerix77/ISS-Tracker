
// console.log(axios); // checks axio connected
 
const longDiv = document.querySelector('#long');
const latDiv = document.querySelector('#lat');
const astroDiv = document.querySelector('#astros');
const astroUL = document.querySelector('#astroUL');

axios.get(`http://api.open-notify.org/astros.json`)
.then( res => {

  //console.log(`Number of astronauts in space: ${res.data.number}`);
  astroDiv.innerHTML += `
    <h4>Number of astronauts in space: ${res.data.number}</h4><hr>`;

  for (const spaceman of res.data.people){

    astroUL.innerHTML += `<li>Name: ${spaceman.name}<br>Craft: ${spaceman.craft}</li><hr>`

  }
})
.catch( err => {

  console.log('There was an error', err);
  astroDiv.innerHTML = 'There was an error!';

}); //axios


const URL = 'http://api.open-notify.org/iss-now.json';

setInterval( () =>
  axios.get(URL)
    .then( res => {
      
      latDiv.innerHTML = "";
      longDiv.innerHTML = "";
      
      // console.log(res.data.iss_position.latitude);
      // console.log(res.data.iss_position.longitude);

      latDiv.innerHTML += `
        <h3>LATITUDE:</h3>${res.data.iss_position.latitude}`
      longDiv.innerHTML += `
        <h3>LONGITUDE:</h3>${res.data.iss_position.longitude}`

    })
    .catch( err => {

      console.log('There was an error locating the ISS!', err)

      div.innerHTML = "There was an error locating the ISS!"

    }) // axios
    , 5000); //setInterval







