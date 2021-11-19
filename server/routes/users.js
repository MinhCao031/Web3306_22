const express = require('express');
const UserController = require('../controllers/UserController');

const middlewares = require('../middleware');

const router = express.Router();

router.get('/:user_id/show', UserController.getInfo); // Login required

router.post('/:user_id/update', UserController.update); // Login required

router.post('/:user_id/set_password', UserController.setPassword); // Login required

module.exports = router;
