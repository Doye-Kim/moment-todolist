function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = "5221048ab4f43e6339abea61cf8f12cb";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather div:last-child");
      const weather = document.getElementById("icon");
      const temp = document.getElementById("temp");
      const icon = data.weather[0].icon;
      weather.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      //city.innerText = data.name;
      temp.innerText = ` ${data.main.temp} °C  |  ${data.name}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
