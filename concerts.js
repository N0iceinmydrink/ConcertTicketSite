import {tickets} from './tickets.js';

function toggleSidebar(){

    //All the classes of the needed buttons and divs are fetched here and stored in a variable.
    const sidebar = document.querySelector('.left-sidebar');
    const openBtn = document.querySelector('.js-open-btn');
    const closeBtn = document.querySelector('.js-close-btn');

    //Classlist represents the list of css classes and toggle is a function that adds or remove it accordingly.
    sidebar.classList.toggle("active");

    //Then, it is styled accordingly, whether the buttons are to be kept or removed.
    if(sidebar.classList.contains("active")){
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    }
    else{
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
}

//Then the function is being deployed here.
document.querySelector('.js-open-btn').addEventListener('click', toggleSidebar);
document.querySelector('.js-close-btn').addEventListener('click', toggleSidebar);

let concertsHTML = '';

tickets.forEach((shows)=>{
 concertsHTML += `<div class="show-info-container">
          <div class="show-image-container">
            <img class="show-image"
              src="${shows.image}">
          </div>

          <div class="show-name limit-text-to-2-lines">
            ${shows.name}
          </div>

          <div class="show-price">
            Rs.${(shows.priceRupees)}
          </div>

          <div class="show-quantity-container">
            <select style = "height: 35px; width: 38px; border-radius: 3px;">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="show-spacer"></div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-show-id = "${shows.id}"> 
            Add to Cart
          </button>
        </div>`;   
});

console.log(concertsHTML);

document.querySelector('.js-main-content').innerHTML = concertsHTML;
