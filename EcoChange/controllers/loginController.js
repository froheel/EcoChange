const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');

router.get('/', (req, res) => {
  if(!req.session.email) {
    res.render("login",
   {}
   )
  }
  else{
    res.redirect('newsfeed');
  }
 });

 router.post('/', (req, res) => {
   //check if already logged in
   if(req.session.email) {
    res.redirect('newsfeed');
   }
   else{ //now you can login

    User.find({ 'email' : req.body.email}, function(err, users) {
      var emailfound = false;
      var passwordmatch= false;
      var username="";

      users.forEach(function(user) {
        emailfound=true;
        if (user.password === req.body.password){
              passwordmatch=true;
              username= user.username;
        }
      });
    
      if(passwordmatch==true){
        req.session.email = req.body.email;
        req.session.password = req.body.password;
        req.session.username = username;
        res.redirect('newsfeed');
      }
      else{
            if(emailfound==false){
              req.body['passwordError'] = " email not found"
            }
            else if (passwordmatch==false ){
            req.body['passwordError'] = "wrong credentials"
            }
            req.body.password="";
            res.render("login", {
              user: req.body
            })
      }
      
    });
   }
});


module.exports = router;