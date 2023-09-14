const API_KEY = "edc50554957c098bfebdde9ec9cb1ce8";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

locationInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        addInfo(e);
    }
});

getWeatherBtn.addEventListener("click", (e) => {
    addInfo(e)
});

function addInfo(e){
    const location = locationInput.value.trim();
    if (location) {
        const apiUrl = `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => displayWeather(data))
            .catch((err) => console.log(err))
            .finally(console.log("Запрос закончен!"));
    }
}

function displayWeather(weatherData) {
    const {
        name,
        sys: { country },
        main,
        main: { humidity: hum }, 
        weather,
        wind: {speed},
        visibility
    } = weatherData;

    info.innerHTML = `
    <h2>${name}, ${country}</h2>
    <p>Temperature: ${main.temp}</p>
    <p>Max temperature: ${main.temp_max}</p>
    <p>Min temperature: ${main.temp_min}</p>
    <p>Weather: ${weather[0].main}</p>
    <p>Description: ${weather[0].description}</p>
    <p>Humidity: ${hum}</p>
    <p>Speed of wind: ${speed}</p>
    <p>Visibility: ${visibility}</p>
    `
}






function details({ main: { temp }, name, sys: { sunrise, sunset } }) {
    info.innerHTML = `
<p>City: ${name}</p>
<p>Temp: ${convertFahrenheitToCelsius(temp)}°C</p>
<p>Sunrise: ${convertMillisecondsToTime(sunrise)}</p>
<p>Sunset: ${convertMillisecondsToTime(sunset)}</p>`;
}

function convertFahrenheitToCelsius(temperatureF) {
    return (temperatureF - 32) / 1, 8;
}

function convertMillisecondsToTime(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return (
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0")
    );
}
