function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "5221048ab4f43e6339abea61cf8f12cb";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span: last-child");
        const weather = document.querySelector("#weather span: first-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);