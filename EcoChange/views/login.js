passwordlength=false;
emailvalid=false;

function validatePasswordLength(){
    password= document.getElementById("inputPassword");
    if(password.value.length<=0){
        document.getElementById('inp_pass').textContent="Password";
    }
    else{
        document.getElementById('inp_pass').textContent="";
    }
    if(password.value.length< 6){
         password.setCustomValidity('please enter password of atleast length 6');
         passwordlength=false;
         return false;
    }
    else{
         password.setCustomValidity('');
         passwordlength=true;
    }
    return true;
 }

function validateEmail(){
    email= document.getElementById("inputEmail");
    if(email.value.length<=0){
        document.getElementById('inp_email').textContent="Email address";
    }
    else{
        document.getElementById('inp_email').textContent="";
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email.value)){
        email.setCustomValidity('please enter a valid email');
        emailvalid=false;
        return false;
    }
    else{
        email.setCustomValidity('');
        emailvalid=true;
    }
}


function validate() {
   
    if(emailvalid==false){
        email.focus();
        return false;
    }

    if(passwordlength==false){
        password.focus();
        return false;
    }

    return true;

    
}
