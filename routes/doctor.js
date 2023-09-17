const express = require('express');
const router = express.Router();

const doctor = require('../controllers/doctor');

router.post('/register',doctor.create)
router.post('/login',doctor.createSession)

module.exports = router;