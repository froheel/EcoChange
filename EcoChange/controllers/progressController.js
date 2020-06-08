const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');
const Post = mongoose.model('post');
const Progress= mongoose.model('progress');

router.get('/', (req, res) => {
    if(req.session.email) {
        sort = {'time': -1}
        Progress.find({ 'username' : req.session.username }, function(err, docs){
            if (!err) {
                var percentage= docs.length * 10;
                if (percentage>100){
                    percentage=100;
                }
                res.render("progress", {
                    list : docs ,
                    username: req.session.username,
                    number: percentage,
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


 router.post('/', (req, res) => {
    var content = req.body.content.trim().length;
   if (content == 0){
       req.body['contentError'] = "Empty body"
       res.redirect('progress');
   }
   else
       insertRecord(req, res);
});


function insertRecord(req, res) {
   var progress = new Progress();
   progress.username = req.session.username;
   progress.time = Date();
   progress.content= req.body.content;
   progress.save((err, doc) => {
       if (!err)
           res.redirect('progress');
       else {
               console.log('Error during record insertion : ' + err);
               res.redirect('progress');
       }
   });
}


 module.exports = router;