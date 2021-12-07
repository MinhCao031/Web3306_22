const express = require('express');
const middlewares = require('../middleware');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/login', middlewares.authenticate, UserController.login);

router.get('/logout', middlewares.isLoggedIn, UserController.logout);

module.exports = router;
