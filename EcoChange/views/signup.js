passwordsame=false;
namevalid=false;
passwordlength=false;
emailvalid=false;





function validateName(){


   username= document.getElementById("inputUserame");

   if(username.value.length<=0){
        document.getElementById('inp_username').textContent="Username";
   }
   else{
        document.getElementById('inp_username').textContent="";
   }

   if(username.value.length< 4){
        username.setCustomValidity('please enter username of atleast length 4');
        namevalid=false;
        return false;
   }
   else{
        username.setCustomValidity('');
        namevalid=true;
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


function validatePassword() {
    

    password= document.getElementById("inputPassword");
    confirmpassword= document.getElementById("inputConfirmPassword");

    if(confirmpassword.value.length<=0){
        document.getElementById('inp_confirmpass').textContent="Confirm password";
    }
    else{
        document.getElementById('inp_confirmpass').textContent="";
    }

    if(password.value!=confirmpassword.value){
        confirmpassword.focus();
        inputConfirmPassword.setCustomValidity('please enter the same password as above');
        passwordsame=false;
        return false;
    } 
    else{
        document.getElementById("inputConfirmPassword").style.color = "#495057";
        inputConfirmPassword.setCustomValidity('');
        passwordsame=true;
    } 
    return true;

}

function validate() {
    if(namevalid==false){
        username.focus();
        return false;
    }

    if(emailvalid==false){
        email.focus();
        return false;
    }

    if(passwordlength==false){
        password.focus();
        return false;
    }

    if(passwordsame==true){
        return true;
    }
    else{
        confirmpassword.focus();
        document.getElementById("inputConfirmPassword").value="";
        return false;
    }

    
}
