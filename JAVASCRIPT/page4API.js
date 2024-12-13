// geocode API Key 97f28ca84025d05f90a5e70bd9940478
// Base URL: http://api.positionstack.com/v1/


const stormGlassApiKey = 'eb83a106-b8f3-11ef-9159-0242ac130003-eb83a16a-b8f3-11ef-9159-0242ac130003'; 
const geocodingApiKey = '97f28ca84025d05f90a5e70bd9940478';

document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('fetchMoonPhaseBtn').addEventListener('click', () => { 
        const city = document.getElementById('cityInput').value; 
        if (city) { 
            getCoordinates(city) 
            .then(coords => fetchMoonPhase(coords.lat, coords.lng)) 
            .catch(error => console.error('Error fetching data:', error)); 
        } 
    }); 
});

function getCoordinates(city) { 
    const geocodingUrl = `http://api.positionstack.com/v1/forward?access_key=${geocodingApiKey}&query=${city}`; 
    return fetch(geocodingUrl) 
        .then(geoResponse => geoResponse.json()) 
        .then(geoData => { if (data.data && data.data.length > 0) { 
            const { latitude: lat, longitude: lng } = data.data[0]; 
            return { lat, lng }; 
        } 
        else { 
            throw new Error('Location not found'); 
        } 
    }); 
}