const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');

router.get('/', (req, res) => {
    if(req.session.email) {
        req.session.destroy(function(err) {
            if(err) {
                console.log(err);
            } else {
                res.redirect('home');
            }
        });
    }
    else{
        res.redirect('newsfeed');
    }
 });

 

module.exports = router;