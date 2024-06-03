import { WEATHER_API_KEY,  GEO_LOCALIZATION_API_KEY } from './apiKey.js';

const searchButton = document.querySelector('.search-button');
const searchedText = document.querySelector('#cep');
const geoLocationAPIKey = GEO_LOCALIZATION_API_KEY;
const weatherApiKey = WEATHER_API_KEY;

searchButton.addEventListener("click", () => {
    if (searchedText.value == "") {
        alert("precisa preencher com a localidade!");
    }
    fetchCEPData(searchedText.value);
});

const fetchCEPData = async (CEP) => {
    const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`, { method: "GET" });
    const cep = await response.json();
   await fetchCoordinatesByLocation(cep.localidade);
};

const fetchCoordinatesByLocation = async (location) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${geoLocationAPIKey}`, { method: "GET" });
    const coordinates = await response.json();
    await fetchWeatherForecast(coordinates[0].lat, coordinates[0].lon);
};

const fetchWeatherForecast = async (lat, lon) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${lat},${lon}&lang=pt`, { method: "GET" });
    const weather = await response.json();
    console.log(weather);

    const { current, location } = weather;
    createWeatherTitle(location.name, current.condition.text, current.condition.icon);
};

const createWeatherTitle = (location, weather, icon) => {
    var h2Element = document.createElement("h2");
    var h2Text = document.createTextNode(location);
    h2Element.appendChild(h2Text);
    document.body.appendChild(h2Element);

    var h3Element = document.createElement("h3");
    var h3Text = document.createTextNode(weather);
    h3Element.appendChild(h3Text);
    document.body.appendChild(h3Element);

    var imgElement = document.createElement("img");
    imgElement.src = icon;
    document.body.appendChild(imgElement);
};

const createWeatherConditions = (temp) => {
    var temp = document.createElement("h4");
    var tempText = document.createTextNode(temp);
    temp.appendChild(tempText);
    document.body.appendChild(temp);
};