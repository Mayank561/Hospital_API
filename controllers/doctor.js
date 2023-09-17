const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Create a new user
module.exports.create = async function (req, res) {
    try {
        // Check if a user with the given username already exists
        let user = await User.findOne({ username: req.body.username });

        if (user) {
            // If user exists, return a conflict status
            return res.status(409).json({
                message: 'Username already exists',
            });
        }

        // Create a new user with the provided data
        user = await User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            type: 'Doctor',
        });

        // Return a success status when the user is created
        return res.status(201).json({
            message: 'User created successfully',
        });
    } catch (error) {
        console.error(error); // Use console.error for errors
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// Create a new user session and generate a JWT token for authentication
module.exports.createSession = async function (req, res) {
    try {
        // Find a user with the provided username
        let user = await User.findOne({ username: req.body.username });

        if (!user || user.password !== req.body.password) {
            // If no user is found or the password is incorrect, return an unprocessable entity status
            return res.status(422).json({
                message: "Invalid Username or Password",
            });
        }

        // Sign a JWT token with the user data
        const token = jwt.sign(user.toJSON(), 'Alert1234', { expiresIn: '1000000' });

        // Return a success status with the generated token
        return res.status(200).json({
            message: "Sign in successful. Here is your token, please keep it safe",
            data: {
                token,
            },
        });
    } catch (err) {
        console.error('Error', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
