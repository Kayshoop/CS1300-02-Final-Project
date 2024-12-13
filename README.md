# CS1300-02-Final-Project
LINK: https://kayshoop.github.io/CS1300-02-Final-Project/HTML/

## DESCRIPTION: 

 The "Terrestrial Weather" website is a comprehensive platform designed to bring users closer to the cosmos by providing insightful and accurate weather data. The site offers a unique blend of terrestrial and celestial information, allowing users to explore meteorological events happening around them and view stunning space imagery. The homepage invites users to dive into the world of weather or float on by to the space station to view NASA's Photo of the Day. The website's mission is to deliver reliable and up-to-date information sourced from trusted APIs, including WeatherAPI, Stormglass.io, and NASA.

 The website features several key sections, each dedicated to a specific aspect of weather and space exploration. The "Earth Weather" section provides daily updates on current conditions such as temperature and wind speed, helping users prepare for their day with accurate forecasts. The "Space Weather" section showcases the wonders of the universe by displaying NASA's Photo of the Day, offering a glimpse into the distant cosmos. Additionally, the "Rising Chart" section allows users to uncover the precise times of the sun and moon's rise and set, along with detailed moon phases. Overall, "Terrestrial Weather" aims to enhance users' appreciation of the natural world by combining terrestrial and celestial data in an engaging and informative manner.

## PAGE DESCRIPTION: 

 SPACE PAGE: The "Space Photo Image of the Day" webpage is a captivating section of the Terrestrial Weather website that allows users to generate and view a different space photo every day. By clicking the "Generate Image!" button, users can explore stunning images from NASA's Astronomy Picture of the Day (APOD) API. This interactive feature not only provides a visual treat but also enhances the user's understanding of the cosmos.

## Function
 The primary function of this webpage is to display a new space photo each day, sourced from NASA's APOD API. Users can click the "Generate Image!" button to fetch and display the latest image along with its description.

 Form’s Purpose and Expected Input/Output
The form on this webpage consists of a single button labeled "Generate Image!" When the button is clicked, it triggers a JavaScript function that makes an API call to NASA's APOD API. The expected output is a JSON object containing the image URL, title, and description, which are then displayed on the webpage.

 EARTH PAGE: The "Explore Earth's Weather" webpage is a dynamic section of the Terrestrial Weather website that provides users with real-time weather updates. By entering a city name and clicking the "Get Weather" button, users can access current weather conditions, including temperature, wind speed, and other relevant details. This feature ensures that users are well-informed about the weather in their chosen location.

 Function The primary function of this webpage is to display real-time weather information for a specified city. Users can enter the name of a city in the input field and click the "Get Weather" button to fetch and display the latest weather data.

 Form’s Purpose and Expected Input/Output The form on this webpage consists of an input field for the city name and a button labeled "Get Weather." When the button is clicked, it triggers a JavaScript function that makes an API call to a weather service. The expected input is the name of a city, and the expected output is a JSON object containing weather details such as temperature, wind speed, and weather conditions, which are then displayed on the webpage.

 How the API Call Works and What Data It Retrieves The API call is made using the Fetch API in JavaScript. When the "Get Weather" button is clicked, the getWeather function is triggered. This function sends a GET request to a weather API endpoint with the necessary parameters, including the city name and API key.

 ASTROLOGY PAGE: The "Explore the Celestial Dance" webpage is an engaging section of the Terrestrial Weather website that allows users to uncover the precise times of the sun and moon's rise and set, along with detailed moon phases. By entering their city and clicking the "View" button, users can experience the cosmic rhythms tailored to their location. This feature provides a deeper understanding of the celestial movements and their impact on our world.

 Function The primary function of this webpage is to display detailed astronomical data for a specified city. Users can enter the name of a city in the input field and click the "View" button to fetch and display the latest data on the sun and moon's rise and set times, as well as moon phases.

 Form’s Purpose and Expected Input/Output The form on this webpage consists of an input field for the city name and a button labeled "View." When the button is clicked, it triggers a JavaScript function that makes an API call to a celestial data service. The expected input is the name of a city, and the expected output is a JSON object containing detailed astronomical data, which are then displayed on the webpage.

 How the API Call Works and What Data It Retrieves The API call is made using the Fetch API in JavaScript. When the "View" button is clicked, the fetchMoonPhase function is triggered. This function sends a GET request to a celestial data API endpoint with the necessary parameters, including the city name and API key.

## Wireframe
[WIREFRAME](https://docs.google.com/document/d/1Ll4XEqnnVFOQpKfK28jDxNyDKMw1dzxCR00BewqDOTs/edit?tab=t.0)

