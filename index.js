const express = require("express");
const app = express();
const port = 8005;
const db = require('./config/mongoose');
const passport = require("passport");
const passportJWT = require("./config/passport-jwt");

app.use(express.urlencoded({extended:true}))
app.use(passport.initialize());

// express router
app.use('/',require('./routes/index'));

app.listen(port, function(error){
    if(error){
        console.log("error in running the server");
        return;
    }
    console.log("server is running port: 8005");
})