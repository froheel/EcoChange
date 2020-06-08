const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');
const Post = mongoose.model('post');
var ObjectId = require('mongoose').ObjectID;

router.get('/', (req, res) => {
    if(req.session.email) {
        res.write("content unavailable");
    }
    else{
        res.redirect('home');
    }
 });


router.get('/:id', (req, res) => {
    if(req.session.email) {
            //first get the id of the post and find the username from there
            var newusername=""
            var newemail=""
            var id = mongoose.Types.ObjectId(req.params._id);
            Post.find({ _id : id}, function(err, posts) {
                if(!err){
                    posts.forEach(function(post) {
                        newusername=post.username;
                    });

                    //then find the email using the username
                    User.find({'username' : newusername}, function(err, users) {
                        if(!err){
                            users.forEach(function(user) {
                                newemail=user.email;
                            });
                            //now find the posts using username
                            sort = {'time': -1}
                            Post.find({ 'username' : newusername }, function(err, docs){
                                if (!err) {
                                    res.render("viewprofile", {
                                        list : docs ,
                                        username: req.session.username,
                                        email: req.session.email,
                                    })
                                }
                                else {
                                    console.log('Error in retrieving post list :' + err);
                                }
                            }).sort(sort).limit(10);
            
                        }  
                        else {
                            console.log('Error in retrieving employee list :' + err);
                        }
                    });

    
                }  
                else {
                    console.log('Error in retrieving employee list :' + err);
                }
            });
    
            
    }
    else {
         res.render('index',{});
    }
    
 });




 module.exports = router;