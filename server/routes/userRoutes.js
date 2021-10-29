const express = require('express');
const users = require('../controllers/userController');

const { authenticate } = require('../middleware');

const router = express.Router();

router.route('/login')
    .get(users.renderLogin) // Delete this line if you only want to render html files from client side.
    .post(users.login);
    // .post(authenticate, users.login); // Uncomment this line and comment out the line above to use authenticate middleware 
    

router.route('/register')
    .get(users.renderRegister)
    .post(users.register);

router.route('/update')
    .get(users.renderUpdate)
    .post(users.update);

module.exports = router;
