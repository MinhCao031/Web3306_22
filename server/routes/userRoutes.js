const express = require('express');
const users = require('../controllers/userController');

const { authenticate, validateInput } = require('../middleware');

const router = express.Router();

router
    .route('/login')
    // .get(users.renderLogin) // Render ejs files, used for testing login functionality only.
    .post(authenticate, users.login);

router.route('/register').get(users.renderRegister).post(users.register);

router.route('/update').get(users.renderUpdate).post(users.update);

module.exports = router;
