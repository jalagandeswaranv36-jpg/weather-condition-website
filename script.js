const apiKey = "283ff098eeb0350b8d46c9a2755ac107";  // Replace with your own OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=283ff098eeb0350b8d46c9a2755ac107&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp + "°C";
    document.getElementById("weather").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";
}
