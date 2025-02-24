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

