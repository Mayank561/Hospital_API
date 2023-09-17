const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

// Define options for JWT authentication
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // Extract JWT from the authorization header
    secretOrKey: 'Alert1234' // Your secret key for JWT verification
};

// Create a JWT strategy for passport authentication
passport.use(new JWTStrategy(opts, function (jwtPayload, done) {
    // Find a user by their ID from the JWT payload
    User.findById(jwtPayload._id).then(function (user) {
        if (user) {
            // If a user is found, return it as authenticated
            return done(null, user);
        }
        // If no user is found, return false for authentication
        return done(null, false);
    }).catch(function (error) {
        // Handle any errors that occur during the user lookup
        console.log('Error in finding the User from JWT:', error);
        return done(error);
    });
}));

module.exports = passport;
