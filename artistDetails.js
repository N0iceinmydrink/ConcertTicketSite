import { tickets } from './tickets.js';

// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.querySelector('.left-sidebar');
    const openBtn = document.querySelector('.js-open-btn');
    const closeBtn = document.querySelector('.js-close-btn');

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    } else {
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
}

// Event listeners for sidebar toggle
document.querySelector('.js-open-btn').addEventListener('click', toggleSidebar);
document.querySelector('.js-close-btn').addEventListener('click', toggleSidebar);
// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get artist ID from URL
const artistId = getQueryParam('id'); //The function created above is used here.
//Condition to test whether the id that is gotten from the url matches the data.
const artist = tickets.find(ticket => ticket.id == artistId);

// Display artist details if found
if (artist) {
    document.querySelector('.artist-image').src = artist.image;
    document.querySelector('.artist-name').textContent = artist.name;
    document.querySelector('.artist-description').textContent = `Experience the live concert of ${artist.name} at multiple venues.`;

    const showsContainer = document.querySelector('.shows-container');
    artist.shows.forEach(show => {
       //A new variable showElement is created here and a div is made for it.
        const showElement = document.createElement('div');
        showElement.classList.add('show-info'); //Here, the div is given a class.
        //The html is generated for the div here.
        showElement.innerHTML = `
            <h3>Venue: ${show.venue}</h3>
            <p>Date: ${show.date}</p>
            <p>Time: ${show.time}</p>
            <p>Price: Rs. ${artist.priceRupees}</p>
        `;
        showsContainer.appendChild(showElement);
    });
    //Error handling
} else {
    document.querySelector('.artist-details-container').innerHTML = "<p>Artist not found!</p>";
}
