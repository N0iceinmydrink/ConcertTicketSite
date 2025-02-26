function submitForm(){
    let input = $(".name");
let regexp = new RegExp("^[a-zA-z]").test(input.val()) && input.val().length > 0;

if(regexp){
    $(input).css("border", "2px solid green");
}
else{
    $(input).css("border", "2px solid red");
}
}


document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.querySelector('.login-box');
    let signupForm = document.querySelector('.signup-box');

    // Initially hide the sign-up form
    signupForm.style.display = "none";

    document.querySelector('a[href="#"]').addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    document.getElementById("showLogin").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });
});
