const express = require('express');
const { signup, login, getProtectedData } = require('../Controllers/Authcontroller');
const { protect } = require('../Middlewares/Authmiddleware');
const router = express.Router();


// Define your routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/protected', protect, getProtectedData);

module.exports = router; 
