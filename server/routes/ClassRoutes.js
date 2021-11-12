const express = require('express');
const classes = require('../controllers/ClassController');

const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.route('/:user_id/show').get(classes.getClasses); // Login required

module.exports = router;
