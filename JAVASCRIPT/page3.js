// const

const apikey = "d92c0c9afe5c4117b3e12415241212";
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const leftColumn = document.getElementById(".leftColumn");

weatherForm.addEventListener("submit", async envent => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        } catch(error) {
            console.log(error);
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

    const {name: city, 
        main: {temp, humidity}, 
        weatehr: [{description, id}]} = data

        leftColumn.textContent = "";
        leftColumn.style.display = "flex";

        const cityDisplay = Document.createElement("h1")
        const tempDisplay = Document.createElement("p")
        const humidityDisplay = Document.createElement("p")
        const descyDisplay = Document.createElement("p")
        const WeatherEmoji = Document.createElement("p")

        cityDisplay.textContent = city

        cityDisplay.classList.add("cityDisplay");

        leftColumn.appendChild(cityDisplay);

}

function getWeatherEmoji(weatherID){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    leftColumn.textContent = "";
    leftColumn.style.display = "flex";
    leftColumn.appendChild(errorDisplay)

}