const express = require('express');
var router= express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('user');

router.get('/', (req, res) => {
  if(!req.session.email) {
    res.render("index",
   {}
   )
  }
  else{
    res.redirect('newsfeed');
  }
 });

module.exports = router;