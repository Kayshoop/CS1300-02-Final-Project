//Feel free to change or update, but these are the resources I found!

// linking WeatherAPI - https://www.weatherapi.com/api-explorer.aspx#current

// Fetching daily weather for Tulsa
fetch('http://api.weatherapi.com/v1/current.json?key=34cf0721004440388f1163235241112&q=Tulsa&aqi=no')
    .then(weatherResponse => weatherResponse.json())
    .then(weatherData => {
        console.log('Weather Data:', weatherData);
        // Process and display weather data
        document.getElementById('weather').innerHTML = `
            <h2>Current Weather in Tulsa</h2>
            <p>Temperature: ${weatherData.current.temp_f}°F</p>
            <p>Condition: ${weatherData.current.condition.text}</p>
            <img src="${weatherData.current.condition.icon}" alt="Weather Icon">
        `;
    })
    .catch(error => console.error('Error, Unable to process Weather Data', error));

/* linking NASA open API for Geomagnetic Storms 
https://ccmc.gsfc.nasa.gov/tools/DONKI/#donki-webservice-calls-api  
This link will take you to each API call to fetch different data from the NASA page */

// Fetching geomagnetic storms predicted for the week
const startDate = '2024-12-11'; // Replace with the current date
const endDate = '2024-12-18'; // Replace with the date one week from the current date

fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST?startDate=${startDate}&endDate=${endDate}`)
    .then(nasaResponse => nasaResponse.json())
    .then(nasaData => {
        console.log('Recent Activity:', nasaData);
        // Process and display NASA data
        let geomagneticStorms = '<h2>Geomagnetic Storms Predicted for the Week</h2>';
        nasaData.forEach(event => {
            geomagneticStorms += `
                <p>Start Time: ${event.startTime}</p>
                <p>End Time: ${event.endTime}</p>
                <p>KP Index: ${event.kpIndex}</p>
                <hr>
            `;
        });
        document.getElementById('geomagneticStorms').innerHTML = geomagneticStorms;
    })
    .catch(error => console.error('Error, Unable to process NASA Data', error));
