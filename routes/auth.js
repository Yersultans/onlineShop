const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

const { register, login, logout } = require('../controllers/auth');

// router.post('/auth/register', register);
// router.post('/auth/login', login);
// router.get('/auth/logout', logout);

module.exports = router;