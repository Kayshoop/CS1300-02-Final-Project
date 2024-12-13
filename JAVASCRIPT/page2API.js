// function fetchImage() {
//     const apiKey = "Your-apiKey";
//     fetch("https://any-anime.p.rapidapi.com/anime/img", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": apiKey,
//         "x-rapidapi-host": "any-anime.p.rapidapi.com",
//       },
//     })
//       .then((response) => response.blob())
//       .then((blob) => {
//         const imageUrl = URL.createObjectURL(blob);
//         const imageElement = document.createElement("img");
//         imageElement.src = imageUrl;
//         const container = document.getElementById("image-container");
//         container.appendChild(imageElement);
//       })
//       .catch((error) => console.error(error));
//   }
//   const button = document.getElementById("fetch-image-button");
//   button.addEventListener("click", fetchImage);

const apiKey = 'H9y4EjyMCZ6uEVoAlsB2hxLXAu3QU64V60qLSwwG'; 
const apiUrl = 'https://api.nasa.gov/planetary/apod';

    async function getImage() {
      try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}`, {
            headers: {
              'Accept': 'application/json'
            }
          });

        if (!response.ok) {
          throw new error(`Network response was not ok (${response.status})`);
        }

        const data = await response.json();

        if (!data || !data.url) {
          throw new Error("Invalid response data from API.");
        }

        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<img src="${data.url}" alt="Called Image">`; 

      } catch (error) {
        // console.error('Error fetching image:', error);
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<p>Error loading image: ${error.message}</p>`;
      }
    }
