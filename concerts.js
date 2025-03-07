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

// Generate concert cards dynamically
let concertsHTML = '';

tickets.forEach((show) => {
    concertsHTML += `
        <div class="show-info-container">
            <div class="show-image-container">
                <img class="show-image" src="${show.image}" alt="${show.name}">
            </div>

            <div class="show-name limit-text-to-2-lines">
                ${show.name}
            </div>

            <div class="show-spacer"></div>

            <p class="ticket-price">Price: Rs. ${show.priceRupees}</p>

            <button class="view-more-button button-primary js-view-more"
                data-show-id="${show.id}">
                View More
            </button>
        </div>
    `;
});

// Inject the generated HTML into the page
document.querySelector('.js-main-content').innerHTML = concertsHTML;

document.querySelectorAll('.js-view-more').forEach(button=>{
    button.addEventListener('click', (event)=>{
        const showId = event.target.dataset.showId;
        window.location.href = `artist.html?id=${showId}`;
    });
});