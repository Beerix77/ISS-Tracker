
console.log('Hello space!');
//console.log(axios);  // failsafe way to check loaded in correct order

const outputDivLoc = document.querySelector('#location');
const outputDivAstro = document.querySelector('#astronauts');

setInterval(() => {

axios.get('http://api.open-notify.org/iss-now.json')
    .then(function(res){
        console.log('Location', res.data);

        //console.log('Location', res.data.iss_position.longitude);
        //console.log('Location', res.data.iss_position.latitude);
        
        outputDivLoc.innerHTML =
        `<h2>${res.data.iss_position.longitude + ", " +
            res.data.iss_position.latitude}</h2>`;
    })
    .catch(function(err) {
        console.warn('something went wrong', err);
    });

} 
, 5000); //setinterval function every 5 secs. Create into function as a callback and also call it so it immed runs.

axios.get('http://api.open-notify.org/astros.json')
    .then(function(res){
        for (const astro of res.data.people) {
            outputDivAstro.innerHTML +=
            `<p>${astro.name}</p>`
        }
    })
    .catch(function(err) {
        console.warn('something went wrong', err);
    });
    
  

