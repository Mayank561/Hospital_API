const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports.create = async function (req, res) {
    try {
        let user = await User.findOne({ username: req.body.username });

        if (user) {
            return res.status(409).json({
                message: 'Username already exists',
            });
        }

        user = await User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            type: 'Doctor',
        });

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

module.exports.createSession = async function (req, res) {
    try {
        let user = await User.findOne({ username: req.body.username });

        if (!user || user.password !== req.body.password) {
            return res.status(422).json({
                message: "Invalid Username or Password",
            });
        }

        const token = jwt.sign(user.toJSON(), 'Alert1234', { expiresIn: '1000000' });

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
