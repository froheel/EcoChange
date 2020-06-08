const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');
const Post = mongoose.model('post');

router.get('/', (req, res) => {
    if(req.session.email) {
        sort = {'time': -1}
        Post.find((err, docs) => {
            if (!err) {
                res.render("newsfeed", {
                    list : docs ,
                    username: req.session.username,
                });
            }
            else {
                console.log('Error in retrieving post list :' + err);
            }
        }).sort(sort).limit(10);
    }
    else{
        res.redirect('home');
    }
 });

 

module.exports = router;