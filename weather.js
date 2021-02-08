const weather = document.querySelector(".js-weather");
const COORDS = 'coords'; 
const API_KEY = "ea53203d3a96305bbbedbdd280ea70ec";
// a pair of numbers and/or letters that show the exact position of a point on a map, graph or image

function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(function(response){
            return response.json()
        }).then(function(json){
            const temperature = json.main.temp;
            const name = json.name;
            weather.innerHTML = `temperature: ${temperature} city name: ${name}`;
        })
        
}

function saveCoords(position){
    //localStorage.setItem("coords",position);
    //localStorage.setItem("latitude", position.coords.latitude);
    //localStorage.setItem("longitude", position.coords.longitude);
    const coordsObject = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
    localStorage.setItem("coords", JSON.stringify(coordsObject));  
}

function handleGeoSuccess(position){
    console.log(position);
    saveCoords(position);
}

function handleGeoError(position){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(localStorage.getItem("coords"));
        const lat = parsedCoords.latitude;
        const lon = parsedCoords.longitude;
        getWeather(lat, lon);
    }
}

function init(){
    loadCoords();
}

init();