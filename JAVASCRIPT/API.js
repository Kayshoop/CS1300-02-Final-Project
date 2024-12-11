// linking WeatherAPI

//This can be changed and updated to call what you need for each page, just adding basic structure!
fetch('http://api.weatherapi.com/v1/current.json?key=34cf0721004440388f1163235241112&q=Tulsa&aqi=no')
    .then(weatherResponse => weatherResponse.json())
    .then(weatherData => {
        console.log('Weather Data:', weatherData); 
    })
    .catch(error => console.error('Error, Unable to process Weather Data', error));

