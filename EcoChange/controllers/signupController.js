const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');

router.get('/', (req, res) => {
  if(!req.session.email) {
    res.render("signup",
   {}
   )
  }
  else{
    res.redirect('newsfeed');
  }
 });

router.post('/', (req, res) => {
  User.find({ 'username' : req.body.username}, function(err, users) {
    var usernamefound = false;

    users.forEach(function(user) {
      usernamefound= true;
    });
   
    if(usernamefound==true){
      req.body.username=""
      req.body['usernameError'] = "username already taken"
      res.render("signup", {
        user: req.body
      })
    }
    else{

      //check if email unique
      User.find({ 'email' : req.body.email}, function(err, users) {
        var emailfound = false;
    
        users.forEach(function(user) {
          emailfound= true;
        });
       
        if(emailfound==true){
          req.body.email=""
          req.body['emailError']="email already has account";
          res.render("signup", {
            user: req.body
          })
        }
        else{
          insertRecord(req,res);          
        }
        
      });
    }
    
  });

});



function insertRecord(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
   
        user.save((err, doc) => {
            if (!err){
              req.session.email = req.body.email;
              req.session.password = req.body.password;
              req.session.username = req.body.username;
              res.redirect('newsfeed');
            }
            else if (err.name=='ValidationError'){
                handleValidationError(err,req.body);
                res.render("/signup", {
                  user: req.body
                })
            }
            else{
              console.log('error')
            }
        });
}


function handleValidationError(err, body) {
  for (field in err.errors) {
      switch (err.errors[field].path) {
          case 'username':
              body['usernameError'] = err.errors[field].message;
              break;
          case 'email':
              body['emailError'] = err.errors[field].message;
              break;
          default:
              break;
      }
  }
}

module.exports = router;