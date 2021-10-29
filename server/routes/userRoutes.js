const express = require('express');
const users = require('../controllers/userController');

const { authenticate } = require('../middleware');

const router = express.Router();

router.route('/login')
    .get(users.renderLogin) // Delete this line if you only want to render html files from client side.
    .post( users.login);

router.route('/register')
    .get(users.renderRegister)
    .post(users.register);

module.exports = router;
