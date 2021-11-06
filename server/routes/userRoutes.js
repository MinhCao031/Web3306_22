const express = require('express');
const users = require('../controllers/userController');

const { authenticate, isLoggedIn } = require('../middleware');

const router = express.Router();

router.route('/login').post(authenticate, users.login);

// router.route('/register').post(isLoggedIn, users.register);

router.route('/users/update').post(users.update);

router.route('/users/set_password').post(users.setPassword);

module.exports = router;
