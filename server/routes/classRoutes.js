const express = require('express');
const classes = require('../controllers/classController');

const { isLoggedIn } = require('../middleware');

const router = express.Router();

// The function below need users to be logged in first.
router.route('/').get(classes.getClasses);

module.exports = router;
