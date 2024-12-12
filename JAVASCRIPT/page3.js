// const

const apikey = "d92c0c9afe5c4117b3e12415241212"
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector("#cityInput");
const leftColumn = document.querySelector(".leftColumn");

weatherForm.addEventListener("submit", async envent => {

    event.preventDefault();

    const city = cityImput.value;

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

    const {name: city, 
        main: {temp, humidity}, 
        weatehr: [{description, id}]} = data

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