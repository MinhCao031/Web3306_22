const express = require('express');
const users = require('../controllers/userController');

const { authenticate, isLoggedIn } = require('../middleware');

const router = express.Router();

router.route('/login').post(authenticate, users.login);

router.route('/register').post(isLoggedIn, users.register);

router.route('/update').post(isLoggedIn, users.update);

router.route('/set_password').post(isLoggedIn, users.setPassword);

module.exports = router;
