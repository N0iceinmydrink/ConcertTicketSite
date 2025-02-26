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