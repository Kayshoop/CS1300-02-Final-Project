const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://www.astropix.org/link/mgv?format=json';

function fetchImageMetadata() {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data.map(item => ({
                url: item.resource_url,
                title: item.title
            }));
        })
        .catch(error => console.error('Error fetching image metadata:', error));
}

function displayImages(images) {
    const imgDisplay = document.getElementById('imgDisplay');
    imgDisplay.innerHTML = images.map(image => `<img src="${image.url}" alt="${image.title}">`).join('');
}

window.onload = () => {
    fetchImageMetadata().then(images => displayImages(images));
};
