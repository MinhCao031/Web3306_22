const express = require('express');
const users = require('../controllers/UserController');

const middlewares = require('../middleware');

const router = express.Router();

router.post('/login', middlewares.authenticate, users.login);

router.get('/logout', middlewares.isLoggedIn, users.logout);

router.route('/:user_id/show').get(users.getInfo); // Login required

router.route('/:user_id/update').post(users.update); // Login required

router.route('/:user_id/set_password').post(users.setPassword); // Login required

module.exports = router;
