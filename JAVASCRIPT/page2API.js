function fetchImage() {
    const apiKey = 'Lwe2jmOhwaFr4obxIPp7VXWhcAgYv5PcVN07cQ08';
    fetch("https://www.astropix.org/link/mgv?format=json", {
        method: "GET",
        headers: {
            'x-api-key' : apiKey,
            "x-api-host" : "astropix.org"
        }
    })
    .then(response => response.blob())
    .then((blob) => {
       const imageUrl = URL.createObjectURL(blob);
       const imageElement = document.createElement("img");
       imageElement.src = imageUrl;
       const container = document.getElementById("image-container");
       container.appendChild(imageElement);
    })
    .catch(error => console.error(error));
}

const button = document.getElementById("fetch-image-button");
button.addEventListener("click", fetchImage());

// let btn = document.getElementById("btnclick")
// let image = document.getElementById("image")

// btn.addEventListener('click', function() {
//     fetch("https://www.astropix.org/link/mgv?format=json")
//     .then(res => res.json())
//     .then(result => {
//         console.log(result)
//         image.src = result.message
//     })
//     .catch(err=>console.log(err))
// })