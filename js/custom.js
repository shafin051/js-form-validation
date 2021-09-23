var uName = document.getElementById('uName');
var uNameErr = document.getElementById('uNameErr');

var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var rePass = document.getElementById('rePass');
var rePassErr = document.getElementById('rePassErr');


function subm()
{
    if(uName.value == ""){
        uName.style.borderBottomColor = "red";
        uNameErr.innerHTML = "Enter your name first";
        uName.focus();
        return false;
    }

    if(email.value == ""){
        email.style.borderBottomColor = "red";
        emailErr.innerHTML = "Enter your email";
        email.focus();
        return false;
    }

    if(pass.value == ""){
        pass.style.borderBottomColor = "red";
        passErr.innerHTML = "Enter your password";
        pass.focus();
        return false;
    }

    if(pass.value.length < 6){
        pass.style.borderBottomColor = "red";
        passErr.innerHTML = "Enter at least 6 characters";
        pass.focus();
        return false;
    }

    if(rePass.value == ""){
        rePass.style.borderBottomColor = "red";
        rePassErr.innerHTML = "Enter your password again";
        rePass.focus();
        return false;
    }

    if(rePass.value != pass.value){
        rePass.style.borderBottomColor = "red";
        rePassErr.innerHTML = "incorrect password";
        rePass.focus();
        return false;
    }

    
}

function errValid()
{
    if(uName.value != ""){
        uName.style.borderBottomColor = "black";
        uNameErr.innerHTML = "";
    }

    if(email.value != ""){
        email.style.borderBottomColor = "black";
        emailErr.innerHTML = "";
    }

    if(pass.value != ""){
        pass.style.borderBottomColor = "black";
        passErr.innerHTML = "";
    }

    if(rePass.value != ""){
        rePass.style.borderBottomColor = "black";
        rePassErr.innerHTML = "";
    }
}

uName.addEventListener('blur',errValid);
email.addEventListener('blur',errValid);
pass.addEventListener('blur',errValid);
rePass.addEventListener('blur',errValid);


//modal
var modal = document.getElementById('modal');
var trigger = document.getElementById('trigger');
var closebtn = document.getElementById('closebtn');

trigger.addEventListener('click',function(){
    modal.style.display = 'flex'
});

closebtn.addEventListener('click',function(){
    modal.style.display = 'none'
});