const express = require('express');
const users = require('../controllers/userController');

const { authenticate, isLoggedIn } = require('../middleware');

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Server is available');
});

router.route('/login').post(authenticate, users.login);

router.route('/home').get(isLoggedIn, users.renderHome);

router.route('/users/update').post(users.update);

router.route('/users/set_password').post(users.setPassword);

module.exports = router;
