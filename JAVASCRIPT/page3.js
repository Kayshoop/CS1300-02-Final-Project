// const

const apikey = "d92c0c9afe5c4117b3e12415241212";
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
// const leftColumn = document.getElementById("leftColumn");
const card = document.querySelector(".card");


weatherForm.addEventListener("submit", async envent => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        } catch(error) {
            console.error(error);
            displayError(error);

        }

    } else {displayError("Invalid. Please enter a city")}

});

async function getWeatherData(city) {

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;

    const Response = await fetch(apiUrl);

    console.log(Response);

    if(!Response.ok){ throw new Error("Unable to fetch weather data");

    }

    return await Response.json();
    
}

function displayWeatherInfo(data){

    const {
        location: { name: city },
        current: { temp_f: temp, humidity, condition: { text: description, icon } }
      } = data;
    
      card.textContent = "";

        const cityDisplay = document.createElement("h1")
        const tempDisplay = document.createElement("p")
        const humidityDisplay = document.createElement("p")
        const descDisplay = document.createElement("p")
        const weatherEmojiDisplay = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `Temperature: ${temp}°F`;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        descDisplay.textContent = `Condition: ${description}`;
        weatherEmojiDisplay.textContent = `Weather: ${getWeatherEmoji(description)}`;

      

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        weatherEmojiDisplay.classList.add("weatherEmoji");
      

        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmojiDisplay); 

}

function getWeatherEmoji(description) {
    const weatherEmojiMap = {
        Sunny: "☀️",
        Clear: "🌞",
        Cloudy: "☁️",
        Overcast: "🌥️",
        Rain: "🌧️",
        Snow: "❄️",
        Thunderstorm: "⛈️",
        Fog: "🌫️",
        Mist: "🌁",
        Drizzle: "🌦️",
        Haze: "🌤️",
        "Partly cloudy": "⛅",
    };

    return weatherEmojiMap[description] || "🌈";
}


function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.appendChild(errorDisplay)

}