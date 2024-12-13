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
        .then(geoData => { 
            if (geoData.data && geoData.data.length > 0) { 
                const { latitude: lat, longitude: lng } = geoData.data[0]; 
                return { lat, lng }; 
            } else { 
                throw new Error('Location not found'); 
            } 
        }); 
}

function fetchMoonPhase(lat, lng) {
    const end = new Date().toISOString().split('T')[0];
    const apiUrl = `https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`;

    const options = {
        method: 'GET',
        headers: {
            'Authorization': stormGlassApiKey,
            'Cache-Control': 'no-cache'
        }
    };

    return fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => {
            const moonPhase = data.data[0].moonPhase.current.text;
            const moonrise = data.data[0].moonrise;
            const moonset = data.data[0].moonset;
            const closestMoonPhase = data.data[0].moonPhase.closest.text;
            const moonFraction = data.data[0].moonFraction;
            const astronomicalDawn = data.data[0].astronomicalDawn;
            const astronomicalDusk = data.data[0].astronomicalDusk;
            const civilDawn = data.data[0].civilDawn;
            const civilDusk = data.data[0].civilDusk;
            const nauticalDawn = data.data[0].nauticalDawn;
            const nauticalDusk = data.data[0].nauticalDusk;
            const sunrise = data.data[0].sunrise;
            const sunset = data.data[0].sunset;

            document.getElementById('moonPhaseEmoji').textContent = `Moon Phase: ${moonPhase}`;
            document.getElementById('moonrise').textContent = `Moonrise: ${moonrise}`;
            document.getElementById('moonset').textContent = `Moonset: ${moonset}`;
            document.getElementById('closestMoonPhase').textContent = `Closest Moon Phase: ${closestMoonPhase}`;
            document.getElementById('moonFraction').textContent = `Moon Fraction: ${moonFraction}`;
            document.getElementById('astronomicalDawn').textContent = `Astronomical Dawn: ${astronomicalDawn}`;
            document.getElementById('astronomicalDusk').textContent = `Astronomical Dusk: ${astronomicalDusk}`;
            document.getElementById('civilDawn').textContent = `Civil Dawn: ${civilDawn}`;
            document.getElementById('civilDusk').textContent = `Civil Dusk: ${civilDusk}`;
            document.getElementById('nauticalDawn').textContent = `Nautical Dawn: ${nauticalDawn}`;
            document.getElementById('nauticalDusk').textContent = `Nautical Dusk: ${nauticalDusk}`;
            document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
            document.getElementById('sunset').textContent = `Sunset: ${sunset}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
