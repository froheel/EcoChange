require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var session = require('express-session');

const userController = require('./controllers/userController');
const homeController = require('./controllers/homeController');
const signupController = require('./controllers/signupController');
const loginController = require('./controllers/loginController');
const aboutusController= require('./controllers/aboutusController');
const newsfeedController= require('./controllers/newsfeedController');
const logoutController = require('./controllers/logoutController');
const makepostController= require('./controllers/makepostController');
const userprofileController= require('./controllers/userprofileController');
const progressController = require('./controllers/progressController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(session({secret: 'uitisawesome',
resave: false,
saveUninitialized: true,
}));

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'indexLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use(express.static('views'));
app.use('/user', userController);
app.use('/home', homeController);
app.use('', homeController);
app.use('/index.html', homeController);
app.use('/signup',signupController);
app.use('/login',loginController);
app.use('/aboutus',aboutusController);
app.use('/newsfeed',newsfeedController);
app.use('/logout', logoutController);
app.use('/makepost', makepostController);
app.use('/userprofile', userprofileController);
app.use('/progress', progressController);
