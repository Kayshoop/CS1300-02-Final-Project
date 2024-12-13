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

const apiKey = 'H9y4EjyMCZ6uEVoAlsB2hxLXAu3QU64V60qLSwwG'; // Replace with your actual API key
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=H9y4EjyMCZ6uEVoAlsB2hxLXAu3QU64V60qLSwwG&count=15'; // Replace with your actual API endpoint

    async function getImage() {
      try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`);

        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }

        const data = await response.json();

        if (!data || !data.imageUrl) {
          throw new Error("Invalid response data from API.");
        }

        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<img src="${data.imageUrl}" alt="Called Image" onload="imageLoaded()" onerror="imageError()">`; 

      } catch (error) {
        console.error('Error fetching image:', error);
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<p>Error loading image: ${error.message}</p>`;
      }
    }

    function imageLoaded() {
      console.log("Image loaded successfully!");
    }

    function imageError() {
      console.error("Image failed to load.");
      // You can add more specific error handling here, 
      // such as displaying an alternative image or a different error message.
    }
