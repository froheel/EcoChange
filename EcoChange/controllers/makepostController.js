const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');
const Post = mongoose.model('post');

router.get('/', (req, res) => {
    if(req.session.email) {
        res.render("makepost",{})
    }
    else{
        res.redirect('home');
    }
 });

 router.post('/', (req, res) => {
     var content = req.body.content.trim().length;
    if (content == 0){
        req.body['contentError'] = "Empty post"
        res.render("makepost", {
            post: req.body
          })
    }
    else
        insertRecord(req, res);
});


function insertRecord(req, res) {
    var post = new Post();
    post.username = req.session.username;
    post.time = Date();
    post.content= req.body.content;
    post.save((err, doc) => {
        if (!err)
            res.redirect('newsfeed');
        else {
                console.log('Error during record insertion : ' + err);
                res.render("makepost", {
                    user: req.body
                });
        }
    });
}

 

module.exports = router;