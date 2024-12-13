// function fetchImage() {
//     const apiKey = 'H9y4EjyMCZ6uEVoAlsB2hxLXAu3QU64V60qLSwwG';
//     fetch("https://api.nasa.gov/planetary/apod?api_key=H9y4EjyMCZ6uEVoAlsB2hxLXAu3QU64V60qLSwwG&count=15", {
//         method: "GET",
//         headers: {
//             'x-api-key' : apiKey,
//             "x-api-host" : "astropix.org"
//         }
//     })
//     .then(response => response.blob())
//     .then((blob) => {
//        const imageUrl = URL.createObjectURL(blob);
//        const imageElement = document.createElement("img");
//        imageElement.src = imageUrl;
//        const container = document.getElementById("image-container");
//        container.appendChild(imageElement);
//     })
//     .catch(error => console.error(error));
// }

// const button = document.getElementById("fetch-image-button");
// button.addEventListener("click", fetchImage());

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

const apiKey = "https://api.nasa.gov/planetary/apod?api_key=H9y4EjyMCZ6uEVoAlsB2hxLXAu3QU64V60qLSwwG&count=15"

function fetchPics(){
    let ImgDiv = document.querySelector(".ImgDiv")
    ImgDiv.innerHTML='';
    fetch("apiKey") .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        let ImgUrl=data[0].url;
        let ImgEl = document.createElement("img")
        ImgEl.setAttribute('src',`${ImgUrl}`)
        ImgEl.classList.add("showcase")
        let ImgDiv = document.querySelector(".ImgDiv")
        ImgDiv.appendChild(ImgEl);
    })
    .catch (err=>console.log(err))
}