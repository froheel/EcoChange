# EcoChange
![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)

EcoChange is a social networking site for environmental activists and people concerned about the adopting Eco friendly practices. This web sites allows the users to signup, login, make posts, view their profile and maintain a log of their day to day activities.

## Technologies
Node.js, Express, Handlebars, Mongoose and node helper modules are integrated. To run this project you would require MongoDb Compass Community as well.

## Video
https://drive.google.com/drive/folders/1vD-uk_IZ12qHm-fRUHAt8f-E-3n-w29_?usp=sharing

## Run Code
```
cd EcoChange
node server.js
```

## Features
- Home page: tells people about our website and it’s initiatives
- Login: users can login with an already registered email and password
- Signup: users can signup. In our schema username and email are unique
- Aboutus: more information for users to contact us
- Newsfeed: shows the top 10 recent posts according to timestamp for all the users globally
- MakePost: to publish a post in newsfeed
- Progress: statistics to keep track of what the user is doing and user can add more items to keep track how he is making progress
- Profile: shows the user information about himself along with th top 10 recent posts made by him/her
- Logout: to logout of the website
- Session management has also been done so that on multiple browsers multiple accounts can also be opened at the same time
- Special features for admin include the same as above but some special ones such as: admin will have username admin and email admin@gmail.com
  1) http://localhost:3000/user/ , this is a special secret url that only the
  admin can visit and add new users in
  2) http://localhost:3000/user/list , this is a special secret url that only admin
  can visit. The admin can see the data of all the users, add new users,
  update their information and delete users.
