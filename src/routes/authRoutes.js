const express = require('express');
const router = express.Router();
const { userLogin, userRegister } = require('../controllers/authController');

//Define auth routes
// router.post('/login', userlogin);
router.post('/register', userRegister);
router.post('/login', userLogin);

module.exports = router;



