
function formatDate(timestamp) {
    let date = new Date(timeStamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${minutes}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday"; "Thursday", "Friday", "Saturday"]
    let day = date.getDay();
    return `${day} ${hours}: ${minutes}`;

}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city")
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#wind")
    let dateElement = document.querySelector(#date);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
    "src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.weather[0]}.icon.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
}
let apiKey = bf21060e89a4t73bd10c2a07e6087o40
let city = "Bergen";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Bergen&key=bf21060e89a4t73bd10c2a07e6087o40&units=metric`;

axios.get(apiUrl).then(displayTemperature);