
// Variables for menu and search
const menu = document.querySelector('.menu');
const searchButton = document.getElementById('searchBtn');
const searchInput = document.querySelector('.searchBar input');

// Function - dropdown menu 
function toggleMenu() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menu.setAttribute('aria-hidden', 'true'); 
    } else {
        menu.style.display = 'block';
        menu.setAttribute('aria-hidden', 'false'); 
    }
}


// Listener to hide the menu on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) 
        { menu.style.display = 'flex'; 
    } else { 
        menu.style.display = 'none'; 
    } });

// Search button 
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim(); 
if (query) { window.location.href = `page4.html?search=${encodeURIComponent(query)}`; 
} else { 
    alert('enter something to search!'); 
} });

if (window.innerWidth <= 768) {
    menu.style.display = 'none'; 
}