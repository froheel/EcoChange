const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'This field is required.'
    },
    time: {
        type: String
    },
    content: {
        type: String
    }
});

mongoose.model('post', postSchema);