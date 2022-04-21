


function fullvalidation(){
    validateEmail();
    validatePassword();
    checkIfPasswordMatch();
    const checkEmail = document.getElementById("errorCheckEmail").innerHTML;
    const checkPassword= document.getElementById("errorCheckEmail").innerHTML;
    const checkMatch = document.getElementById("errorCheckEmail").innerHTML;
    if(!!checkEmail && !!checkPassword && !!checkMatch){

    }
    else{
        window.location.href = "success.html";
    }
}



function validateEmail(){
    const emailInput = document.getElementById("emailForm").value;
    var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var text;
    if(!emailInput.match(pattern)){
        text = "email is not a valid email address";
        document.getElementById("errorCheckEmail").innerHTML = text;
    }
}

function validatePassword(){
    const passwordInput = document.getElementById("passwordForm").value;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/
    var text;
    if(!passwordInput.match(pattern)){
        text = "password is not a valid password";
        document.getElementById("errorCheckPassword").innerHTML = text;
    }
}

function checkIfPasswordMatch(){
    const passwordInput = document.getElementById("passwordForm").value;
    const confirmPasswordInput = document.getElementById("confirmPasswordForm").value;
    var text;
    if(!passwordInput == confirmPasswordInput){
        text = "password doesn't match";
        document.getElementById("errorCheckConfirmPassword").innerHTML = text;
    }
}