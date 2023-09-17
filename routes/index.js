const express = require('express');
const router = express.Router();
const passport = require('passport');

const status = require('../controllers/status');

// Use passport.authenticate with JWT strategy
router.use('/doctors', require('./doctor'));
router.use('/patients', require('./patients'));

router.get('/report/:status', passport.authenticate('jwt', { session: false }), status.filteredReports);

module.exports = router;
